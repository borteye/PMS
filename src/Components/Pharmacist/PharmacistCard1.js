import React from "react";
import icon from "../../static/assets/icon.svg";
import "../../static/css/Pharmacist/PharmacistCard1.css";

const PharmacistCard1 = () => {
  return (
    <div className="pharmacistCard1">
      <div className="cardContainer">
        <div className="columns">
          <div className="card">
            <div className="icon_percentageGrowth">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <div className="percentageGrowth">16%</div>
            </div>
            <div className="number">243</div>
            <div className="heading">Total employees</div>
          </div>
          <div className="card">
            <div className="icon_percentageGrowth">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <div className="percentageGrowth">16%</div>
            </div>
            <div className="number">243</div>
            <div className="heading">Total employees</div>
          </div>
        </div>
        <div className="columns">
          <div className="card">
            <div className="icon_percentageGrowth">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <div className="percentageGrowth">16%</div>
            </div>
            <div className="number">243</div>
            <div className="heading">Total employees</div>
          </div>
          <div className="card">
            <div className="icon_percentageGrowth">
              <div className="icon">
                <img src={icon} alt="" />
              </div>
              <div className="percentageGrowth">16%</div>
            </div>
            <div className="number">243</div>
            <div className="heading">Total employees</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistCard1;
