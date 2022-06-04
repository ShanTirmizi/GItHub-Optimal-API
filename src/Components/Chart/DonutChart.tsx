import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Stars by language",
  pieHole: 0.4,
  is3D: false,
};
interface IStars {
  chartStarsArr: Array<number | string>;
}
const DonutChart: React.FC<IStars> = ({ chartStarsArr }) => {
  return (
    <Chart
      chartType="PieChart"
      data={chartStarsArr}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default DonutChart;
