import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import Counter from './Counter'
function App() {
  
  return (
    <div className="App">
      <h3>Welcome to ReactJS 18 Version</h3>
      <Counter initvalue={5} name={"rakesh"}></Counter>
      <Counter initvalue={0} name={'praveen'}></Counter>
      <Counter initvalue={9} name={'kumar'}></Counter>
    </div>
  );
} 

export default App;
