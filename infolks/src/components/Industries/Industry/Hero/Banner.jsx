import { useEffect, useState } from "react";
import industry_bg from "/industries/Industries-cover.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../../layouts/Navbar";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import PrimaryButton from "../../../Common/button/PrimaryButton.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(245);
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
        {/* <img className="w-full h-screen" src={banner} alt="Background Image" /> */}
        {/* <img src={industry_bg} className="absolute inset-0 h-screen w-full" alt="" /> */}
        <video autoPlay muted playsInline loop className="w-full h-screen object-cover">
          <source src={industry_bg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container top-10 lg:top-48 2xl:top-92 justify-center items-center lg:justify-start lg:items-start lg:left-[6%]">
          <h1 className="text-white text-center lg:text-left hero-banner-heading-h1">
            FROM HEALTHCARE TO RETAIL: <br />
            <span>SMART ANNOTATION FOR EVERY INDUSTRY</span>
          </h1>
          <div className="hidden lg:flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <p className="paragraph">
              Data labeling powers smarter AI and smarter industries. We deliver
              high-quality, accurate annotations tailored to each sector &apos;s
              unique needs.
            </p>
          </div>
          <div className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLess
              id="industry_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              Data labeling powers smarter AI and smarter industries. We deliver
              high-quality, accurate annotations tailored to each sector &apos;s
              unique needs.
            </ReadMoreLess>
          </div>

          <PrimaryButton text={"CONNECT US"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
