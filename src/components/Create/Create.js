import styles from "./Create.module.css";

export default function Create() {
  return (
    <section className={styles["create-section"]}>

    
      <h3 className={styles["card-title"]}>Add new recipe</h3>
    <article className={styles["card"]}>
      <form>
        <article className={styles["card-field"]}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            minLength="6"
          />
        </article>
        <article className={styles["card-field"]}>
          <label htmlFor="cookingTime">Cooking time in minutes</label>
          <input
            type="text"
            name="cookingTime"
            id="cookingTime"
            placeholder="Cooking time in minutes"
            required
          />
        </article>
        <article className={styles["card-field"]}>
          <label htmlFor="serves">Serves</label>
          <input
            type="text"
            name="serves"
            id="serves"
            placeholder="Serves"
            required
          />
        </article>
        <article className={styles["card-field"]}>
          <label htmlFor="difficulty">Difficulty</label>
          <input
            type="text"
            name="difficulty"
            id="difficulty"
            placeholder="Difficulty"
            required
          />
        </article>
        <article className={styles["card-field"]}>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image URL"
            required
          />
        </article>
        <article className={styles["card-field"]}>
          <label htmlFor="ingredients">Ingredients</label>
          <p>Please enter the ingredients separated with comma (',')</p>
          <textarea
            type="text"
            name="ingredients"
            id="ingredients"
            rows="8"
            placeholder="Ingredients"
            required
            minLength="20"
          ></textarea>
        </article>
        <article className={styles["card-field"]}>
          <label htmlFor="method">Method</label>
          <textarea
            type="text"
            name="method"
            id="method"
            rows="10"
            placeholder="Let us know how to cook it..."
            required
            minLength="20"
          ></textarea>
        </article>
        <br />
        <button className={styles["btn-green"]}>Save</button>
        <button
          className={styles["btn-red"]}
          type="button"
          // routerLink="/catalog"
        >
          Cancel
        </button>
      </form>
    </article>
    </section>
  );
}
