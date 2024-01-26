import React from "react";

const HeadCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-3 gap-6">
      {/* FoodCard */}
      <div className="relative rounded-xl">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out Bogo Out</p>
          <p className="pl-2 mb-2">Through 7/16</p>
          <button className="border-white cursor-pointer bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
      <div className="relative rounded-xl">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out Bogo Out</p>
          <p className="pl-2 mb-2">Through 7/16</p>
          <button className="border-white cursor-pointer bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl"
          src="https://media.cnn.com/api/v1/images/stellar/prod/160929101749-essential-spanish-dish-paella-phaidon.jpg?q=w_1900,h_1069,x_0,y_0,c_fill"
          alt="/"
        />
      </div>
      <div className="relative rounded-xl">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out Bogo Out</p>
          <p className="pl-2 mb-2">Through 7/16</p>
          <button className="border-white cursor-pointer bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl"
          src="https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadCards;
