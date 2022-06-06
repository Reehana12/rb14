import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import { combineReducers, createStore } from "redux";
var reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
var store = createStore(reducer);

export default store;
