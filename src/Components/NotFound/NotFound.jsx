import React, { useContext, useEffect } from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Context";

function NotFound() {
  const { presentUser, setPresentUser } = useContext(GlobalContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("presentUser");
    if (storedUser) {
      setPresentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className={styles.errorContainer}>
      <h3 className={styles.errorMsg}>Sorry! Page Not Found</h3>
      <img
        src="../src/assets/sorry.jpg"
        alt="page not found"
        className={styles.errorImage}
      />
      <br></br>
      {presentUser !== null ? (
        <Link to={"/home/account"} className={styles.redirectionMsg}>
          Go to Home Page
        </Link>
      ) : (
        <Link to={"/login"} className={styles.redirectionMsg}>
          Go to Login Page
        </Link>
      )}
    </div>
  );
}

export default NotFound;
