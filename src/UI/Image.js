import React from "react";

const Image = ({ src, alt, classStyles, link }) => {
  if (link) {
    return (
      <a href={link} className={classStyles}>
        <img src={src} alt={alt} className={classStyles} />
      </a>
    );
  }

  return <img src={src} alt={alt} className={classStyles} />;
};

export default Image;
