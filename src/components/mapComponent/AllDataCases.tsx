import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

type Props = {};
// https://disease.sh/v3/covid-19/all

// const AllDataCases = (props: Props) => {
//   const [data, setData] = React.useState({});
//   useEffect(() => {
//     fetchChartData();
//   }, []);

//   const fetchChartData = async () => {
//     try {
//       const res = await fetch("https://disease.sh/v3/covid-19/all");
//       const data = await res.json();
//       console.log(data);
//       const dataArr = [["active", data.active]];
//       setData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

const options = {
  title: "COVID Infection Data",
};

//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//   );
// };

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export function AllDataCases() {
  const [data, setData] = React.useState({});
  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const res = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await res.json();
      console.log(data);
      const dataArr = [
        ["a", "c"],
        ["active", data.active],
        ["cases", data.cases],
        ["deaths", data.deaths],
        ["recovered", data.recovered],
      ];
      setData(dataArr);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default AllDataCases;
