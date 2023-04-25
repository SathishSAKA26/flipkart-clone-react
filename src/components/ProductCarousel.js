import React from "react";
// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ BgIm, Title, Data }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    Infinity: false,
  };

  return (
    <div className="categoryCarousel">
      <div
        className="categoryCarousel-left"
        // style={{ background: `url(${BgIm}) no-repeat 0px bottom` }}
      >
        <p className="categoryCarousel-title">{Title}</p>
        <button className="categoryCarousel-btn">View All</button>
      </div>
      <div className="categoryCarousel-right">
        <Slider {...settings}></Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
