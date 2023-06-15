import React from "react";
import "../static/css/Customer/CustomerLogin.css";
import headImage from "../static/assets/headImage.jpg";

const Login = () => {
  return (
    <div className="customerLogin">
      <div className="head">The Pharmacy</div>
      <main>
        <div className="preamble">
          Login <span>to continue...</span>
        </div>
        <form action="">
          <div className="number">
            <label htmlFor="">Number</label>
            <br />
            <input type="text" />
          </div>
          <div className="password">
            <label htmlFor="">Password</label>
            <br />
            <input type="text" />
          </div>
          <button>Login</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
