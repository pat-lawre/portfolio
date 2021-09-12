import React from "react";
import styles from "../styles/scss/header.module.scss";

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <span className={styles.titlePrimary}>Hello. I'm Patrick.</span>
        <span className={styles.titleSecondary}>
          I'm a software & web developer
        </span>
        <span className={styles.titleSecondary}>
          and I can create your big ideas...
        </span>
        <div className={styles.section}></div>
        <div className={styles.container}>
          <span className={styles.titleSecondary}>
            I have a diverse range of skills
          </span>
          <span className={styles.titleSecondary}>
            and I'd love to work with you.
          </span>
          <span className={styles.titlePrimary}>Come check out my work.</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
