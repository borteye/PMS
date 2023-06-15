import React from "react";
import "../static/css/Pharmacist/PharmacistAddCustomer.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import {
  Calendar,
  Hash,
  Mail,
  Phone,
  Plus,
  User,
  X,
} from "feather-icons-react";

import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";

const PharmacistAddCustomer = () => {
  const pharmacistMenuToggle = useSelector(SelectAdActiveToggle);
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
              <form>
                <div>
                  <input type="text" placeholder="No*" />
                  <Hash className="addMedIcon" />
                </div>
                <div>
                  <input type="text" placeholder="Customer Name*" />
                  <User className="addMedIcon" />
                </div>
                <div>
                  <input type="text" placeholder="Date of Birth*" />
                  <Phone className="addMedIcon" />
                </div>
                <div>
                  <input type="text" placeholder="Mobile*" />
                  <Mail className="addMedIcon" />
                </div>
                <div>
                  <input type="text" placeholder="Email*" />
                  <Mail className="addMedIcon" />
                </div>
                <div>
                  <input type="text" placeholder="Joining Date*" />
                  <Calendar className="addMedIcon" />
                </div>
                <p>
                  <button className="saveBtn">
                    <Plus id="plusIcon" />
                  </button>
                  <button className="closeBtn">
                    <X id="closeIcon" />
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
