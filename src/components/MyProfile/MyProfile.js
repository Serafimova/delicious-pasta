// import * as authService from "../../services/authService";
// import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
// import { useNotificationsContext } from "../../contexts/NotificationsContext";
// import validator from 'validator';
import styles from "./MyProfile.module.css";

export default function MyProfile() {
  const { user } = useAuthContext();
  // const { newNotification } = useNotificationsContext();
  // const navigate = useNavigate();

  // const onLoginHandler = (e) => {
  //   e.preventDefault();
  //   let formData = new FormData(e.currentTarget);
  //   let email = formData.get("email");
  //   let password = formData.get("password");

  //   if (!validator.isEmail(email)) {
  //     newNotification("Please enter a valid email!");
  //     return;
  //   }

  //   authService
  //     .login(email, password)
  //     .then((data) => {
  //       if (data.code === 403) {
  //         throw new Error("Invalid email or password!");
  //       }
  //       login(data);
  //       navigate("/recipies");
  //     })
  //     .catch((err) => {
  //       newNotification(err.message);
  //       console.log(err);
  //     });
  // };

  return (
    <section id="profile-page" className={styles["profile"]}>
      <h2 className={styles["profile-title"]}>Your profile</h2>

      <form className={styles["profile-form"]}>
        {/* <div className="flex">
          <p>Username: </p>
          <p>username</p>
        </div> */}
        <div className={styles["profile-items"]}>
          <p className={styles["profile-items-key"]}>Email: {user.email} </p>
        </div>
        <div className={styles["profile-items"]}>
          <p className={styles["profile-items-key"]}>Liked recipies: count</p>
        </div>
        <div className={styles["profile-items"]}>
          <p className={styles["profile-items-key"]}>My recipies:</p>
          <p className="noOffers">You don't have any recipies.</p>
          <Link className={styles["link"]} to="/create">
            Create one
          </Link>
          {/* <ul>
            <li>
              offerName <a>See more</a>
            </li>
          </ul> */}
        </div>
        {/* <button className={styles["form-button"]}>Change Password</button> */}
      </form>
    </section>
  );
}
