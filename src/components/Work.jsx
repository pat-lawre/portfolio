import React from "react";
import styles from "../styles/scss/work.module.scss";

import Card from "../components/atoms/Card.jsx";

const exampleWebsitesCardDescription =
  "Here's a few sample websites that I've created to show off my skills";

const Work = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Portfolio</span>
        <div className={styles.container}>
          <Card
            title="Example websites"
            description={exampleWebsitesCardDescription}
            image="https://picsum.photos/1920/1080"
          />
          <Card
            title="Example websites"
            description={exampleWebsitesCardDescription}
            image="https://picsum.photos/1920/1080"
          />
          <Card
            title="Example websites"
            description={exampleWebsitesCardDescription}
            image="https://picsum.photos/1920/1080"
          />
          <Card
            title="Example websites"
            description={exampleWebsitesCardDescription}
            image="https://picsum.photos/1920/1080"
          />
          <Card
            title="Example websites"
            description={exampleWebsitesCardDescription}
            image="https://picsum.photos/1920/1080"
          />
          <Card
            title="Example websites"
            description={exampleWebsitesCardDescription}
            image="https://picsum.photos/1920/1080"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
