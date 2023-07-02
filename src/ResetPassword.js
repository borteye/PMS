import React, { useState } from "react";
import "./static/css/ResetPassword.css";
import logo from "./static/assets/phIcon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectUserId } from "./features/userSlice";
import { baseUrl } from "./config";
import axios from "axios";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const userId = useSelector(SelectUserId);

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    const info = {
      userpassword: newPassword,
      userpassword_confirmation: confirmPassowrd,
    };
    await axios
      .post(`${baseUrl}/api/resetpassword/${userId}`, info)
      .then((res) => {
        if (res.status === 200) {
          navigate("/reset-successful");
        }
      });
  };
  return (
    <div className="resetPassword">
      <div className="container">
        <div className="content">
          <div className="brand">
            <img src={logo} alt="" />
            <div>PLUS PHARMACY</div>
          </div>
          <div className="heading">Reset your password</div>
          <form onSubmit={handleSubmitPassword}>
            <div className="newPassowrd">
              <label>New password</label> <br />
              <input
                type="text"
                placeholder="Enter a new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="confirmPassowrd">
              <label>Confirm password</label> <br />
              <input
                type="text"
                placeholder="Confirm your new password"
                value={confirmPassowrd}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Reset my password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
