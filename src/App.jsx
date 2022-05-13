import logo from "./logo.svg";
import React from 'react'
import "./App.css";

function App() {
 
  var [b,setb] = React.useState(0);
  
  function incb(){
    setb(b+1)
  }
  function decb(){
    setb(b-1)
  }
  function reset(){
    setb(0)
  }
  return (
    <div className="App">
      <h1>b: {b}</h1>
      <button onClick={incb}>Increment b please</button>
      <button onClick={decb}>Decrement b please</button>
      <button onClick={reset}>Reset b</button>
    </div>
  );
}

export default App;
