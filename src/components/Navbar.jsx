import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-[1640] mx-auto flex justify-between items-center p-3">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={handleNav} size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Hanlun<span className="font-bold px-1">Eat</span>
        </h1>
        <div className="hidden sm:flex items-center bg-gray-200 rounded-full text-[12px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search bar */}
      <div className="flex items-center px-2 w-[200px] sm:w-[400px] lg:w-{500px}">
        <AiOutlineSearch size={25} />
        <input
          className="rounded-full bg-transparent p-2 w-full"
          type="text"
          placeholder="Search food"
        />
      </div>
      {/* Cart button */}
      <div>
        <button className="bg-black text-white hidden sm:flex items-center  ">
          <BsFillCartFill className="mr-2" size={20} />
          Cart
        </button>
      </div>
      {/* mobile menu */}
      {/* OverLay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={handleNav}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 items-center">
          Hanlun <span className="font-bold">Eat</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="py-2  flex items-center">
              <TbTruckDelivery size={30} className="mr-4" />
              Orders
            </li>
            <li className="py-2  flex items-center">
              <MdFavorite size={30} className="mr-4" />
              Favorite
            </li>
            <li className="py-2  flex items-center">
              <FaWallet size={30} className="mr-4" />
              Wallet
            </li>
            <li className="py-2  flex items-center">
              <MdHelp size={30} className="mr-4" />
              Help
            </li>
            <li className="py-2  flex items-center">
              <FaUserFriends size={30} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
