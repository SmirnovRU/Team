import React from "react";
import styles from "./button.module.css";

export const Button = ({ children, ...props }) => {
  const buttonClassNames = [styles.button];
  if (props.className) {
    buttonClassNames.push(styles.padding);
  }

  if (props.mobile) {
    buttonClassNames.push(styles.mobile);
  }

  return (
    <button {...props} className={buttonClassNames.join(" ")}>
      {children}
    </button>
  );
};
