import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as recipeService from "../../services/recipeService";
import { useNotificationsContext } from "../../contexts/NotificationsContext";
import validator from "validator";

import styles from "./Edit.module.css";

export default function Edit() {
  const { user } = useAuthContext();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();
  const { newNotification } = useNotificationsContext();

  useEffect(() => {
    recipeService
      .getRecipeById(recipeId)
      .then((result) => {
        if (result.code === 404) {
          throw new Error(result.message);
        }
        setRecipe(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);

  const onEditHandler = (e) => {
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
    };

    recipeService
      .editRecipe(recipeId, recipeData, user.accessToken)
      .then((result) => {

        if (result.code === 404) {
          throw new Error("Sorry, we couldn't edit your recipe. ;( Please try again later.");
        }
        console.log("edited");
        console.log(result);
        navigate(`/${recipeId}/details`);
      })
      .catch((err) => {
        newNotification(err.message);
        navigate(`/${recipeId}/details`);
        console.log(err);
      });
  };

  return (
    <section className={styles["edit-section"]}>
      <h3 className={styles["card-title"]}>Edit recipe</h3>
      <article className={styles["card"]}>
        <form id="create-form" method="POST" onSubmit={onEditHandler}>
          <article className={styles["card-field"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              defaultValue={recipe.name}
            />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="cookingTime">Cooking time in minutes</label>
            <input
              type="number"
              name="cookingTime"
              id="cookingTime"
              placeholder="Cooking time in minutes"
              min={1}
              defaultValue={recipe.cookingTime}
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
              defaultValue={recipe.serves}
            />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="difficulty">Difficulty</label>
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              placeholder="Difficulty"
              defaultValue={recipe.difficulty}
            />
          </article>
          <article className={styles["card-field"]}>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Image URL"
              defaultValue={recipe.img}
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
              defaultValue={recipe.ingredients}
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
              defaultValue={recipe.method}
            ></textarea>
          </article>
          <br />
          <input type="submit" className={styles["btn-green"]} value="Save" />
          <Link
            to={`/${recipe._id}/details`}
            className={styles["btn-red"]}
            type="button"
          >
            Cancel
          </Link>
        </form>
      </article>
    </section>
  );
}
