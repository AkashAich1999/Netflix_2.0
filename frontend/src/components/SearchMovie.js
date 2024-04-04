import React from "react";

const SearchMovie = () => {
  return (
    <div className="flex justify-center pt-[10%] w-[100%]">
      <form className="w-[50%]">
        <div className="flex justify-between border-2 p-2 border-gray-200 shadow-md w-[100%] rounded-lg">
          <input className="w-full outline-none rounded-md text-lg" type="text" placeholder="Search Movies..." />
          <button className="bg-red-700 text-white rounded-md py-2 px-4">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovie;
