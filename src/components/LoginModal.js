import React, { useState } from "react";
// import icons
import { GiCrossMark } from "react-icons/gi";
import LoginLogo from "../assets/images/login.svg";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState(true);

  return isOpen ? (
    <div className="fixed top-0 left-0 bg-slate-50 bg-opacity-40 w-full h-[100vh] z-[1000] pt-14">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] bg-slate-300 z-[10000] flex ">
        <div className="w-2/5 h-full bg-red-500  p-[30px]">
          <div className="h-full">
            <p className="text-3xl py-3 px-0 text-white">Login</p>
            <p className="text-lg font-light text-white">
              Get access to your orders, Wishlist and Recommendations
            </p>
            <div className="pt-16">
              <img src={LoginLogo} alt="loginlogo" />
            </div>
          </div>
        </div>
        <div className="w-3/5 h-full py-[50px] px-[25px]">
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
          <p className="py-5 px-0 text-[13px] text-black font-light ">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>.
          </p>
          {loginType ? (
            <button className="w-full mt-[10px] border-none outline-none text-white bg-orange-600 text-base h-12 cursor-pointer ">
              Login
            </button>
          ) : (
            <button className="w-full mt-[10px] border-none outline-none text-white bg-orange-600 text-base h-12 cursor-pointer ">
              Signup
            </button>
          )}
          {loginType ? (
            <p
              className="mt-[40%] text-center text-blue-800 text-base cursor-pointer"
              onClick={() => setLoginType(false)}
            >
              New to Flipkart? Create an account
            </p>
          ) : (
            <p
              className="mt-[40%] text-center text-blue-800 text-base cursor-pointer"
              onClick={() => setLoginType(true)}
            >
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div
          className="absolute top-0 right-[-6%] text-3xl text-slate-300  cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <GiCrossMark />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
