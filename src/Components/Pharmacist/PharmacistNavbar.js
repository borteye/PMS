import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistNavbar.css";
import profile from "../../static/assets/profile.jpg";
import notification from "../../static/assets/notification.svg";
import { Bell, ChevronDown, ShoppingBag, Settings } from "feather-icons-react";

const PharmacistNavbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="pharmacistNavbar">
      <div className="content">
        <div className="sec_one">
          <div>Pharmacist Dashboard</div>
          <small>Welcome Pharmacist</small>
        </div>
        <div className="sec_two">
          <div className="navIcons">
            <Settings id="settingsIcon" />
            <div className="notification">
              <Bell id="bellIcon" onClick={() => setShowNotification(true)} />
              <div
                className={
                  showNotification
                    ? "dropNoitification"
                    : "hideDropNotification"
                }
              >
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
              </div>
            </div>
            <ShoppingBag id="sBagIcon" onClick={() => setShowCart(true)} />
            <div className={showCart ? "cartContainer" : "hideCartContainer"}>
              <p>help</p>
              <p>help</p>
              <p>help</p>
              <p>help</p>
              <p>help</p>
              <p>help</p>
              <p>help</p>
            </div>
          </div>

          <div className="pharmacist_profile">
            <img src={profile} alt="" />
            <div className="name">Gabriel Borteye</div>
            <ChevronDown
              id="arrowDownIcon"
              onClick={() => setShowProfile(true)}
            />
            <div
              className={
                showProfile ? "profileDropDown" : "hiddenProfileDropDown"
              }
            >
              <p> helo</p>
              <p> helo</p>
              <p> helo</p>
              <p> helo</p>
              <p> helo</p>
              <p> helo</p>
              <p> helo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistNavbar;
