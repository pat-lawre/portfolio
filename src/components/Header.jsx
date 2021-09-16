import React from "react";
import styles from "../styles/scss/header.module.scss";

import { GoChevronDown } from "react-icons/go";

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <span className={styles.primaryText}>Hi. I'm Patrick Lawrence.</span>
        <span className={styles.secondaryText}>
          I'm a software & web developer
        </span>
        <span className={styles.secondaryText}>
          and I can create your big ideas...
        </span>
        <div className={styles.section}></div>
        <div className={styles.container}>
          <span className={styles.secondaryText}>
            I have a diverse range of skills
          </span>
          <span className={styles.secondaryText}>
            and I'd love to work with you.
          </span>
          <span className={styles.primaryText}>Come check out my stuff.</span>
        </div>
        <GoChevronDown className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
