import React from "react";
import "./BlogPage.css";

function BlogPage(props) {
  return (
    <div className="blog-page-container">
      <h1 className="heading">{props.children[0]}</h1>
      <div className="image-container">{props.children[1]}</div>
      <p className="blog-paragraph">{props.children[2]}</p>
      <span className="author-name">{props.children[3]}</span>
    </div>
  );
}

export default BlogPage;
