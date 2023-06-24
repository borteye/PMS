import React, { useState } from "react";
import "../../static/css/Admin/AdminSideBar.css";
import {
  setAdminActiveToggle,
  setAdminCloseToggle,
  SelectAdActiveToggle,
} from "../../features/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Menu,
  Grid,
  Users,
  UserPlus,
  Tag,
  Clipboard,
} from "feather-icons-react";
import { SideBarData } from "../../Data/AdminData";

const AdminSideBar = () => {
  const dispatch = useDispatch();

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  const toggleOpen = () => {
    dispatch(
      setAdminActiveToggle({
        adminMenuToggle: true,
      })
    );
  };
  const toggleClose = () => {
    dispatch(setAdminCloseToggle());
  };

  return (
    <div className={adminMenuToggle ? "adminSideBar open" : "adminSideBar "}>
      <div className="logo-details">
        <div className="logo-name">Pharmacy</div>
        {adminMenuToggle ? (
          <Menu className="menuBtn open" onClick={() => toggleClose()} />
        ) : (
          <Menu className="menuBtn" onClick={() => toggleOpen()} />
        )}
      </div>
      <ul className="nav-list">
        <li>
          <a href="/admin/dashboard">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="/admin/all-customers">
            <Users id="sideBar-Icon" />
            <span className="link-name">Customers</span>
          </a>
          <span className="tooltip">Customers</span>
        </li>
        <li>
          <a href="/admin/add-customer">
            <UserPlus id="sideBar-Icon" />
            <span className="link-name">Add Customer</span>
          </a>
          <span className="tooltip">Add Customer</span>
        </li>

        <li>
          <a href="/admin/sales">
            <Tag id="sideBar-Icon" />
            <span className="link-name">Sales</span>
          </a>
          <span className="tooltip">Sales</span>
        </li>
        <li>
          <a href="/admin/all-pharmacists">
            <Users id="sideBar-Icon" />
            <span className="link-name">Pharmacists</span>
          </a>
          <span className="tooltip">Pharmacists</span>
        </li>
        <li>
          <a href="/admin/add-pharmacist">
            <UserPlus id="sideBar-Icon" />
            <span className="link-name">Add Pharmacist</span>
          </a>
          <span className="tooltip">Add Pharmacist</span>
        </li>
        <li>
          <a href="/admin/invoice-list">
            <Clipboard id="sideBar-Icon" />
            <span className="link-name">Invoice List</span>
          </a>
          <span className="tooltip">Invoice List</span>
        </li>
        <li>
          <a href="/admin/medicine-list">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Medicine</span>
          </a>
          <span className="tooltip">Medicine</span>
        </li>
        <li>
          <a href="/admin/add-medicine">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Add Medicine</span>
          </a>
          <span className="tooltip">Add Medicine</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;
