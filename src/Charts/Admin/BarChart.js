import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  const option = {
    responsive: true,

    scales: {
      xAxes: [
        {
          barPercentage: 0.2,
        },
      ],
    },
  };
  return <Bar data={chartData} options={option} />;
};

export default BarChart;
