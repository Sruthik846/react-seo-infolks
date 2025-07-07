import arrow from "/home/icons/arrow blue.svg";
import { Link } from 'react-router-dom'
import React from 'react';


function PrimaryBlueButton({text, link}) {
  return (
    <div>
        <Link to={link}>
        <div className="flex justify-center items-center relative group cursor-pointer lg:mt-8 mt-5 gap-x-[.6rem] md:gap-x-[.8rem] text-sm lg:text-base">
          <button className="relative mx-auto px-4 md:px-4 uppercase tracking-wide text-white">
            <span className="relative z-10">{text}</span>
          </button>
          <span className="absolute inset-0 h-full w-full bg-[#13b2f5] transition-all duration-500 ease-out group-hover:w-[calc(100%-4rem)] md:group-hover:w-[calc(100%-4rem)] rounded-full"></span>
          <div className="relative z-20 flex justify-center items-center  bg-white border-4 border-[#13b2f5] rounded-full group-hover:border-white -translate-x-1.5 delay-300 duration-100 group-hover:delay-0" style={{ width: "50px", height: "50px" }}>
          <img src={arrow} alt="" className="w-4 md:w-6" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PrimaryBlueButton