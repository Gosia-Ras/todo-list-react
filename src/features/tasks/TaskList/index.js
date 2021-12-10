import { List, Item, Span, Button } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.done ? "✔" : ""}
          </Button>
          <Span done={task.done}>{task.content}</Span>
          <Button onClick={() => removeTask(task.id)} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
