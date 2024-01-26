import React from "react";

const MainPage = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="w-full h-full absolute text-gray-200 max-h-[500px] flex flex-col  ">
          <h1 className="p-2 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="px-2 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-orange-600">Asian</span> Food
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg"
          alt="chinese food"
        />
      </div>
    </div>
  );
};

export default MainPage;
