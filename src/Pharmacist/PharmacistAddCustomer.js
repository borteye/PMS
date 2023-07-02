import React, { useState } from "react";
import "../static/css/Pharmacist/PharmacistAddCustomer.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import { Mail, Phone, User } from "feather-icons-react";
import { baseUrl } from "../config";
import axios from "axios";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";

const PharmacistAddCustomer = () => {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerGender, setCustomerGender] = useState("");
  const [customerBirthDate, setCustomerBirthDate] = useState("");
  const [customerContact, setCustomerContact] = useState("");

  const navigate = useNavigate();

  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    const customerDetails = {
      customerFirstName,
      customerLastName,
      customerEmail,
      customerGender,
      customerBirthDate,
      customerContact,
    };

    await axios.post(`${baseUrl}/api/registerCustomer`, customerDetails);
    setCustomerFirstName("");
    setCustomerLastName("");
    setCustomerEmail("");
    setCustomerGender("");
    setCustomerBirthDate("");
    setCustomerContact("");
    navigate("/pharmacist/all-customers");
  };

  return (
    <div
      className={
        pharmacistMenuToggle
          ? "pharmacistAddCustomer open"
          : "pharmacistAddCustomer"
      }
    >
      <PharmacistSideBar />
      <div className="addCustomerMain">
        <PharmacistNavbar />
        <div className="addCustomer">
          <div className="heading">Add Customer</div>
          <div className="cardContainer">
            <div className="card_heading">Add Customer</div>
            <div className="card">
              <form onSubmit={handleAddCustomer}>
                <div className="customerFirstName">
                  <input
                    type="text"
                    placeholder="Customer FirstName*"
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    required
                  />
                  <User className="addMedIcon" />
                </div>
                <div className="customerLastName">
                  <input
                    type="text"
                    placeholder="Customer LastName*"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    required
                  />
                  <User className="addMedIcon" />
                </div>
                <div className="customerDOB">
                  <input
                    type="date"
                    placeholder="customer DOB*"
                    value={customerBirthDate}
                    onChange={(e) => setCustomerBirthDate(e.target.value)}
                    required
                  />
                </div>
                <div className="customerGender">
                  <select
                    value={customerGender}
                    onChange={(e) => setCustomerGender(e.target.value)}
                  >
                    <option>Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="customerPhone">
                  <input
                    type="text"
                    placeholder="Phone Number*"
                    pattern="[0-9]*"
                    value={customerContact}
                    onChange={(e) => setCustomerContact(e.target.value)}
                    required
                  />
                  <Phone className="addMedIcon" />
                </div>
                <div className="customerEmail">
                  <input
                    type="email"
                    placeholder="Email*"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                  />
                  <Mail className="addMedIcon" />
                </div>

                <p>
                  <button className="saveBtn" type="submit">
                    Save
                  </button>
                  <button
                    className="closeBtn"
                    onClick={() => navigate("/pharmacist/dashboard")}
                  >
                    Cancel
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistAddCustomer;
