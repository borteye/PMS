import React from "react";
import icon from "../../static/assets/icon.svg";
import "../../static/css/Pharmacist/PharmacistCard1.css";
import { Users } from "feather-icons-react";

const PharmacistCard1 = () => {
  return (
    <div className="pharmacistCard1">
      <div className="cardContainer">
        <div className="card  customers">
          <div className="icon_details">
            <div className="icon_container">
              <div className="icon">
                <Users id="card1-icon" />
              </div>
            </div>
            <div className="details">
              <div className="heading">Total Customers</div>
              <div className="number">243</div>
            </div>
          </div>
        </div>

        <div className="card sales">
          <div className="icon_details">
            <div className="icon_container">
              <div className="icon">
                <Users id="card1-icon" />
              </div>
            </div>
            <div className="details">
              <div className="heading">Total Sales</div>
              <div className="number">243</div>
            </div>
          </div>
        </div>
        <div className="card profit">
          <div className="icon_details">
            <div className="icon_container">
              <div className="icon">
                <Users id="card1-icon" />
              </div>
            </div>
            <div className="details">
              <div className="heading">Total Profit</div>
              <div className="number">243</div>
            </div>
          </div>
        </div>
        <div className="card stock">
          <div className="icon_details">
            <div className="icon_container">
              <div className="icon">
                <Users id="card1-icon" />
              </div>
            </div>
            <div className="details">
              <div className="heading">Out of Stock</div>
              <div className="number">243</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistCard1;
