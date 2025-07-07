import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../../layouts/Navbar";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import logistics from "/industries/logistic/logistics.mp4";
import PrimaryButton from "../../../Common/button/PrimaryButton.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(200);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(150);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setCharLimit(100);
      } else {
        // Small screens and below (sm and xs)
        setCharLimit(60);
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
          {" "}
          <source src={logistics} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="hidden lg:block text-white hero-banner-heading-h1 text-center lg:text-left">
            AI EXCELLENCE FUELED BY <br />
            HIGH-QUALITY LOGISTICS DATA
          </h1>
           <h1 className="block lg:hidden text-white hero-banner-heading-h1 text-center lg:text-left">
            AI EXCELLENCE FUELED BY
            HIGH-QUALITY LOGISTICS DATA
          </h1>
             <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <p className="paragraph hidden lg:block">
            Technology is transforming logistics by converting raw data into actionable insights. Predictive tools anticipate supply chain issues, while optimized routing speeds up deliveries. Precise data labeling is essential to train systems that enhance accuracy and efficiency in logistics management.
            </p>
          </div>
          <div className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="logistics_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
            Technology is transforming logistics by converting raw data into actionable insights. Predictive tools anticipate supply chain issues, while optimized routing speeds up deliveries. Precise data labeling is essential to train systems that enhance accuracy and efficiency in logistics management.
            </ReadMoreLess>
          </div>
          <PrimaryButton text={"CONNECT OUR PROFESSIONALS"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
