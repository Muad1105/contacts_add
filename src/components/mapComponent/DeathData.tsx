import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { log } from "console";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "COVID Death Cases",
  curveType: "function",
  legend: { position: "bottom" },
};

const DeathData = () => {
  const [data, setData] = useState<[string, number | string][]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        console.log(res.data);
        const deaths: Record<string, number> = res.data.deaths;
        const displayData: [string, number][] = Object.entries(deaths);
        // for (const endpointData in deaths) {
        //   if (deaths.hasOwnProperty(endpointData)) {
        //     const value: number = deaths[endpointData];
        //     displayData.push([endpointData, value]);
        //   }
        // }

        setData((prev) => [["Date", "Cases"], ...displayData]);
        console.log(displayData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default DeathData;
