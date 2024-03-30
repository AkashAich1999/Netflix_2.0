import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className="absolute flex w-[100%] items-center justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex items-center">
        <IoIosArrowDropdown size="24px" color="white"/>
        <h1 className="text-lg font-medium text-white">Akash Developer</h1>
        <div className="ml-4">
          <button className="bg-red-700 text-white px-3 py-2 mx-1 rounded-lg">
            Search Movie
          </button>
          <button className="bg-red-700 text-white px-3 py-2 mx-1 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
