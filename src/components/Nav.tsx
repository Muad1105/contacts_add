import React from "react";
import { sidebar } from "../data/sidebar";
import { Link } from "react-router-dom";
import {
  displayCreateContactCaller,
  displayContactSection,
  displayMapAndChartsSection,
} from "../redux/nav/action";

import { useDispatch } from "react-redux";

type Props = {};

const Nav = (props: Props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(displayCreateContactCaller(false));
    dispatch(displayContactSection(true));
    dispatch(displayMapAndChartsSection(false));
  };

  const handleMapASndChartsDisplay = () => {
    dispatch(displayContactSection(false));
    // dispatch(displayCreateContactCaller(false));
    dispatch(displayMapAndChartsSection(true));
  };

  return (
    <div className="nav-section h-full flex flex-col text-center">
      <Link to="/" onClick={handleClick}>
        <div className="h-full text-lg font-bold text-blue-800 underline cursor-pointer p-7 border-b-2 border-black border-b-solid">
          Contact{" "}
        </div>
      </Link>
      <Link to="/" onClick={handleMapASndChartsDisplay}>
        <div className="h-full text-lg font-bold text-blue-800 underline cursor-pointer p-7 border-b-2 border-black border-b-solid">
          Charts and Maps
        </div>
      </Link>
      {/* charts and maps */}

      <h3>Sidebar</h3>
    </div>
  );
};

export default Nav;
