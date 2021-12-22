import * as recipeService from "../../services/recipeService";
import { useEffect, useState } from "react";
import styles from "./Recipes.module.css";
import RecipeCard from "../RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService
      .getAllRecipes()
      .then((result) => {
        if (result.code === 404) {
          throw new Error(result.message);
        }
        const recipesData = Object.values(result);
        setRecipes(recipesData.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={styles["recipes-section"]}>
      <h1 className={styles["recipes-title"]}>Recipes</h1>
      <section className={styles["recipes-list"]}>
        {recipes && recipes.length > 0 ? (
          recipes.map((x) => <RecipeCard key={x._id} recipe={x} />)
        ) : (
          <h2 className={styles["no-recipes"]}>No recipes in database :(</h2>
        )}
      </section>
    </section>
  );
}
