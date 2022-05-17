import React from 'react';
function Counter(props){
    console.log(props)
    const [count,setCount] = React.useState(props.initvalue);
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>{props.name} Count:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter