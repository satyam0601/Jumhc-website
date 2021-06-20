import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div>
      {" "}
      <form className="form">
        <label className="label" htmlFor="label">
          Email Address
        </label>
        <input
          className="input"
          id="label"
          type="email"
          placeholder="Enter email"
        />
      </form>
      <form className="form">
        <label className="label">Name</label>
        <input
          className="input"
          id="name"
          type="text"
          placeholder="EnterName"
        ></input>
      </form>
      <form className="form">
        <textarea
          className="form-control"
          id="name"
          placeholder="Message"
          rows="4"
        ></textarea>
      </form>
      <form className="form">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
