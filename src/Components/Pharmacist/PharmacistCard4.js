import React, { useState, useEffect } from "react";
import "../../static/css/Pharmacist/PharmacistCard4.css";
import { baseUrl } from "../../config";
import axios from "axios";

const PharmacistCard4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${baseUrl}/api/medicines`);
      setData(data.gettingOutOfStockMedicines);
    };

    fetchData();
    const interval = setInterval(fetchData, 1000 * 60 * 60 * 24);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pharmacistCard4">
      <div className="cardContainer">
        <div className="heading">Medicine Run Out</div>
        <div className="card">
          {data?.map((item, index) => {
            return (
              <div className="medicine" key={index}>
                <div className="name">{item.medicineName}</div>
                <div className="numberLeft">{item.totalQuantity} left</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PharmacistCard4;
