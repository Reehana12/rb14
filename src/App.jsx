import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter/Counter";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Welcome to ReactJS 18 Version</h3>
        <Counter></Counter>
      </div>
    </Provider>
    
  );
}

export default App;
