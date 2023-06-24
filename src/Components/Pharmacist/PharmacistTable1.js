import React, { useState } from "react";
import "../../static/css/Pharmacist/PharmacistTable1.css";
import { Eye, Trash2 } from "feather-icons-react";

const PharmacistTable1 = () => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  return (
    <div className="pharmacistTable1">
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
              <small className="head">Product Name</small>
              <img src="" alt="" />
            </div>
            <div className="columnHead">
              <small className="head">Product Name</small>
              <img src="" alt="" />
            </div>
            <div className="columnHead">
              <small className="head">Product Name</small>
              <img src="" alt="" />
            </div>
          </div>
          <div className="datas">
            <div className="data">
              <div>#125</div>
              <div>Gabriel</div>
              <div>Amoxiciline</div>
              <div>$45</div>
              <div>
                <span className="status">pending</span>
              </div>
              <div className="actions">
                <Eye id="editIcon" />
                <Trash2 id="trashIcon" onClick={() => setDeleteDialog(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistTable1;
