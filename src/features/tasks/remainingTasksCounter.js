import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTasksByQuery } from "./tasksSlice";
import { SectionParagraph } from "../../common/Section/styled";

export const RemainingTasksCounter = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const tasks = useSelector((state) => selectTasksByQuery(state));

  useEffect(() => {
    if (tasks) setTasksRemaining(tasks.filter((task) => !task.done).length);
  }, [tasks]);

  return (
    <SectionParagraph>
      <strong>Tasks to complete: </strong> {tasksRemaining}
    </SectionParagraph>
  );
};
