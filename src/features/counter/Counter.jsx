import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from './counterSlice';
function Counter(props) {
    const count=useSelector(state=>state.counter.count)
    const dispatch = useDispatch()
    console.log(count)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Incerement</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    );
}

export default Counter;