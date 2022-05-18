import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Child from './Child';
import { useState } from "react";
function App() {
  const [count, setcount] = React.useState(10);
  function inc(){
    setcount(count+1)
  }
  function dec(){
    setcount(count-1)
  }
  return (
    <div className="mybox">
      <h1>Count:{count}</h1>
      <Child increment={inc} decrement={dec}></Child>
    </div>
  );
}

export default App;
