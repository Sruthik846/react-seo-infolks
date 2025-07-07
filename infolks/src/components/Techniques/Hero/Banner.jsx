import { useEffect, useState } from "react";
import Navbar from "../../../layouts/Navbar";
import ReadMoreLess from "../../ReadMoreLess.jsx";
import technique from "/techniques/video/technique.mp4";
import PrimaryButton from "../../Common/button/PrimaryButton.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(250);
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
    <section className="min-h-screen relative font-primary-regular">
      <Navbar />
      <div className="relative text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        >
          <source src={technique} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f] to-[rgba(2,26,161,0.67)] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="hero-banner-heading-h1">
            CHOOSE THE
            <br />
            RIGHT ANNOTATION TECHNIQUE TO
            <br />
            ENHANCE YOUR AI INITIATIVES
          </h1>
          <p className="hidden paragraph lg:flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
              We specialize in data annotation, offering extensive expertise and
              a wide range of services. Our commitment is to deliver precise
              datasets through diverse annotation techniques, ensuring
              accessibility to meet your unique requirements.
          </p>
          <p className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="about_banner"
              charLimit={charLimit}
              readMoreText="Read more"
              readLessText="Read less"
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              We specialize in data annotation, offering extensive expertise and
              a wide range of services. Our commitment is to deliver precise
              datasets through diverse annotation techniques, ensuring
              accessibility to meet your unique requirements.
            </ReadMoreLess>
          </p>
          <PrimaryButton text={"CONNECT US"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
