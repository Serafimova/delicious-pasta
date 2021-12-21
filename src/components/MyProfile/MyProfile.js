import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

import styles from "./MyProfile.module.css";

export default function MyProfile() {
  const { user } = useAuthContext();

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
          <p className={styles["profile-items-key"]}>Liked recipes: count</p>
        </div>
        <div className={styles["profile-items"]}>
          <p className={styles["profile-items-key"]}>My recipes:</p>
          <p className="noOffers">You don't have any recipes.</p>
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
