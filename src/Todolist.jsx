import React from 'react';
import { connect } from 'react-redux';
import { addTodo,deleteTodo } from './store/actions';
function Todolist(props) {
    console.log("props in todolist",props)
    const [newtask,setnewtask] = React.useState('');
    return (
        <div className='mybox'>
            <h2>Todo List</h2>
            <input type="text" onChange={(e)=>{setnewtask(e.target.value)}}/>
            <button onClick={()=>{props.addTask(newtask)}}>Add Task</button>
            {
                props.todos.map((todo,i)=>{
                    return (<li>
                        {todo}
                        <button onClick={()=>{props.deleteTask(i)}}>Delete</button>
                    </li>)
                })
            }
        </div>
    );
}
function mapStateToProps(state){
    return state.todo
}
function mapDispatchToProps(dispatch){
    return {
        addTask:function(task){dispatch(addTodo(task))},
        deleteTask:function(index){dispatch(deleteTodo(index))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist);