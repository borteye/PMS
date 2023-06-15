import React from "react";
import "../static/css/Admin/AdminAddMedicine.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import {
  Calendar,
  Truck,
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
                <div className="medicineNumber">
                  <input type="text" placeholder="Batch No*" />
                  <Hash className="addMedIcon" />
                </div>
                <div className="medicineName">
                  <input type="text" placeholder="Medicine Name*" />
                  <FilePlus className="addMedIcon" />
                </div>
                <div className="medicineCategory">
                  <input type="text" placeholder="Medicine Category*" />
                  <List className="addMedIcon" />
                </div>
                <div className="companyName">
                  <input type="text" placeholder="Company Name*" />
                  <Truck className="addMedIcon" />
                </div>
                <div className="purchaseDate">
                  <input type="text" placeholder="Purchase Date*" />
                  <Calendar className="addMedIcon" />
                </div>
                <div className="medicinePrice">
                  <input type="text" placeholder="Price*" />
                  <DollarSign className="addMedIcon" />
                </div>
                <div className="expiryDate">
                  <input type="text" placeholder="Expiry Date*" />
                  <Calendar className="addMedIcon" />
                </div>
                <div className="stock">
                  <input type="text" placeholder="Stock*" />
                  <Archive className="addMedIcon" />
                </div>
                <p>
                  <button className="saveBtn">
                    <Plus id="plusIcon" />
                  </button>
                  <button className="closeBtn">
                    <X id="closeIcon" />
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

export default AdminAddMedicine;
