import React from "react";
import styles from "./buttonmobile.module.css";

export const ButtonMobile = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
