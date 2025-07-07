import { useEffect, useState } from "react";
import banner from "/quality/banner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../layouts/Navbar.jsx";
import ReadMoreLess from "../../ReadMoreLess.jsx";

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
    <section className="min-h-screen relative font-primary-regular">
      <Navbar />
      <div className="relative overflow-hidden">
        <img
          className="w-full h-screen object-cover"
          src={banner}
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f] to-[rgba(2,26,161,0.67)] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="hero-banner-heading-h1">
            QUALITY ASSURANCE AT ITS FINEST
          </h1>
          <h4 className="text-white capitalize mt-3 text-center lg:text-left heading-h3 w-[80%]">
            Quality is Our Responsibility{" "}
          </h4>
          <p className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="about_banner"
              charLimit={charLimit}
              readMoreText="Read more"
              readLessText="Read less"
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              At Infolks, our unwavering commitment to quality is the
              cornerstone of everything we do. We understand that in
              today&apos;s fast-paced and competitive business landscape,
              quality is not just a buzzword but a fundamental requirement for
              success. We consistently strive to surpass expectations and
              deliver the highest level of quality across all facets of our
              operations.
            </ReadMoreLess>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
