import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import countriesReducer from "./countries.reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
var reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  countries: countriesReducer,
});
var store = createStore(reducer, applyMiddleware(thunk));

export default store;
