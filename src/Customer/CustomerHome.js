import React from "react";
import "../static/css/Customer/CustomerHome.css";
import profile from "../static/assets/profile.jpg";
import Navbar from "../Components/Customer/Navbar";
import Footer from "../Components/Customer/Footer";

const CustomerHome = () => {
  return (
    <div className="customerHome">
      <div className="container">
        <div className="content">
          <Navbar />
          <div className="main">
            <div className="hero">
              <div className="sec_one">
                <div>
                  We build bridges between the{" "}
                  <span> pharmacy and customers </span>
                </div>
              </div>
              <div className="sec_two">
                <div>
                  To build software the gives customer-facing teams at small and
                  medium-sized businesses the ability to create fruitful and
                  enduring relationships with customers
                </div>
              </div>
            </div>
            <div className="hero_image">
              <div className="bgColor"></div>
            </div>
            <div className="sub_hero">
              <div className="sec_one">
                <div>Together we are strong</div>
              </div>
              <div className="sec_two">
                <div className="head">
                  To build software the gives customer-facing teams at small and
                  medium-sized businesses the ability to create fruitful and
                  enduring relationships with customers
                </div>
                <div className="sub_head">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  possimus, porro maiores omnis illo vero placeat adipisci
                  molestias odio sint perferendis neque necessitatibus
                  repellendus, quaerat quas? Ab neque impedit eius.
                </div>
              </div>
            </div>
            <div className="customerReviews">
              <div className="heading">Our customers feedback about us</div>
              <div className="preamble">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                mollitia nostrum dolorum saepe possimus id obcaecati iste quos
              </div>
              <div className="carousel">
                <div className="card">
                  <div className="image_name">
                    <img src={profile} alt="" />
                    <div className="name">Andrew Thomas</div>
                  </div>
                  <div className="reviewInfo">
                    " Great pharmacy system! Ordering prescription refills is
                    easy and efficient, and the staff is very helpful. Highly
                    recommend! "
                  </div>
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

export default CustomerHome;
