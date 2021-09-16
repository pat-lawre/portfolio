import React from "react";
import styles from "../../styles/scss/card.module.scss";

const Card = (props) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          props.image +
          ")",
        objectFit: "cover",
      }}
    >
      <div className={styles.container}>
        <span className={styles.title}>{props.title}</span>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
