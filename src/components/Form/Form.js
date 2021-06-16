import React from "react";
import { FormGroup, Label, Input, TextArea } from "./FormStyles";

const Form = () => {
  return (
    <div>
      {" "}
      <FormGroup>
        <Label htmlFor="label">Email Address</Label>
        <Input id="label" type="email" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label>Name</Label>
        <Input id="name" type="text" placeholder="EnterName"></Input>
      </FormGroup>
      <FormGroup>
        <TextArea
          className="form-control"
          id="name"
          placeholder="Message"
          rows="4"
        ></TextArea>
      </FormGroup>
      <FormGroup>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </FormGroup>
    </div>
  );
};

export default Form;
