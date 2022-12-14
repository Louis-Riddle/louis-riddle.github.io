import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.containerBackground}>
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <h2 className={styles.name}>Louis Riddle</h2>
          <p className={styles.occupation}>
            Full-Stack
            <br />
            Web Developer
          </p>
        </div>
        <div className={styles.listContainer}>
          <h5 className={styles.listHeader}>Useful Links</h5>
          <ul className={styles.usefulLinks}>
            <li>
              <a href="#Home" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#AboutMe" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#MySkills" className={styles.link}>
                Skills
              </a>
            </li>
            <li>
              <a href="#Works" className={styles.link}>
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
