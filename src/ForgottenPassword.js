import React, { useState } from "react";
import "./static/css/ForgottenPassword.css";
import logo from "./static/assets/phIcon.png";
import { useDispatch } from "react-redux";
import { setActiveUser } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./config";
import axios from "axios";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      user_email: email,
    };
    await axios.post(`${baseUrl}/api/sendcode`, info).then((res) => {
      dispatch(
        setActiveUser({
          id: res.data.user_id,
          role: res.data.user_role,
        })
      );
      setEmail("");
      navigate("/verify-code");
    });
  };

  return (
    <div className="forgottenPassword">
      <div className="container">
        <div className="content">
          <div className="heading">
            <img src={logo} alt="" />
            <div>PLUS PHARMACY</div>
          </div>
          <div className="main">
            <div className="preamble">
              Enter your email associated with your account and we'll send you a
              code for verification to reset your password.
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email</label> <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;
