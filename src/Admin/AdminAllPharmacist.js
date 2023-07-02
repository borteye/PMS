import React, { useState, useEffect } from "react";
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
  Hash,
  Mail,
  Phone,
} from "feather-icons-react";
import ReactPaginate from "react-paginate";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import axios from "axios";
import { baseUrl } from "../config";

const AdminAllPharmacist = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [deletePharmaict, setDeletePharmacist] = useState();
  const [updatePharmacist, setUpdatePharmacist] = useState();

  //pharamcist details
  const [pharmFirstName, setPharmFirstName] = useState("");
  const [pharmEmail, setPharmEmail] = useState("");
  const [pharmPhoneNumber, setPharmPhoneNumber] = useState("");

  const [showRightBar, setShowRightBar] = useState(false);
  const [showRightBarEdit, setShowRightBarEdit] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  // fetch all pharmacists

  useEffect(() => {
    const fetchPharmacist = async () => {
      await axios.get(`${baseUrl}/api/pharmacists`).then((res) => {
        const pharmacist = res.data.pharmacists;
        setData(pharmacist);
      });
    };
    fetchPharmacist();

    const interval = setInterval(fetchPharmacist, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //grab pharmacist id for deletion
  const grabDeleteId = (id) => {
    setDeletePharmacist(id);
    setDeleteDialog(true);
    console.log(deletePharmaict);
  };

  // delete Pharmacist
  const handleDeletePharmacist = async () => {
    await axios
      .delete(`${baseUrl}/api/deletepharmacist/${deletePharmaict}`)
      .then((res) => {
        if (res.status == 200) {
          setTimeout(() => setDeleteDialog(false), 800);
          setDeletePharmacist(null);
          const result = data.filter((doc) => doc.id != deletePharmaict);
          setDeleteDialog(false);
          setData(result);
        }
      });
  };

  // add Pharmacist
  const handleAddPharmacist = async (e) => {
    e.preventDefault();
    const pharmacistDetails = {
      pharmFirstName,
      pharmEmail,
      pharmPhoneNumber,
    };

    await axios.post(`${baseUrl}/api/addPharmacist`, pharmacistDetails);
    setShowRightBar(false);
    setPharmFirstName("");
    setPharmEmail("");
    setPharmPhoneNumber("");
  };

  const grabUpdatePharmacistId = async (id) => {
    setUpdatePharmacist(id);
    await axios.get(`${baseUrl}/api/pharmacist/${id}`).then((res) => {
      const details = res.data;
      setPharmFirstName(details.pharmFirstName);
      setPharmEmail(details.pharmEmail);
      setPharmPhoneNumber(details.pharmPhoneNumber);

      setShowRightBarEdit(true);
    });
  };

  const handleUpdatePharmacist = async (e) => {
    e.preventDefault();
    const pharmacistDetails = {
      pharmFirstName,
      pharmEmail,
      pharmPhoneNumber,
    };

    await axios.post(
      `${baseUrl}/api/updatepharmacist/${updatePharmacist}`,
      pharmacistDetails
    );
    setShowRightBarEdit(false);
    setPharmFirstName("");
    setPharmEmail("");
    setPharmPhoneNumber("");
  };

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
      } else if (
        val.pharmFirstName.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    })

    .map((item, index) => {
      return (
        <div className="data" key={index}>
          <div className="number">{index + 1}</div>
          <div>{item.pharmFirstName}</div>
          <div>{item.pharmPhoneNumber}</div>
          <div className="email">{item.pharmEmail}</div>
          <div>{item.created_at}</div>

          <div className="actions">
            <Edit
              id="editIcon"
              onClick={() => grabUpdatePharmacistId(item.id)}
            />
            <Trash2 id="trashIcon" onClick={() => grabDeleteId(item.id)} />
          </div>
        </div>
      );
    })
    .slice(pagesVisited, pagesVisited + pharmacistPerPage);

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
              <form onSubmit={handleAddPharmacist}>
                <div className="pharmacist-name">
                  <div className="title">Pharmacist Name</div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Pharmacist Name*"
                      required
                      value={pharmFirstName}
                      onChange={(e) => setPharmFirstName(e.target.value)}
                    />
                    <User className="addMedIcon" />
                  </div>
                </div>
                <div className="phone">
                  <div className="title">Phone Number</div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Pharmacist Phone*"
                      pattern="[0-9]*"
                      required
                      value={pharmPhoneNumber}
                      onChange={(e) => setPharmPhoneNumber(e.target.value)}
                    />
                    <Phone className="addMedIcon" />
                  </div>
                </div>
                <div className="email">
                  <div className="title">Email</div>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Pharmacist Email*"
                      required
                      value={pharmEmail}
                      onChange={(e) => setPharmEmail(e.target.value)}
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
              showRightBarEdit ? "editPharmacistRightBar" : "hideEditRightBar"
            }
          >
            <div className="rightBar-Header">
              <div className="title">Edit Pharmacist</div>
              <div></div>
            </div>
            <div className="rightBar-body">
              <form onSubmit={handleUpdatePharmacist}>
                <div className="pharmacist-name">
                  <div className="title">Pharmacist Name</div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Pharmacist Name*"
                      required
                      value={pharmFirstName}
                      onChange={(e) => setPharmFirstName(e.target.value)}
                    />
                    <User className="addMedIcon" />
                  </div>
                </div>
                <div className="phone">
                  <div className="title">Phone Number</div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Pharmacist Phone*"
                      pattern="[0-9]*"
                      required
                      value={pharmPhoneNumber}
                      onChange={(e) => setPharmPhoneNumber(e.target.value)}
                    />
                    <Phone className="addMedIcon" />
                  </div>
                </div>
                <div className="email">
                  <div className="title">Email</div>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Pharmacist Email*"
                      required
                      value={pharmEmail}
                      onChange={(e) => setPharmEmail(e.target.value)}
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
                <button className="yesBtn" onClick={handleDeletePharmacist}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAllPharmacist;
