import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistCard3.css";
import { ExpiringList } from "../../Data/PharmacistData";
import DoughnutChart from "../../Charts/Pharmacist/DoughnutChart";

const PharmacistCard3 = () => {
  const [expiryData, setExpiryData] = useState({
    labels: ExpiringList.map((data) => data.year),
    datasets: [
      {
        label: "expiry",
        data: ExpiringList.map((data) => data.quantity),
        borderRadius: 5,
      },
    ],
  });
  return (
    <div className="pharmacistCard3">
      <div className="cardContainer">
        <div className="flex">
          <div className="heading">Expiring List</div>
          <div className="seeAll">See All</div>
        </div>
        <div className="card">
          <div className="titles">
            <div>Medicine name</div>
            <div>Expiry Date</div>
            <div>Quantity</div>
            <div>Chart</div>
          </div>
          <div className="data">
            <div>Doxycycline</div>
            <div>24 Dec 2021</div>
            <div>40</div>
            <div className="chart">
              <DoughnutChart chartData={expiryData} />
            </div>
          </div>
          <div className="data">
            <div>Doxycycline</div>
            <div>24 Dec 2021</div>
            <div>40</div>
            <div className="chart">
              <DoughnutChart chartData={expiryData} />
            </div>
          </div>
          <div className="data">
            <div>Doxycycline</div>
            <div>24 Dec 2021</div>
            <div>40</div>
            <div className="chart">
              <DoughnutChart chartData={expiryData} />
            </div>
          </div>
          <div className="data">
            <div>Doxycycline</div>
            <div>24 Dec 2021</div>
            <div>40</div>
            <div className="chart">
              <DoughnutChart chartData={expiryData} />
            </div>
          </div>
          <div className="data">
            <div>Doxycycline</div>
            <div>24 Dec 2021</div>
            <div>40</div>
            <div className="chart">
              <DoughnutChart chartData={expiryData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistCard3;
