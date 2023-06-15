import React from "react";
import "../static/css/Customer/CustomerHome.css";
import profile from "../static/assets/profile.jpg";

const CustomerHome = () => {
  return (
    <div className="customerHome">
      <header>
        <nav>
          <div className="section_one">f</div>
          <div className="section_two">The Pharmacy</div>
          <div className="section_three">
            <img src={profile} alt="" />
          </div>
        </nav>
      </header>
      <main>
        <div className="hero_section">
          <div className="hero">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            ipsam, sunt consequatur sit ab error quo corporis. At ab sit, quasi
            nulla quis eaque, iure necessitatibus laboriosam reiciendis ullam
            tempora.
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default CustomerHome;
