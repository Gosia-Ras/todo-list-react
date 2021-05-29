import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideAllDone }) => (
    tasks.length > 0 && (
        <div className="section__buttonsContainer">
            {tasks.length > 0 && (
                <>
                    <button className={`button button--section $     {tasks.every(({ done }) => !done) ? "disabled" : ""}`}
                    >
                    {hideAllDone ? "Show" : "Hide"} finished tasks
                    </button>
                    <button 
                        className="button button--section"
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