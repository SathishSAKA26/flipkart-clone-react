import React from "react";

const CategoryBanner = ({ ImgSrc, Title, Brand }) => {
  return (
    <div className="p-7 w-fit h-full max-h-[366px] bg-white text-center">
      <img
        src={ImgSrc}
        alt=""
        className="w-[200px] h-[170px] cursor-pointer object-contain hover:scale-x-110"
      />
      <p className="py-4 px-0 text-sm text-black">
        {Title.length < 25 ? Title : Title.slice(0, 15) + "..."}
      </p>
      <p className="text-green-700 font-light">Shop Now!</p>
      <p className="text-gray-700 font-light text-sm py-5 px-0">{Brand}</p>
    </div>
  );
};

export default CategoryBanner;
