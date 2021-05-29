import React from 'react';
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="list">
    {tasks.map(task => ( //key={task.id} add to each element, see in lesson
        <li
        className={`list__item${task.done & hideDoneTasks ? " list__item--hidden" : ""}`}> 
             <button className="button button__list button__list--done">
                        {task.done ? "✔" : " "}
                    </button>
                     <span className={`list__span${task.done ? " list__span--done" : ""}`}
                     >
                        {task.content}
                    </span>
                    <button className="button button__list button__list--remove">
                        🗑
                    </button>
        </li> //className hidden doesn't get added
    ))}
    </ul>
);

export default Tasks;