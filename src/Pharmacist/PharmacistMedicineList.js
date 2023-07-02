import React, { useState, useEffect } from "react";
import "../static/css/Pharmacist/PharmacistMedicineList.css";
import { SelectPhActiveToggle } from "../features/toggleSlice";
import ReactPaginate from "react-paginate";
import { Search, ShoppingCart } from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectCartItems,
  addToCart,
  updateCart,
} from "../features/addCartSlice";
import { toast } from "react-toastify";
import PharmacistSideBar from "../Components/Pharmacist/PharmacistSideBar";
import PharmacistNavbar from "../Components/Pharmacist/PharmacistNavbar";
import { baseUrl } from "../config";
import axios from "axios";

const PharmacistMedicineList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const pharmacistMenuToggle = useSelector(SelectPhActiveToggle);
  const cartItems = useSelector(SelectCartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMedicine = async () => {
      await axios.get(`${baseUrl}/api/medicines`).then((res) => {
        const medicine = res.data.allMedicines;
        setData(medicine);
      });
    };

    fetchMedicine();

    const interval = setInterval(fetchMedicine, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const medicinePerPage = 4;
  const pagesVisited = pageNumber * medicinePerPage;
  const pageCount = Math.ceil(data.length / medicinePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayMedicine = data
    .filter((val) => {
      if (search == "") {
        return val;
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + medicinePerPage)

    .map((item) => {
      const exist = cartItems.find((doc) => doc.id === item.id);
      return (
        <div className="data" key={item.id}>
          <div>
            <div>{item.medicineName}</div>
          </div>
          <div>{item.description}</div>
          <div className="batch">225</div>
          <div>
            {item.AgeFrom} - {item.AgeTo}
          </div>
          <div>{item.dosageInstruction}</div>
          <div>{item.medicinePrice}</div>
          <div>{item.expiryDate}</div>
          <div>{item.totalQuantity}</div>
          <div className="actions">
            <ShoppingCart
              id="editIcon"
              onClick={() => {
                if (exist) {
                  dispatch(updateCart(item.id));
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
                } else if (!exist) {
                  dispatch(
                    addToCart({
                      id: item.id,
                      name: item.medicineName,
                      price: item.medicinePrice,
                      quantity: 1,
                      total_price: item.medicinePrice,
                    })
                  );
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
                }
              }}
            />
          </div>
        </div>
      );
    });

  function MedicineWidget() {
    return <>{displayMedicine}</>;
  }

  return (
    <div
      className={
        pharmacistMenuToggle
          ? "pharmacistMedicineList open"
          : "pharmacistMedicineList"
      }
    >
      <PharmacistSideBar />
      <div className="medicineListMain">
        <PharmacistNavbar />
        <div className="medicineList">
          <div className="heading">Medicine List</div>
          <div className="cardContainer">
            <div className="cardNavbar">
              <div className="card_heading">Medicine List</div>
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
                <div>
                  <small>Medicine Name</small>
                </div>
                <div>
                  <small> Category</small>
                </div>

                <div>
                  <small> Batch Number</small>
                </div>
                <div>
                  <small> Age Range</small>
                </div>
                <div>
                  <small>Dosage Instruction</small>
                </div>
                <div>
                  <small> Price </small>
                </div>
                <div>
                  <small> Expiry Date</small>
                </div>
                <div>
                  <small> Stock</small>
                </div>
                <div>
                  <small> Actions </small>
                </div>
              </div>
              <div className="datas">
                <MedicineWidget />
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

export default PharmacistMedicineList;
