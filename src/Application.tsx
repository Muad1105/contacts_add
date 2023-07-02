import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./components/ListContact";
import MapAndChart from "./components/MapAndChart";
import MainLoad from "./components/MainLoad";
import CreateContact from "./components/miniComponents/CreateContact";

type Props = {};

const Application = (props: Props) => {
  return (
    <Routes>
      <Route path="/contacts_add" element={<MainLoad />} />
    </Routes>
  );
};

export default Application;
