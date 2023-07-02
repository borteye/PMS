import React, { useState } from "react";
import "../static/css/Admin/AdminAddMedicine.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import {
  Calendar,
  Archive,
  DollarSign,
  Hash,
  FilePlus,
  List,
  Plus,
  X,
} from "feather-icons-react";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminAddMedicine = () => {
  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  return (
    <div
      className={adminMenuToggle ? "adminAddMedicine open" : "adminAddMedicine"}
    >
      <AdminSideBar />
      <div className="addMedicineMain">
        <AdminNavbar />
        <div className="addMedicine">
          <div className="heading">Add Medicine </div>
          <div className="cardContainer">
            <div className="card_heading">Add Medicine</div>
            <div className="card">
              <form>
                <div className="sameStyle">
                  <input type="text" placeholder="Batch No*" />
                  <Hash className="addMedIcon" />
                </div>
                <div className="sameStyle">
                  <input type="text" placeholder="Medicine Name*" />
                  <FilePlus className="addMedIcon" />
                </div>
                <div className="sameStyle">
                  <input type="text" placeholder="Medicine Category*" />
                  <List className="addMedIcon" />
                </div>
                <div className="sameStyle">
                  <input type="text" placeholder="Price*" />
                  <DollarSign className="addMedIcon" />
                </div>
                <div className="sameStyle">
                  <input type="text" placeholder="Expiry Date*" />
                  <Calendar className="addMedIcon" />
                </div>
                <div className="sameStyle">
                  <input type="text" placeholder="Stock*" />
                  <Archive className="addMedIcon" />
                </div>
                <div className="ageRange">
                  <div>
                    <select name="" id="">
                      <option>Age Range</option>
                      <option value="">1 - 5</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="">
                      <option>Age Range</option>
                      <option value="">1 - 5</option>
                    </select>
                  </div>
                  <div>
                    <select name="" id="">
                      <option>Age Range</option>
                      <option value="">1 - 5</option>
                    </select>
                  </div>
                </div>
                <div className="time">
                  <div>Time Range</div>
                  <div>
                    <input type="text" />
                    <button>
                      <Plus />
                    </button>
                  </div>
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

export default AdminAddMedicine;
