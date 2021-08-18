import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            {tasks.length > 0 && (
                <>
                    <button 
                        onClick={toggleHideDone} 
                        className={`button button--section`}
                        disabled={!tasks.some(({ done }) => done)}
                    >
                    {hideDone ? "Show" : "Hide"} finished tasks
                    </button>
                    <button 
                        onClick={setAllDone}
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