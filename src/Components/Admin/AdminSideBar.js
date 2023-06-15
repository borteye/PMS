import React, { useState } from "react";
import "../../static/css/Admin/AdminSideBar.css";
import {
  setAdminActiveToggle,
  setAdminCloseToggle,
  SelectAdActiveToggle,
} from "../../features/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Grid } from "feather-icons-react";
import { SideBarData } from "../../Data/AdminData";

const AdminSideBar = () => {
  const [selected, setSelected] = useState(0);

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
          <a href="#">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <Grid id="sideBar-Icon" />
            <span className="link-name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;
