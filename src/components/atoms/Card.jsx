import React from "react";
import styles from "../../styles/scss/card.module.scss";

const Card = (props) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        gridRow: props.gridRow,
        gridColumn: props.gridColumn,
      }}
    >
      <div className={styles.container}>
        <img
          src="https://picsum.photos/200"
          alt="card"
          className={styles.image}
        />
        <div className={styles.subContainer}>
          <span className={styles.title}>{props.title}</span>
          <p className={styles.description}>{props.description}</p>
          <span className={styles.tip}>Expand for more info</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
