import * as authService from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./Login.module.css";

export default function Login() {
  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login(email, password)
      .then((data) => {
        login(data);
        navigate("/recipies");
      })
      .catch((err) => {
        // to add notification
        console.log(err);
      });
  };

  return (
    <section id="login-page" className={styles["login"]} style={{ backgroundImage: "url(/images/spaghetti.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <form
        id="login-form"
        className={styles["login-form"]}
        onSubmit={onLoginHandler}
      >
        <h2 className={styles["login-form-title"]}>Login Form</h2>
        <p className={styles["login-form-field"]}>
          <label htmlFor="email" className={styles["login-form-field-label"]}>
            Email
          </label>
          <span>
            <input
              className={styles["input"]}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </span>
        </p>
        <p className={styles["login-form-field"]}>
          <label
            htmlFor="password"
            className={styles["login-form-field-label"]}
          >
            Password
          </label>
          <span>
            <input
              className={styles["input"]}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </span>
        </p>
        <input className={styles["form-button"]} type="submit" value="Login" />
        <h3>Not registered?</h3>
        <Link to="/register" className={styles["link"]}>Create an account</Link>
      </form>
      {/* <article className={styles["login-img-container"]}>
        <img src="./image/spaghetti-small.jpg" alt="spaghetti" className={styles["login-img"]} />
      </article> */}
    </section>
  );
}
