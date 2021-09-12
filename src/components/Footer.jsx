import React from "react";
import styles from "../styles/scss/footer.module.scss";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

import { GoLocation, GoMegaphone, GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.text}>
          <GoLocation />
          West Chester, Pennsylvania
        </span>
        <a href="tel:+16106758651" className={styles.link}>
          <span className={styles.text}>
            <GoMegaphone />
            +1 (610) 675-8651
          </span>
        </a>
        <a href="mailto:contact@pat-lawre.com" className={styles.link}>
          <span className={styles.text}>
            <GoMail />
            contact@pat-lawre.com
          </span>
        </a>
      </div>
      <div className={styles.container}>
        <a href="https://github.com/pat-lawre">
          <FaGithub class={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/pat-lawre/">
          <FaLinkedinIn class={styles.icon} />
        </a>
        <a href="https://www.instagram.com/pat_lawre/">
          <FaInstagram class={styles.icon} />
        </a>
        <a href="https://twitter.com/pat_lawre">
          <FaTwitter class={styles.icon} />
        </a>
        <a href="https://www.facebook.com/patdashlawre">
          <FaFacebookF class={styles.icon} />
        </a>
      </div>
      <div>
        <a href="/" className={styles.link}>
          <span className={styles.text}>Home</span>
        </a>
        <a href="/webmail" className={styles.link}>
          <span className={styles.text}>Webmail</span>
        </a>
        <a href="/urbit" className={styles.link}>
          <span className={styles.text}>Urbit</span>
        </a>
        <a href="/blog" className={styles.link}>
          <span className={styles.text}>Blog</span>
        </a>
      </div>
      <div>
        <span className={styles.text}>
          Made using React, Node, Sass, and ❤️
        </span>
        <i>
          <span className={styles.text}>
            © 2021 Patrick Lawrence. All Rights Reserved
          </span>
        </i>
      </div>
    </div>
  );
};

export default Footer;
