import { useEffect, useState } from "react";
import banner from "/solutions/text-annotations/banner/banner.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../../layouts/Navbar.jsx";
import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph.jsx";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(290);
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
      <div className="relative overflow-hidden">
        {/* <img
          className="w-full h-screen object-cover"
          src={banner}
          alt="Background Image"
        /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        >
          <source src={banner} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="hero-banner-heading-h1 lg:leading-[63px] 2xl:leading-[70px]">
            EMPOWERING AI MODELS
            <br />
            THROUGH ENHANCED TEXT ANNOTATION
          </h1>
           <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <p className="hidden lg:block paragraph">
              AI transforms text annotation by automating the labeling and categorization of large volumes of textual data. Using natural language processing algorithms, AI efficiently tags, classifies, and extracts key information. Precise text annotation creates high-quality datasets essential for training models to understand language nuances, context, and sentiment, improving their accuracy and performance. 
            </p>
          </div>
          <div className="lg:hidden flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
            <ReadMoreLessParagraph
              id="text_annotation_banner"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
              readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
            >
              <p>AI transforms text annotation by automating the labeling and categorization of large volumes of textual data. Using natural language processing algorithms, AI efficiently tags, classifies, and extracts key information. Precise text annotation creates high-quality datasets essential for training models to understand language nuances, context, and sentiment, improving their accuracy and performance.</p> 
              <p></p>
            </ReadMoreLessParagraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
