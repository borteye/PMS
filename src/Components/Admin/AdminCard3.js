import React, { useState } from "react";
import "../../static/css/Admin/AdminCard3.css";
import { MonthlyProgress } from "../../Data/AdminData";
import PolarAreaChart from "../../Charts/Admin/PolarAreaChart";

const AdminCard3 = () => {
  const [monthlyData, setMonthlyData] = useState({
    labels: MonthlyProgress.map((data) => data.year),
    datasets: [
      {
        label: "monthly progress",
        data: MonthlyProgress.map((data) => data.profitMade),
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
        barThickness: 30,
      },
    ],
  });
  return (
    <div className="adminCard3">
      <div className="cardContainer">
        <div className="heading">Top Selling Category</div>
        <PolarAreaChart chartData={monthlyData} />
      </div>
    </div>
  );
};

export default AdminCard3;
