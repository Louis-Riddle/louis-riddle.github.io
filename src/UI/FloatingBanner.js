import React from "react";
import Button from "./Button";

import styles from "./FloatingBanner.module.css";

const FloatingBanner = (props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <Button
        text={props.buttonText}
        classStyles={props.buttonClassStyles}
        href="mailto:riddlelouis43@gmail.com"
      />
    </div>
  );
};

export default FloatingBanner;
