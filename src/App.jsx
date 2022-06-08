import logo from "./logo.svg";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Todolist from "./Todolist";
import Countries from "./Countries";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Welcome to ReactJS 18 Version</h3>
        <h3>Redux with Actions</h3>
        <Countries></Countries>
        <Todolist></Todolist>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
