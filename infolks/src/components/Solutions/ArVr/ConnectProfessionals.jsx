import { useState } from "react";
import bgImage from "/icons/get-in-touch-bg.png";
import arrow from "/home/icons/arrow.svg";
import hoverArrow from "/home/icons/arrow blue.svg";

const Connect_Professionals = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <section className="flex justify-center items-center">
      <div className="relative w-full">
        {/* Gradient Background */}
        <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff]  rounded-[36px] flex justify-center items-center relative z-0 ">
          <img
            src={bgImage}
            alt="Your Image"
            className="w-full z-10 opacity-[0.3]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center flex flex-col justify-center items-center">
            <h1 className="text-[40px] mb-5 mt-3">CONNECT OUR PROFESSIONALS</h1>
            <button
              className="w-[60px] h-[60px] right-1 bg-[#13B2F5] rounded-full flex justify-center items-center hover:bg-white transition-all duration-300 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={isHovered ? hoverArrow : arrow} // Change hoverArrow to your hover SVG image source
                alt=""
                className="w-7"
                style={{ fill: isHovered ? "red" : "blue" }} // Change the colors accordingly
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect_Professionals;
