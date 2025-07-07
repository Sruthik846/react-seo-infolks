import { useState } from "react";
import bgImage from "/icons/get-in-touch-bg.png";
import bgBlueImage from "/industries/agriculture/share-projects-bg-image.png";
import arrow from "/home/icons/arrow.svg";
import hoverArrow from "/home/icons/arrow blue.svg";

const ShareYourProjects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="flex justify-center items-center font-primary-regular">
      <div className="relative w-full">
        {/* Background Image */}
        <div
          className="relative z-0 flex justify-center items-center rounded-[16px] lg:rounded-[35px]"
          style={{
            backgroundImage: `url(${bgBlueImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={bgImage}
            alt="Overlay Image"
            className="w-full z-10 opacity-[0.3]  h-32 md:h-full rounded-[16px] lg:rounded-[35px]"
          />
          <div className="absolute inset-0 text-white z-20 text-center flex flex-col justify-center items-center">
            <h3 className="heading-h3 mb-1 md:mb-2 lg:mb-5 font-primary-medium">
              SHARE YOUR PROJECTS
            </h3>
            <button
              className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px] right-1 bg-[#13B2F5] rounded-full flex justify-center items-center hover:bg-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={isHovered ? hoverArrow : arrow}
                alt=""
                className="w-3 md:w-5 lg:w-7"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareYourProjects;
