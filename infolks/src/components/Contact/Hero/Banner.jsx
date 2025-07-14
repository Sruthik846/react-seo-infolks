import { useEffect, useState } from "react";
import banner1 from "/contact/banner-video.mp4";
import banner2 from "/contact/banner-video2.mp4";
import banner3 from "/contact/banner-video3.mp4";
import banner4 from "/contact/banner-video4.mp4";
import Navbar from "../../../layouts/Navbar.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./banner.css";
import img from "/contact/bgImage.png";
import "../style.css";
import ReadMoreLessParagraph from "../../ReadMoreLessParagraph.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);
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

  useEffect(() => {
    const updateCharLimit = () => {
      if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(245);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(200);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setCharLimit(250);
      } else {
        // Small screens and below (sm and xs)
        setCharLimit(120);
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
    <section className="min-h-screen relative font-primary-regular">
      <Navbar />

      <div className="">
        {/* Fixed Heading and Text */}
        <div className="hero-banner non-interactive absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start z-10 absolute-heading">
          <h1 className="hero-banner-heading-h1 ">
            LET&apos;S BUILD
            <br/> <span className="pt-10">THE AI WORLD TOGETHER</span>
          </h1>
          <p className="paragraph flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start text-[#FFFBF0] mt-3 w-[90%] lg:w-[70%] interactive">
            <p className="paragraph">Infolks transforms raw data into high-quality datasets for AI and ML. We're your trusted partner in accuracy, security, and innovation.</p>
              <p  className="mt-2 paragraph">Need data labeling support? Reach out to our team today!</p>
            
          </p>
        </div>
        <Slider {...settings}>
          <div className="relative">
            <video autoPlay muted  playsInline loop className="w-full h-screen object-cover">
              <source src={banner4} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-l from-[#021aa16b]  to-[#021aa19c] bg-opacity-70 "></div>
            <img src={img} alt="" className="absolute top-0  h-screen w-full" />
          </div>
 
          <div className="relative">
            <video autoPlay muted  playsInline loop className="w-full h-screen object-cover">
              <source src={banner2} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-l from-[#021aa16b]  to-[#021aa19c] bg-opacity-70 "></div>
            <img src={img} alt="" className="absolute top-0  h-screen w-full" />
          </div>

          <div className="relative">
            <video autoPlay muted loop  playsInline className="w-full h-screen object-cover">
              <source src={banner3} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-l from-[#021aa16b]  to-[#021aa19c] bg-opacity-70 "></div>
            <img src={img} alt="" className="absolute top-0  h-screen w-full" />
          </div>

          <div className="relative">
            <video autoPlay muted loop  playsInline className="w-full h-screen object-cover">
              <source src={banner1} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-l from-[#021aa16b]  to-[#021aa19c] bg-opacity-70 "></div>
            <img src={img} alt="" className="absolute top-0  h-screen w-full" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
