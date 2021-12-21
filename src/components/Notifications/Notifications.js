import { useNotificationsContext } from "../../contexts/NotificationsContext";
import styles from "./Notifications.module.css";

export default function Notifications() {
  const { notifications, clearNotification } = useNotificationsContext();

  if (notifications.show) {
    return (
      <section className={styles["alert"]} onClick={clearNotification}>
        <h4>{notifications.message}</h4>
        <p>CLick to close</p>
      </section>
    );
  } else {
    return null;
  }
}
