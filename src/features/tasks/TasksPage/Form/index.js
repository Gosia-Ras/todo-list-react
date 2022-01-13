import { useState, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice.js";
import { Button, StyledForm } from "./styled.js";
import Input from "../Input/index";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit} onClick={focusInput}>
      <Input
        value={newTaskContent}
        type="text"
        placeholder="What do you have to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Add new task</Button>
    </StyledForm>
  );
};

export default Form;
