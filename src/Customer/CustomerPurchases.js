import React, { useState, useEffect } from "react";
import "../static/css/Customer/CustomerPurchases.css";
import { useSelector } from "react-redux";
import { SelectUserId } from "../features/userSlice";
import { baseUrl } from "../config";
import axios from "axios";
import Navbar from "../Components/Customer/Navbar";
import Footer from "../Components/Customer/Footer";

const CustomerPurchases = () => {
  const [data, setData] = useState([]);

  const userId = useSelector(SelectUserId);

  useEffect(() => {
    const fetchSales = async () => {
      const { data } = await axios.get(
        `${baseUrl}/api/customer/${userId}/sale`
      );
      setData(data.customerSales);
    };

    fetchSales();
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

  const totalPrice = data.reduce((accumulator, object) => {
    return accumulator + object.total_price;
  }, 0);
  return (
    <div className="customerPruchases">
      <div className="container">
        <div className="content">
          <Navbar />
          <div className="main">
            <div className="heading">
              <div>My Purchases</div>
              <div>Total Amount : ${totalPrice}</div>
            </div>
            <div className="cardContainer">
              <div className="card">
                <div className="titles">
                  <div className="columnHead">
                    <small className="head">Sales id#</small>
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
                  {data?.map((item, index) => {
                    return (
                      <div className="data" key={index}>
                        <div>{item.id}</div>
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CustomerPurchases;
