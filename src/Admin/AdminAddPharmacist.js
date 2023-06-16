import React from "react";
import "../static/css/Admin/AdminAddPharmacist.css";
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
import edit from "../static/assets/edit.svg";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminAddPharmacist = () => {
  const adminMenuToggle = useSelector(SelectAdActiveToggle);
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
              <form>
                <div className="pharmacistNumber">
                  <input type="text" placeholder="No*" />
                  <Hash className="addMedIcon" />
                </div>
                <div className="pharmacistName">
                  <input type="text" placeholder="Pharmacist Name*" />
                  <User className="addMedIcon" />
                </div>
                <div className="pharmacistPhone">
                  <input type="text" placeholder="Phone Number*" />
                  <Phone className="addMedIcon" />
                </div>
                <div className="pharmacistEmail">
                  <input type="text" placeholder="Email*" />
                  <Mail className="addMedIcon" />
                </div>
                <div className="joiningDate">
                  <input type="text" placeholder="Joining Date*" />
                  <Calendar className="addMedIcon" />
                </div>
                <p>
                  <button className="saveBtn">Save</button>
                  <button className="closeBtn">Cancel</button>
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
