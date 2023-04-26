import React from "react";
// import product data
import { productsData } from "../productsData";
import { Link } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";

const Products = () => {
  return (
    <div className="pt-20 pr-[10px] pb-[10px] pl-5 w-full h-[100vh] flex">
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
      <div className="products-item">
        <p className="totalresult">
          Showing 1-{productsData.length} of {productsData.length} results
        </p>
        <div className="sortby">
          <p>Sort By</p>
          <ul className="sortitems">
            <li className="sortitem">Relevance</li>
            <li className="sortitem">Popularity</li>
            <li className="sortitem">Price -- Low to High</li>
            <li className="sortitem">Price -- High to Low</li>
            <li className="sortitem">Newest First</li>
          </ul>
        </div>
      </div>
      <div className="">
        {productsData.map((item, index) => (
          <Link key={index} to={`/productdetails/${item.id}`}>
            <ProductDetailCard Data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
