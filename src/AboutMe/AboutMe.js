import React from "react";
import Image from "../UI/Image";
import styles from "./AboutMe.module.css";
import LouisRiddle from "../Assets/LouisRiddle.png";
import SectionTitle from "../UI/SectionTitle";

const AboutMe = (props) => {
  return (
    <div className={styles.container} id="AboutMe">
      <Image
        src={LouisRiddle}
        alt="Louis thinking about coding"
        classStyles={styles.image}
      />
      <div className={styles.textContainer}>
        <SectionTitle subHeading="WHO I AM" heading="About Me" />
        <p className={styles.paragraph}>
          Hi! I am Louis Riddle, and I am a developer who has a passion for
          building clean web applications with intuitive functionality. I enjoy
          the process of turning ideas into reality using creative solutions. I
          am always curious about learning new skills, tools, and concepts. In
          addition to working on various solo front end projects, I have worked
          with creative teams, which involves daily communications, source
          control, and project management.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
