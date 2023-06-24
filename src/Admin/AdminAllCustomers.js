import React, { useState, useEffect } from "react";
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
import axios from "axios";

const AdminAllCustomers = () => {
  const [show, setShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [deleteCustomer, setDeleteCustomer] = useState();
  const [updateCustomer, setUpdateCustomer] = useState();

  //customer details
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerGender, setCustomerGender] = useState("");
  const [customerBirthDate, setCustomerBirthDate] = useState("");
  const [customerContact, setCustomerContact] = useState("");

  const [showRightBar, setShowRightBar] = useState(false);
  const [showRightBarEdit, setShowRightBarEdit] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  //fetch all customers data

  useEffect(() => {
    const fetchCustomers = async () => {
      await axios.get("http://192.168.37.95:8000/api/customers").then((res) => {
        const customers = res.data.customers;
        setData(customers);
      });
    };

    fetchCustomers();

    const interval = setInterval(fetchCustomers, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // grab customer id for deletion

  const grabDeleteId = (id) => {
    setDeleteCustomer(id);
    setDeleteDialog(true);
    console.log(deleteCustomer);
  };

  // delete customer
  const handleDeleteCustomer = async () => {
    await axios
      .delete(`http://192.168.37.95:8000/api/deletecustomer/${deleteCustomer}`)
      .then((res) => {
        if (res.status == 200) {
          setTimeout(() => setDeleteDialog(false), 800);
          setDeleteCustomer(null);
          const result = data.filter((doc) => doc.id != deleteCustomer);
          setData(result);
        }
      });
  };

  //add customer
  const handleAddCustomer = async (e) => {
    e.preventDefault();
    const customerDetails = {
      customerFirstName,
      customerLastName,
      customerEmail,
      customerGender,
      customerBirthDate,
      customerContact,
    };

    await axios.post(
      "http://192.168.37.95:8000/api/registerCustomer",
      customerDetails
    );
    setShowRightBar(false);
    setCustomerFirstName("");
    setCustomerLastName("");
    setCustomerEmail("");
    setCustomerGender("");
    setCustomerBirthDate("");
    setCustomerContact("");
  };

  const grabUpdateCustomerId = async (id) => {
    setUpdateCustomer(id);
    await axios
      .get(`http://192.168.37.95:8000/api/customer/${id}`)
      .then((res) => {
        const details = res.data;
        setCustomerFirstName(details.customerFirstName);
        setCustomerLastName(details.customerLastName);
        setCustomerEmail(details.customerEmail);
        setCustomerGender(details.customerGender);
        setCustomerBirthDate(details.customerBirthDate);
        setCustomerContact(details.customerContact);

        setShowRightBarEdit(true);
      });
  };

  const handleUpdateCustomer = async (e) => {
    e.preventDefault();
    const customerDetails = {
      customerFirstName,
      customerLastName,
      customerEmail,
      customerGender,
      customerBirthDate,
      customerContact,
    };

    await axios.post(
      `http://192.168.37.95:8000/api/updatecustomer/${updateCustomer} `,
      customerDetails
    );
    setShowRightBarEdit(false);
    setCustomerFirstName("");
    setCustomerLastName("");
    setCustomerEmail("");
    setCustomerGender("");
    setCustomerBirthDate("");
    setCustomerContact("");
  };

  const customerPerPage = 4;
  const pagesVisited = pageNumber * customerPerPage;
  const pageCount = Math.ceil(data.length / customerPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayCustomers = data
    .filter((val) => {
      if (search == "") {
        return val;
      } else if (
        val.customerFirstName.toLowerCase().includes(search.toLowerCase()) ||
        val.customerLastName.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + customerPerPage)
    .map((item) => {
      return (
        <div className="data" key={item.id}>
          <div className="number">1</div>
          <div className="name-image">
            <img src={profile} alt="" />
            <div>
              {item.customerFirstName} {item.customerLastName}
            </div>
          </div>
          <div>{item.customerBirthDate}</div>
          <div>{item.customerGender}</div>
          <div>{item.customerContact}</div>
          <div className="email">{item.customerEmail}</div>
          <div>{item.created_at}</div>

          <div className="actions">
            <Edit id="editIcon" onClick={() => grabUpdateCustomerId(item.id)} />
            <Trash2 id="trashIcon" onClick={() => grabDeleteId(item.id)} />
          </div>
        </div>
      );
    });

  function CustomerWidget() {
    return <>{displayCustomers}</>;
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
                  <small>Gender</small>
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
                <CustomerWidget />
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
            <form onSubmit={handleAddCustomer}>
              {/* <div className="no">
                <div className="title">No</div>
                <div className="flex">
                  <input type="text" placeholder=" No*" />
                  <Hash className="addMedIcon" />
                </div>
              </div> */}
              <div className="customer-name">
                <div className="title">Customer First</div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Customer First*"
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    required
                  />
                  <User className="addMedIcon" />
                </div>
              </div>
              <div className="customer-name">
                <div className="title">Customer Last</div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Customer Last*"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    required
                  />
                  <User className="addMedIcon" />
                </div>
              </div>

              <div className="customer-gender">
                <div className="title">Customer Gender</div>

                <select
                  value={customerGender}
                  onChange={(e) => setCustomerGender(e.target.value)}
                >
                  <option>Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="dob">
                <div className="title">Date of Birth</div>
                <div className="flex">
                  <input
                    type="date"
                    placeholder="DOB*"
                    value={customerBirthDate}
                    onChange={(e) => setCustomerBirthDate(e.target.value)}
                    required
                  />
                  {/* <Calendar className="addMedIcon" /> */}
                </div>
              </div>
              <div className="mobile">
                <div className="title">Mobile</div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Mobile*"
                    pattern="[0-9]*"
                    value={customerContact}
                    onChange={(e) => setCustomerContact(e.target.value)}
                    required
                  />
                  <Phone className="addMedIcon" />
                </div>
              </div>
              <div className="email">
                <div className="title">Email</div>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email*"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                  />
                  <Mail className="addMedIcon" />
                </div>
              </div>

              <p>
                <div className="buttons">
                  <button className="saveBtn" type="submit">
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
        <div
          className={
            showRightBarEdit ? "editCustomerRightBar" : "hideEditRightBar"
          }
        >
          <div className="rightBar-Header">
            <div className="title">Edit Customer</div>
            <div></div>
          </div>
          <div className="rightBar-body">
            <form onSubmit={handleUpdateCustomer}>
              <div className="customer-name">
                <div className="title">Customer First</div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Customer First*"
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    required
                  />
                  <User className="addMedIcon" />
                </div>
              </div>
              <div className="customer-name">
                <div className="title">Customer Last</div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Customer Last*"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    required
                  />
                  <User className="addMedIcon" />
                </div>
              </div>

              <div className="customer-gender">
                <div className="title">Customer Gender</div>

                <select
                  value={customerGender}
                  onChange={(e) => setCustomerGender(e.target.value)}
                >
                  <option>Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="dob">
                <div className="title">Date of Birth</div>
                <div className="flex">
                  <input
                    type="date"
                    placeholder="DOB*"
                    value={customerBirthDate}
                    onChange={(e) => setCustomerBirthDate(e.target.value)}
                    required
                  />
                  {/* <Calendar className="addMedIcon" /> */}
                </div>
              </div>
              <div className="mobile">
                <div className="title">Mobile</div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Mobile*"
                    pattern="[0-9]*"
                    value={customerContact}
                    onChange={(e) => setCustomerContact(e.target.value)}
                    required
                  />
                  <Phone className="addMedIcon" />
                </div>
              </div>
              <div className="email">
                <div className="title">Email</div>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email*"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                  />
                  <Mail className="addMedIcon" />
                </div>
              </div>

              <p>
                <div className="buttons">
                  <button className="saveBtn" type="submit">
                    <Plus className="plusIcon" />
                  </button>
                  <button className="closeBtn">
                    <X
                      className="closeIcon"
                      onClick={() => setShowRightBarEdit(false)}
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
              <button className="noBtn" onClick={() => setDeleteDialog(false)}>
                Canel
              </button>
              <button className="yesBtn" onClick={handleDeleteCustomer}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllCustomers;
