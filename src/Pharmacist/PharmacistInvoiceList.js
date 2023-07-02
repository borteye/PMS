import React, { useState, useEffect } from "react";
import "../static/css/Pharmacist/PharmacistInvoiceList.css";
import { Search } from "feather-icons-react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { baseUrl } from "../config";
import axios from "axios";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";

const PharmacistInvoiceList = () => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);

  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);

  useEffect(() => {
    const fetchInvoices = async () => {
      const { data } = await axios.get(`${baseUrl}/api/invoices`);
      setData(data);
    };
    fetchInvoices();
    const interval = setInterval(fetchInvoices, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const invoicePerPage = 4;
  const pagesVisited = pageNumber * invoicePerPage;
  const pageCount = Math.ceil(data.length / invoicePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayInvoice = data
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
          <div className="invoiceId">{item.id}</div>
          <div>{item.customerFirstName + " " + item.customerLastName}</div>
          <div className="orderId">{item.created_at}</div>
          <div>{item.medicineName}</div>
          <div>${item.medicinePrice}</div>
          <div>{item.unit_quantity}</div>
          <div>${item.unit_quantity * item.medicinePrice}</div>
        </div>
      );
    });

  function InvoiceWidget() {
    return <>{displayInvoice}</>;
  }

  return (
    <div
      className={
        pharmacistMenuToggle
          ? "pharmacistInvoiceList open"
          : "pharmacistInvoiceList "
      }
    >
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
                  <small>Invoice Id#</small>
                </div>
                <div>
                  <small>Bill To</small>
                </div>
                <div>
                  <small>Created</small>
                </div>
                <div>
                  <small>Medicine Name</small>
                </div>
                <div>
                  <small>Price</small>
                </div>
                <div>
                  <small>Quantity</small>
                </div>
                <div>
                  <small>Total</small>
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
    </div>
  );
};

export default PharmacistInvoiceList;
