import * as recipeService from "../../services/recipeService";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard";
import styles from "./MyRecipes.module.css";

export default function MyRecipes() {
  const { user } = useAuthContext();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService
      .getRecipesByOwnerId(user._id)
      .then((result) => {
        if (result.code === 404) {
          throw new Error(result.message);
        }
        const recipesData = Object.values(result);
        setRecipes(recipesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={styles["myrecipes-section"]}>
      <h1 className={styles["myrecipes-title"]}>Recipes</h1>
      <section className={styles["myrecipes-list"]}>
        {recipes && recipes.length > 0 ? (
          recipes.map((x) => <RecipeCard key={x._id} recipe={x} />)
        ) : (
          <article className={styles["no-recipes"]}>
            <h2>You don't have any recepes.</h2>
            <Link className={styles["link"]} to="/create">
              <p>Create your first one</p>
            </Link>
          </article>
        )}
      </section>
    </section>
  );
}
