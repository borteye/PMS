import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistSideBar.css";
import { useSelector } from "react-redux";
import { SelectPhActiveToggle } from "../../features/toggleSlice";
import logo from "../../static/assets/phIcon.png";
import {
  Command,
  ChevronDown,
  ChevronUp,
  Users,
  PieChart,
  MessageSquare,
  Clipboard,
  Tag,
  Settings,
} from "feather-icons-react";

const PharmacistSideBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const pharmacistToggle = useSelector(SelectPhActiveToggle);
  return (
    <div
      className={
        pharmacistToggle ? "pharmacistSideBar" : "pharmacistSideBar close"
      }
    >
      <div className="logo">
        <img src={logo} alt="" />
        <div className="logo-name">PLUS Pharmacy</div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/pharmacist/dashboard">
            <PieChart className="sideBar-Icon" />
            <span className="link_name">Dashboard</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="">
                Dashboard
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="drop-links">
            <a href="">
              <Users className="sideBar-Icon" />
              <span className="link_name">Customers</span>
            </a>
            {showSubMenu ? (
              <ChevronUp
                className="drop-Icon"
                onClick={() => setShowSubMenu(false)}
              />
            ) : (
              <ChevronDown
                className="drop-Icon"
                onClick={() => setShowSubMenu(true)}
              />
            )}
          </div>
          <ul className={showSubMenu ? "sub-menu" : "sub-menu none"}>
            <li>
              <a className="link_name" href="">
                Customers
              </a>
            </li>
            <li>
              <a href="/pharmacist/all-customers">Customer List</a>
            </li>
            <li>
              <a href="/pharmacist/add-customer">Add Customer</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/pharmacist/medicine-list">
            <Command className="sideBar-Icon" />
            <span className="link_name">Medicine List</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="/pharmacist/medicine-list">
                Medicine List
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/pharmacist/chatPage">
            <MessageSquare className="sideBar-Icon" />
            <span className="link_name">ChatPage</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="/pharmacist/chatPage">
                ChatPage
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/pharmacist/invoice-list">
            <Clipboard className="sideBar-Icon" />
            <span className="link_name">Invoices</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="/pharmacist/invoice-list">
                Invoices
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/pharmacist/sales">
            <Tag className="sideBar-Icon" />
            <span className="link_name">Sales</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="/pharmacist/sales">
                Sales
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/pharmacist/settings">
            <Settings className="sideBar-Icon" />
            <span className="link_name">Settings</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="/pharmacist/settings">
                Settings
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PharmacistSideBar;
