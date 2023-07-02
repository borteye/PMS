import React from "react";
import "./static/css/ResetSuccessful.css";
import { useSelector } from "react-redux";
import { SelectUserRole } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import logo from "./static/assets/phIcon.png";

const ResetSuccessful = () => {
  const navigate = useNavigate();
  const role = useSelector(SelectUserRole);

  const controllNavigation = () => {
    if (role && role === "admin") {
      navigate("/admin/account-settings");
    } else if (role && role === "pharmacist") {
      navigate("/pharmacist/settings");
    } else if (role && role === "customer") {
      navigate("/customer/edit-profile");
    }
  };
  return (
    <div className="resetSuccessful">
      <div className="container">
        <div className="content">
          <div className="brand">
            <img src={logo} alt="" />
            <div>PLUS PHARMACY</div>
          </div>
          <div className="heading">Successful password reset!</div>
          <div className="preamble_button">
            <div className="preamble">
              You can now use your new password to log in to your account 🙌
            </div>
            <button onClick={() => controllNavigation()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessful;
