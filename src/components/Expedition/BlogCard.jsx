import React from "react";
import Button from "../Common/Button/Button";
import "./BlogCard.css";

function BlogCard(props) {
  return (
    <div className="card">
      <div className="image">
        {props.children[0]}
      </div>
      <div className="blog-content">
      {props.children[1]}
      {props.children[2]}        
      </div>
    </div>
  );
}
export default BlogCard;
