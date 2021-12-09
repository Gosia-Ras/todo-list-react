import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const { removeTask, toggleTaskDone, setAllDone, addNewTask } = useTasks();

  const { tasks } = useSelector(selectTasks);

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task" body={<Form addNewTask={addNewTask} />} />
      <Section
        title="Task list"
        body={
          <TaskList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
