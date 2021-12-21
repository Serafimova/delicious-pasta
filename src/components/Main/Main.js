import { Link } from 'react-router-dom';
import styles from "./Main.module.css";

export default function Main() {
  return (<>
    <section className={styles["main-section"]}>
      <article className="main-content">
        <p className={styles["main-content-title"]}>
          Dear Pasta Lover,
          <br />
          Welcome to the incredible world of pasta ;)
        </p>
        <p>
          Here you can find your recipes from all around the world for making
          delicious pasta.
        </p>
        <p>Check our <Link className={styles["link"]} to="/recipes">Recipes</Link> for ideas</p>
      </article>
        <article className={styles["main-acc"]}>
        <p>You want to share your favourite pasta recipe with other Pasta lovers?</p>
          <p className={styles["main-content-text"]}> Feel free to add your's too! Just <Link className={styles["link"]} to="/login">Login</Link></p>
          <p className={styles["main-content-text"]}>Not Registered?  <Link className={styles["link"]} to="/register">Create an account</Link></p>
        </article>
    </section>
      <section className={styles["recent"]}>
        <p className={styles["recent-title"]}>Recent recipes</p>

      </section>
  </>
  );
}
