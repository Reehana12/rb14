import React from 'react';

function Main(props) {
    var [x,setx]=React.useState()
    function sayHI(event){
        console.log("Hello Mr.Praveen",event)
    }
    function showName(event){
        setx(event.target.value)
    }
    return (
        <div className="m-4 p-3 border border-2">
            <h3>Main Component</h3>
            <button onClick={sayHI}>Lets understand Event Handling in React</button>
            <br />
            <input type="text" onChange={showName}/>
            <h1 id="d1">{x}</h1>
        </div>
    );
}

export default Main;