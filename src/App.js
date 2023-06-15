import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/AdminLogin";
import CustomerLogin from "./Customer/CustomerLogin";
import CustomerHome from "./Customer/CustomerHome";
import PharmacistLogin from "./Pharmacist/PharmacistLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminMedicineList from "./Admin/AdminMedicineList";
import AdminAddMedicine from "./Admin/AdminAddMedicine";
import AdminAllPharmacist from "./Admin/AdminAllPharmacist";
import AdminAddPharmacist from "./Admin/AdminAddPharmacist";
import AdminAllCustomers from "./Admin/AdminAllCustomers";
import PharmacistDashboard from "./Pharmacist/PharmacistDashboard";
import PharmacistInvoiceList from "./Pharmacist/PharmacistInvoiceList";
import PharmacistInvoice from "./Pharmacist/PharmacistInvoice";
import PharmacistChatPage from "./Pharmacist/PharmacistChatPage";
import AdminInvoiceList from "./Admin/AdminInvoiceList";
import AdminSales from "./Admin/AdminSales";
import PharmacistPurchase from "./Pharmacist/PharmacistPurchase";
import PharmacistAllCustomer from "./Pharmacist/PharmacistAllCustomer";
import PharmacistMedicineList from "./Pharmacist/PharmacistMedicineList";
import PharmacistAddCustomer from "./Pharmacist/PharmacistAddCustomer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* ------ Admin ------ */}
          <Route path="/admin/login" exact element={<AdminLogin />} />
          <Route path="/admin/dashboard" exact element={<AdminDashboard />} />
          <Route
            path="/admin/medicine-list"
            exact
            element={<AdminMedicineList />}
          />
          <Route
            path="/admin/add-medicine"
            exact
            element={<AdminAddMedicine />}
          />
          <Route
            path="/admin/invoice/invoice-list"
            exact
            element={<AdminInvoiceList />}
          />
          <Route path="/admin/sales" exact element={<AdminSales />} />
          <Route
            path="/admin/pharmacist/all-pharmacists"
            exact
            element={<AdminAllPharmacist />}
          />
          <Route
            path="/admin/pharmacist/add-pharmacist"
            exact
            element={<AdminAddPharmacist />}
          />
          <Route
            path="/admin/customer/all-customers"
            exact
            element={<AdminAllCustomers />}
          />

          {/* ----pharmacist----- */}
          <Route path="/pharmacist/login" exact element={<PharmacistLogin />} />
          <Route
            path="/pharmacist/dashboard"
            exact
            element={<PharmacistDashboard />}
          />
          <Route
            path="/pharmacist/invoice"
            exact
            element={<PharmacistInvoice />}
          />
          <Route
            path="/pharmacist/invoice/invoice-list"
            exact
            element={<PharmacistInvoiceList />}
          />
          <Route
            path="/pharmacist/customer/all-customers"
            exact
            element={<PharmacistAllCustomer />}
          />
          <Route
            path="/pharmacist/add-customer"
            exact
            element={<PharmacistAddCustomer />}
          />
          <Route
            path="/pharmacist/medicine/medicine-list"
            exact
            element={<PharmacistMedicineList />}
          />

          <Route
            path="/pharmacist/chatPage"
            exact
            element={<PharmacistChatPage />}
          />
          <Route
            path="/pharmacist/purchase"
            exact
            element={<PharmacistPurchase />}
          />

          {/* ----- customer ------ */}

          <Route path="/customer/login" exact element={<CustomerLogin />} />
          <Route path="/customer/home" exact element={<CustomerHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;