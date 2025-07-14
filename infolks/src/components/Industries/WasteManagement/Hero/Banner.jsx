import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../../layouts/Navbar.jsx";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import waste_management from "/industries/waste management/waste-management.mp4";
import PrimaryButton from "../../../Common/button/PrimaryButton.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(190);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(150);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setCharLimit(130);
      } else {
        // Small screens and below (sm and xs)
        setCharLimit(80);
      }}
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
        {/* <img className="w-full h-screen object-cover" src={banner} alt="Background Image" /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        >
          {" "}
          <source src={waste_management} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="text-white hero-banner-heading-h1 text-center lg:text-left">
            AI MEETS QUALITY DATA FOR <br />
            SUSTAINABLE WASTE MANAGEMENT
          </h1>
          <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <p className="paragraph hidden lg:block">
              Smart technology is transforming waste management with cleaner,
              more efficient solutions. Accurate data labeling supports this
              shift by helping systems classify waste, spot recyclables, and
              detect hazards—paving the way for smarter, greener waste handling.
            </p>
          </div>
          <div className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="waste_management_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              Smart technology is transforming waste management with cleaner,
              more efficient solutions. Accurate data labeling supports this
              shift by helping systems classify waste, spot recyclables, and
              detect hazards—paving the way for smarter, greener waste handling.
            </ReadMoreLess>
          </div>

          <PrimaryButton text={"CONNECT OUR EXPERTS"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
