import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  const [students, setstudents] = React.useState([
    {
      name:'pratap',
      gender:'male',
      parcentage:70
    },
    {
      name:'rehaana',
      gender:'female',
      parcentage:90
    },
    {
      name:'baji',
      gender:'male',
      parcentage:80
    },
    {
      name:'kusuma',
      gender:'female',
      parcentage:50
    },
    {
      name:'gopi',
      gender:'male',
      parcentage:60
    },

  ]);
  return (
    <div className="App">
      <h3>Welcome to ReactJS 18 Version</h3>
      <table align="center" cellpadding="10" cellspacing="10">
        <thead>
          <th>Name</th>
          <th>Gender</th>
          <th>Percentage</th>
        </thead>
        <tbody>
        {
          students.map((student)=>{
            return (
              <tr style={student.parcentage>=60?{backgroundColor:'green'}:{backgroundColor:'orange'}}>
                <td>{student.name}</td>
                <td>
                  {student.gender}
                  {student.gender==='female' && (<img src="https://p.kindpng.com/picc/s/437-4371618_female-woman-profile-abstract-art-girl-people-profile.png" alt="" width="30px"/>)}
                  {student.gender==='male' && (<img src="https://www.clipartmax.com/png/middle/114-1144856_big-image-male-profile-silhouette.png" alt="" width="30px" />)}
                  
                </td>
                <td>{student.parcentage}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
