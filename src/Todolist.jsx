import React from 'react';
import Task from './Task'
function Todolist(props) {
    
    const [tasks, settasks] = React.useState(['rohit','car wash','dance fee']);
    const [newtask,setnewtask] = React.useState('')
    function addTask(){
        settasks([...tasks,newtask])
    }
    const deleteTask = React.useCallback((i)=>{
        var temp = tasks;
        temp.splice(i,1);
        settasks([...temp])
    },[tasks]);
    
    
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setnewtask(e.target.value)}}/>
            <button onClick={addTask}>Add Task</button>
            {
                tasks.map(function(task,i ){
                    return <Task t={task} deleteTask={deleteTask} index={i}></Task>
                })
            }
        </div>
    );
}

export default Todolist;