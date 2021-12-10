import { Button, Section } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Section>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={ () => dispatch(toggleHideDone())}
            disabled={!tasks.some(({ done }) => done)}
            secondary
          >
            {hideDone ? "Show" : "Hide"} finished tasks
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
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
