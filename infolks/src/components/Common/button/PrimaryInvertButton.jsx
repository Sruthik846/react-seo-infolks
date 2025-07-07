import { useState } from "react";
import arrow from "/home/icons/arrowRight.png";
import hoverArrow from "/home/icons/arrow blue.svg";
import { Link } from "react-router-dom";
import React from 'react';

// eslint-disable-next-line react/prop-types
function PrimaryInvertButton({ text, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <Link to={link}>
        <div
          className="flex justify-center items-center relative group cursor-pointer mt-5 gap-x-[1rem]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="relative mx-auto px-4 py-4  uppercase tracking-wide text-[#37508A]">
          <span className="relative z-10 text-sm sm:text-base">{text}</span>
          </button>
          <span className="absolute inset-0 h-full w-full bg-[#FFFBF0] border border-[#13B2F5] transition-all duration-500 ease-out group-hover:w-[calc(100%-4rem)] md:group-hover:w-[calc(100%-4.1rem)] rounded-full"></span>
          
          <span className="relative z-20 flex justify-center items-center bg-[#13B2F5] border-4 border-white rounded-full group-hover:border-[#13B2F5] -translate-x-1.5 delay-300 duration-100 group-hover:delay-0" style={{ width: "50px", height: "50px" }}>
  <img
    src={arrow}
    alt=""
    className="w-6"
    style={{ fill: isHovered ? "red" : "blue" }}
  />
</span>

        </div>
      </Link>
    </div>
  );
}

export default PrimaryInvertButton;
