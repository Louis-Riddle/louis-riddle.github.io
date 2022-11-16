import React from "react";
import SectionTitle from "../UI/SectionTitle";
import LogoGrid from "./LogoGrid";
import Button from "../UI/Button";

import styles from "./MySkills.module.css";

const MySkills = (props) => {
  return (
    <div className={styles.container} id="MySkills">
      <div className={styles.textContainer}>
        <SectionTitle
          subHeading="MY SKILLS"
          heading="What My Programming Skills Include?"
        />
        <p className={styles.p}>
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with these
          technologies.
        </p>
        <ol className={styles.list}>
          <li>Html</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Node</li>
          <li>Wordpress</li>
          <li>PHP</li>
          <li>Git</li>
          <li>MongoDB</li>
        </ol>
      </div>

      <LogoGrid />

      <Button
        text="Hire Me"
        classStyles={styles.button}
        href="mailto:riddlelouis43@gmail.com"
      />
    </div>
  );
};

export default MySkills;
