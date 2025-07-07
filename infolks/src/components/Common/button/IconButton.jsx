import { useState } from "react";
import arrow from "/home/icons/arrow.svg";
import hoverArrow from "/home/icons/arrow blue.svg";
import { Link } from "react-router-dom";
import React from 'react';


function IconButton({ link }) {
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
        <button
          className="xl:size-16 size-10 mt-2  md:mt-0 bg-[#13B2F5] rounded-full flex justify-center items-center hover:bg-white cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={isHovered ? hoverArrow : arrow}
            alt=""
            className="w-6"
          />
        </button>
      </Link>
    </div>
  );
}

export default IconButton;
