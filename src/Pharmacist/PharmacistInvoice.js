import React, { useState } from "react";
import "../static/css/Pharmacist/PharmacistInvoice.css";
import { useDispatch, useSelector } from "react-redux";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import { SelectInvoiceInfo } from "../features/invoiceSlice";
import { SelectRealInvoiceInfo } from "../features/realInvoiceSlice";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";

const PharmacistInvoice = () => {
  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);

  let customerName, customerEmail, invoiceDate, invoiceStatus, invoiceId;

  const invoiceDetails = useSelector(SelectInvoiceInfo);
  const invoiceItems = useSelector(SelectRealInvoiceInfo);

  const totalPrice = invoiceItems.reduce((accumulator, object) => {
    return accumulator + object.total_price;
  }, 0);

  invoiceDetails?.map((item) => {
    customerName = item.customerName;
    customerEmail = item.customerEmail;
    invoiceStatus = item.invoiceStatus;
  });

  invoiceDetails?.map((item) => {
    const invoices = item.invoices;
    invoices?.map((item) => {
      invoiceId = item.sales_id;
      invoiceDate = item.created_at;
    });
  });

  const handlePrint = () => {
    window.print();
  };
  return (
    <div
      className={
        pharmacistMenuToggle ? "pharmacistInvoice open" : "pharmacistInvoice"
      }
    >
      <PharmacistSideBar />
      <div className="invoiceMain">
        <PharmacistNavbar />
        <div className="invoice">
          <div className="heading">Invoice</div>
          <div className="cardContainer">
            <div className="printing_container">
              <div className="cardNavbar">
                <div className="card_heading">INVOICE</div>
                <div className="invoiceId">#{invoiceId}</div>
              </div>

              <div className="card">
                <div className="information">
                  <div className="reciever">
                    <div className="reciever_heading">Reciever</div>
                    <div className="reciever_name">{customerName}</div>
                    <div className="reciever_email">{customerEmail}</div>
                  </div>
                  <div className="aboutInvoice">
                    <div className="invoiceDate">
                      {" "}
                      <strong>Invoice Date:</strong> {invoiceDate}
                    </div>
                    <div className="invoiceStatus">
                      <strong>Status:</strong> {invoiceStatus}
                    </div>
                  </div>
                </div>
                <div className="card_table">
                  <div className="titles">
                    <div>id</div>
                    <div>Medicine Name</div>
                    <div>Quantity</div>
                    <div>Unit Cost</div>
                    <div>Total</div>
                  </div>
                  <div className="datas">
                    {invoiceItems?.map((item) => {
                      return (
                        <div className="data">
                          <div>{item.id}</div>
                          <div>{item.name}</div>
                          <div>{item.quantity}</div>
                          <div>${item.price}</div>
                          <div>${item.total_price}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="totalCost">
                  <div>Total Cost: </div>
                  <div>${totalPrice}</div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button onClick={handlePrint}>Print Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistInvoice;
