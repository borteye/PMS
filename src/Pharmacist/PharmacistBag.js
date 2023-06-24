import React from "react";
import "../static/css/Pharmacist/PharmacistBag.css";
import { useSelector } from "react-redux";
import { SelectCartItems } from "../features/addCartSlice";
import { Plus, Minus } from "feather-icons-react";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import amox from "../static/assets/amox.png";

const PharmacistBag = () => {
  const cartItems = useSelector(SelectCartItems);

  return (
    <div className="pharmacistBag">
      <PharmacistSideBar />
      <div className="allBagMain">
        <PharmacistNavbar />
        <div className="allBag">
          <div className="bagContainer">
            <div className="section_one">
              <div className="heading">
                <div className="title">Cart</div>
                <div className="items-InCart">{cartItems.length}</div>
              </div>
              <hr />

              <div className="titles">
                <div className="productName">Product Details</div>
                <div className="width">Quantity</div>
                <div className="width">Price</div>
                <div className="width">Total</div>
              </div>
              {cartItems?.map((item, index) => {
                <div className="card">
                  <div className="details">
                    <div>{item.name}</div>
                    <button>Remove</button>
                  </div>

                  <div className="width">
                    <Minus id="bagIcon" />
                    <div>{item.quantity}</div>
                    <Plus id="bagIcon" />
                  </div>
                  <div className="width">${item.price}</div>
                  <div className="width">$500</div>
                </div>;
              })}
            </div>
            <div className="section_two">
              <div className="heading">Bag Summary</div>
              <hr />
              <div className="title">
                <div>ITEMS 3</div>
                <div>$500</div>
              </div>
              <div className="card">
                <div className="purchase-type">
                  <div> Purchase Type</div>

                  <select>
                    <option value="">Paid</option>
                    <option value="">Unpaid</option>
                    <option value="">Uncompleted</option>
                  </select>
                </div>
                <div className="customer-number">
                  <div>Customer Mobile / Phone</div>
                  <input
                    type="text"
                    placeholder="+233 548896182"
                    pattern="0-9"
                  />
                </div>
              </div>
              <hr />
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistBag;
