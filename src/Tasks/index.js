import { List, Item, Span, Button } from "./styled.js"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          onClick={() => toggleTaskDone(task.id)}
          toggleDone
        >
          {task.done ? "✔" : ""}
        </Button>
        <Span 
        done={task.done}>
          {task.content}
        </Span>
        <Button
          onClick={ () => removeTask(task.id)}
          remove
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
