import React from "react";
import "../static/css/Admin/AdminDashboard.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminMainDash from "../Components/Admin/AdminMainDash";
import AdminSubDash from "../Components/Admin/AdminSubDash";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminDashboard = () => {
  const adminMenuToggle = useSelector(SelectAdActiveToggle);
  return (
    <div className={adminMenuToggle ? "adminDashboard open" : "adminDashboard"}>
      <AdminSideBar />
      <div className="adminDashboardMain">
        <AdminNavbar />
        <div className="dashboardContainer">
          <AdminMainDash />
          <AdminSubDash />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
