import React from "react";
import axios from "axios";
import styles from "./input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export const Input = React.forwardRef(
  ({ id, type, error, ...props }, inputRef) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputClassNames = [styles.input__input];
    if (error) {
      inputClassNames.push(styles.error);
    }

    return (
      <div>
        <label className={styles.input__box} htmlFor={id}>
          <p className={styles.input__title}>{props.title}</p>
          <input
            className={inputClassNames.join(" ")}
            id={id}
            type={type === "password" && showPassword ? "text" : type}
            {...props}
            ref={inputRef}
          />
          {(type === "password" || type === "text") && (
            <i
              className={styles.input__img}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? eye : eyeSlash}
            </i>
          )}
          {error && <p className={styles.input__error}>{error}</p>}
        </label>
      </div>
    );
  }
);
