import React, { useState } from "react";
import "../static/css/Login.css";
import logo from "../static/assets/phIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectUserToken,
  SelectUserEmail,
  SelectUserName,
  SelectUserRole,
  SelectUserId,
} from "../features/userSlice";
import { setActiveUser } from "../features/userSlice";
import { baseUrl } from "../config";
import axios from "axios";

const PharmacistLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(SelectUserToken);
  const userEmail = useSelector(SelectUserEmail);
  const name = useSelector(SelectUserName);
  const role = useSelector(SelectUserRole);
  const id = useSelector(SelectUserId);

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginInfo = {
      email,
      password,
    };
    const { data, status } = await axios.post(
      `${baseUrl}/api/login`,
      loginInfo
    );
    const token = data.token;
    const userInfo = data.user;
    if (status === 200) {
      dispatch(
        setActiveUser({
          token: token,
          name: userInfo.username,
          email: userInfo.email,
          id: userInfo.id,
          role: userInfo.role,
        })
      );
      navigate("/pharmacist/dashboard");
    } else {
      navigate("/pharmacist/login");
    }
  };

  return (
    <>
      <div className="login pharmacist">
        <div className="section_one">
          <div className="brand_container">
            <img src={logo} alt="" />
            <div>PLUS PHARMACY</div>
          </div>
          <div className="main_content">
            <div className="individual">Pharmacist</div>
            <h3 className="title">Log in</h3>
            <p className="preamble">
              Welcome back to PLUS PHARMACY, please put in your login
              credentials below to continue using this application
            </p>
            <form onSubmit={handleLogin}>
              <div className="input_fields">
                <div className="email">
                  <label>E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <label>Password</label>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="login_btn">
                <button type="submit">Log in</button>
              </div>
            </form>
            <hr />
            <p
              role="button"
              className="forget_password"
              onClick={() => navigate("/forgotten-password")}
            >
              Forgotten password?
            </p>
          </div>
        </div>
        <div className="section_two">
          <div className="bgColor"></div>
        </div>
      </div>
    </>
  );
};

export default PharmacistLogin;
