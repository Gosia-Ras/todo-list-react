import { Button, Section } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
  selectSomeTasksDone,
} from "../../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const someTasksDone = useSelector(selectSomeTasksDone);

  const dispatch = useDispatch();

  return (
    <Section>
      {!areTasksEmpty > 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={!someTasksDone}
            secondary
          >
            {hideDone ? "Show" : "Hide"} finished tasks
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
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
