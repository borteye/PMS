import React, { useState } from "react";
import "../../static/css/Admin/AdminCard1.css";
import { Command, Layers } from "feather-icons-react";
import icon from "../../static/assets/dashboard.svg";
import DoughnutChart from "../../Charts/Admin/DoughnutChart";
import { WeeklySales } from "../../Data/AdminData";

const AdminCard1 = () => {
  const [weeklySale, setWeeklySale] = useState({
    labels: WeeklySales.map((data) => data.week),
    datasets: [
      {
        data: WeeklySales.map((data) => data.salesMade),
        borderRadius: 5,
        barThickness: 30,
      },
    ],
  });
  return (
    <div className="adminCard1">
      <div className="cardContainer">
        <div className="card">
          <div className="icon">
            <Command id="commandIcon" />
          </div>
          <div className="details">
            <div className="title">Weekly sales</div>
            <div className="amount">$ 1,768.99</div>
          </div>
          <div className="chart">
            <DoughnutChart chartData={weeklySale} />
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <Layers id="commandIcon" />
          </div>
          <div className="details">
            <div className="title">Weekly sales</div>
            <div className="amount">$ 1,768.99</div>
          </div>
          <div className="chart">
            <DoughnutChart chartData={weeklySale} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard1;
