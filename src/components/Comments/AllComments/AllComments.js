import { useEffect, useState } from "react";
import * as commentService from "../../../services/commentService";
import SingleComment from "../SingleComment";
import { useNotificationsContext } from "../../../contexts/NotificationsContext";

import styles from "./AllComments.module.css";

export default function AllComments({ recipeId }) {
  const [comments, setComments] = useState([]);
  const { newNotification } = useNotificationsContext();

  useEffect(() => {
    commentService
      .getAllComments(recipeId)
      .then((res) => {
        if (res.code === 404) {
          throw new Error("Sorry, we couldn't load all the comments ;(");
        }
        setComments(res);
      })
      .catch((err) => {
        newNotification(err.message);
        console.log(err);
      });
  }, [recipeId]);

  return (
    <section className={styles["details"]}>
      {comments && comments.length > 0 ? (
        comments.map((x) => <SingleComment key={x._id} comment={x.comment} />)
      ) : (
        <h2 className={styles["no-comments"]}>No comments for this recipe</h2>
      )}
    </section>
  );
}
