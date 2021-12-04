import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles["footer"]}>
      <article className="footer-contacts">
        <h3 className={styles["footer-contacts-title"]}>Contacts</h3>
        <p className={styles["footer-contacts-content"]}>
          <i className="fas fa-map-marker-alt"></i>Address: Veliko Tarnovo
        </p>
        <p className={styles["footer-contacts-content"]}>
          <i className="fas fa-phone-alt"></i>Phone: 00000000000
        </p>
      </article>
      <article className={styles["footer-social"]}>
        <h3 className={styles["footer-social-title"]}>Find us</h3>
        <ul className={styles["footer-social-content"]}>
          <li className={styles["footer-social-content-list"]}>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className={styles["footer-social-content-list"]}>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className={styles["footer-social-content-list"]}>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
