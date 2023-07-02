import React, { useState } from "react";
import "../static/css/Customer/CustomerChatPage.css";
import { Search, Send, Menu } from "feather-icons-react";
import profile from "../static/assets/profile.jpg";
import Navbar from "../Components/Customer/Navbar";
import Footer from "../Components/Customer/Footer";

const CustomerChatPage = () => {
  const [search, setSearch] = useState("");
  const [openChat, setOpenChat] = useState(false);
  return (
    <div className="customerChatPage">
      <div className="container">
        <div className="content">
          <Navbar />
          <div className="main">
            <div className="cardContainer">
              <div className={openChat ? "card1 hidden" : "card1"}>
                <div className="heading"> Chats</div>
                <div className="search">
                  <input
                    type="text"
                    placeholder="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Search id="searchIcon" />
                </div>
                <div className="chats">
                  <div className="chat" onClick={() => setOpenChat(true)}>
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                  <div className="chat">
                    <img src={profile} alt="" />
                    <div>Paris Liana</div>
                  </div>
                </div>
              </div>
              <div className={openChat ? "card2" : "card2 hidden"}>
                <div className="heading">
                  <Menu
                    className="backIcon"
                    onClick={() => setOpenChat(false)}
                  />
                  <img src={profile} alt="" />
                  <div className="info">
                    <div>Paris Liana</div>
                    <small>Online</small>
                  </div>
                </div>
                <div className="chatArea">
                  <div className="sent">
                    <div className="message">Hello, Good Morning</div>
                  </div>
                  <div className="received">
                    <div className="message">Hello, Good Morning</div>
                  </div>
                  <div className="sent">
                    <div className="message">How are you doing?</div>
                  </div>
                  <div className="received">
                    <div className="message">
                      I'm doing great Sir, how about you please?
                    </div>
                  </div>
                </div>
                <div className="sendMessage">
                  <input type="text" placeholder="Type a message..." />
                  <div>
                    <Send id="sendIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerChatPage;
