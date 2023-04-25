import React from "react";
// import Data file
import { CategoryBarData, CarouselData, BestOf } from "../Data";
import CategoryBar from "../components/CategoryBar";
import BannerCarousel from "../components/BannerCarousel";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <div className="home">
      <div className="home-categoryContainer">
        <div className="home-categoryBar">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              imgSrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
        </div>
      </div>
      <div className="home-container">
        <div className="home-carousel">
          <BannerCarousel data={CarouselData} />
        </div>
        <div className="home-productCarousel">
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Best of Electronics"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Beauty,Food,Toys"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Winter Essentials"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Wedding & Gifting Specials"
            Data={BestOf.Electronics}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
