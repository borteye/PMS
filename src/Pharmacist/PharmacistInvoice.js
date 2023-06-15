import React from "react";
import "../static/css/Pharmacist/PharmacistInvoice.css";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";

const PharmacistInvoice = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="pharmacistInvoice">
      <PharmacistSideBar />
      <div className="invoiceMain">
        <PharmacistNavbar />
        <div className="invoice">
          <div className="heading">Invoice</div>
          <div className="cardContainer">
            <div className="printing_container">
              <div className="cardNavbar">
                <div className="card_heading">INVOICE</div>
                <div className="invoiceId">#1234</div>
              </div>

              <div className="card">
                <div className="information">
                  <div className="reciever">
                    <div className="reciever_heading">Reciever</div>
                    <div className="reciever_name">Anny Farisha</div>
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
                      <strong>Status:</strong> Success
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
              </div>
            </div>
            <div className="buttons">
              <button onClick={handlePrint}>Print Invoice</button>
              <button>Send Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistInvoice;
