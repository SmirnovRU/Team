import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./modal.module.css";

export const Modal = ({ children, ...props }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (props.showModal) {
      setTimeout(() => {
        props.setShowModal(false);
        if (props.navigate) {
          navigate("/team");
        }
      }, 1000);
    }
  }, [props.showModal]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  );
};
