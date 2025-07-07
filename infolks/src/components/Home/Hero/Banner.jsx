import React from 'react';
import banner from "/home/hero/videos/banner.gif";
import banner1 from "/home/hero/videos/banner1.mp4";
import banner3 from "/home/hero/videos/banner3.mp4";
import Navbar from "../../../layouts/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import PrimaryButton from "../../Common/button/PrimaryButton";

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 11000,
    pauseOnHover: false,
  };

  return (
    <section className="min-h-screen relative">
      <Navbar />
      <Slider {...settings}>
        <div className="relative">
          <img
            className="w-full h-screen object-cover"
            src={banner}
            alt="Background Image"
          />
          <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

          <div className="absolute inset-0 flex flex-col mx-auto container top-10 lg:top-48 2xl:top-92 justify-center items-center lg:justify-start lg:items-start lg:left-[6%]">
            <h1 className="hero-banner-heading-h1">
              ACCURATE ANNOTATIONS
              <br /> <span>FOR ACTIONABLE INSIGHTS</span>
            </h1>
            <h4 className="text-white mt-3 text-center lg:text-left heading-h3 w-[80%]">
              Infolks, An Exclusive Data Annotation Partner From Infolks Group
            </h4>
            <p className="text-white text-center lg:text-left paragraph mt-2 w-[80%]">
              We process high-quality training data for AI and ML models through
              fully managed data labeling services.
            </p>

            <PrimaryButton
              text={"PARTNER WITH US"}
              link={"/contact"}
            ></PrimaryButton>
          </div>
        </div>
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-screen object-cover"
          >
            {" "}
            <source src={banner3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>
          <div className="absolute inset-0 flex flex-col mx-auto container top-10 lg:top-56 2xl:top-92 justify-center items-center lg:justify-start lg:items-start lg:left-[6%]">
            <h1 className="hero-banner-heading-h1">
              ENHANCE AI WITH HUMAN ACCURACY
            </h1>
            <h5 className="text-white text-center lg:text-left heading-h5 mt-2 w-[80%] 2xl:w-[50%]">
              We bridge the gap between machine learning algorithms and
              real-world data by infusing the precision and intuition of human
              expertise into the AI training process.
            </h5>

            <PrimaryButton
              text={"PARTNER WITH US"}
              link={"/contact"}
            ></PrimaryButton>
          </div>
        </div>
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-screen object-cover"
          >
            {" "}
            <source src={banner1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

          <div className="absolute inset-0 flex flex-col mx-auto container top-10 lg:top-52 2xl:top-92 justify-center items-center lg:justify-start lg:items-start lg:left-[6%]">
            <h1 className="hero-banner-heading-h1">
              DIFFERENT DATA TYPES, VARIOUS <br />
              <span>TECHNIQUES, AND SEVERAL INDUSTRIES</span>
            </h1>
            <h5 className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[65%]">
              Highly skilled and trained human annotators precisely curate and
              label data with exceptional precision.
            </h5>
            <PrimaryButton
              text={"PARTNER WITH US"}
              link={"/contact"}
            ></PrimaryButton>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
