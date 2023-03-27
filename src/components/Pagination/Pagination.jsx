import React from "react";
import styles from "./pagination.module.css";

export const Pagination = (props) => {
  const pagesArray = Array.from({ length: props.totalPage }).map(
    (_, index) => index + 1
  );

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.text}>cтраницы</p>
      </div>
      <div>
        {pagesArray.map((el) => (
          <button
            className={props.page == el ? styles.active : styles.pages}
            onClick={() => props.selectedPageData(el)}
            key={el}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};
