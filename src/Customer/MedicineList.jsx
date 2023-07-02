import React, { useState, useEffect } from "react";
import "../static/css/Customer/MedicineList.css";
import axios from "axios";
import { baseUrl } from "../config";
import { Search, Eye, X } from "feather-icons-react";
import Navbar from "../Components/Customer/Navbar";
import Footer from "../Components/Customer/Footer";

const MedicineList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMedicine = async () => {
      await axios.get(`${baseUrl}/api/medicines`).then((res) => {
        const medicine = res.data.allMedicines;
        setData(medicine);
      });
    };

    fetchMedicine();

    const interval = setInterval(fetchMedicine, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="customerMedicineList">
      <div className="container">
        <div className="content">
          <Navbar />
          <div className="main">
            <div className="heading">Medicines In the Pharmacy</div>
            <div className="cardContainer">
              <div className="cardNavbar">
                <div className="card_heading">Medicines</div>
                <div className="search">
                  <Search id="searchIcon" />
                  <input
                    type="text"
                    placeholder="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="card">
                <div className="titles">
                  <div>
                    <small>Medicine Name</small>
                  </div>
                  <div>
                    <small> Category</small>
                  </div>

                  <div>
                    <small> Batch Number</small>
                  </div>
                  <div>
                    <small> Age Range</small>
                  </div>
                  <div>
                    <small>Dosage Instruction</small>
                  </div>
                  <div>
                    <small> Price </small>
                  </div>
                  <div>
                    <small> Expiry Date</small>
                  </div>
                  <div>
                    <small> Stock</small>
                  </div>
                </div>
                <div className="datas">
                  {data &&
                    data
                      .filter((val) => {
                        if (search == "") {
                          return val;
                        } else if (
                          val.medicineName
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((item, index) => {
                        return (
                          <div className="data" key={index}>
                            <div>{item.medicineName}</div>
                            <div>{item.description}</div>
                            <div className="batch">#2578</div>
                            <div>
                              {item.AgeFrom} - {item.AgeTo}
                            </div>
                            <div>{item.dosageInstruction}</div>
                            <div>${item.medicinePrice}</div>
                            <div>{item.expiryDate}</div>
                            <div>{item.totalQuantity}</div>
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

export default MedicineList;
