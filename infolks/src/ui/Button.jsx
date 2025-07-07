import React from "react";
import arrow from "/home/icons/arrowRight.png";
import { Link } from "react-router-dom";

const Button = ({ value }) => {
  return (
    <Link to="/contact">
      <div className="flex group font-primary-regular transition-all duration-300 ease-in-out">
        <button className="bg-white text-[#37508A] text-[12px] lg:text-[19px] rounded-full flex p-2 lg:p-4 px-2 lg:px-8 w-[150px] lg:w-[350px] items-center lg:group-hover:w-[290px] group-hover:w-[200px]">
          {value}
        </button>
        <div className="bg-white p-1 rounded-full relative -ml-10 md:-ml-6 lg:-ml-14 group-hover:ml-1 flex justify-center items-center">
          <span className="w-[20px] lg:w-[52px] h-[20px] lg:h-[50px]  bg-[#13B2F5] rounded-full flex justify-center items-center">
            <img src={arrow} alt="" className="lg:w-6 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Button;
