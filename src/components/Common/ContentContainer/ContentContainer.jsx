import React from "react";
import "./ContentContainer.css";

function ContentContainer(props) {
  return <div className="content-container">{props.children}</div>;
}

export default ContentContainer;
