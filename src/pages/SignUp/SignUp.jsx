import React from "react";
import { Registration } from "../../components/Form/Registration/Registration";
import { Login } from "../../components/Form/Login/Login";
import styles from "./signup.module.css";

export const SignUp = () => {
  const [haveAccount, setHaveAccount] = React.useState(true);

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        {haveAccount ? (
          <>
            <Login />
            <p className={styles.text}>
              у меня нет профиля,{" "}
              <span
                className={styles.link}
                onClick={() => setHaveAccount(false)}
              >
                зарегистрироваться
              </span>
            </p>
          </>
        ) : (
          <>
            <Registration />
            <p className={styles.text}>
              у меня есть{" "}
              <span
                className={styles.link}
                onClick={() => setHaveAccount(true)}
              >
                профиль
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
