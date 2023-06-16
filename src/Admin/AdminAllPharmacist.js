import React, { useState } from "react";
import "../static/css/Admin/AdminAllPharmacist.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import trashCan from "../static/assets/trashCan.gif";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  User,
  X,
  Calendar,
  Hash,
  Mail,
  Phone,
} from "feather-icons-react";

import ReactPaginate from "react-paginate";
import { PharmacistList } from "../Data/AdminData";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminAllPharmacist = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState(PharmacistList);
  const [search, setSearch] = useState("");

  const [showRightBar, setShowRightBar] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  const pharmacistPerPage = 4;
  const pagesVisited = pageNumber * pharmacistPerPage;
  const pageCount = Math.ceil(data.length / pharmacistPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayPharmacist = data
    .filter((val) => {
      if (search == "") {
        return val;
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + pharmacistPerPage)
    .map((item, index) => {
      return (
        <div className="data" key={index}>
          <div className="number">{item.no}</div>
          <div className="name-image">
            <img src={item.profile} alt="" />
            <div>{item.name}</div>
          </div>
          <div>{item.phone}</div>
          <div className="email">{item.email}</div>
          <div>{item.joiningDate}</div>

          <div className="actions">
            <Edit id="editIcon" onClick={() => setShowRightBar(true)} />
            <Trash2 id="trashIcon" onClick={() => setDeleteDialog(true)} />
          </div>
        </div>
      );
    });

  function PharmacistWidget() {
    return <>{displayPharmacist}</>;
  }

  return (
    <>
      <div
        className={
          adminMenuToggle ? "adminAllPharmacist open" : "adminAllPharmacist"
        }
      >
        <AdminSideBar />
        <div className="allPharmacistMain">
          <AdminNavbar />
          <div className="allPharmacist">
            <div className="heading">All Pharmacist</div>
            <div className="cardContainer">
              <div className="cardNavbar">
                <div className="card_heading">Pharmacist List</div>
                <div className="search">
                  <Search id="searchIcon" />
                  <input
                    type="text"
                    placeholder="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button
                  className="addButton"
                  onClick={() => setShowRightBar(true)}
                >
                  <Plus />
                </button>
              </div>
              <div className="card">
                <div className="titles">
                  <div className="number">
                    <small>No</small>
                  </div>
                  <div>
                    <small>Pharmacist Name</small>
                  </div>
                  <div>
                    <small>Phone Number</small>
                  </div>
                  <div className="email">
                    <small>Email</small>
                  </div>
                  <div>
                    <small>Joining Date</small>
                  </div>

                  <div>
                    <small>Actions</small>
                  </div>
                </div>
                <div className="datas">
                  <PharmacistWidget />
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
          <div
            className={showRightBar ? "addPharmacistRightBar" : "hideRightBar"}
          >
            <div className="rightBar-Header">
              <div className="title">Add Pharmacist</div>
              <div></div>
            </div>
            <div className="rightBar-body">
              <form>
                <div className="no">
                  <div className="title">No</div>
                  <div className="flex">
                    <input type="text" placeholder=" No*" />
                    <Hash className="addMedIcon" />
                  </div>
                </div>
                <div className="pharmacist-name">
                  <div className="title">Pharmacist Name</div>
                  <div className="flex">
                    <input type="text" placeholder="Pharmacist Name*" />
                    <User className="addMedIcon" />
                  </div>
                </div>
                <div className="phone">
                  <div className="title">Phone Number</div>
                  <div className="flex">
                    <input type="text" placeholder="Pharmacist Phone*" />
                    <Phone className="addMedIcon" />
                  </div>
                </div>
                <div className="email">
                  <div className="title">Email</div>
                  <div className="flex">
                    <input type="text" placeholder="Pharmacist Email*" />
                    <Mail className="addMedIcon" />
                  </div>
                </div>
                <div className="joiningDate">
                  <div className="title">Joining Date</div>
                  <div className="flex">
                    <input type="text" placeholder="Joining Date*" />
                    <Calendar className="addMedIcon" />
                  </div>
                </div>
                <p>
                  <div className="buttons">
                    <button className="saveBtn">
                      <Plus className="plusIcon" />
                    </button>
                    <button className="closeBtn">
                      <X
                        className="closeIcon"
                        onClick={() => setShowRightBar(false)}
                      />
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
                <button
                  className="noBtn"
                  onClick={() => setDeleteDialog(false)}
                >
                  Canel
                </button>
                <button className="yesBtn">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAllPharmacist;
