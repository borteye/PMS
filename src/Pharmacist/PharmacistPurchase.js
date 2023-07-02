import React, { useState, useEffect } from "react";
import "../static/css/Pharmacist/PharmacistPurchase.css";
import { baseUrl } from "../config";
import { useSelector } from "react-redux";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import { SelectUserId } from "../features/userSlice";
import { Search, Eye, Edit } from "feather-icons-react";
import ReactPaginate from "react-paginate";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import axios from "axios";

const PharmacistPurchase = () => {
  const [data, setData] = useState([]);
  const [InvoiceData, setInvoiceData] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [InvoiceStatus, setInvoiceStatus] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [showEditSales, setShowEditSales] = useState(false);
  const [purchaseType, setPurchaseType] = useState("");
  const [salesId, setSalesId] = useState("");

  const [viewInvoice, setViewInvoice] = useState(false);
  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);

  const userId = useSelector(SelectUserId);

  useEffect(() => {
    const fetchSalesByPharmacist = async () => {
      await axios
        .get(`${baseUrl}/api/pharmacist/${userId}/sales`)
        .then((res) => {
          const sales = res.data;
          setData(sales);
        });
    };
    fetchSalesByPharmacist();
    const interval = setInterval(fetchSalesByPharmacist, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleFetchInvoice = async (id) => {
    await axios.get(`${baseUrl}/api/invoice/${id}`).then((res) => {
      setInvoiceStatus(res.data.status);
      setTotalPrice(res.data.totalprice);
      console.log(res);
      const details = res.data.invoice;
      setInvoices(details);
      console.log(details);
      details?.map((item) => {
        setInvoiceData(item);
      });
    });

    setViewInvoice(true);
  };

  const grabSaleId = (item) => {
    setPurchaseType(item.status);
    setSalesId(item.id);
    setShowEditSales(true);
  };

  const handleEditStatus = async (e) => {
    e.preventDefault();
    const info = {
      status: purchaseType,
    };
    await axios.post(`${baseUrl}/api/editsale/${salesId}`, info);
    setShowEditSales(false);
  };

  const colors = (status) => {
    if (status === "Paid") {
      return {
        color: "#3c683c",
        backgroundColor: "#b2f0b2",
      };
    } else if (status === "Uncompleted") {
      return {
        color: " #9c6118",
        backgroundColor: "#f2b366",
      };
    } else if (status === "Unpaid") {
      return {
        color: "#ff0000",
        backgroundColor: "#cf4343d5",
      };
    }
  };

  const salesPerPage = 4;
  const pagesVisited = pageNumber * salesPerPage;
  const pageCount = Math.ceil(data.length / salesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displaySales = data
    .filter((val) => {
      if (search == "") {
        return val;
      } else if (
        val.customerFirstName.toLowerCase().includes(search.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + salesPerPage)
    .map((item) => {
      return (
        <div className="data" key={item.id}>
          <div>{item.id}</div>
          <div>{item.customerFirstName}</div>
          <div>{item.created_at}</div>
          <div>{item.total_quantity}</div>
          <div>{item.total_price}</div>
          <div>
            <span style={colors(item.status)} className="status">
              {item.status}
            </span>
          </div>
          <div className="actions">
            <Edit id="editIcon" onClick={() => grabSaleId(item)} />
            <Eye id="editIcon" onClick={() => handleFetchInvoice(item.id)} />
          </div>
        </div>
      );
    });

  function SalesWidget() {
    return <>{displaySales}</>;
  }
  return (
    <div
      className={
        pharmacistMenuToggle ? "pharmacistSales open" : "pharmacistSales"
      }
    >
      <PharmacistSideBar />
      <div className="salesListMain">
        <PharmacistNavbar />
        <div className="salesList">
          <div className="heading">Sales</div>
          <div className="cardContainer">
            <div className="cardNavbar">
              <div className="card_heading">Search Sales :</div>
              <div className="search">
                <Search id="searchIcon" />
                <input
                  type="text"
                  placeholder="search by customer name"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="card">
              <div className="titles">
                <div className="columnHead">
                  <small className="head">Sales id#</small>
                </div>
                <div className="columnHead">
                  <small className="head">Customer</small>
                </div>
                <div className="columnHead">
                  <small className="head">Purchase Date</small>
                </div>
                <div className="columnHead">
                  <small className="head">Total Quantity</small>
                </div>
                <div className="columnHead">
                  <small className="head">Total Price</small>
                </div>
                <div className="columnHead">
                  <small className="head">Status</small>
                </div>
                <div className="columnHead">
                  <small className="head">Action</small>
                </div>
              </div>
              <div className="datas">
                <SalesWidget />
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
        <div className={showEditSales ? "editSales" : "editSales hidden"}>
          <div className="container">
            <div className="heading">Purchase Type</div>
            <form onSubmit={handleEditStatus}>
              <select
                onChange={(e) => setPurchaseType(e.target.value)}
                value={purchaseType}
              >
                <option>Select Purchase Type</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Uncompleted">Uncompleted</option>
              </select>
              <div>
                <button type="Submit">Submit</button>
                <button onClick={() => setShowEditSales(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div className={viewInvoice ? "viewInvoice" : "viewInvoice close"}>
          <div className="card">
            <div className="information">
              <div className="reciever">
                <div className="reciever_heading">Reciever</div>
                <div className="reciever_name">
                  {InvoiceData.customerFirstName +
                    " " +
                    InvoiceData.customerLastName}
                </div>
                <div className="reciever_email">
                  {InvoiceData.customerEmail}
                </div>
              </div>
              <div className="aboutInvoice">
                <div className="invoiceDate">
                  <strong>Invoice Date:</strong>
                  {InvoiceData.created_at}
                </div>
                <div className="invoiceStatus">
                  <strong>Status:</strong> {InvoiceStatus}
                </div>
              </div>
            </div>
            <div className="card_table">
              <div className="titles">
                <div>Invoice id#</div>
                <div>Medicine Name</div>
                <div>Quantity</div>
                <div>Unit Cost</div>
                <div>Total</div>
              </div>
              <div className="datas">
                {invoices?.map((item) => {
                  return (
                    <div className="data">
                      <div>{item.id}</div>
                      <div>{item.medicineName}</div>
                      <div>{item.unit_quantity}</div>
                      <div>${item.medicinePrice}</div>
                      <div>${item.unit_quantity * item.medicinePrice}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="totalCost">
              <div>Total Cost: </div>
              <div>${totalPrice}</div>
            </div>
            <button onClick={() => setViewInvoice(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistPurchase;
