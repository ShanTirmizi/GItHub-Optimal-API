import React from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Repos by language",
};
interface ILangauge {
  chartPopularLanguage: Array<number | string>;
}
const PieChart: React.FC<ILangauge> = ({ chartPopularLanguage }) => {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={chartPopularLanguage}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default PieChart;
