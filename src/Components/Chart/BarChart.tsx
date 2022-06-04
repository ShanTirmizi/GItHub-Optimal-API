import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Most Forked Repos",
};

interface IForks {
  forks: Array<number | string>;
}

const BarChart: React.FC<IForks> = ({ forks }) => {
  return (
    <Chart
      chartType="BarChart"
      data={forks}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default BarChart;
