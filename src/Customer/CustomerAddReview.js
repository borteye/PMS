import React from "react";
import "../static/css/Customer/CustomerAddReview.css";
import Navbar from "../Components/Customer/Navbar";
import Footer from "../Components/Customer/Footer";

const CustomerAddReview = () => {
  return (
    <div className="customerAddReview">
      <div className="container">
        <div className="content">
          <Navbar />
          <div className="main">
            <div className="bgColor">
              <div className="cardContainer">
                <div className="heading">Create your review</div>
                <div className="card">
                  <form action="">
                    <textarea></textarea>
                    <div>
                      <button>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CustomerAddReview;
