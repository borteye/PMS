import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as chartjs } from "chart.js/auto";

const DoughnutChart = ({ chartData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        paddingRight: "30px",
      },
    },
  };
  return (
    <Doughnut data={chartData} options={options} width="70%" height="70%" />
  );
};

export default DoughnutChart;
