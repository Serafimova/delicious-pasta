import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import * as commentService from "../../../services/commentService";
import styles from "./CreateComment.module.css";

export default function CreateComment({ recipeId }) {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onCommentHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let comment = formData.get("comment");

    commentService
      .createComment(comment, recipeId, user.accessToken)
      .then((comment) => {
        console.log("commented");
        navigate(`/recipes`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={styles["details"]}>
      <section className={styles["comment"]}>
        <form id="create-form" method="POST" onSubmit={onCommentHandler}>
          <article className={styles["comment-field"]}>
            <label htmlFor="comment">Add your comment</label>
            <textarea
              type="text"
              name="comment"
              id="comment"
              rows="8"
              placeholder="Comment"
            ></textarea>
          </article>
          <br />
          <input type="submit" className={styles["btn-green"]} value="Save" />
          <Link to="/recipes" className={styles["btn-red"]} type="button">
            Cancel
          </Link>
        </form>
      </section>
    </section>
  );
}
