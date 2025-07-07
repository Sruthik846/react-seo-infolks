import arrow from "/home/icons/arrowRight.png";
import { Link } from "react-router-dom";
import React from 'react';



// eslint-disable-next-line react/prop-types
function PrimaryButton({ text, link }) {
  return (
    <div>
      <Link to={link}>
        <div className="flex justify-center items-center relative group cursor-pointer gap-x-[.6rem] md:gap-x-[.5rem] mt-5">
          <button className="relative mx-auto px-4 uppercase tracking-wide text-[#37508A]">
            <span className="relative z-10 text-sm">{text}</span>
          </button>
          <span className="absolute inset-0 h-full w-full bg-[#FFFBF0] transition-all duration-500 ease-out group-hover:w-[calc(100%-3.7rem)] md:group-hover:w-[calc(100%-3.7rem)] rounded-full"></span>
          <div
            className="relative z-20 flex items-center justify-center bg-[#13B2F5] border-4 border-white rounded-full group-hover:border-[#13B2F5] transition-all delay-300 duration-100 group-hover:delay-0"
            style={{ width: "50px", height: "50px" }}
          >
            <img src={arrow} alt="arrow" className="w-4 md:w-6" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PrimaryButton;
