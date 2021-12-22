import { useAuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useNotificationsContext } from "../../contexts/NotificationsContext";
import * as recipeService from "../../services/recipeService";
import validator from "validator";
import styles from "./Create.module.css";

export default function Create() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { newNotification } = useNotificationsContext();

  const onCreateHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let name = formData.get("name");
    let cookingTime = Number(formData.get("cookingTime"));
    let serves = Number(formData.get("serves"));
    let difficulty = formData.get("difficulty");
    let imageUrl = formData.get("imageUrl");
    let ingredients = formData.get("ingredients");
    let method = formData.get("method");

    if (
      name === "" ||
      cookingTime === "" ||
      serves === "" ||
      difficulty === "" ||
      imageUrl === "" ||
      ingredients === "" ||
      method === ""
    ) {
      newNotification("All fields are reùired!");
      return;
    }

    if (!validator.isURL(imageUrl)) {
      newNotification("Please enter a valid URL!");
      return;
    }

    // if (typeof cookingTime !== "number" || typeof serves !== "number") {
    //   newNotification("Cooking time and serves must be numbers!");
    //   return;
    // }

    let ingredientsArray = ingredients
      .split(";")
      .map((x) => x.trim())
      .filter((x) => x !== "");
    let methodArray = method
      .split(".")
      .map((x) => x.trim())
      .filter((x) => x !== "");

    const recipeData = {
      name,
      cookingTime,
      serves,
      difficulty,
      img: imageUrl,
      ingredients: ingredientsArray,
      method: methodArray,
      likes: [],
    };

    recipeService
      .createRecipe(recipeData, user.accessToken)
      .then((result) => {
        console.log("created");
        console.log(recipeData);
        navigate("/recipes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={styles["create-section"]}>
      <h3 className={styles["card-title"]}>Add new recipe</h3>
      <article className={styles["card"]}>
        <form id="create-form" method="POST" onSubmit={onCreateHandler}>
          <article className={styles["card-field"]}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="cookingTime">Cooking time in minutes</label>
            <input
              type="number"
              name="cookingTime"
              id="cookingTime"
              placeholder="Cooking time in minutes"
              min={1}
            />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="serves">Serves</label>
            <input
              type="number"
              name="serves"
              id="serves"
              placeholder="Serves"
              min={1}
            />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="difficulty">Difficulty</label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              placeholder="Difficulty"
            />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Image URL"
            />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="ingredients">Ingredients</label>
            <p>Please enter the ingredients separated with comma (';')</p>
            <textarea
              type="text"
              name="ingredients"
              id="ingredients"
              rows="8"
              placeholder="Ingredients"
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
            ></textarea>
          </article>
          <br />
          <input type="submit" className={styles["btn-green"]} value="Save" />
          <Link to="/recipes" className={styles["btn-red"]} type="button">
            Cancel
          </Link>
        </form>
      </article>
    </section>
  );
}
