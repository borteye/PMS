import React, { useState } from "react";
import "../../static/css/Admin/AdminNavbar.css";
import { useNavigate } from "react-router-dom";
import { Bell, Settings, X, User } from "feather-icons-react";
import profile from "../../static/assets/profile.jpg";

const AdminNavbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="adminNavbar">
      <div className="content">
        <div className="sec_one">
          <div>Admin Dashboard</div>
          <small>Welcome Admin</small>
        </div>
        <div className="sec_two">
          <div className="navIcons">
            <Settings
              id="settingsIcon"
              onClick={() => navigate("/admin/account-settings")}
            />

            {showNotification ? (
              <Bell
                id="bellIcon close"
                onClick={() => setShowNotification(false)}
              />
            ) : (
              <Bell id="bellIcon" onClick={() => setShowNotification(true)} />
            )}

            <div
              className={
                showNotification ? "dropNoitification" : "hideDropNotification"
              }
            >
              <div className="nav">
                <div>Notifications</div>
                <span>Mark all as read</span>
              </div>
              <div className="cardContainer">
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
              </div>
            </div>
          </div>

          <div className="admin_profile">
            <img src={profile} alt="" />
            <div className="name">Gabriel Borteye</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
