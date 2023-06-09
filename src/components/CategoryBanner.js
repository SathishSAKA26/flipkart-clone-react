import React from "react";

const CategoryBanner = ({ ImgSrc, Title, Brand }) => {
  return (
    <div className="p-6 w-fit h-full max-h-[366px] bg-gray-400 text-center">
      <img
        src={ImgSrc}
        alt=""
        className="w-[200px] h-[170px] cursor-pointer object-contain hover:scale-x-110"
      />
      <p className="py-3 px-0 text-sm text-black font-bold">
        {/* {Title} */}
        {Title.length < 25 ? Title : Title.slice(0, 25) + "..."}
      </p>
      <p className="text-green-700 font-semibold">Shop Now!</p>
      <p className="text-gray-700 font-semibold text-sm py-3 px-0">{Brand}</p>
    </div>
  );
};

export default CategoryBanner;
