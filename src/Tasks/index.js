import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item${
          task.done & hideDone ? " list__item--hidden" : ""
        }`}
      >
        <button 
          className="button button__list button__list--done"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : " "}
        </button>
        <span className={`list__span${task.done ? " list__span--done" : ""}`}>
          {task.content}
        </span>
        <button 
          className="button button__list button__list--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;