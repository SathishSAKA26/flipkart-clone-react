import React from "react";
// import product data
import { productsData } from "../productsData";
import { Link } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";

const Products = () => {
  return (
    <div className="pt-20 pr-[10px] pb-[10px] pl-5 w-full flex">
      <div className="w-[25%] h-full p-[10px] bg-gray-800 text-white shadow-md shadow-gray-500 mr-4">
        <p className="py-[10px] text-xl border-b-2 border-b-solid border-b-white">
          Filters
        </p>
        <div className="py-4 px-0 border-b-2 border-b-solid border-b-amber-100 ">
          <p className="text-sm uppercase font-medium">Categories</p>
          <div className="pt-[10px] px-5 pb-0 text-base">Mobile</div>
        </div>
        <div className="py-[15px] px-0 text-white border-b-2 border-b-solid border-b-gray-500">
          <p className="uppercase">Price</p>
          <input type="range" name="" id="" className="w-full mt-[10px] " />
          <div className="flex items-center justify-between text-gray-600  price-input">
            <input value={0} className="w-[100px] p-[5px]" /> <p>to</p>
            <input value={50000} className="w-[100px] p-[5px]" />
          </div>
        </div>
        <div className="py-3 px-0 border-b-2 border-b-solid border-gray-500 uppercase text-base">
          <p>Brand</p>
        </div>
      </div>
      <div className="w-full h-full  p-[15px]">
        <p className="text-base space-x-1 text-white">
          Showing 1-{productsData.length} of {productsData.length} results
        </p>
        <div className="py-4 px-0 flex text-white">
          <p className="text-base">Sort By</p>
          <ul className="w-[50%] flex items-center justify-between pl-5">
            <li className="py-0 px[10px] text-sm font-light cursor-pointer">
              Relevance
            </li>
            <li className="py-0 px[10px] text-sm font-light cursor-pointer">
              Popularity
            </li>
            <li className="py-0 px[10px] text-sm font-light cursor-pointer">
              Price - Low to High
            </li>
            <li className="py-0 px[10px] text-sm font-light cursor-pointer">
              Price - High to Low
            </li>
            <li className="py-0 px[10px] text-sm font-light cursor-pointer">
              Newest First
            </li>
          </ul>
        </div>
        <div className="">
          {productsData.map((item, index) => (
            <Link key={index} to={`/productdetails/${item.id}`}>
              <ProductDetailCard Data={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
