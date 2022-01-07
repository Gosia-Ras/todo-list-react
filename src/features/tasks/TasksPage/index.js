import { Button } from "./Buttons/styled";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";

function TasksPage() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="To-Do List" />
      <Section
        title="Add new task"
        extraHeaderContent={
          <Button onClick={() => dispatch(fetchExampleTasks())} secondary>
            Get example tasks
          </Button>
        }
        body={<Form />}
      />
      <Section 
        title="Search bar" 
        body={<Search />} 
      />
      <Section
        title="Task list"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
