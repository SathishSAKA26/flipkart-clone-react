import React from "react";

const CategoryBar = ({ imgSrc, CategoryName }) => {
  return (
    <div className="h-auto flex flex-col items-center">
      <div className="category-img w-3/5 ">
        <img src={imgSrc} alt="CategoryImage" />
      </div>
      <p className="w-full text-sm font-medium py-1 px-0">{CategoryName}</p>
    </div>
  );
};

export default CategoryBar;
