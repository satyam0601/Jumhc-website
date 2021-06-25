import React from "react";
import "./BlogPage.css";

function BlogPage(props) {
  return (
    <div className="blog-page-container">
      <div className="heading">{props.children[0]}</div>
      <div className="image-container">{props.children[1]}</div>
      <div className="blog-paragraph">{props.children[2]}</div>
      <div className="author-name-container">
        <span className="author-name">{props.children[3]}</span>
      </div>
    </div>
  );
}

export default BlogPage;