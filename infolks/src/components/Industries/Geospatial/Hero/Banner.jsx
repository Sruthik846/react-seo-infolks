import { useEffect, useState } from "react";
import banner from "/industries/geospatial/banner/banner.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../../layouts/Navbar";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import arrow from "/home/icons/arrowRight.png";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(200);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(220);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setCharLimit(130);
      } else {
        // Small screens and below (sm and xs)
        setCharLimit(80);
      }
    };

    // Initial check
    updateCharLimit();

    // Update charLimit on window resize
    window.addEventListener("resize", updateCharLimit);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCharLimit);
    };
  }, []);
  return (
    <section className="h-screen relative font-primary-regular">
      <Navbar />
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        >
          <source src={banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="text-white hero-banner-heading-h1 text-center lg:text-left">
            GEOSPATIAL DATA <br />
            TO ENHANCE AI MODELS
          </h1>

          <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <p className="paragraph hidden lg:block">
              The blend of smart technology and geospatial tools is boosting
              creativity and efficiency. With satellite images, LiDAR, and
              remote sensing data, accurate labeling adds vital detail and helps
              systems deliver faster, sharper, and more scalable geospatial
              insights.
            </p>
          </div>
          <div className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="geospatial_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              The blend of smart technology and geospatial tools is boosting
              creativity and efficiency. With satellite images, LiDAR, and
              remote sensing data, accurate labeling adds vital detail and helps
              systems deliver faster, sharper, and more scalable geospatial
              insights.
            </ReadMoreLess>
          </div>
          <div className="mt-5 flex justify-center items-center lg:justify-start group">
            <button className="bg-[#FFFBF0] text-[#37508A] text-[12px] md:text-[16px] rounded-full flex p-3 md:p-4 px-2 md:px-6 w-[200px] md:w-[290px] items-center transition-all duration-300 ease-in-out group-hover:w-[160px] md:group-hover:w-[240px]">
              CONNECT OUR EXPERTS
            </button>
            <span className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-7 md:-ml-10 group-hover:ml-3 transition-all duration-300 ease-in-out">
              <img src={arrow} alt="" className="w-4 md:w-6" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
