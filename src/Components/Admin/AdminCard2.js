import React, { useState, useEffect } from "react";
import "../../static/css/Admin/AdminCard2.css";
import { Chart as chartjs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { baseUrl } from "../../config";
import axios from "axios";

const AdminCard2 = () => {
  const [customerMonthlyData, setCustomerMonthlyData] = useState({});

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data } = await axios.get(`${baseUrl}/api/customers`);
      setCustomerMonthlyData({
        labels: data.monthlyStatistics.map((data) => data.month),
        datasets: [
          {
            label: "Customers Gained",
            data: data.monthlyStatistics.map((data) => data.numberOfCustomers),
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
            borderRadius: 5,
            barThickness: 30,
          },
        ],
      });
    };

    fetchCustomers();

    const interval = setInterval(fetchCustomers, 2000 * 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  return (
    <div className="adminCard2">
      <div className="cardContainer">
        <div className="heading">Customer Analytics</div>
        <div className="card">
          {customerMonthlyData && customerMonthlyData.datasets && (
            <Bar data={customerMonthlyData} options={option} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCard2;
