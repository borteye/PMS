import React, { useState } from "react";
import "../static/css/Admin/AdminAddPharmacist.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import {
  Calendar,
  Hash,
  Mail,
  Phone,
  Plus,
  User,
  X,
} from "feather-icons-react";
import axios from "axios";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminAddPharmacist = () => {
  const [pharmFirstName, setPharmFirstName] = useState("");
  const [pharmEmail, setPharmEmail] = useState("");
  const [pharmPhoneNumber, setPharmPhoneNumber] = useState("");

  const navigate = useNavigate();

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  // add Pharmacist
  const handleAddPharmacist = async (e) => {
    e.preventDefault();
    const pharmacistDetails = {
      pharmFirstName,
      pharmEmail,
      pharmPhoneNumber,
    };

    await axios.post(
      "http://192.168.38.95:8000/api/addPharmacist",
      pharmacistDetails
    );

    setPharmFirstName("");
    setPharmEmail("");
    setPharmPhoneNumber("");
  };

  return (
    <div
      className={
        adminMenuToggle ? "adminAddPharmacist open" : "adminAddPharmacist"
      }
    >
      <AdminSideBar />
      <div className="addPharmacistMain">
        <AdminNavbar />
        <div className="addPharmacist">
          <div className="heading">Add Pharmacist</div>
          <div className="cardContainer">
            <div className="card_heading">Add Pharmacist</div>
            <div className="card">
              <form onSubmit={handleAddPharmacist}>
                {/* <div className="pharmacistNumber">
                  <input type="text" placeholder="No*" />
                  <Hash className="addMedIcon" />
                </div> */}
                <div className="pharmacistName">
                  <input
                    type="text"
                    placeholder="Pharmacist Name*"
                    required
                    value={pharmFirstName}
                    onChange={(e) => setPharmFirstName(e.target.value)}
                  />
                  <User className="addMedIcon" />
                </div>
                <div className="pharmacistPhone">
                  <input
                    type="text"
                    placeholder="Phone Number*"
                    pattern="[0-9]*"
                    required
                    value={pharmPhoneNumber}
                    onChange={(e) => setPharmPhoneNumber(e.target.value)}
                  />
                  <Phone className="addMedIcon" />
                </div>
                <div className="pharmacistEmail">
                  <input
                    type="text"
                    placeholder="Email*"
                    required
                    value={pharmEmail}
                    onChange={(e) => setPharmEmail(e.target.value)}
                  />
                  <Mail className="addMedIcon" />
                </div>

                <p>
                  <button className="saveBtn" type="submit">
                    Save
                  </button>
                  <button
                    className="closeBtn"
                    onClick={() => navigate("/admin/dashboard")}
                  >
                    Cancel
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddPharmacist;
