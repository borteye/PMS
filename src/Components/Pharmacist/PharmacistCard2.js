import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistCard2.css";
import { DailySales } from "../../Data/PharmacistData";
import BarChart from "../../Charts/Pharmacist/BarChart";

const PharmacistCard2 = () => {
  const [dailySales, setDailSales] = useState({
    labels: DailySales.map((data) => data.day),
    datasets: [
      {
        data: DailySales.map((data) => data.salesMade),
        borderRadius: 2,
        barThickness: 10,
        backgroundColor: [
          "red",
          "blue",
          "orange",
          "green",
          "yellowgreen",
          "brown",
        ],
      },
    ],
  });

  return (
    <div className="pharmacistCard2">
      <div className="cardContainer">
        <div className="heading">Project Tracked</div>
        <div className="card">
          <BarChart chartData={dailySales} />
        </div>
      </div>
    </div>
  );
};

export default PharmacistCard2;
