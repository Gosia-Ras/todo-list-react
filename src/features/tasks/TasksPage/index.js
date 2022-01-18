import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Search } from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";
import { RemainingTasksCounter } from "../remainingTasksCounter";

function TasksPage() {
  return (
    <>
      <Container>
        <Header title="To-Do List" />
        <Section
          title="Add new task"
          extraHeaderContent={<ExampleTasksButton />}
          body={<Form />}
        />
        <Section title="Search bar" body={<Search />} />
        <Section body={RemainingTasksCounter()} />
        <Section
          title="Task list"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
    </>
  );
}

export default TasksPage;
