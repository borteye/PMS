import React from "react";
import "../../static/css/Admin/AdminReview.css";
import profile from "../../static/assets/profile.jpg";

const AdminReview = () => {
  return (
    <div className="adminReview">
      <div className="heading">Customer Review</div>
      <div className="reviewContainer">
        <div className="review">
          <img src={profile} alt="" className="profile" />
          <div className="information">
            <div className="customerName">Andrew Thomas</div>
            <div className="reviewInformation">
              Great pharmacy system! Ordering prescription refills is easy and
              efficient, and the staff is very helpful. Highly recommend!
            </div>
          </div>
        </div>
        <div className="review">
          <img src={profile} alt="" className="profile" />
          <div className="information">
            <div className="customerName">Andrew Thomas</div>
            <div className="reviewInformation">
              Great pharmacy system! Ordering prescription refills is easy and
              efficient, and the staff is very helpful. Highly recommend!
            </div>
          </div>
        </div>
        <div className="review">
          <img src={profile} alt="" className="profile" />
          <div className="information">
            <div className="customerName">Andrew Thomas</div>
            <div className="reviewInformation">
              Great pharmacy system! Ordering prescription refills is easy and
              efficient, and the staff is very helpful. Highly recommend!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReview;
