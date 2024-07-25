import React from "react";
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="sm-w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center">
      <form>
        <input className="py-5 px-3 w-[80vw] text-xl mx-auto sm:text-3xl outline-none border-b-2 bg-bgColor " type="search" name="search" id="search" placeholder="search your asset" />
      </form>
      <IoIosSearch className="text-3xl sm:text-5xl text-gray-400 -ml-10" />
    </div>
  );
};

export default HeroSection;
