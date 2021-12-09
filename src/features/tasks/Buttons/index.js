import { Button, Section } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Section>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={ () => dispatch(toggleHideDone())}
            secondary
          >
            {hideDone ? "Show" : "Hide"} finished tasks
          </Button>
          <Button
            onClick={setAllDone}
            disabled={tasks.every(({ done }) => done)}
            secondary
          >
            Mark all done
          </Button>
        </>
      )}
    </Section>
  );
};

export default Buttons;
