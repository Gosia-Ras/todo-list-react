/* import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return;
};

needs to be redone in the future
 */ 