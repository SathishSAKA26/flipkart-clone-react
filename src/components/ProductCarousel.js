import React from "react";
// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import CategoryBanner from "./CategoryBanner";
// import react icons
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

// Next and Prev Button function
const Next = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowCircleRight
        style={{ color: "black", fondSize: 25, fondWeight: 900 }}
      />
    </div>
  );
};

const Prev = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowCircleLeft
        style={{ color: "black", fondSize: 25, fondWeight: 900 }}
      />
    </div>
  );
};

const ProductCarousel = ({ BgIm, Title, Data }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    Infinity: false,
  };

  return (
    <div className="w-full h-[366px] mt-[10px] flex shadow-md">
      <div
        className="w-[18%] text-center pt-[10%] px-[10px] pb-[10px] "
        // style={{ background: `url(${BgIm}) no-repeat 0px bottom` }}
      >
        <p className="text-2xl font-medium pb-[18px] text-center">{Title}</p>
        <button className="bg-blue-800 outline-none py-2 px-5 text-white font-medium rounded-sm border-2 border-solid border-blue-700">
          View All
        </button>
      </div>
      <div
        className="bg-gray-900 h-[366px] "
        style={{ width: "calc(100% - 17%)" }}
      >
        <Slider nextArrow={<Next />} prevArrow={<Prev />} {...settings}>
          {Data.map((item, index) => (
            <Link key={index} to={"/Products"}>
              <CategoryBanner
                ImgSrc={item.ImgSrc}
                Title={item.Title}
                Brand={item.Brand}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
