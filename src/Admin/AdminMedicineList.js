import React, { useState, useEffect } from "react";
import "../static/css/Admin/AdminMedicineList.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import trashCan from "../static/assets/trashCan.gif";
import ReactPaginate from "react-paginate";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Calendar,
  Hash,
  User,
  Phone,
  Mail,
  X,
} from "feather-icons-react";
import { MedicineList } from "../Data/AdminData";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminMedicineList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState(MedicineList);
  const [search, setSearch] = useState("");

  const [showRightBar, setShowRightBar] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  const medicinePerPage = 6;
  const pagesVisited = pageNumber * medicinePerPage;
  const pageCount = Math.ceil(data.length / medicinePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayMedicine = data
    .filter((val) => {
      if (search == "") {
        return val;
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + medicinePerPage)

    .map((item, index) => {
      return (
        <div className="data" key={index}>
          <div className="productName">
            <img src={item.image} alt="" />
            <div>{item.name}</div>
          </div>
          <div>{item.category}</div>
          <div>{item.company}</div>
          <div className="batch">{item.batch}</div>
          <div>{item.purchaseDate}</div>
          <div>{item.price}</div>
          <div>{item.expiryDate}</div>
          <div>{item.stock}</div>
          <div className="actions">
            <Edit id="editIcon" onClick={() => setShowRightBar(true)} />
            <Trash2 id="trashIcon" onClick={() => setDeleteDialog(true)} />
          </div>
        </div>
      );
    });

  function MedicineWidget() {
    return <>{displayMedicine}</>;
  }

  return (
    <div
      className={
        adminMenuToggle ? "adminMedicineList open" : "adminMedicineList"
      }
    >
      <AdminSideBar />
      <div className="medicineListMain">
        <AdminNavbar />
        <div className="medicineList">
          <div className="heading">Medicine List</div>
          <div className="cardContainer">
            <div className="cardNavbar">
              <div className="card_heading">Medicine List</div>
              <div className="search">
                <Search id="searchIcon" />
                <input
                  type="text"
                  placeholder="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="addButton">
                <Plus onClick={() => setShowRightBar(true)} />
              </button>
            </div>
            <div className="card">
              <div className="titles">
                <div>
                  <small>Medicine Name</small>
                </div>
                <div>
                  <small> Category</small>
                </div>
                <div>
                  <small>Company Name</small>
                </div>
                <div>
                  <small> Batch Number</small>
                </div>
                <div>
                  <small> Purchase Date</small>
                </div>
                <div>
                  <small> Price </small>
                </div>
                <div>
                  <small> Expiry Date</small>
                </div>
                <div>
                  <small> Stock</small>
                </div>
                <div>
                  <small> Actions </small>
                </div>
              </div>
              <div className="datas">
                <MedicineWidget />
              </div>
            </div>
            <div className="pagination">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination_btns"}
                previousLinkClassName={"previous_btns"}
                nextLinkClassName={"next_btn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
        <div className={showRightBar ? "addMedicineRightBar" : "hideRightBar"}>
          <div className="rightBar-Header">
            <div className="title">Add Pharmacist</div>
            <div></div>
          </div>
          <div className="rightBar-body">
            <form>
              <div className="no">
                <div className="title">Batch No</div>
                <div className="flex">
                  <input type="text" placeholder="Batch No*" />
                  <Hash className="addMedIcon" />
                </div>
              </div>
              <div className="medicine-name">
                <div className="title">Medicine Name</div>
                <div className="flex">
                  <input type="text" placeholder="Medicine Name*" />
                  <User className="addMedIcon" />
                </div>
              </div>
              <div className="medicine-category">
                <div className="title">Medicine Category</div>
                <div className="flex">
                  <input type="text" placeholder="Medicine Category*" />
                  <Phone className="addMedIcon" />
                </div>
              </div>
              <div className="company-name">
                <div className="title">Company Name</div>
                <div className="flex">
                  <input type="text" placeholder="Company Name*" />
                  <Mail className="addMedIcon" />
                </div>
              </div>
              <div className="purchaseDate">
                <div className="title">Purchase Date</div>
                <div className="flex">
                  <input type="text" placeholder="Purchase Date*" />
                  <Calendar className="addMedIcon" />
                </div>
              </div>
              <div className="price">
                <div className="title">Price</div>
                <div className="flex">
                  <input type="text" placeholder="Price*" />
                  <Calendar className="addMedIcon" />
                </div>
              </div>
              <div className="expiryDate">
                <div className="title">Expiry Date</div>
                <div className="flex">
                  <input type="text" placeholder="Expiry Date*" />
                  <Calendar className="addMedIcon" />
                </div>
              </div>
              <div className="stock">
                <div className="title">Stock</div>
                <div className="flex">
                  <input type="text" placeholder="Stock*" />
                  <Calendar className="addMedIcon" />
                </div>
              </div>
              <p>
                <div className="buttons">
                  <button className="saveBtn">
                    <Plus id="plusIcon" />
                  </button>
                  <button className="closeBtn">
                    <X id="closeIcon" onClick={() => setShowRightBar(false)} />
                  </button>
                </div>
              </p>
            </form>
          </div>
        </div>
        <div className={deleteDialog ? "deleteDialog" : "hideDeleteDialog"}>
          <div className="card">
            <img src={trashCan} alt="" />
            <div className="text">
              Are you sure you want to delete this file?
            </div>
            <div className="buttons">
              <button className="noBtn" onClick={() => setDeleteDialog(false)}>
                Canel
              </button>
              <button className="yesBtn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMedicineList;