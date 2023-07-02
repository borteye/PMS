import React, { useState } from "react";
import "./static/css/VerifyCode.css";
import logo from "./static/assets/phIcon.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectUserId, SelectUserRole } from "./features/userSlice";
import { baseUrl } from "./config";
import axios from "axios";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const userId = useSelector(SelectUserId);
  const role = useSelector(SelectUserRole);

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    const info = {
      id: userId,
      code: code,
    };

    await axios.post(`${baseUrl}/api/verifycode`, info).then((res) => {
      if (res.status === 200 && role) {
        navigate("/reset-password");
      }
    });
  };

  return (
    <div className="verifyCode">
      <div className="container">
        <div className="content">
          <div className="heading">
            <img src={logo} alt="" />
            <div>PLUS PHARMACY</div>
          </div>
          <div className="main">
            <div className="preamble">
              A verification code has been sent to your email, check your mail
              and enter the code here to verify and proceed to resetting your
              passowrd.
            </div>
            <form onSubmit={handleCodeSubmit}>
              <div>
                <label>Code</label> <br />
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit">Verify Code</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
