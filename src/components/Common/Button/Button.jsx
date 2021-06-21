import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <a href={props.href} className="common-btn">
      {props.children}
    </a>
  );
}

export default Button;
