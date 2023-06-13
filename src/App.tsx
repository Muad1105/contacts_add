import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Application from "./Application";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </div>
  );
}

export default App;
