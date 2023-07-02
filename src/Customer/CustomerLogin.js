import React, { useState } from "react";
import "../static/css/Customer/CustomerLogin.css";
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

const Login = () => {
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
      navigate("/customer/home");
    } else {
      navigate("/customer/login");
    }
  };
  return (
    <div className="customerLogin">
      <div className="container">
        <div className="content">
          <div className="main_container">
            <div className="main">
              <div className="brand">
                <img src={logo} alt="" />
                <div>PLUS PHARMACY</div>
              </div>
              <div className="preamble">
                Login <span>to continue...</span>
              </div>
              <form onSubmit={handleLogin}>
                <div className="number">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="password">
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Login</button>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
