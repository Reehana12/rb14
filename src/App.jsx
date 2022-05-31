import logo from "./logo.svg";
import "./App.css";
import First from "./First";
import React from "react";
import UserContext from "./UserContext";
import Abc from "./Abc";
function App() {
  const [myname,setmyname] = React.useState('praveen');
  return (
    <UserContext.Provider value={myname}>
      <div className="App mybox reddish">
        <h3>Welcome to ReactJS 18 Version</h3>
        <h1>{myname}</h1>
        <div style={{display:"flex"}}>
          <First myname={myname}></First>
          <Abc></Abc>
        </div>
        
      </div>
    </UserContext.Provider>
  );
}

export default App;
