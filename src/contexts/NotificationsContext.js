import { createContext, useContext, useState } from "react";

export const NotificationsContext = createContext();

const defaultNotificationState = {
  show: false,
  message: "",
};

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(defaultNotificationState);

  const newNotification = (message) => {
    // console.log('newnotification')
    setNotifications({ show: true, message });
  };

  const clearNotification = () => {
    setNotifications(defaultNotificationState);
  };

  setTimeout(() => {
    setNotifications(defaultNotificationState);
  }, 5000);

  return (
    <NotificationsContext.Provider
      value={{ notifications, newNotification, clearNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = () => {
  const notificationsState = useContext(NotificationsContext);
  return notificationsState;
};
