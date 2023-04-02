import React from "react";
// import the logo image
import Logo from "../assets/images/large.png";
import { Link } from "react-router-dom";
// search icon
import { FcSearch } from "react-icons/fc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="flex h-14 bg-red-500 fixed z-2 w-full">
        <div className="flex justify-between items-center py-2.5  mx-auto max-w-7xl w-full gap-6">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-2/4" />
          </Link>
          <div className="flex justify-around   w-[(100%-544px)]">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button className="bg-white">
              <FcSearch />
            </button>
            <button>Login</button>
            <div>
              <h3>Become a Seller</h3>
            </div>
            <h3 className="flex">
              <div>more</div>
              <i>
                <MdKeyboardArrowDown />
              </i>
            </h3>
            <section>
              <div>
                <RiShoppingCartFill />
              </div>
              <Link to={"/cart"}>Cart</Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
