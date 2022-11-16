import React from "react";
import Image from "../UI/Image";
import Card from "../UI/Card";

import avatar from "../Assets/avatar.png";
import introStyles from "./Introduction.module.css";
import cardStyles from "./IntroCard.module.css";

const Introduction = (props) => {
  return (
    <div className={introStyles.introduction}>
      <h1>
        Hi, I am <span className={introStyles.name}>Louis Riddle</span>👋
        <br />
        <span className={introStyles.title}>Front-End Developer</span>
      </h1>
      <p>I Code Beautifully Simple Things, And I Love What I Do.</p>
      <Image
        src={avatar}
        alt="Louis' avatar"
        classStyles={introStyles.avatar}
      />
      <div className={introStyles.cardContainer}>
        <Card
          header="1+"
          text="Years of Experience"
          containerStyles={cardStyles.container}
          headerStyles={cardStyles.header}
          textStyles={cardStyles.text}
        />
        <Card
          header="50+"
          text="Completed Projects"
          containerStyles={cardStyles.container}
          headerStyles={cardStyles.header}
          textStyles={cardStyles.text}
        />
        <Card
          header="30+"
          text="Happy Clients"
          containerStyles={cardStyles.container}
          headerStyles={cardStyles.header}
          textStyles={cardStyles.text}
        />
      </div>
    </div>
  );
};

export default Introduction;
