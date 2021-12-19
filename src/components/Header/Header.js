import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
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
            <Link to="/login">Login</Link>
          </li>
          <li className={styles["header-nav-list"]}>
            <Link to="/register">Register</Link>
          </li>
          <li className={styles["header-nav-list"]}>
            <Link to="/my-recipies">My Recipies</Link>
          </li>
          <li className={styles["header-nav-list"]}>
            <Link to="/create">Add new recipe</Link>
          </li>
          <li className={styles["header-nav-list"]}>
            <Link to="/logout">Logout</Link>
          </li>{" "}
          <li className={styles["header-nav-list"]}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
