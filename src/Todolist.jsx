import React from 'react';
import { connect } from 'react-redux';
function Todolist(props) {
    const [newtask,setnewtask] = React.useState('');
    return (
        <div className='mybox'>
            <h2>Todo List</h2>
            <input type="text" onChange={(e)=>{setnewtask(e.target.value)}}/>
            <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtask})}}>Add Task</button>
            {
                props.todo.todos.map((todo,i)=>{
                    return (<li>
                        {todo}
                        <button onClick={()=>{props.dispatch({type:'DELETETODO',payload:i})}}>Delete</button>
                    </li>)
                })
            }
        </div>
    );
}

export default connect(store=>store)(Todolist);