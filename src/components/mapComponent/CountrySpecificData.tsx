import { log } from "console";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const options = {
  showRowNumber: true,
};

const formatters = [
  {
    type: "DateFormat" as const,
    column: 1,
    options: {
      formatType: "long",
    },
  },
  {
    type: "DateFormat" as const,
    column: 2,
    options: {
      formatType: "medium",
    },
  },
  {
    type: "DateFormat" as const,
    column: 3,
    options: {
      formatType: "short",
    },
  },
];

export function CountrySpecificData() {
  const [data, setData] = useState([
    [
      "Country",
      "Continent",
      { type: "number", label: "Cases" },
      { type: "number", label: "Active" },
      { type: "number", label: "Recovered" },
      { type: "number", label: "Deaths" },
    ],
    ["ss", "ss", 3453, 353, 45, 44],
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await res.json();
      console.log(data);
      const displayDataArr = data.map((e: any, i: Number) => {
        return [
          e.country,
          e.continent,
          e.cases,
          e.active,
          e.recovered,
          e.deaths,
        ];
      });
      console.log(displayDataArr);
      let sortedChars: string[] = [];
      const newArr = displayDataArr.filter((e: any[], i: any) => {
        const firstChar = e[0][0];
        if (!sortedChars.includes(firstChar)) {
          sortedChars.push(firstChar);
          return true;
        }
        return false;
      });
      console.log(sortedChars, ...newArr);
      setData((prev) => [...prev, ...newArr]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
      formatters={formatters}
    />
  );
}

export default CountrySpecificData;
