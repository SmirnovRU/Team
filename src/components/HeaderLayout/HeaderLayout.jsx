import React from "react";
import style from "./headerlayout.module.css";

export const HeaderLayout = ({ children }) => {
  return <div className={style.header}>{children}</div>;
};
