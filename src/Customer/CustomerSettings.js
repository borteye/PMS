import React from "react";
import "../static/css/Customer/CustomerSettings.css";
import Navbar from "../Components/Customer/Navbar";
import Footer from "../Components/Customer/Footer";
import profile from "../static/assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const CustomerSettings = () => {
  const navigate = useNavigate();
  return (
    <div className="customerSettings">
      <div className="container">
        <div className="content">
          <Navbar />
          <div className="main">
            <div className="settings">
              <div className="heading">Edit Profile</div>
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
                      <button className="uploadBtn">
                        Upload Profile Photo
                      </button>
                      <button className="deleteBtn">Delete</button>
                    </div>
                  </div>
                  <div className="details">
                    <form action="">
                      <div className="name">
                        <div className="title">Username</div>
                        <input type="text" />
                      </div>
                      <div className="email">
                        <div className="title">Email</div>
                        <input type="text" />
                      </div>
                      <button>Save</button>
                    </form>
                  </div>
                </div>
                <div className="card2">
                  <div className="title">Change password</div>
                  <div className="preamble">
                    You can change the password to your account
                  </div>
                  <button
                    className="changePBtn"
                    onClick={() => navigate("/change-password")}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CustomerSettings;
