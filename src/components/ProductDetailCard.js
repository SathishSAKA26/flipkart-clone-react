import React from "react";

const ProductDetailCard = ({ Data }) => {
  return (
    <div className="w-full h-[250px] flex p-[10px] justify-between">
      <div className="productdatailcard-img w-[250px] h-[200px]">
        <img src={Data.url} />
      </div>
      <div className="w-[70%] py-[10px] px-[20px] text-white">
        <p className="text-lg font-medium text-white">{Data.Product}</p>
        <div className="flex py-[5px] px-0">
          <div className="bg-[#388e3c] text-xs pt-1 pr-1 pb-[2px] pl-[6px] text-white rounded ">
            {Data.rating} ◈
          </div>
          <p className="text-gray-500 text-md pl-2">
            {Data.rating} Ratings & {Data.reviews} Reviews
          </p>
        </div>
        <ul className="p-[10px]">
          <li className="text-base text-gray-300 py-1 font-medium">
            {Data.Descripition}
          </li>
          <li className="text-base text-gray-300 py-1 font-medium">
            {Data.Display}
          </li>
          <li className="text-base text-gray-300 py-1 font-medium">
            {Data.Camera}
          </li>
          <li className="text-base text-gray-300 py-1 font-medium">
            {Data.Proccessor}
          </li>
        </ul>
      </div>
      <div className="p-5 text-white">
        <div className="flex items-center">
          <p className="ProductDetailCard-price">₹{Data.Sellingprice}</p>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            height={10}
            alt=""
            className="w-20 pl-2"
          />
        </div>
        <p className="text-sm p-[5px] font-medium text-white">Free delivery</p>
        <p className="discount">
          Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month
        </p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
