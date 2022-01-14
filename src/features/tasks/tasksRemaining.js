import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTasksByQuery } from "./tasksSlice";
import { SectionParagraph } from "../../common/Section/styled";

export const RemainingTasksCount = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const tasks = useSelector((state) => selectTasksByQuery(state));

  useEffect(() => {
    if (tasks) setTasksRemaining(tasks.filter((task) => !task.done).length);
  });

  return <SectionParagraph>Pending tasks ({tasksRemaining})</SectionParagraph>;
};
