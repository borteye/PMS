import React, { useState } from "react";
import "../static/css/Admin/AdminAllCustomers.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import { CustomerList } from "../Data/AdminData";
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
import trashCan from "../static/assets/trashCan.gif";
import profile from "../static/assets/profile.jpg";
import ReactPaginate from "react-paginate";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminAllCustomers = () => {
  const [show, setShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState(CustomerList);
  const [search, setSearch] = useState("");

  const [showRightBar, setShowRightBar] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  const productsPerPage = 5;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = Math.ceil(data.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = data
    .filter((val) => {
      if (search == "") {
        return val;
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item, index) => {
      return (
        <div className="data" key={index}>
          <div className="number">1</div>
          <div className="name-image">
            <img src={profile} alt="" />
            <div>{item.name}</div>
          </div>
          <div>{item.dob}</div>
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

  function PSProductWidget() {
    return <>{displayProducts}</>;
  }

  return (
    <div
      className={
        adminMenuToggle ? "adminAllCustomers open" : "adminAllCustomers"
      }
    >
      <AdminSideBar />
      <div className="allCustomersMain">
        <AdminNavbar />
        <div className="allCustomers">
          <div className="heading">All Customers</div>
          <div className="cardContainer">
            <div className="cardNavbar">
              <div className="card_heading">Customer List</div>
              <div className="search">
                <Search id="searchIcon" />
                <input
                  type="text"
                  placeholder="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="addButton" onClick={() => setShow(true)}>
                <Plus onClick={() => setShowRightBar(true)} />
              </button>
            </div>
            <div className="card">
              <div className="titles">
                <div className="number">
                  <small>No</small>
                </div>
                <div>
                  <small> Name</small>
                </div>
                <div>
                  <small>Date of Birth</small>
                </div>
                <div>
                  <small>Mobile</small>
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
                <PSProductWidget />
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
        <div className={showRightBar ? "addCustomerRightBar" : "hideRightBar"}>
          <div className="rightBar-Header">
            <div className="title">Add Customer</div>
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
              <div className="customer-name">
                <div className="title">Customer Name</div>
                <div className="flex">
                  <input type="text" placeholder="Customer Name*" />
                  <User className="addMedIcon" />
                </div>
              </div>
              <div className="dob">
                <div className="title">Date of Birth</div>
                <div className="flex">
                  <input type="text" placeholder="DOB*" />
                  <Phone className="addMedIcon" />
                </div>
              </div>
              <div className="mobile">
                <div className="title">Mobile</div>
                <div className="flex">
                  <input type="text" placeholder="Mobile*" />
                  <Mail className="addMedIcon" />
                </div>
              </div>
              <div className="email">
                <div className="title">Email</div>
                <div className="flex">
                  <input type="text" placeholder="Email*" />
                  <Calendar className="addMedIcon" />
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

export default AdminAllCustomers;
