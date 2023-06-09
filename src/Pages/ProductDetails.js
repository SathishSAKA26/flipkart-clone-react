import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../productsData";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCart } from "../slices/cartSlice";

const ProductDetails = () => {
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    const product = productsData.find((item) => {
      return item.id.toString() === id;
    });
    setData(product);
  }, [id]);

  // Add to cart items
  const addToCart = () => {
    dispatch(addCart(data));
  };

  return (
    <div className="pt-16 pr-[10px] pb-[10px] pl-5 w-full max-h-[100vh] h-full flex text-white">
      <div className="w-[40%] flex ">
        <div className="flex flex-col">
          <img
            src={data.url}
            alt=""
            className="w-2/4 h-[60px] object-contain m-[10px]  cursor-pointer border border-solid border-gray-700 proimg"
          />
          <img
            src={data.url}
            alt=""
            className="w-2/4 h-[60px] object-contain m-[10px]  cursor-pointer border border-solid border-gray-700 proimg"
          />
          <img
            src={data.url}
            alt=""
            className="w-2/4 h-[60px] object-contain m-[10px]  cursor-pointer border border-solid border-gray-700 proimg"
          />
          <img
            src={data.url}
            alt=""
            className="w-2/4 h-[60px] object-contain m-[10px]  cursor-pointer border border-solid border-gray-700 proimg"
          />
          <img
            src={data.url}
            alt=""
            className="w-2/4 h-[60px] object-contain m-[10px]  cursor-pointer border border-solid border-gray-700 proimg"
          />
        </div>
        <div className="w-[90%]  flex items-center flex-col">
          <img src={data.url} className="w-[195px] h-[416px] object-contain" />
          <div className="w-full flex">
            <button
              className="w-[200px] py-[18px] text-base my-4 mx-1 flex items-center pl-12 outline-none text-white uppercase font-semibold rounded-sm cursor-pointer bg-orange-500"
              onClick={addToCart}
            >
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="w-[200px] py-[18px] text-base my-4 mx-1 flex items-center pl-12 outline-none text-white uppercase font-semibold rounded-sm cursor-pointer bg-orange-700">
              <AiFillThunderbolt /> Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-[60%] py-[10px] px-5">
        <p className="text-lg product-name">{data.Product}</p>
        <div className="py-[10px] px-0 flex items-center">
          <div className="flex items-center bg-green-700 pl-1 rounded-md">
            {data.rating} <AiFillStar />
          </div>
          <div className="ratings pl-2">
            {data.reviews} Ratings & {data.rating} Reviews
          </div>
        </div>
        <p className="pt-2 text-[28px]">₹{data.Sellingprice}</p>
        <p className="text-sm font-light py-[5px] px-0">
          + ₹69 Secured Packing Fee{" "}
        </p>
        <p className="text-base py-[10px] px-0">Available offers</p>
        <div className="p-[5px] flex items-center text-sm font-light">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={10}
            className="w-5 mr-[5px]"
          />
          <b>Bank Offer </b> 5% Cashback on Flipkart Axis Bank CardT&C
        </div>
        <div className="p-[5px] flex items-center text-sm font-light">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={10}
            className="w-5 mr-[5px]"
          />
          <b>Partner Offer </b> Purchase now & get a surprise cashback coupon
          for January / February 2023Know More
        </div>
        <div className="p-[5px] flex items-center text-sm font-light">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={10}
            className="w-5 mr-[5px]"
          />
          <b>Partner Offer </b> Sign up for Flipkart Pay Later and get Flipkart
          Gift Card worth up to ₹500*Know More
        </div>
        <div className="p-[5px] flex items-center text-sm font-light">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
            alt=""
            height={10}
            className="w-5 mr-[5px]"
          />
          <b> EMI starting </b> from ₹832/monthView Plans
        </div>
        {/* add descriptions */}
        <div className="pt-5 px-0">
          <div className="flex">
            <p className="font-bold">Color</p>
            <div className="w-[50%] flex justify-between py-0 px-[80px]">
              <img
                src={data.url}
                alt=""
                className="w-[60px] h-[70px] object-contain pb-2 cursor-pointer hover:border border-solid border-gray-600  "
              />
              <img
                src={data.url}
                alt=""
                className="w-[60px] h-[70px] object-contain pb-2 cursor-pointer hover:border border-solid border-gray-600  "
              />
              <img
                src={data.url}
                alt=""
                className="w-[60px] h-[70px] object-contain pb-2 cursor-pointer hover:border border-solid border-gray-600  "
              />
            </div>
          </div>
          <div className="flex pt-5 px-0">
            <p className="highlight-title font-bold">Highlights</p>
            <ul className="py-0 px-[50px]">
              <li className="pt-0 pl-0 pb-2 pr-[16px] text-md font-light">
                {data.Descripition}
              </li>
              <li className="pt-0 pl-0 pb-2 pr-[16px] text-md font-light">
                {data.Display}
              </li>
              <li className="pt-0 pl-0 pb-2 pr-[16px] text-md font-light">
                {data.Camera}
              </li>
              <li className="pt-0 pl-0 pb-2 pr-[16px] text-md font-light">
                {data.Battery}
              </li>
              <li className="pt-0 pl-0 pb-2 pr-[16px] text-md font-light">
                {data.Proccessor}
              </li>
            </ul>
          </div>
        </div>
        {/* Rating */}
        <div className="RatingsAndReviews pt-2">
          <p className="text-2xl">Ratings & Reviews</p>
          <div className="flex py-5 px-0">
            <div className="text-center w-[150px] pt-0 pr-[40px] pb-[10px] pl-0 mt-4">
              <p className="flex items-center ml-6 text-2xl">
                {data.rating} <AiFillStar />
              </p>
              <p className="text-sm font-light py-[5px] px-0">
                {data.rating} Ratings & {data.reviews} Reviews
              </p>
            </div>
            <ul className="RatingsAndReviews-charts">
              <li className="flex items-center py-[5px] px-0">
                <p className="py-0 px-5">5</p>
                <div className="w-[300px] h-[5px] bg-white rounded">
                  <div
                    className="bg-green-700 h-full rounded-tr-sm rounded-br-sm"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center py-[5px] px-0">
                <p className="py-0 px-5">4</p>
                <div className="w-[300px] h-[5px] bg-white rounded">
                  <div
                    className="bg-green-700 h-full rounded-tr-lg rounded-br-lg"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center py-[5px] px-0">
                <p className="py-0 px-5">3</p>
                <div className="w-[300px] h-[5px] bg-white rounded">
                  <div
                    className="bg-green-700 h-full rounded-tr-lg rounded-br-lg"
                    style={{ width: "33.6%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center py-[5px] px-0">
                <p className="py-0 px-5">2</p>
                <div className="w-[300px] h-[5px] bg-white rounded">
                  <div
                    className="bg-green-700 h-full rounded-tr-lg rounded-br-lg"
                    style={{ width: "29.6%" }}
                  ></div>
                </div>
              </li>
              <li className="flex items-center py-[5px] px-0">
                <p className="py-0 px-5">1</p>
                <div className="w-[300px] h-[5px] bg-white rounded">
                  <div
                    className="bg-green-700 h-full rounded-tr-lg rounded-br-lg"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
