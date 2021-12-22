import { useEffect, useState } from "react";
import * as commentService from "../../../services/commentService";
import SingleComment from "../SingleComment";

import styles from "./AllComments.module.css";

export default function AllComments({ recipeId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentService.getAllComments(recipeId).then((res) => {
      setComments(res);
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
