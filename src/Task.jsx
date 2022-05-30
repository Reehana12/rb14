import React from 'react';

function Task(props) {
    console.log("called every time.. ",props.t)
    React.useEffect(()=>{
        var k = props.t;
        return function(){
            console.log(`Unmounting component ${k}`)
        }
    },[])
    
    return (
        <div className="mybox">
            <b>{props.t}</b>
            <button onClick={()=>{props.deleteTask(props.index)}}>delete</button>
        </div>
    );
}

export default React.memo(Task);