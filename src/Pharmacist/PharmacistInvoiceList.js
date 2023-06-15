import React, { useState } from "react";
import "../static/css/Pharmacist/PharmacistInvoiceList.css";
import { Search, Send, Trash2 } from "feather-icons-react";
import trashCan from "../static/assets/trashCan.gif";
import ReactPaginate from "react-paginate";
import { InvoiceList } from "../Data/AdminData";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";

const PharmacistInvoiceList = () => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState(InvoiceList);

  const [deleteDialog, setDeleteDialog] = useState(false);

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
      } else if (
        val.name.toLowerCase().includes(search.toLowerCase()) ||
        val.status.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item, index) => {
      return (
        <div className="data" key={index}>
          <div className="invoiceId">{item.invoiceId}</div>
          <div className="productName">
            <img src={item.image} alt="" />
            <div>{item.name}</div>
          </div>
          <div className="orderId">{item.orderId}</div>
          <div>{item.invoiceGeneratedDate}</div>
          <div>
            <span className="invoice_status">{item.status}</span>
          </div>
          <div>{item.price}</div>
          <div>{item.quantity}</div>

          <div className="actions">
            <Send id="sendIcon" />
            <Trash2 id="trashIcon" onClick={() => setDeleteDialog(true)} />
          </div>
        </div>
      );
    });

  function PSProductWidget() {
    return <>{displayProducts}</>;
  }

  return (
    <div className="pharmacistInvoiceList">
      <PharmacistSideBar />
      <div className="invoiceListMain">
        <PharmacistNavbar />
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
                  <small>Product Name</small>
                </div>
                <div>
                  <small>Order #Id</small>
                </div>
                <div>
                  <small>Invoice Generated Date</small>
                </div>
                <div>
                  <small>Status</small>
                </div>
                <div>
                  <small>Price</small>
                </div>
                <div>
                  <small>Quantity</small>
                </div>
                <div>
                  <small>Action</small>
                </div>
              </div>
              <div className="datas">
                <PSProductWidget />
              </div>
              <div className="pagination">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"pagination_btns pharmacist"}
                  previousLinkClassName={"previous_btns"}
                  nextLinkClassName={"next_btn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive pharmacist"}
                />
              </div>
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

export default PharmacistInvoiceList;
