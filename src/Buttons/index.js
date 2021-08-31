import "./style.css";
import {Button, Section} from "./styled.js"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <Section>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={toggleHideDone}
            disabled={!tasks.some(({ done }) => done)}
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

export default Buttons;
