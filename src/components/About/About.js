import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles["about"]}>
      <article className={styles["about-article"]}>
        <p>
          Delicious Pasta is the place where you may find recipies for cooking
          pasta from all around the world. Bolognese, Pesto, Carbonara, Chicken
          Parmezan with Zucchini or may be Cheese... Find out yours.
        </p>
        <p>Feel free to share your favourite recipe with other Pasta Lovers</p>
      </article>
      <article className={styles["museum"]}>
        <p>
          Did you know that there is Pasta museum in Rome? In Pasta Museum,
          officially named the Museo Nazionale delle Paste Alimentari you can
          learn everything about pasta :)
        </p>
      </article>
      <article className={styles["map"]}>

      <iframe  title="museum-map"  className={styles["map-iframe"]} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11875.20929877789!2d12.4728327!3d41.918608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc6597c584a70235!2sNational%20Museum%20of%20Pasta!5e0!3m2!1sbg!2sbg!4v1640040564143!5m2!1sbg!2sbg" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        {/* <iframe
          title="museum-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11875.548009808157!2d12.465837498889165!3d41.91678778867999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc6597c584a70235!2sNational%20Museum%20of%20Pasta!5e0!3m2!1sbg!2sbg!4v1640033151807!5m2!1sbg!2sbg"
          className={styles["map-iframe"]}
        ></iframe> */}
      </article>
    </section>
  );
}
