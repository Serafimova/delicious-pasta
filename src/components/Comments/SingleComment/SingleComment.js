import styles from "./SingleComment.module.css";

export default function SingleComment({ comment }) {
  return (
    <article className={styles["article"]}>
      <p>{comment}</p>
    </article>
  );
}
