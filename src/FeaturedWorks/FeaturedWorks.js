import React from "react";
import SectionTitle from "../UI/SectionTitle";
import ImageGallery from "../UI/ImageGallery";
import FloatingBanner from "../UI/FloatingBanner";
import project1 from "../Assets/ImageGallery/project1.png";
import project2 from "../Assets/ImageGallery/project2.png";
import project3 from "../Assets/ImageGallery/project3.png";

import styles from "./FeaturedWorks.module.css";

const FeaturedWorks = (props) => {
  return (
    <div className={styles.container} id="Works">
      <SectionTitle subHeading="My Works" heading="Featured Works" />
      <ImageGallery src1={project1} src2={project2} src3={project3} />
      <FloatingBanner
        title="Start A Project"
        description="Interested in working together? Let's meet up! I'll buy the coffee!"
        buttonText="Let's Do This"
        buttonClassStyles={styles.button}
      />
    </div>
  );
};

export default FeaturedWorks;
