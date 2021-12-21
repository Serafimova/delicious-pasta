// import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as recipeService from "../../services/recipeService";
import styles from "./Details.module.css";

export default function Details() {
  const { user } = useAuthContext();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

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

  const onDeleteHandler = (e) => {
    e.preventDefault();
    recipeService.deleteRecipe(recipeId, user.accessToken).then(() => {
      console.log('delete')
      navigate("/recipes");
    });
    // add confirm
  };

  const ownerButtons = (
    <article className={styles["owner-buttons"]}>
      <button className={styles["btn-orange"]}>Edit</button>
      <button className={styles["btn-red"]} onClick={onDeleteHandler}>
        Delete
      </button>
    </article>
  );

  return (
    <section className={styles["details"]}>
      <section className={styles["card"]}>
        <article className={styles["card-content"]}>
          <h2 className={styles["card-content-title"]}>{recipe.name}</h2>
        </article>
        <article className={styles["recipie-info"]}>
          <article className={styles["info"]}>
            <article className={styles["card-image"]}>
              <img src={recipe.img} alt="" />
            </article>

            <article className={styles["card-props"]}>
              <article className={styles["time"]}>
                <p className={styles["time-title"]}>Cook time</p>
                <p className={styles["time-text"]}>
                  <i className={styles["far fa-clock"]}></i>
                  {recipe.cookingTime} min
                </p>
              </article>
              <article className={styles["serves"]}>
                <p className={styles["serves-title"]}>Serves</p>
                <p className={styles["serves-text"]}>
                  <i className={styles["fas fa-utensils"]}></i>
                  {recipe.serves}
                </p>
              </article>
              <article className={styles["difficulty"]}>
                <p className={styles["difficulty-title"]}>Difficulty</p>

                <p className={styles["difficulty"]}>
                  <i className={styles["fas fa-leaf"]}></i>
                  {recipe.difficulty}
                </p>
              </article>
            </article>
            <article className={styles["guest"]}>
              <p className={styles["likes"]}>
                <i className={styles["fas fa-heart"]}></i>Liked by 1 Pasta
                Lovers
              </p>
              {user._id && user._id !== recipe._ownerId ? (
                <button className={styles["btn-pink"]}>Like</button>
              ) : (
                ""
              )}
            </article>

            {user._id && user._id === recipe._ownerId ? ownerButtons : ""}
          </article>
          <article className={styles["cooking"]}>
            <article className={styles["cooking-ingredients"]}>
              <h2 className={styles["cooking-ingredients-title"]}>
                Ingredients
              </h2>
              <article className={styles["cooking-ingredients-content"]}>
                {/* <ul>
                  {recipe.ingredients.map((x, i) => {
                    <li key={i}>{x}</li>;
                  })}
                </ul> */}
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus illum voluptas, beatae id officiis ad? Recusandae, quis
                  aut quia, quibusdam necessitatibus non numquam a, voluptatibus
                  officiis magnam aliquam nesciunt modi.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus illum voluptas, beatae id officiis ad? Recusandae, quis
                  aut quia, quibusdam necessitatibus non numquam a, voluptatibus
                  officiis magnam aliquam nesciunt modi.
                </p>
              </article>
            </article>
            <article className={styles["cooking-steps"]}>
              <h2 className={styles["cooking-steps-title"]}>Steps</h2>
              <article className={styles["cooking-steps-content"]}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus illum voluptas, beatae id officiis ad? Recusandae, quis
                  aut quia, quibusdam necessitatibus non numquam a, voluptatibus
                  officiis magnam aliquam nesciunt modi.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus illum voluptas, beatae id officiis ad? Recusandae, quis
                  aut quia, quibusdam necessitatibus non numquam a, voluptatibus
                  officiis magnam aliquam nesciunt modi.
                </p>
              </article>
            </article>
          </article>
        </article>
      </section>
    </section>
  );
}
