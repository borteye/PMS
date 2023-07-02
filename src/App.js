import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectUserRole } from "./features/userSlice";
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
import PharmacistBag from "./Pharmacist/PharmacistBag";
import AdminAddCustomer from "./Admin/AdminAddCustomer";
import AdminSettings from "./Admin/AdminSettings";
import ForgottenPassword from "./ForgottenPassword";
import ResetPassword from "./ResetPassword";
import ResetSuccessful from "./ResetSuccessful";
import CustomerPurchases from "./Customer/CustomerPurchases";
import CustomerSettings from "./Customer/CustomerSettings";
import ChangePassword from "./ChangePassword";
import PharmacistSettings from "./Pharmacist/PharmacistSettings";
import MedicineList from "./Customer/MedicineList";
import CustomerAddReview from "./Customer/CustomerAddReview";
import CustomerChatPage from "./Customer/CustomerChatPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyCode from "./VerifyCode";

function App() {
  const role = useSelector(SelectUserRole);

  function RouteWidget() {
    if (role && role === "admin") {
      return (
        <Router>
          <Routes>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route
              path="/admin/medicine-list"
              element={<AdminMedicineList />}
            />
            <Route path="/admin/add-medicine" element={<AdminAddMedicine />} />
            <Route path="/admin/sales" element={<AdminSales />} />
            <Route path="/admin/invoice-list" element={<AdminInvoiceList />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/sales" element={<AdminSales />} />
            <Route
              path="/admin/all-pharmacists"
              element={<AdminAllPharmacist />}
            />
            <Route
              path="/admin/add-pharmacist"
              element={<AdminAddPharmacist />}
            />
            <Route
              path="/admin/all-customers"
              element={<AdminAllCustomers />}
            />
            <Route path="/admin/add-customer" element={<AdminAddCustomer />} />
            <Route path="/admin/account-settings" element={<AdminSettings />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-successful" element={<ResetSuccessful />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
          </Routes>
        </Router>
      );
    } else if (role && role === "pharmacist") {
      return (
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Routes>
            <Route
              path="/pharmacist/dashboard"
              element={<PharmacistDashboard />}
            />
            <Route path="/pharmacist/invoice" element={<PharmacistInvoice />} />
            <Route
              path="/pharmacist/invoice-list"
              element={<PharmacistInvoiceList />}
            />
            <Route
              path="/pharmacist/all-customers"
              element={<PharmacistAllCustomer />}
            />
            <Route
              path="/pharmacist/add-customer"
              element={<PharmacistAddCustomer />}
            />
            <Route
              path="/pharmacist/medicine-list"
              element={<PharmacistMedicineList />}
            />
            <Route
              path="/pharmacist/chatPage"
              element={<PharmacistChatPage />}
            />
            <Route path="/pharmacist/sales" element={<PharmacistPurchase />} />
            <Route
              path="/pharmacist/settings"
              element={<PharmacistSettings />}
            />
            <Route path="/pharmacist/bag" element={<PharmacistBag />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-successful" element={<ResetSuccessful />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
          </Routes>
          <ToastContainer />
        </Router>
      );
    } else if (role && role === "customer") {
      return (
        <Router>
          <Routes>
            <Route path="/customer/home" element={<CustomerHome />} />
            <Route
              path="/customer/my-purchases"
              element={<CustomerPurchases />}
            />
            <Route
              path="/customer/create-review"
              element={<CustomerAddReview />}
            />
            <Route path="/customer/chat" element={<CustomerChatPage />} />
            <Route
              path="/customer/edit-profile"
              element={<CustomerSettings />}
            />
            <Route path="/customer/medicine-list" element={<MedicineList />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-successful" element={<ResetSuccessful />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
          </Routes>
        </Router>
      );
    }
  }

  return (
    <div>
      <RouteWidget />
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/pharmacist/login" element={<PharmacistLogin />} />
          <Route path="/customer/login" element={<CustomerLogin />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
