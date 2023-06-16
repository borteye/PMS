import React, { useState } from "react";
import "../static/css/Admin/AdminInvoiceList.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import { Search, Eye, Trash2 } from "feather-icons-react";
import { InvoiceList } from "../Data/AdminData";
import ReactPaginate from "react-paginate";
import trashCan from "../static/assets/trashCan.gif";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";

const AdminInvoiceList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState(InvoiceList);
  const [search, setSearch] = useState("");

  const [deleteDialog, setDeleteDialog] = useState(false);

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

  const invoicePerPage = 6;
  const pagesVisited = pageNumber * invoicePerPage;
  const pageCount = Math.ceil(data.length / invoicePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayInvoiceList = data
    .filter((val) => {
      if (search == "") {
        return val;
      } else if (
        val.name.toLowerCase().includes(search.toLowerCase()) ||
        val.status.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + invoicePerPage)
    .map((item, index) => {
      return (
        <div className="data" key={index}>
          <div className="invoiceId">{item.invoiceId}</div>
          <div>Gabriel</div>
          <div className="orderId">{item.orderId}</div>
          <div>{item.invoiceGeneratedDate}</div>
          <div>
            <span className="invoice_status">{item.status}</span>
          </div>
          <div>{item.price}</div>

          <div className="actions">
            <Eye id="sendIcon" />
            <Trash2 id="trashIcon" onClick={() => setDeleteDialog(true)} />
          </div>
        </div>
      );
    });

  function InvoiceWidget() {
    return <>{displayInvoiceList}</>;
  }

  return (
    <div
      className={adminMenuToggle ? "adminInvoiceList open" : "adminInvoiceList"}
    >
      <AdminSideBar />
      <div className="invoiceListMain">
        <AdminNavbar />
        <div className="invoiceList">
          <div className="heading">Invoice List</div>
          <div className="cardContainer">
            <div className="cardNavbar">
              <div className="card_heading">Invoice List</div>
              <div className="search">
                <Search id="searchIcon" />
                <input
                  type="text"
                  placeholder="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="card">
              <div className="titles">
                <div className="invoiceId">
                  <small>Invoice Id</small>
                </div>
                <div>
                  <small>Bill To</small>
                </div>
                <div>
                  <small>Order #Id</small>
                </div>
                <div>
                  <small>Created</small>
                </div>
                <div>
                  <small>Status</small>
                </div>
                <div>
                  <small>Total</small>
                </div>

                <div>
                  <small>Action</small>
                </div>
              </div>
              <div className="datas">
                <InvoiceWidget />
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
        <div className={deleteDialog ? "deleteDialog" : "hideDeleteDialog"}>
          <div className="card">
            <img src={trashCan} alt="" />
            <div className="text">
              Are you sure you want to delete this file?
            </div>
            <div className="buttons">
              <button className="noBtn" onClick={() => setDeleteDialog(false)}>
                Cancel
              </button>
              <button className="yesBtn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInvoiceList;
