import React, { useState } from "react";
import "./static/css/ChangePassword.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { SelectUserId, SelectUserRole } from "./features/userSlice";
import axios from "axios";
import { baseUrl } from "./config";
import logo from "./static/assets/phIcon.png";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassowrd, setNewPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const userId = useSelector(SelectUserId);
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

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const info = {
      oldPassword: currentPassword,
      newPassword: newPassowrd,
      newPassword_confirmation: confirmPassowrd,
    };
    await axios
      .post(`${baseUrl}/api/updatepassword/${userId}`, info)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success(res.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          controllNavigation();
        }
      });
  };
  return (
    <div className="changePassword">
      <div className="container">
        <div className="content">
          <div className="brand">
            <img src={logo} alt="" />
            <div>PLUS PHARMACY</div>
          </div>
          <div className="heading">Change your password</div>
          <form onSubmit={handleChangePassword}>
            <div className="currentPassowrd">
              <label>Current password</label> <br />
              <input
                type="text"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className="newPassowrd">
              <label>New password</label> <br />
              <input
                type="text"
                placeholder="Enter a new password"
                value={newPassowrd}
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
            <button type="submit">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
