import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as recipeService from "../../services/recipeService";

import { Link } from "react-router-dom";

import styles from "./MyProfile.module.css";

export default function MyProfile() {
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
  }, [user._id]);

  return (
    <section id="profile-page" className={styles["profile"]}>
      <h2 className={styles["profile-title"]}>Your profile</h2>

      <form className={styles["profile-form"]}>
        <div className={styles["profile-items"]}>
          <p className={styles["profile-items-key"]}>Email: {user.email} </p>
        </div>
        <div className={styles["profile-items"]}>
          <p className={styles["profile-items-key"]}>Liked recipes: count</p>
        </div>
        <div className={styles["profile-items"]}>
          <p className={styles["profile-items-key"]}>My recipes:</p>
          {recipes && recipes.length > 0 ? (
          recipes.map((x) => <li key={x._id} recipe={x}>{x.name} <Link className={styles["link"]} to={`/${x._id}/details`}>
           See more 
        </Link></li>)
        ) : (<>
          <p className="noOffers">You don't have any recipes.</p>
          <Link className={styles["link"]} to="/create">
            Create one
          </Link>
        </>
        )}
        </div>
      </form>
    </section>
  );
}
