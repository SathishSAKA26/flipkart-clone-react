import React from "react";
// import product data
import { productsData } from "../../productsData";

const Products = () => {
  return (
    <div className="pt-20 pr-[10px] pb-[10px] pl-5 w-full h-[100vh] bg-gray-900 flex">
      <div className="product-filter">
        <p className="filter-head">Filters</p>
        <div className="category">
          <p className="filter-categoryhead">Categories</p>
          <div className="filter-category">Mobile</div>
        </div>
        <div className="price">
          <p className="pricehead">Price</p>
          <input type="range" name="" id="" className="pricerange" />
          <div className="price-input">
            <input value={0} className="pricebox" /> <p>to</p>
            <input value={50000} className="pricebox" />
          </div>
        </div>
        <div className="brand">
          <p>Brand</p>
        </div>
      </div>
      <div className="">
        <div className="products-item"></div>
      </div>
    </div>
  );
};

export default Products;
