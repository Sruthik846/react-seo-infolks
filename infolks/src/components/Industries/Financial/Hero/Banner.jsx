import { useEffect, useState } from "react";
import banner from "/industries/financial/financial-cover.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Hero/banner.css";
import Navbar from "../../../../layouts/Navbar";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import PrimaryButton from "../../../Common/button/PrimaryButton.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(240);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(220);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setCharLimit(130);
      } else {
        // Small screens and below (sm and xs)
        setCharLimit(70);
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
        {/* <img className="w-full h-screen object-cover" src={banner} alt="Background Image" /> */}
        <video autoPlay playsInline muted loop className="w-full h-screen object-cover">
          <source src={banner} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="text-white text-center lg:text-left hero-banner-heading-h1">
            PERFECT ANNOTATED DATA
            <br /> <span>TO TRANSFORM FINANCIAL SECTOR</span>
          </h1>
            <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <p className="hidden lg:block paragraph">
             Finance is evolving, from trading to credit scoring, driven by accurate data labeling. Turning raw numbers into meaningful insights, quality annotation supports sharper decisions, strategic growth, and long-term success across the industry.
            </p>
          </div>
          <div className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="financial_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
             Finance is evolving, from trading to credit scoring, driven by accurate data labeling. Turning raw numbers into meaningful insights, quality annotation supports sharper decisions, strategic growth, and long-term success across the industry.
            </ReadMoreLess>
          </div>
          <PrimaryButton text={"CONNECT OUR PROFESSIONALS"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
