import React from "react";
import "../../static/css/Admin/AdminSubDash.css";
import AdminNavbar from "./AdminNavbar";
import AdminCard3 from "./AdminCard3";
import AdminReview from "./AdminReview";

const AdminSubDash = () => {
  return (
    <div className="adminSubDash">
      <div className="scroll-Y">
        <AdminCard3 />
        <AdminReview />
      </div>
    </div>
  );
};

export default AdminSubDash;
