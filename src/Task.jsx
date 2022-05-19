import React from 'react';

function Task(props) {
    return (
        <div className="mybox">
            <h4>{props.t}</h4>
            <button onClick={()=>{props.deleteTask(props.index)}}>delete</button>
        </div>
    );
}

export default Task;