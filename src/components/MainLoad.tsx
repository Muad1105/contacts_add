import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Contact from "./ListContact";
import CreateContact from "./miniComponents/CreateContact";
import type { RootState } from "../redux/store";

import { useSelector } from "react-redux";
import MapAndChart from "./MapAndChart";

type Props = {};

const MainLoad = (props: Props) => {
  const [swapCreateContact, setSwapCreateContact] = useState(true);

  const nav = useSelector(
    (state: RootState) => state.navigate.displayCreateContact
  );
  const navToContactSection = useSelector(
    (state: RootState) => state.navigate.showContactSection
  );

  const navToMapsAndChartsSection = useSelector(
    (state: RootState) => state.navigate.showMapAndChartSection
  );
  useEffect(() => {
    console.log("click");

    setSwapCreateContact(nav);
  }, [nav]);

  return (
    <div className="app-section w-full h-full flex-col flex border-sky-700 bg-gray-300 border-2">
      <div className="w-full font-bold text-2xl text-center bg-blue-700 h-10">
        Contact Page
      </div>
      <div className="body-section flex flex-row w-full h-full">
        <div className="nav-section w-32  border-black border-2 bg-white">
          <Nav />
        </div>
        <div className=" w-full min-h-screen flex justify-center text-center pt-10">
          {navToContactSection && swapCreateContact ? (
            <CreateContact num={null} />
          ) : navToMapsAndChartsSection ? (
            <MapAndChart />
          ) : (
            <Contact />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLoad;
