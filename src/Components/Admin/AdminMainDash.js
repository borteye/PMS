import React from "react";
import "../../static/css/Admin/AdminMainDash.css";
import menu from "../../static/assets/menu.svg";
import AdminCard1 from "./AdminCard1";
import AdminCard2 from "./AdminCard2";
import AdminTable1 from "./AdminTable1";

const AdminMainDash = () => {
  return (
    <div className="adminMainDash">
      <div className="heading">Sale Analytics</div>

      <AdminCard1 />
      <AdminCard2 />
      <AdminTable1 />
    </div>
  );
};

export default AdminMainDash;
