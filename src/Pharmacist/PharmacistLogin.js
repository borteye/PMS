import React from "react";
import "../static/css/Login.css";

const PharmacistLogin = () => {
  return (
    <>
      <div className="login">
        <div className="section_one">
          <div className="brand_container">THE PHARMACY</div>
          <div className="main_content">
            <div className="individual">Pharmacist</div>
            <h3 className="title">Log in</h3>
            <p className="preamble">
              Welcome back to THE PHARMACY, please put in your login credentials
              below to continue using this application
            </p>
            <form>
              <div className="input_fields">
                <div className="email">
                  <label>E-mail</label>
                  <input type="text" />
                </div>
                <div className="password">
                  <label>Password</label>
                  <input type="text" />
                </div>
              </div>
              <div className="login_btn">
                <button type="submit">Log in</button>
              </div>
            </form>
            <hr />
            <p role="button" className="forget_password">
              Forgotten password?
            </p>
          </div>
        </div>
        <div className="section_two"></div>
      </div>
    </>
  );
};

export default PharmacistLogin;
