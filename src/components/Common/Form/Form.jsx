import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <div className="contact-us-text">Contact Us</div>
      <form action="" className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea id="contactMessage" name="message" rows="4" cols="50">
          Leave your message
        </textarea>
        <button type="submit" className="sub-btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
