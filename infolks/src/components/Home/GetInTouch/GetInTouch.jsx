import bgImage from "/icons/get-in-touch-bg.png";
import bgBlueImage from "/industries/agriculture/share-projects-bg-image.png";
import IconButton from "../../Common/button/IconButton";
import React from 'react';


const GetInTouch = () => {
  return (
    <section className="flex justify-center items-center font-primary-regular w-full -mb-1">
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
            className="w-full z-10 opacity-[0.3] h-40 md:h-44 lg:h-full rounded-[16px] lg:rounded-[35px]"
          />
          <div className="absolute inset-0 text-white z-20 text-center flex flex-col justify-center items-center">
            <h3 className="heading-h3 md:mb-2 lg:mb-8 font-primary-medium">
              GET IN TOUCH TODAY
            </h3>
            <IconButton link={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
