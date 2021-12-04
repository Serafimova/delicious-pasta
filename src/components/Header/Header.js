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
            <a href="/">Home</a>
          </li>
          <li className={styles["header-nav-list"]}>
            <a href="/about">About</a>
          </li>
          <li className={styles["header-nav-list"]}>
            <a href="/recipies">Recipies</a>
          </li>
          <li className={styles["header-nav-list"]}>
            <a href="/login">Login</a>
          </li>
          <li className={styles["header-nav-list"]}>
            <a href="/register">Register</a>
          </li>
          <li className={styles["header-nav-list"]}>
            <a href="/my-recipies">My Recipies</a>
          </li>
          <li className={styles["header-nav-list"]}>
            <a href="/create">Add new recipe</a>
          </li>
          <li className={styles["header-nav-list"]}>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
