import React from "react";
import "../../static/css/Pharmacist/PharmacistMainDash.css";
import PharmacistCard1 from "./PharmacistCard1";
import PharmacistCard2 from "./PharmacistCard2";
import PharmacistCard3 from "./PharmacistCard3";
import PharmacistCard4 from "./PharmacistCard4";
import PharmacistTable1 from "./PharmacistTable1";

const PharmacistMainDash = () => {
  return (
    <div className="pharmacistMainDash">
      <div className="section_two">
        <PharmacistCard1 />
        <PharmacistCard2 />
      </div>
      <div className="section_three">
        <PharmacistCard3 />
        <PharmacistCard4 />
      </div>
      <div className="section_four">
        <PharmacistTable1 />
      </div>
    </div>
  );
};

export default PharmacistMainDash;
