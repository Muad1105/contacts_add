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
  title: "COVID Recovered Cases",
  curveType: "function",
  legend: { position: "bottom" },
};

const RecoveredData = () => {
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
        const recovered: Record<string, number> = res.data.recovered;
        console.log(recovered);
        const displayData: [string, number][] = Object.entries(recovered);
        console.log(displayData);

        // for (const endpointData in recovered) {
        //   if (recovered.hasOwnProperty(endpointData)) {
        //     const value: number = recovered[endpointData];
        //     displayData.push([endpointData, value]);
        //   }
        // }
        setData((prev) => [["Date", "Cases"], ...displayData]);
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

export default RecoveredData;
