import React from "react";
import "../static/css/Pharmacist/PharmacistSettings.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import profile from "../static/assets/profile.jpg";

const PharmacistSettings = () => {
  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);
  const navigate = useNavigate();

  return (
    <div
      className={
        pharmacistMenuToggle ? "pharmacistSettings open" : "pharmacistSettings"
      }
    >
      <PharmacistSideBar />
      <div className="pharmacistSettingsMain">
        <PharmacistNavbar />
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
                <form>
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
    </div>
  );
};

export default PharmacistSettings;
