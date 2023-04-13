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
      <div className="flex h-14 bg-red-500 fixed z-2 w-full font-bold">
        <div className="flex justify-around items-center py-2.5  mx-32 max-w-7xl w-full gap-6">
          <Link to={"/"} className="w-[20%]">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="flex justify-between items-center max-w-md  w-[(100%-544px)]">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="py-1.5 pl-2 border-none outline-none rounded-l-sm w-full m-0"
            />
            <button className="bg-white h-9 w-10 border-none text-xl rounded-r-sm">
              <FcSearch />
            </button>
          </div>
          <button className="text-white">Login</button>
          <div className="pt-3 text-white">
            <h3 className="text-lg">Become a Seller</h3>
          </div>
          <h3 className="relative text-lg pt-3 text-white">
            <div>more</div>
            <i className="absolute top-3 py-0 px-12">
              <MdKeyboardArrowDown />
            </i>
          </h3>
          <section className="flex items-center cursor-pointer text-white">
            <div className="pr-1">
              <RiShoppingCartFill />
            </div>
            <Link to={"/cart"}>Cart</Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
