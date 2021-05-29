import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Transfer task-list to React.js", done: true }, 
  { id: 2, content: "Do groceries", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="To-Do List" />
      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="Task list"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
