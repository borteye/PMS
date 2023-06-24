import React from "react";
import "../static/css/Pharmacist/PharmacistDashboard.css";
import { useSelector } from "react-redux";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistMainDash from "../Components/Pharmacist/PharmacistMainDash";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";

const PharmacistDashboard = () => {
  const pharmacistToggle = useSelector(SelectPhActiveToggle);
  return (
    <div
      className={
        pharmacistToggle ? "pharmacistDashboard open" : "pharmacistDashboard"
      }
    >
      <PharmacistSideBar />
      <div className="pharmacistDashboardMain">
        <PharmacistNavbar />
        <div className="dashboardContainer">
          <PharmacistMainDash />
        </div>
      </div>
    </div>
  );
};

export default PharmacistDashboard;
