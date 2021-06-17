import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <div className="section__buttonsContainer">
            {tasks.length > 0 && (
                <>
                    <button className={`button button--section $     {tasks.every(({ done }) => !done) ? "disabled" : ""}`}
                    >
                    {hideDone ? "Show" : "Hide"} finished tasks
                    </button>
                    <button 
                        className="button button--section"
                        autoFocus
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Mark all done
                    </button>
                </>
            )}
        </div >
    )
);

export default Buttons