import React from "react";
import "../static/css/Pharmacist/PharmacistDashboard.css";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistMainDash from "../Components/Pharmacist/PharmacistMainDash";

const PharmacistDashboard = () => {
  return (
    <div className="pharmacistDashboard">
      <PharmacistSideBar />
      <PharmacistMainDash />
    </div>
  );
};

export default PharmacistDashboard;
