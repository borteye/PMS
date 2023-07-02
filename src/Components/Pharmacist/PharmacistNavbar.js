import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistNavbar.css";
import profile from "../../static/assets/profile.jpg";
import {
  setPharmacistActiveToggle,
  setPharmacistCloseToggle,
  SelectPhActiveToggle,
} from "../../features/toggleSlice";
import { setUserLogoutState } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectCartItems } from "../../features/addCartSlice";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Settings,
  LogOut,
  User,
  Menu,
  Trello,
  X,
} from "feather-icons-react";

const PharmacistNavbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pharmacistToggle = useSelector(SelectPhActiveToggle);
  const cartItems = useSelector(SelectCartItems);

  const totalQuantity = cartItems.reduce((accumulator, object) => {
    return accumulator + object.quantity;
  }, 0);

  const toggleOpen = () => {
    dispatch(
      setPharmacistActiveToggle({
        pharmacistToggle: true,
      })
    );
  };
  const toggleClose = () => {
    dispatch(setPharmacistCloseToggle());
  };

  return (
    <div className="pharmacistNavbar">
      <div className="content">
        <div className="sec_one">
          {pharmacistToggle ? (
            <Menu className="menuBtn close" onClick={() => toggleClose()} />
          ) : (
            <Menu className="menuBtn" onClick={() => toggleOpen()} />
          )}

          <div>Pharmacist Dashboard</div>
        </div>
        <div className="sec_two">
          <div className="navIcons">
            {showNotification ? (
              <Bell
                id="bellIcon close"
                onClick={() => setShowNotification(false)}
              />
            ) : (
              <Bell id="bellIcon" onClick={() => setShowNotification(true)} />
            )}

            <div
              className={
                showNotification ? "dropNoitification" : "hideDropNotification"
              }
            >
              <div className="nav">
                <div>Notifications</div>
                <span>Mark all as read</span>
              </div>
              <div className="cardContainer">
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
                <div className="card">
                  <div className="flex">
                    <User className="notificationTypeBtn" />
                    <div>New Customer Added...</div>
                  </div>
                  <X className="notificationCloseBtn" />
                </div>
              </div>
            </div>
          </div>

          <div className="shopping-bag">
            <ShoppingBag
              id="sBagIcon"
              onClick={() => navigate("/pharmacist/bag")}
            />
            <div className="items-InCart">{totalQuantity}</div>
          </div>

          <div className="pharmacist_profile">
            <div className="name">Gabriel Borteye</div>
            {showProfile ? (
              <ChevronDown
                id="arrowDownIcon"
                onClick={() => setShowProfile(false)}
              />
            ) : (
              <ChevronUp
                id="arrowDownIcon"
                onClick={() => setShowProfile(true)}
              />
            )}
          </div>
          <div
            className={showProfile ? "profileDropDown" : "profileDropDown hide"}
          >
            <ul className="first-ul">
              <li>
                <div className="profile">
                  <img src={profile} alt="" />
                  <div>
                    <div className="name">Gabriel Borteye</div>
                    <div className="email">gabrielborteye12199@gmail.com</div>
                  </div>
                </div>
              </li>

              <li>
                <a href="/pharmacist/settings">
                  <Settings /> Edit Profile
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/pharmacist/sales">
                  <Trello id="navIcon" />
                  <div>My Sales</div>
                </a>
              </li>
              <li
                onClick={() => {
                  dispatch(setUserLogoutState());
                }}
              >
                <a href="/pharmacist/login">
                  <LogOut id="navIcon" />
                  <div>Sign Out</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistNavbar;
