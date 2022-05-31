import React from 'react';
import Second from './Second';
function First(props) {
    return (
        <div className='mybox greenish' style={{width:'50%'}}>
            <h3>First Component</h3>
            <h1>{props.myname}</h1>
            <Second myname={props.myname}></Second>
        </div>
    );
}
export default First;
