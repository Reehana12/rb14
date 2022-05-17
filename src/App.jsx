import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react'
function App() {
  const [students, setstudents] = useState(['praveen','rahul','kiran','lokesh']);
  const [newstudent, setnewstudent] = useState('');
  function updateNewStudent(e){
    setnewstudent(e.target.value)
  }
  function addStudent(){
    setstudents([...students,newstudent])
  }
  function deleteStudent(index){
    var temp = [...students];
    temp.splice(index,1);
    setstudents([...temp])
  }
  return (
    <div className="App">
      <h3>Welcome to ReactJS 18 Version</h3>
      <input type="text" onChange={updateNewStudent}/>
      <button onClick={addStudent}>Add Student</button>
      {
        students.map(function(s,i){
          return (<li>
                      {s}
                      <button onClick={()=>{deleteStudent(i)}}>Delete</button>
                  </li>)
        })
      }
    </div>
  );
}

export default App;
// data(state),functionality(logic),view(html,jsx template)