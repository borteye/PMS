import React from "react";
import "../../static/css/Admin/AdminSubDash.css";
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
