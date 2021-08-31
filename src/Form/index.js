import { useState, useRef } from "react";
import { Button, StyledForm, Input } from "./styled.js"

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
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        placeholder="What do you have to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button
        disabled={newTaskContent.trim() === ""}
        onClick={focusInput}
      >
        Add new task
      </Button>
    </StyledForm>
  );
};

export default Form;
