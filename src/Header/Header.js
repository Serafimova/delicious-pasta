import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
       <article className={styles['header-article']}><h2>Delicious Pasta</h2></article>
      <nav>
        <ul className={styles['header-nav']}>
          <li className={styles['header-nav-list']}><a href="">Home</a></li>
          <li className={styles['header-nav-list']}><a href="">About</a></li>
          <li className={styles['header-nav-list']}><a href="">Recipies</a></li>
          <li className={styles['header-nav-list']}><a href="">Login</a></li>
          <li className={styles['header-nav-list']}><a href="">Register</a></li>
          <li className={styles['header-nav-list']}><a href="">My Recipies</a></li>
          <li className={styles['header-nav-list']}><a href="">Add new recipe</a></li>
          <li className={styles['header-nav-list']}><a href="">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}
