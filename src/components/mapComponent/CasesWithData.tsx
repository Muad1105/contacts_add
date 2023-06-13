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
  title: "COVID Reported Cases",
  curveType: "function",
  legend: { position: "bottom" },
};

const CasesWithData = () => {
  const [data, setData] = useState<[string, number | string][]>([]);
  //   const data = [
  //     ["Year", "Sales"],
  //     ["2004", 1000],
  //     ["2005", 1170],
  //     ["2006", 660],
  //     ["2007", 1030],
  //   ];
  //   useEffect(() => {
  //     console.log(data1);
  //   }, [data1]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        console.log(res.data);
        const cases: Record<string, number> = res.data.cases;
        const displayData: [string, number][] = Object.entries(cases);
        // for (const endpointData in cases) {
        //   if (cases.hasOwnProperty(endpointData)) {
        //     const value: number = cases[endpointData];
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

export default CasesWithData;
