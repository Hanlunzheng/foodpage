import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <div>
        <h1 className="text-orange-600 text-font text-3xl text-center">
          Main Category Menu
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-5 ml-2 mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300  cursor-pointer rounded-xl flex justify-between items-center"
          >
            <h2 className="sm:text-xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
