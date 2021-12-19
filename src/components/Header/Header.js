import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from "./Header.module.css";

export default function Header() {
  const { user, isAuthenticated } = useAuthContext();

  let userNav = (
    <>
      <p className={styles["header-welcome"]}>Nice to see you again, {user.email}</p>
      <li className={styles["header-nav-list"]}>
        <Link to="/my-recipies">My Recipies</Link>
      </li>
      <li className={styles["header-nav-list"]}>
        <Link to="/create">Add new recipe</Link>
      </li>
      <li className={styles["header-nav-list"]}>
        <Link to="/logout">Logout</Link>
      </li>
    </>
  );

  let guestNav = (
    <>
      <li className={styles["header-nav-list"]}>
        <Link to="/login">Login</Link>
      </li>
      <li className={styles["header-nav-list"]}>
        <Link to="/register">Register</Link>
      </li>
    </>
  );

  return (
    <header>
      <article className={styles["header-article"]}>
        <article className={styles["header-article-img"]}>
          <img src="/images/spaghetti-fork-small.jpg" alt="spaghetti" />
        </article>
        <h2 className={styles["header-h2"]}>Delicious Pasta</h2>
      </article>
      <nav>
        <ul className={styles["header-nav"]}>
          <li className={styles["header-nav-list"]}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles["header-nav-list"]}>
            <Link to="/recipies">Recipies</Link>
          </li>
          <li className={styles["header-nav-list"]}>
            <Link to="/about">About</Link>
          </li>
          {isAuthenticated ? userNav : guestNav}
        </ul>
      </nav>
    </header>
  );
}
