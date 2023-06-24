import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistNavbar.css";
import profile from "../../static/assets/profile.jpg";
import {
  setPharmacistActiveToggle,
  setPharmacistCloseToggle,
  SelectPhActiveToggle,
} from "../../features/toggleSlice";
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
} from "feather-icons-react";

const PharmacistNavbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pharmacistToggle = useSelector(SelectPhActiveToggle);
  const cartItems = useSelector(SelectCartItems);

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
            <div className="notification">
              <Bell id="bellIcon" onClick={() => setShowNotification(true)} />
              <div
                className={
                  showNotification
                    ? "dropNoitification"
                    : "hideDropNotification"
                }
              >
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
              </div>
            </div>
            <div className="shopping-bag">
              <ShoppingBag
                id="sBagIcon"
                onClick={() => navigate("/pharmacist/bag")}
              />
              <div className="items-InCart">{cartItems.length}</div>
            </div>

            {/* <div className={showCart ? "cart" : "cart hidden"}>
              <div className="heading">Cart</div>
              <div className="cartContainer">
                <div className="card">
                  <div className="sec_one">
                    <div className="image_container">
                      <img src={amox} alt="" />
                    </div>
                    <div className="medicine-name">Paracetamol</div>
                  </div>
                  <div className="sec_two">
                    <div>
                      <button className="addBtn">
                        <Plus className="plusIcon" />
                      </button>
                    </div>

                    <div className="price">100</div>
                    <div>
                      <button className="minusBtn">
                        <Minus className="minusIcon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="sec_one">
                    <div className="image_container">
                      <img src={amox} alt="" />
                    </div>
                    <div className="medicine-name">Paracetamol</div>
                  </div>
                  <div className="sec_two">
                    <div>
                      <button className="addBtn">
                        <Plus className="plusIcon" />
                      </button>
                    </div>

                    <div className="price">100</div>
                    <div>
                      <button className="minusBtn">
                        <Minus className="minusIcon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="sec_one">
                    <div className="image_container">
                      <img src={amox} alt="" />
                    </div>
                    <div className="medicine-name">Paracetamol</div>
                  </div>
                  <div className="sec_two">
                    <div>
                      <button className="addBtn">
                        <Plus className="plusIcon" />
                      </button>
                    </div>

                    <div className="price">100</div>
                    <div>
                      <button className="minusBtn">
                        <Minus className="minusIcon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="sec_one">
                    <div className="image_container">
                      <img src={amox} alt="" />
                    </div>
                    <div className="medicine-name">Paracetamol</div>
                  </div>
                  <div className="sec_two">
                    <div>
                      <button className="addBtn">
                        <Plus className="plusIcon" />
                      </button>
                    </div>

                    <div className="price">100</div>
                    <div>
                      <button className="minusBtn">
                        <Minus className="minusIcon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="sec_one">
                    <div className="image_container">
                      <img src={amox} alt="" />
                    </div>
                    <div className="medicine-name">Paracetamol</div>
                  </div>
                  <div className="sec_two">
                    <div>
                      <button className="addBtn">
                        <Plus className="plusIcon" />
                      </button>
                    </div>

                    <div className="price">100</div>
                    <div>
                      <button className="minusBtn">
                        <Minus className="minusIcon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="sec_one">
                    <div className="image_container">
                      <img src={amox} alt="" />
                    </div>
                    <div className="medicine-name">Paracetamol</div>
                  </div>
                  <div className="sec_two">
                    <div>
                      <button className="addBtn">
                        <Plus className="plusIcon" />
                      </button>
                    </div>

                    <div className="price">100</div>
                    <div>
                      <button className="minusBtn">
                        <Minus className="minusIcon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="centerBtn">
                <button className="proceedBtn">Proceed To Bag</button>
              </div>
              <X className="closeBtn" onClick={() => setShowCart(false)} />
            </div> */}
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
                <a href="">
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
              <li>
                <a href="">
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
