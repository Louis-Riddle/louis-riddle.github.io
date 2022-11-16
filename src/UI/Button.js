import React from "react";

const Button = (props) => {
  return (
    <a href={props.href} className={props.classStyles}>
      {props.text}
    </a>
  );
};

export default Button;
