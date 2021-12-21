import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({recipe}) {
  return (
    <>
      <section className={styles["card"]}>
        <article className={styles["card-image"]}>
          <img src={recipe.img} alt="" />
        </article>
        <article className={styles["card-content"]}>
          <h2 className={styles["card-content-title"]}>{recipe.name}</h2>
        </article>
        <article className={styles["card-props"]}>
          <article className={styles["time"]}>
            <p className={styles["time-title"]}>Cook time</p>
            <p className={styles["time-text"]}>
              <i className="far fa-clock"></i>
              {recipe.cookingTime}
            </p>
          </article>
          <article className={styles["serves"]}>
            <p className={styles["serves-title"]}>Serves</p>
            <p className={styles["serves-text"]}>
              <i className="fas fa-utensils"></i>
              {recipe.serves}
            </p>
          </article>
          <article className={styles["difficulty"]}>
            <p className={styles["difficulty-title"]}>Difficulty</p>
            <p className={styles["difficulty-text"]}>
              <i className="fas fa-leaf"></i>
              {recipe.difficulty}
            </p>
          </article>
        </article>
        <Link to={`/${recipe._id}/details`} className={styles["btn"]}>How to cook it</Link>
      </section>
    </>
  );
}
