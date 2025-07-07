import arrow from "/home/icons/arrowRight.png";
import { Link } from "react-router-dom";
import hoverArrow from "/home/icons/arrow blue.svg";
import React from 'react';


function PrimaryHoverWhiteButton({ text, link }) {
  return (
    <div>
      <Link to={link}>
        <div className="flex justify-center items-center relative group cursor-pointer gap-x-[1rem] md:gap-x-[.7rem]">
          <button className="relative mx-auto px-4 md:py-2.5 uppercase tracking-wide text-[#37508A]">
            <span className="relative z-10 text-sm">{text}</span>
          </button>
          <span className="absolute inset-0 h-full w-full bg-[#FFFBF0] transition-all duration-500 ease-out group-hover:w-[calc(100%-3.8rem)] md:group-hover:w-[calc(100%-3.8rem)] rounded-full"></span>
          <div className="relative z-20 flex items-center justify-center bg-[#13B2F5] border-4 border-white rounded-full group-hover:bg-white md:px-3.5 md:py-4 -translate-x-1 transition-all delay-100 duration-100 group-hover:delay-0" style={{ width: "50px", height: "50px" }}>
            <img src={arrow} alt="" className="w-4 md:w-6 group-hover:hidden" />
            <img
              src={hoverArrow}
              alt=""
              className="w-4 md:w-6 hidden group-hover:block"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PrimaryHoverWhiteButton;
