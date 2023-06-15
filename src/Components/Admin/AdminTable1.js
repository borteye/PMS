import React, { useState } from "react";
import "../../static/css/Admin/AdminTable1.css";
import trashCan from "../../static/assets/trashCan.gif";
import { ProductSales } from "../../Data/AdminData";
import { Eye, Trash2 } from "feather-icons-react";

const AdminTable1 = () => {
  const [data, setData] = useState(ProductSales);
  const [deleteDialog, setDeleteDialog] = useState(false);

  return (
    <div className="adminTable">
      <div className="tableContainer">
        <div className="heading">Product Sales</div>
        <div className="table">
          <div className="titles">
            <div className="columnHead">
              <small className="head">Order #</small>
              <img src="" alt="" />
            </div>
            <div className="columnHead">
              <small className="head">Customer</small>
              <img src="" alt="" />
            </div>
            <div className="columnHead">
              <small className="head">Product Name</small>
              <img src="" alt="" />
            </div>
            <div className="columnHead">
              <small className="head">Purchase Price</small>
              <img src="" alt="" />
            </div>
            <div className="columnHead">
              <small className="head">Status</small>
              <img src="" alt="" />
            </div>
            <div className="columnHead">
              <small className="head">Action</small>
              <img src="" alt="" />
            </div>
          </div>
          <div className="datas">
            {data?.map((item, index) => {
              return (
                <div className="data" key={index}>
                  <div>{item.orderNumber}</div>
                  <div>{item.customer}</div>
                  <div>{item.productName}</div>
                  <div>{item.price}</div>
                  <div>
                    <span className="status">{item.stauts}</span>
                  </div>
                  <div className="actions">
                    <Eye id="editIcon" />
                    <Trash2
                      id="trashIcon"
                      onClick={() => setDeleteDialog(true)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={deleteDialog ? "deleteDialog" : "hideDeleteDialog"}>
        <div className="card">
          <img src={trashCan} alt="" />
          <div className="text">Are you sure you want to delete this file?</div>
          <div className="buttons">
            <button className="noBtn" onClick={() => setDeleteDialog(false)}>
              Canel
            </button>
            <button className="yesBtn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable1;
