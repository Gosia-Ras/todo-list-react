import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__text"
        type="text"
        placeholder="What do you have to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <button
        className="button button--add"
        disabled={newTaskContent.trim() === ""}
        onClick={focusInput}
      >
        Add new task
      </button>
    </form>
  );
};

export default Form;
