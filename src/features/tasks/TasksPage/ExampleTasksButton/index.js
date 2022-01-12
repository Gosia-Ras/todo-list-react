import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";
import { Button } from "../Buttons/styled";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  return (
    <Button
      secondary
      disabled={loading}
      onClick={() => dispatch(fetchExampleTasks())}
    >
      {loading ? "Loading..." : "Get example tasks"}
    </Button>
  );
};

export default ExampleTasksButton;
