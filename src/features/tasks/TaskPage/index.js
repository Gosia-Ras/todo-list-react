import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById, selectTasks } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  const tasks = useSelector(selectTasks);

  return (
    <Container>
      <Header title="Task details" />
      <Section
        title={task ? task.content : "Task not found 🧭 Please come back later"}
        body={
          !!task && (
            <>
              <p>
                <strong>Completed:</strong> {task.done ? "Yes" : "No"}
              </p>
              <p>
                <strong>Task number: </strong>
                {tasks.indexOf(task) + 1}
              </p>
              <p>
                <strong>Task added on:</strong>
                {task.time}
              </p>
            </>
          )
        }
      />
    </Container>
  );
}
export default TaskPage;
