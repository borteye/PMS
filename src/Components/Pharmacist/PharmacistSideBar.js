import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistSideBar.css";
import { SideBarData } from "../../Data/PharmacistData";

const PharmacistSideBar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="pharmacistSideBar">
      <div className="logo">
        <img src="" alt="" />
        <div>The Pharmacy</div>
      </div>
      <div className="menu">
        {SideBarData?.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <img src={item.icon} alt="" />
              <div className="heading">{item.heading}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PharmacistSideBar;
