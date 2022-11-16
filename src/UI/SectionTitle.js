import React from "react";
import styles from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  return (
    <div>
      <h2 className={styles.heading}>
        <span className={styles.subHeading}>{props.subHeading}</span>
        <br />
        {props.heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
