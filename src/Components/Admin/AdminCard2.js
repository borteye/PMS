import React, { useState } from "react";
import "../../static/css/Admin/AdminCard2.css";
import BarChart from "../../Charts/Admin/BarChart";
import { MonthlyProgress, ExpiringList } from "../../Data/AdminData";

const AdminCard2 = () => {
  const [monthlyData, setMonthlyData] = useState({
    labels: MonthlyProgress.map((data) => data.year),
    datasets: [
      {
        label: "monthly progress",
        data: MonthlyProgress.map((data) => data.profitMade),
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
        borderRadius: 5,
        barThickness: 30,
      },
      {
        label: "monthly losses",
        data: ExpiringList.map((data) => data.quantity),
        backgroundColor: ["#36A2EB", "#FF6384", "#4BC0C0"],
        borderRadius: 5,
        barThickness: 30,
      },
    ],
  });
  return (
    <div className="adminCard2">
      <div className="cardContainer">
        <div className="heading">Sales Overview</div>
        <div className="card">
          <BarChart chartData={monthlyData} />
        </div>
      </div>
    </div>
  );
};

export default AdminCard2;
