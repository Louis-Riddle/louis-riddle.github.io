import React from "react";
import Image from "../UI/Image";

import styles from "./LogoGrid.module.css";

import htmlLogo from "../Assets/skillsLogo/html.png";
import bootstrapLogo from "../Assets/skillsLogo/bootstrap.png";
import cssLogo from "../Assets/skillsLogo/css.png";
import githubLogo from "../Assets/skillsLogo/github.png";
import jsLogo from "../Assets/skillsLogo/js.png";
import reactLogo from "../Assets/skillsLogo/react.png";
import wordpressLogo from "../Assets/skillsLogo/wordpress.png";
import phpLogo from "../Assets/skillsLogo/phpicon.png";
import nodeLogo from "../Assets/skillsLogo/nodejs.webp";
import mongoDBLogo from "../Assets/skillsLogo/mongodb.png";

const LogoGrid = (props) => {
  const logosArray = [
    { source: htmlLogo, alt: "HTML Logo", id: "1" },
    { source: cssLogo, alt: "CSS Logo", id: "2" },
    { source: jsLogo, alt: "Javascript Logo", id: "3" },
    { source: bootstrapLogo, alt: "Bootstrap Logo", id: "4" },
    { source: reactLogo, alt: "React Logo", id: "5" },
    { source: nodeLogo, alt: "Node JS Logo", id: "6" },
    { source: wordpressLogo, alt: "Wordpress Logo", id: "7" },
    { source: phpLogo, alt: "PHP Logo", id: "8" },
    { source: githubLogo, alt: "Github Logo", id: "9" },
    { source: mongoDBLogo, alt: "Mongo DB Logo", id: "10" },
  ];

  return (
    <div className={styles.container}>
      {logosArray.map((logo, index) => {
        return (
          <li key={index} className={styles.listItem}>
            <Image src={logo.source} alt={logo.alt} classStyles={styles.logo} />
          </li>
        );
      })}
    </div>
  );
};

export default LogoGrid;
