import React from "react";
import styles from "../styles/scss/navbar.module.scss";

import logo from "../assets/images/logo.svg";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <span className={styles.logoText}>pat-lawre</span>
      </div>
      <ul className={styles.linksList}>
        <a href={resume} class={styles.resumeLink}>
          <li className={styles.link}>resume</li>
        </a>
        <li className={styles.link}>portfolio</li>
        <li className={styles.link}>blog</li>
        <li className={styles.link}>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
