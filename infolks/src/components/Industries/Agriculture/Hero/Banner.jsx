import { useEffect, useState } from "react";
import Navbar from "../../../../layouts/Navbar.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import arrow from "/home/icons/arrowRight.png";
import agriculture from "/industries/agriculture/agriculture.mp4";
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
          <source src={agriculture} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col mx-auto container top-28 md:top-40 lg:top-64 justify-center items-center lg:justify-start lg:items-start">
          <h1 className="text-white text-center lg:text-left heading-h1">
            DATA TO ENHANCE AI <br />
            IN THE AGRICULTURE INDUSTRY
          </h1>
          <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[80%]">
            <ReadMoreLess
              id="agriculture_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"....Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              The introduction of powerful AI technology has brought in a new
              era of precision agriculture. By incorporating several
              cutting-edge technologies, AI empowers the agricultural industry
              to attain unparalleled levels of efficiency, productivity, and
              environmental sustainability. As a data labeling company, we
              support AI enterprises and farmers to advance agriculture for a
              sustainable future, meeting global food demands while preserving
              the environment. The introduction of powerful AI technology has
              brought in a new era of precision agriculture. By incorporating
              several cutting-edge technologies, AI empowers the agricultural
              industry to attain unparalleled levels of efficiency,
              productivity, and environmental sustainability. As a data labeling
              company, we support AI enterprises and farmers to advance
              agriculture for a sustainable future, meeting global food demands
              while preserving the environment.
            </ReadMoreLess>
          </div>
          {/* <Button value='CONNECT OUR EXPERTS'/> */}
          <PrimaryButton text={"CONNECT OUR EXPERTS"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
