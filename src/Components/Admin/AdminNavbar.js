import React, { useState } from "react";
import "../../static/css/Admin/AdminNavbar.css";
import { Bell, ChevronDown, ShoppingBag, Settings } from "feather-icons-react";
import profile from "../../static/assets/profile.jpg";

const AdminNavbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="adminNavbar">
      <div className="content">
        <div className="sec_one">
          <div>Admin Dashboard</div>
          <small>Welcome Admin</small>
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
          </div>

          <div className="admin_profile">
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

export default AdminNavbar;
