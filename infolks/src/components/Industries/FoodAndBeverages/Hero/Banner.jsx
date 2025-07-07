import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Hero/banner.css";
import Navbar from "../../../../layouts/Navbar";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import food_and_beverage from "/industries/food & beverages/food-and-beverage.mp4";
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
          {" "}
          <source src={food_and_beverage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="text-white hero-banner-heading-h1 text-center lg:text-left">
            TRAINED DATA TO IMPROVE
            <br />
            FOOD & BEVERAGES INDUSTRY
          </h1>
           <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <p className="paragraph hidden lg:block">
             The food and beverage industry is embracing smart technology for better safety, sustainability, and innovation. Real-time monitoring improves quality control, while accurate data labeling provides the foundation needed to train systems that shape the future of food.
            </p>
          </div>

          <div className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="food_and_beverage_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
             The food and beverage industry is embracing smart technology for better safety, sustainability, and innovation. Real-time monitoring improves quality control, while accurate data labeling provides the foundation needed to train systems that shape the future of food.
            </ReadMoreLess>
           
          </div>
           <PrimaryButton text={"CONTACT US"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
