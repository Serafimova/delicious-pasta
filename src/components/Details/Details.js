import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as recipeService from "../../services/recipeService";
import * as likesService from "../../services/likesService";
import Confirm from "../Confirm/Confirm";
import { useNotificationsContext } from "../../contexts/NotificationsContext";
import CreateComment from "../Comments/CreateComment";
import AllComments from "../Comments/AllComments";
import styles from "./Details.module.css";

export default function Details() {
  const { user } = useAuthContext();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [confirm, setConfirm] = useState(false);
  const { newNotification } = useNotificationsContext();
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

  useEffect(() => {
    likesService
      .getRecipeLikes(recipeId)
      .then((result) => {
        setRecipe((state) => ({ ...state, likes: result }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);

  const confirmDelete = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  const onDeleteHandler = (e) => {
    e.preventDefault();
    recipeService
      .deleteRecipe(recipeId, user.accessToken)
      .then(() => {
        console.log("delete");
        navigate("/recipes");
      })
      .finally(() => setConfirm(false));
  };

  const ownerButtons = (
    <article className={styles["owner-buttons"]}>
      <Link to={`/${recipe._id}/edit`} className={styles["btn-orange"]}>
        Edit
      </Link>
      <button className={styles["btn-red"]} onClick={confirmDelete}>
        Delete
      </button>
    </article>
  );

  const onLikeHandler = (e) => {
    e.preventDefault();
    if (user._id === recipe._ownerId) {
      newNotification("You can/'t like your own recipe!");
      return;
    }
    if (recipe.likes.includes(user._id)) {
      newNotification("You already liked this recipe!");
      return;
    }

    likesService.likeRecipe(user._id, recipeId, user.accessToken).then(() => {
      setRecipe((state) => ({ ...state, likes: [...state.likes, user._id] }));
    });
  };

  return (
    <section className={styles["details"]}>
      <Confirm
        show={confirm}
        onClose={() => setConfirm(false)}
        onSave={onDeleteHandler}
      />
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
                  <i className="far fa-clock"></i>
                  {recipe.cookingTime} min
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
            <article className={styles["guest"]}>
              <p className={styles["likes"]}>
                <i className="fas fa-heart"></i>
                {recipe.likes?.length === 0
                  ? "No likes"
                  : `Liked by ${recipe.likes?.length} Pasta Lover${
                      recipe.likes?.length > 1 ? "s" : ""
                    }`}
              </p>
              {user._id && user._id !== recipe._ownerId ? (
                <button
                  className={styles["btn-pink"]}
                  onClick={onLikeHandler}
                  style={{
                    display: recipe.likes?.includes(user._id)
                      ? "none"
                      : "block",
                  }}
                >
                  Like
                </button>
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
                <ul>
                  {recipe.ingredients?.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </article>
            </article>
            <article className={styles["cooking-steps"]}>
              <h2 className={styles["cooking-steps-title"]}>Steps</h2>
              <article className={styles["cooking-steps-content"]}>
                {recipe.method?.map((x, i) => (
                  <li key={i}>{x}.</li>
                ))}
              </article>
            </article>
          </article>
        </article>
      </section>
      <article className={styles["comment-content"]}>
        <h2 className={styles["comment-content-title"]}>Comments</h2>
      </article>
      <AllComments recipeId={recipeId} />
      <CreateComment recipeId={recipeId} />
    </section>
  );
}
