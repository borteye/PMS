import React, { useState } from "react";
import "../../static/css/Customer/Navbar.css";
import { Menu, X } from "feather-icons-react";
import logo from "../../static/assets/phIcon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLogoutState } from "../../features/userSlice";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="customerNavbar">
      <nav>
        <div className="logo">
          <Menu className="menuIcon" onClick={() => setOpenMenu(true)} />
          <img src={logo} alt="" />
          <div>PLUS PHARMACY</div>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="/customer/home">Home</a>
            </li>
            <li>
              <a href="/customer/my-purchases">My Purchases</a>
            </li>
            <li>
              <a href="/customer/create-review">Create Review</a>
            </li>
            <li>
              <a href="/customer/chat">Chat with Pharmacist</a>
            </li>
            <li>
              <a href="/customer/medicine-list">View Medicines</a>
            </li>
            <li>
              <a href="/customer/edit-profile">Settings</a>
            </li>
            <li
              role="button"
              onClick={() => {
                dispatch(setUserLogoutState());
                navigate("/customer/login");
              }}
            >
              Logout
            </li>
          </ul>
        </div>
        <div
          className={
            openMenu ? "mobileView-navLinks" : "mobileView-navLinks hidden"
          }
        >
          <ul>
            <li>
              <a href="/customer/home">Home</a>
            </li>
            <li>
              <a href="/customer/my-purchases">My Purchases</a>
            </li>
            <li>
              <a href="/customer/create-review">Create Review</a>
            </li>
            <li>
              <a href="/customer/chat">Chat with Pharmacist</a>
            </li>
            <li>
              <a href="/customer/medicine-list">View Medicines</a>
            </li>
            <li>
              <a href="/customer/edit-profile">Settings</a>
            </li>
            <li
              role="button"
              onClick={() => {
                dispatch(setUserLogoutState());
                navigate("/customer/login");
              }}
            >
              Logout
            </li>
          </ul>
          <X className="closeIcon" onClick={() => setOpenMenu(false)} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
