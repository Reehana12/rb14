import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import {Outlet,Link} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/todolist">TodoList</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/counter">Counter</Link>&nbsp;&nbsp;&nbsp;
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
