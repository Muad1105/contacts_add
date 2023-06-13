import React from "react";
import AllDataCases from "./mapComponent/AllDataCases";
import CountrySpecificData from "./mapComponent/CountrySpecificData";
import CasesWithData from "./mapComponent/CasesWithData";
import DeathData from "./mapComponent/DeathData";
import RecoveredData from "./mapComponent/RecoveredData";

type Props = {};

const MapAndChart = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <AllDataCases />
      <CountrySpecificData />
      <CasesWithData />
      <DeathData />
      <RecoveredData />
    </div>
  );
};

export default MapAndChart;
