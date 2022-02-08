import { List, Item, Span, Button, StyledLink } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTasksByQuery,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName.js";
import { toTask } from "../../../../routes.js";
import { useQueryParameter } from "../queryParameters.js";

const TaskList = () => {
  
  const query = useQueryParameter(searchQueryParamName);
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
            <StyledLink to={toTask({ id: task.id })}>
              {task.content}
            </StyledLink>
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
