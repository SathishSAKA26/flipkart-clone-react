import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../productsData";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt, AiFillStar } from "react-icons/ai";

const ProductDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const product = productsData.find((item) => {
      return item.id.toString() === id;
    });
    setData(product);
  }, [id]);

  return (
    <div className="pt-20 pr-[10px] pb-[10px] pl-5 w-full max-h-[100vh] h-full bg-gray-950 flex text-white">
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
            <button className="w-[200px] py-[18px] text-base my-4 mx-1 flex items-center pl-12 outline-none text-white uppercase font-semibold rounded-sm cursor-pointer bg-orange-500">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="w-[200px] py-[18px] text-base my-4 mx-1 flex items-center pl-12 outline-none text-white uppercase font-semibold rounded-sm cursor-pointer bg-orange-700">
              <AiFillThunderbolt /> Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-[60%] py-[10px] px-5">
        <p className="text-lg ">{data.Product}</p>
        <div className="ratingsreviews">
          <div className="stars">
            {data.rating} <AiFillStar />
          </div>
          <div className="ratings">
            {data.reviews} Ratings & {data.rating} Reviews
          </div>
        </div>
        <p className="price">₹{data.Sellingprice}</p>
        <p className="packfee">+ ₹69 Secured Packing Fee </p>
        <p className="availableoff">Available offers</p>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <b>Bank Offer </b>5% Cashback on Flipkart Axis Bank CardT&C
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <b>Partner Offer </b> Purchase now & get a surprise cashback coupon
          for January / February 2023Know More
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <b>Partner Offer </b> Sign up for Flipkart Pay Later and get Flipkart
          Gift Card worth up to ₹500*Know More
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
            alt=""
            height={20}
          />
          <b> EMI starting </b> from ₹832/monthView Plans
        </div>
        {/* add descriptions */}
        <div className="descriptions">
          <div className="colors">
            <p className="color">Color</p>
            <div className="colorimgs">
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
            </div>
          </div>
          <div className="highlights">
            <p className="highlight-title">Highlights</p>
            <ul className="highlight">
              <li className="highlight-item">{data.Descripition}</li>
              <li className="highlight-item">{data.Display}</li>
              <li className="highlight-item">{data.Camera}</li>
              <li className="highlight-item">{data.Battery}</li>
              <li className="highlight-item">{data.Proccessor}</li>
            </ul>
          </div>
        </div>
        {/* Rating */}
        <div className="RatingsAndReviews">
          <p className="RatingsAndReviews-title">Ratings & Reviews</p>
          <div className="RatingsAndReviews-container">
            <div className="RatingsAndReviews-stars">
              <p className="RatingsAndReviews-reviews">
                {data.rating} <AiFillStar />
              </p>
              <p className="RatingsAndReviews-ratings">
                {data.rating} Ratings & {data.reviews} Reviews
              </p>
            </div>
            <div className="RatingsAndReviews-charts">
              <li>
                <p className="star">5</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">4</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "50%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">3</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "33.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">2</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "29.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">1</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "10%" }}></div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
