import React, { useState, useEffect } from "react";
import "../../static/css/Admin/AdminTable1.css";
import { baseUrl } from "../../config";
import axios from "axios";

const AdminTable1 = () => {
  const [recentSales, setRecentSales] = useState([]);
  let arr = [];

  useEffect(() => {
    const fetchRecentSales = async () => {
      const { data } = await axios.get(`${baseUrl}/api/sales`);
      console.log(data);
      const lastFourSales = data.allSales.length - 4;
      for (let i = data.allSales.length - 1; i >= lastFourSales; i--) {
        let reSales = data.allSales[i];
        arr.push(reSales);
        setRecentSales(arr);
      }
    };

    fetchRecentSales();
  }, []);

  const colors = (status) => {
    if (status === "Paid") {
      return {
        color: "#3c683c",
        backgroundColor: "#b2f0b2",
      };
    } else if (status === "Uncompleted") {
      return {
        color: " #9c6118",
        backgroundColor: "#f2b366",
      };
    } else if (status === "Unpaid") {
      return {
        color: "#ff0000",
        backgroundColor: "#cf4343d5",
      };
    }
  };

  return (
    <div className="adminTable">
      <div className="tableContainer">
        <div className="heading">Product Sales</div>
        <div className="table">
          <div className="titles">
            <div className="columnHead">
              <small className="head">Sales id#</small>
            </div>
            <div className="columnHead">
              <small className="head">Customer</small>
            </div>
            <div className="columnHead">
              <small className="head">Sold By</small>
            </div>
            <div className="columnHead">
              <small className="head">Purchase Date</small>
            </div>
            <div className="columnHead">
              <small className="head">Total Quantity</small>
            </div>
            <div className="columnHead">
              <small className="head">Total Price</small>
            </div>
            <div className="columnHead">
              <small className="head">Status</small>
            </div>
          </div>
          <div className="datas">
            {recentSales.map((item, index) => {
              return (
                <div className="data" key={index}>
                  <div>{item.id}</div>
                  <div>{item.customerFirstName}</div>
                  <div>{item.pharmacistName}</div>
                  <div>{item.created_at}</div>
                  <div>{item.total_quantity}</div>
                  <div>${item.total_price}</div>
                  <div>
                    <span style={colors(item.status)} className="status">
                      {item.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable1;
