import React from "react";
import "../static/css/Pharmacist/PharmacistChatPage.css";
import sendIcon from "../static/assets/send.svg";
import { Send } from "feather-icons-react";
import profile from "../static/assets/profile.jpg";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import { useSelector } from "react-redux";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import uuid from "react-uuid";
import firebase from "firebase/compat/app";
// import db from "../FConfig";
import { useCollection } from "react-firebase-hooks/firestore";
const PharmacistChatPage = () => {
  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);

  return (
    <div
      className={
        pharmacistMenuToggle ? "pharmacistChatPage open" : "pharmacistChatPage"
      }
    >
      <PharmacistSideBar />
      <div className="chatPageMain">
        <PharmacistNavbar />
        <div className="chatContainer">
          <div className="chatCard">
            <div className="sidebar">
              <div className="heading">Chats</div>
              <div className="chats">
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
                <div className="chat">
                  <img src={profile} alt="" />
                  <div className="name">Gabriel</div>
                </div>
              </div>
            </div>
            <div className="mainChat">
              <div className="heading">Gabriel</div>
              <div className="chatBox">
                <div className="received">
                  <div className="message">Hello</div>
                </div>
                <div className="received">
                  <div className="message">
                    Hello jhfjhff fhfjhafd fe feff efioefief ifejfiojef jhjhw
                    uhuf fiefief efiefueiuef eifweu
                  </div>
                </div>
                <div className="received">
                  <div className="message">Hello</div>
                </div>
                <div className="sent">
                  <div className="message">Hello</div>
                </div>
              </div>
              <div className="sendMessageBox">
                <form>
                  <input type="text" placeholder="Type your message here.." />
                  <button>
                    <Send id="sendIcon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistChatPage;
