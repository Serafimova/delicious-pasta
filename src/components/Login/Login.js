import * as authService from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./Login.module.css";
import { useNotificationsContext } from "../../contexts/NotificationsContext";
import validator from 'validator';

export default function Login() {
  const { login } = useAuthContext();
  const { newNotification } = useNotificationsContext();
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");

    if (!validator.isEmail(email)) {
      newNotification("Please enter a valid email!");
      return;
    }
    
    authService
      .login(email, password)
      .then((data) => {
        if (data.code === 403) {
          throw new Error("Invalid email or password!");
        }
        login(data);
        navigate("/recipes");
      })
      .catch((err) => {
        newNotification(err.message);
        console.log(err);
      });
  };

  return (
    <section id="login-page" className={styles["login"]}>
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
        <Link to="/register" className={styles["link"]}>
          Create an account
        </Link>
      </form>
    </section>
  );
}
