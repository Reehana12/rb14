import logo from "./logo.svg";
import "./App.css";
import React from 'react';
function App() {
  const [mynumber, setmynumber] = React.useState(9);
  return (
    <div className="App">
      <h3>Welcome to ReactJS 18 Version</h3>
      <h1>Given number is : {mynumber}</h1>
      <input type="text" onChange={(e)=>{setmynumber(e.target.value)}}/>
      {mynumber%2===0?(
        <h3>Its and even number</h3>
      ):(
        <h3>the given number is odd</h3>
      )}

      {
        mynumber%2===0 && (<h2>its event number</h2>)
      }
      {
        mynumber%2===1 && (<h2>its odd number</h2>)
      }
    </div>
  );
}

export default App;
