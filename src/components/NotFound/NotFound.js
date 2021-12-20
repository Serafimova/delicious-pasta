import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function PrivateRoutes() {
  return (
    <section className={styles["notFound"]}>
      <article className={styles["notFound-article"]}>
        <p>Ooops!</p>
        <p>Sorry, we couldn't find the page you are looking for :(</p>
        <p>Go back to <Link className={styles["home"]} to="/">Home page</Link></p>
      </article>
    </section>
  );
}
