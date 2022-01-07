import { List, Item, Span, Button } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTasksByQuery,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName.js";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.done ? "✔" : ""}
          </Button>
          <Span done={task.done}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
          </Span>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
