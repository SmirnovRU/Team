import React from "react";
import styles from "./errormessage.module.css";

export const ErrorMessage = (props) => {
  return <h1 className={styles.error}>Ошибка: {props.message}</h1>;
};
