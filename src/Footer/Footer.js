import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.containerBackground}>
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <h2 className={styles.name}>Louis Riddle</h2>
          <p className={styles.occupation}>
            Front-end
            <br />
            Web Developer
          </p>
        </div>
        <div className={styles.listContainer}>
          <h5 className={styles.listHeader}>Useful Links</h5>
          <ul className={styles.usefulLinks}>
            <li>
              <a href="#home" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#Skills" className={styles.link}>
                Skills
              </a>
            </li>
            <li>
              <a href="#Portfolio" className={styles.link}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#Contact" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
