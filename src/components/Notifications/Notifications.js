import { useNotificationsContext } from "../../contexts/NotificationsContext";
import styles from "./Notifications.module.css";

export default function Notifications() {
  const { notifications, clearNotification } = useNotificationsContext();

  if (notifications.show) {
    return (
      <section className={styles["alert"]} onClose={clearNotification}>
        <h3>{notifications.message}</h3>
      </section>
    );
  } else {
    return null;
  }
}
