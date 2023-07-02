import React, { useState } from "react";
import "../static/css/Pharmacist/PharmacistBag.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectCartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  defaultCart,
} from "../features/addCartSlice";
import { toast } from "react-toastify";
import { saveInvoiceInfo } from "../features/invoiceSlice";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import { realInvoiceInfo } from "../features/realInvoiceSlice";
import { useNavigate } from "react-router-dom";
import { Plus, Minus } from "feather-icons-react";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import { baseUrl } from "../config";
import axios from "axios";

const PharmacistBag = () => {
  const [purchaseType, setPurchaseType] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [amountPaid, setAmountPaid] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(SelectCartItems);
  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);

  const totalPrice = cartItems.reduce((accumulator, object) => {
    return accumulator + object.total_price;
  }, 0);
  const totalQuantity = cartItems.reduce((accumulator, object) => {
    return accumulator + object.quantity;
  }, 0);

  const handleMakeSales = async (e) => {
    e.preventDefault();
    const salesData = {
      total_quantity: totalQuantity,
      total_price: totalPrice,
      customer_email: customerEmail,
      status: purchaseType,
      pharmacist_id: 1,
      amount_paid: amountPaid,
      medications: cartItems?.map((item) => {
        return {
          medicine_id: item.id,
          medicine_unitPrice: item.price,
          medicine_totalQuantity: item.quantity,
          medicine_totalPrice: item.total_price,
          medicine_name: item.name,
        };
      }),
    };

    await axios
      .post(`${baseUrl}/api/makesales`, salesData)
      .then(async (res) => {
        console.log(res);
        const customerInfo = await res.data.customer;
        const medicationInfo = await res.data.invoices;
        const invoiceStatus = await res.data.saleStatus;
        dispatch(
          saveInvoiceInfo({
            customerName:
              customerInfo.customerFirstName +
              " " +
              customerInfo.customerLastName,
            customerEmail: customerInfo.customerEmail,
            invoiceStatus: invoiceStatus,
            invoices: medicationInfo,
          })
        );
        dispatch(realInvoiceInfo(cartItems));
        dispatch(defaultCart());

        navigate("/pharmacist/invoice");
      });
  };

  const increase = (id) => {
    dispatch(increaseQuantity(id));
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const decrease = (id) => {
    dispatch(decreaseQuantity(id));
    toast.error("Removed from cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const remove = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Removed from cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div
      className={pharmacistMenuToggle ? "pharmacistBag open" : "pharmacistBag"}
    >
      <PharmacistSideBar />
      <div className="allBagMain">
        <PharmacistNavbar />
        <div className="allBag">
          <div className="bagContainer">
            <div className="section_one">
              <div className="heading">
                <div className="title">Cart</div>
                <div className="items-InCart">{totalQuantity}</div>
              </div>
              <hr />

              <div className="titles">
                <div className="productName">Product Details</div>
                <div className="width">Quantity</div>
                <div className="width">Price</div>
                <div className="width">Total</div>
              </div>
              {cartItems?.map((item) => {
                return (
                  <div className="card">
                    <div className="details">
                      <div>{item.name}</div>
                      <button
                        onClick={() => {
                          remove(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="width">
                      <Minus id="bagIcon" onClick={() => decrease(item.id)} />
                      <div>{item.quantity}</div>
                      <Plus id="bagIcon" onClick={() => increase(item.id)} />
                    </div>
                    <div className="width">${item.price}</div>
                    <div className="width">${item.price * item.quantity}</div>
                  </div>
                );
              })}
            </div>
            <div className="section_two">
              <div className="heading">Bag Summary</div>
              <hr />
              <div className="title">
                <div>ITEMS {totalQuantity}</div>
                <div>${totalPrice}</div>
              </div>
              <div className="card">
                <form onSubmit={handleMakeSales}>
                  <div className="purchase-type">
                    <div> Purchase Type</div>

                    <select
                      value={purchaseType}
                      onChange={(e) => setPurchaseType(e.target.value)}
                      required
                    >
                      <option>Seletc Purchase Type</option>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Uncompleted">Uncompleted</option>
                    </select>
                  </div>

                  <div className="amount-paid">
                    <div>Amount Paid</div>
                    <input
                      type="text"
                      pattern="[0-9]*"
                      value={amountPaid}
                      onChange={(e) => setAmountPaid(e.target.value)}
                      required
                    />
                  </div>

                  <div className="customer-number">
                    <div>Email</div>
                    <input
                      type="email"
                      placeholder="Customer Email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      required
                    />
                  </div>
                  <hr />
                  <button type="submit">CHECKOUT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacistBag;
