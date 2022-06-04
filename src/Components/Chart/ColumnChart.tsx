import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Most Starred Repos",
};
interface IStars {
  stars: Array<number | string>;
}

const ColumnChart: React.FC<IStars> = ({ stars }) => {
  return (
    <Chart
      chartType="ColumnChart"
      data={stars}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default ColumnChart;
