import React from 'react';

function Child(props) {
    return (
        <div className='mybox'>
            <h1>Child component</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    );
}

export default Child;