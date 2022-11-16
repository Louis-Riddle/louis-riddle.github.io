import React from "react";
import Image from "./Image";

const Card = (props) => {
  const source = props.src;

  return (
    <div className={props.containerStyles}>
      <Image src={source} />
      <p className={props.headerStyles}>{props.header}</p>
      <p className={props.textStyles}>{props.text}</p>
    </div>
  );
};

export default Card;
