import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Todolist from "./Todolist";
import Countries from "./Countries";
import Counter from "./Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="todolist" element={<Todolist></Todolist>}></Route>
        <Route path="countries" element={<Countries></Countries>}></Route>
        <Route path="counter" element={<Counter></Counter>}></Route>
        <Route
          path="countryDetails/:alphacode"
          element={<CountryDetails></CountryDetails>}
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
