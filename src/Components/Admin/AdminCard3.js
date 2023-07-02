import React, { useState, useEffect } from "react";
import "../../static/css/Admin/AdminCard3.css";
import { baseUrl } from "../../config";
import axios from "axios";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AdminCard3 = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchExpired = async () => {
      const { data } = await axios.get(`${baseUrl}/api/medicines`);
      setChartData({
        labels: data.monthlyExpiryAnalytics.map((data) => data.month),
        datasets: [
          {
            label: "Total Expired",
            data: data.monthlyExpiryAnalytics.map(
              (data) => data.total_medicines
            ),
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
            barThickness: 30,
          },
        ],
      });
    };

    fetchExpired();

    const interval = setInterval(fetchExpired, 1000 * 60 * 60 * 24);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  return (
    <div className="adminCard3">
      <div className="cardContainer">
        <div className="heading">Expiry Medicine Analytics</div>
        {chartData && chartData.datasets && (
          <PolarArea data={chartData} options={config} />
        )}
      </div>
    </div>
  );
};

export default AdminCard3;
