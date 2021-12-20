import styles from "./Register.module.css";
import * as authService from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const onRegisterHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("repeat-pasword");

    if (password !== repeatPassword) {
      console.log("ney");
      return;
    }

    authService.register(email, password).then((data) => login(data));
    navigate("/recipies");
  };

  return (
    <section
      id="register-page"
      className={styles["register"]}>
      <form
        id="register-form"
        className={styles["register-form"]}
        method="POST"
        onSubmit={onRegisterHandler}
      >
        <h2 className={styles["register-form-title"]}>Register Form</h2>
        <p className={styles["register-form-field"]}>
          <label htmlFor="email" className={styles["register-form-field-label"]}>
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
        <p className={styles["register-form-field"]}>
          <label
            htmlFor="password"
            className={styles["register-form-field-label"]}
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
        <p className={styles["register-form-field"]}>
          <label
            htmlFor="repeat-pasword"
            className={styles["register-form-field-label"]}
          >
            Repeat Password
          </label>
          <span>
            <input
              className={styles["input"]}
              type="password"
              name="repeat-pasword"
              id="repeat-pasword"
              placeholder="Repeat pasword"
            />
          </span>
        </p>
        <input
          className={styles["form-button"]}
          type="submit"
          value="Register"
        />
        <h3>Already have an account?</h3>
        <Link to="/register" className={styles["link"]}>
          Log in
        </Link>
      </form>
    </section>
  );
}
