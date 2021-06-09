import React from "react";
import "./style.css";

const Form = () => (
  <form className="form js-form">
    <input
      className="form__text"
      type="text"
      placeholder="What do you have to do?"
    />
    <button className="button button--add">Add new task</button>
  </form>
);

export default Form;