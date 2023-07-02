import React, { useState, useEffect } from "react";
import "../../static/css/Pharmacist/PharmacistCard3.css";
import { baseUrl } from "../../config";
import axios from "axios";

const PharmacistCard3 = () => {
  const [expiredMedicines, setExpiredMedicines] = useState([]);

  useEffect(() => {
    const expiredMedicine = async () => {
      const { data } = await axios.get(`${baseUrl}/api/medicines`);
      console.log(data);
      setExpiredMedicines(data.expiredMedicine);
    };

    expiredMedicine();
  }, []);
  return (
    <div className="pharmacistCard3">
      <div className="cardContainer">
        <div className="flex">
          <div className="heading">Expired Medicine</div>
        </div>
        <div className="card">
          <div className="titles">
            <div>Medicine name</div>
            <div>Expiry Date</div>
            <div>Quantity</div>
          </div>
          {expiredMedicines?.map((item, index) => {
            return (
              <div className="data" key={index}>
                <div>{item.medicineName}</div>
                <div>{item.expiryDate}</div>
                <div>{item.totalQuantity}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PharmacistCard3;
