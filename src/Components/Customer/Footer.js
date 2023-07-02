import React from "react";
import "../../static/css/Customer/Footer.css";
import logo from "../../static/assets/phIcon.png";
const Footer = () => {
  return (
    <div className="customerFooter">
      <footer>
        <div className="logo">
          <img src={logo} alt="" />
          <div>PLUS PHARMACY</div>
        </div>
        <div className="footer-links">
          <div>
            <div className="heading">Your Links</div>
            <ul>
              <li>
                <a href="/customer/home">Home</a>
              </li>
              <li>
                <a href="/customer/my-purchases">Purchases</a>
              </li>
              <li>
                <a href="/customer/create-review"> Create Review</a>
              </li>
              <li>
                <a href="/customer/chat">Chat with Pharmacist</a>
              </li>
              <li>
                <a href="/customer/edit-profile">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
