import React, { useState, useEffect } from "react";
import "../../static/css/Admin/AdminCard1.css";
import { Command, Layers } from "feather-icons-react";
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
import { Doughnut } from "react-chartjs-2";
import { baseUrl } from "../../config";
import axios from "axios";

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

const AdminCard1 = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentWeek, setCurrentWeek] = useState("");
  const [chartDailyData, setChartDailyData] = useState({});
  const [chartWeeklyData, setChartWeeklyData] = useState({});

  useEffect(() => {
    const fetchSales = async () => {
      const { data } = await axios.get(`${baseUrl}/api/sales`);
      const currentDailySales = data.dailySales.length - 1;
      setCurrentDay(data.dailySales[currentDailySales]);
      const currentWeeklySales = data.weeklySales.length - 1;
      setCurrentWeek(data.weeklySales[currentWeeklySales]);

      setChartDailyData({
        labels: data.dailySales.map((item) => item.day_name),
        datasets: [
          {
            data: data.dailySales.map((item) => item.total_price),
            fill: true,
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
            borderRadius: 5,
            barThickness: 30,
          },
        ],
      });

      setChartWeeklyData({
        labels: data.weeklySales.map((item) => item.week),
        datasets: [
          {
            data: data.weeklySales.map((item) => item.total_price),
            fill: true,
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
            borderRadius: 5,
            barThickness: 30,
          },
        ],
      });
    };

    fetchSales();

    const interval = setInterval(fetchSales, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
    <div className="adminCard1">
      <div className="cardContainer">
        <div className="card">
          <div className="icon">
            <Command id="commandIcon" />
          </div>
          <div className="details">
            <div className="title">Daily sales</div>
            <div className="amount">
              ₵ {currentDay && currentDay.total_price}
            </div>
          </div>
          <div className="chart">
            {chartDailyData && chartDailyData.datasets && (
              <Doughnut
                data={chartDailyData}
                options={options}
                width="70%"
                height="70%"
              />
            )}
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <Layers id="commandIcon" />
          </div>
          <div className="details">
            <div className="title">Weekly sales</div>
            <div className="amount">
              ₵ {currentWeek && currentWeek.total_price}
            </div>
          </div>
          <div className="chart">
            {chartWeeklyData && chartWeeklyData.datasets && (
              <Doughnut
                data={chartWeeklyData}
                options={options}
                width="70%"
                height="70%"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard1;
