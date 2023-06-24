import React, { useState, useEffect } from "react";
import "../static/css/Admin/AdminSales.css";
import { useSelector } from "react-redux";
import { SelectAdActiveToggle } from "../features/toggleSlice";
import { Search, Eye, Trash2 } from "feather-icons-react";
import ReactPaginate from "react-paginate";
import AdminSideBar from "../Components/Admin/AdminSideBar";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import axios from "axios";

const AdminSales = () => {
  const [data, setData] = useState([]);
  const [InvoiceData, setInvoiceData] = useState([]);
  const [InvoiceStatus, setInvoiceStatus] = useState();
  const [InvoiceStatusTotalQuantity, setInvoiceTotalQuantity] = useState();
  const [InvoiceTotalPrice, setInvoiceTotalPrice] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [search, setSearch] = useState("");

  const [viewInvoice, setViewInvoice] = useState(false);

  useEffect(() => {
    const fetchSales = async () => {
      await axios.get("http://192.168.37.95:8000/api/sales").then((res) => {
        const sales = res.data.allSales;
        setData(sales);
        console.log(res);
      });
    };
    fetchSales();
    // const interval = setInterval(fetchSales, 2000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  const handleFetchInvoice = async (id) => {
    await axios
      .get(`http://192.168.37.95:8000/api/invoice/${id}`)
      .then((res) => {
        setInvoiceStatus(res.data.status);
        setInvoiceTotalQuantity(res.data.totalQuantity);
        setInvoiceTotalPrice(res.data.totalprice);
        console.log(res);
        const details = res.data.invoice;

        console.log(details);
        details?.map((item) => {
          setInvoiceData(item);
        });
      });

    setViewInvoice(true);
  };

  const adminMenuToggle = useSelector(SelectAdActiveToggle);

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
            <span className="status">{item.status}</span>
          </div>
          <div className="actions">
            <Eye id="editIcon" onClick={() => handleFetchInvoice(item.id)} />
            <Trash2 id="trashIcon" />
          </div>
        </div>
      );
    });

  function SalesWidget() {
    return <>{displaySales}</>;
  }

  return (
    <div className={adminMenuToggle ? "adminSalesList open" : "adminSalesList"}>
      <AdminSideBar />
      <div className="salesListMain">
        <AdminNavbar />
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
                  <small className="head">Order #</small>
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
                containerClassName={"pagination_btns"}
                previousLinkClassName={"previous_btns"}
                nextLinkClassName={"next_btn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
        <div className={viewInvoice ? "viewInvoice" : "viewInvoice close"}>
          <div className="card">
            <div className="information">
              <div className="reciever">
                <div className="reciever_heading">Reciever</div>
                <div className="reciever_name">
                  {InvoiceData.customerFirstName}
                </div>
                <div className="reciever_email">Anny@gmail.com</div>
                <div className="reciever_address">
                  1642 Cambridge Drive, Phoenix, 85029 Arizona
                </div>
              </div>
              <div className="aboutInvoice">
                <div className="invoiceDate">
                  {" "}
                  <strong>Invoice Date:</strong> 27/05/2023
                </div>
                <div className="invoiceStatus">
                  <strong>Status:</strong> {InvoiceStatus}
                </div>
              </div>
            </div>
            <div className="card_table">
              <div className="titles">
                <div>id</div>
                <div>Description</div>
                <div>Qty</div>
                <div>Unit Cost</div>
                <div>Total</div>
              </div>
              <div className="datas">
                <div className="data">
                  <div>1</div>
                  <div>Paracetamol</div>
                  <div>3</div>
                  <div>$30</div>
                  <div>$90</div>
                </div>
                <div className="data">
                  <div>1</div>
                  <div>Paracetamol</div>
                  <div>3</div>
                  <div>$30</div>
                  <div>$90</div>
                </div>
                <div className="data">
                  <div>1</div>
                  <div>Paracetamol</div>
                  <div>3</div>
                  <div>$30</div>
                  <div>$90</div>
                </div>
              </div>
            </div>

            <div className="totalCost">
              <div>Total Cost: </div>
              <div>$900</div>
            </div>
            <button onClick={() => setViewInvoice(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSales;
