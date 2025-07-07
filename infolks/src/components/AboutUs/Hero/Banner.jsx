import { useEffect, useState } from "react";
import banner from "/About/banner/banner.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Hero/banner.css";
import Navbar from "../../../layouts/Navbar.jsx";
import ReadMoreLess from "../../ReadMoreLess.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1360) {
        // Extra large screens (xl)
        setCharLimit(280);
      }
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(210);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(150);
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
      <div className="relative text-white overflow-hidden">
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
        <div className="absolute inset-0 flex flex-col mx-auto container top-10 lg:top-48 2xl:top-92 justify-center items-center lg:justify-start lg:items-start lg:left-[6%] w-full">
          <h1 className="hero-banner-heading-h1 hidden md:block">
            EMPOWERING AI WITH HIGH
            <br /> <span>QUALITY DATA: INFOLKS LEADING THE WAY</span>
          </h1>
          <h1 className="hero-banner-heading-h1 block md:hidden">
            EMPOWERING AI WITH HIGH QUALITY DATA: INFOLKS LEADING THE WAY
          </h1>
          <p className="hidden lg:flex flex-col paragraph text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            Infolks is a leading provider of high-quality, scalable data
            annotation services tailored to the needs of various industries. We
            specialize in delivering accurate and reliable training data that
            powers AI and machine learning applications.
          </p>
          <p className="flex lg:hidden flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="about_banner"
              charLimit={charLimit}
              readMoreText="Read more"
              readLessText="Read less"
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              Infolks is a leading provider of high-quality, scalable data
              annotation services tailored to the needs of various industries.
              We specialize in delivering accurate and reliable training data
              that powers AI and machine learning applications.
            </ReadMoreLess>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
