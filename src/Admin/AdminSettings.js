import React from "react";
import "../static/css/Admin/AdminSettings.css";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import profile from "../static/assets/profile.jpg";

const AdminSettings = () => {
  return (
    <div className="adminSettings">
      <AdminSideBar />
      <div className="adminSettingsMain">
        <AdminNavbar />
        <div className="settings">
          <div className="heading">Account Settings</div>
          <div className="cardContainer">
            <div className="card1">
              <div className="title">Profile Details</div>
              <div className="flex">
                <div className="sec_one">
                  <img src={profile} alt="" />
                  <div>
                    <button></button>
                  </div>
                </div>
                <div className="sec_two">
                  <button className="uploadBtn">Upload Profile Photo</button>
                  <button className="deleteBtn">Delete</button>
                </div>
              </div>
              <div className="details">
                <div className="name">
                  <div className="title">Username</div>
                  <div className="info">Administrator</div>
                </div>
                <div className="email">
                  <div className="title">Email</div>
                  <div className="info">admin@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="card2">g</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
