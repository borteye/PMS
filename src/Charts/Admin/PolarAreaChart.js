import React from "react";
import { PolarArea } from "react-chartjs-2";

const PolarAreaChart = ({ chartData }) => {
  const config = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  };
  return <PolarArea data={chartData} options={config} />;
};

export default PolarAreaChart;
