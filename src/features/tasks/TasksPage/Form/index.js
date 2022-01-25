import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice.js";
import { Button, StyledForm } from "./styled.js";
import Input from "../Input/index";
import getKey from "../../keyGenerator.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const date = new Date();

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
        id: getKey(),
        time: date.toLocaleDateString("en-GB", {
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          day: "numeric",
          month: "long",
        }),
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
