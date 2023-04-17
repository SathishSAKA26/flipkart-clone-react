import React, { useState } from "react";
// import icons
import { GiSkullCrossedBones } from "react-icons/gi";
import LoginLogo from "../assets/images/login.svg";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState(true);

  return isOpen ? (
    <div className="fixed top-0 left-0 bg-slate-50 bg-opacity-40 w-full h-[100vh] z-[1000]">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] bg-slate-300 z-[10000] flex ">
        <div className="left">
          <div className="left-container">
            <p className="login-title">Login</p>
            <p className="login-des">
              Get access to your orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            placeholder="Enter Email"
            className="login-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="login-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>.
          </p>
          {loginType ? (
            <button className="login-btn">Login</button>
          ) : (
            <button className="login-btn">Signup</button>
          )}
          {loginType ? (
            <p className="signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <GiSkullCrossedBones />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
