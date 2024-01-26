import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //filter by price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  // filter Type burgers/piazza/etc
  return (
    <div className="max-w-[1640px] m-auto p-4 py-12">
      <h1 className="text-orange-600 text-font text-3xl text-center">
        Top Rated Menu Items
      </h1>

      <p className="font-bold">Filter Type</p>
      <div className="">
        <button
          onClick={() => setFoods(data)}
          className="m-1 border-orange-600 text-orange-600 hover:text-black hover:border-black"
        >
          All
        </button>
        <button
          onClick={() => filterType("burger")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          Burgers
        </button>
        <button
          onClick={() => filterType("pizza")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          Piazza
        </button>
        <button
          onClick={() => filterType("salad")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          Salads
        </button>
        <button
          onClick={() => filterType("chicken")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          Chicken
        </button>
      </div>
      <div>
        <p className="font-bold">Fliter Price</p>
      </div>
      <div>
        <button
          onClick={() => filterPrice("$")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          $
        </button>
        <button
          onClick={() => filterPrice("$$")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          $$
        </button>
        <button
          onClick={() => filterPrice("$$$")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          $$$
        </button>
        <button
          onClick={() => filterPrice("$$$$")}
          className="m-1 border-orange-600 text-orange-600  hover:text-black hover:border-black"
        >
          $$$$
        </button>
      </div>
      {/* display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {foods.map((item, index) => (
          <div
            className="border shadow-xl hover:scale-105 duration-150"
            key={item.id}
          >
            <img
              className="w-full h-[200px] rounded-lg object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-2">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-600 text-white  rounded-full">
                <span>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
