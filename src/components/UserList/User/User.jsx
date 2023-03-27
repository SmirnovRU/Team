import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./user.module.css";

export const User = React.memo((props) => {
  const [isLiked, setIsliked] = React.useState(
    localStorage.getItem(`isLiked ${props.user.id}`)
  );

  const navigate = useNavigate();

  const handleLiker = React.useCallback(() => {
    setIsliked((prev) => !prev);
  });

  React.useEffect(() => {
    if (isLiked === true || isLiked === false) {
      if (isLiked === false) {
        localStorage.removeItem(`isLiked ${props.user.id}`);
        return;
      }
      localStorage.setItem(`isLiked ${props.user.id}`, JSON.stringify(isLiked));
    }
  }, [isLiked]);

  return (
    <div className={styles.user__container}>
      <div
        className={styles.user__box}
        onClick={() => {
          navigate(`/team/${props.user.id}`);
        }}
      >
        <img
          className={styles.user__avatar}
          src={props.user.avatar}
          alt={props.user.first_name}
        />
        <div>
          <h2 className={styles.user__name}>
            {props.user.first_name}
            <span> </span>
            {props.user.last_name}
          </h2>
        </div>
      </div>
      <div className={styles.user__hearz__box}>
        <div className={styles.user__hearz} onClick={() => handleLiker()}>
          {!!isLiked ? (
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.85 9.6021e-07C1.72375 9.6021e-07 0 1.72173 0 3.84548C0 7.69096 4.55 11.1869 7 12C9.45 11.1869 14 7.69096 14 3.84548C14 1.72173 12.2762 9.6021e-07 10.15 9.6021e-07C8.848 9.6021e-07 7.6965 0.645692 7 1.63398C6.64499 1.1289 6.17336 0.71669 5.62504 0.432263C5.07672 0.147837 4.46785 -0.000435366 3.85 9.6021e-07Z"
                fill="#512689"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z"
                stroke="#151317"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
});
