import { useEffect, useState } from "react";
import banner from "/solutions/nlp/banner/banner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../../layouts/Navbar.jsx";
import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph";

const Banner = () => {
  const [charLimit, setCharLimit] = useState(305);

  useEffect(() => {
    const updateCharLimit = () => {
      if (typeof window !== "undefined") {
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
    <section className="h-screen relative font-primary-regular">
      <Navbar />
      <div className="relative overflow-hidden">
        <img
          className="w-full h-screen object-cover"
          src={banner}
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f]  to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col mx-auto container justify-center items-center lg:items-start lg:left-[6%]">
          <h1 className="hero-banner-heading-h1">
            TRANSFORMING WORDS
            <br /> INTO ACTIONABLE INSIGHTS USING NLP
          </h1>
          <p className="paragraph flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
           
            <ReadMoreLessParagraph
                             id="nlp_banner"
                             charLimit={charLimit}
                             readMoreText={"Read more"}
                             readLessText={"Read less"}
                             readMoreClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
                             readLessClassName="lg:text-[#20B3F1] justify-center lg:justify-start paragraph"
                      >
                        <p>AI plays a crucial role in reshaping our interactions with the world. Natural Language Processing is dedicated to empowering machines with the ability to understand, interpret, and respond to human language. AI in NLP is crucial in breaking down language barriers, improving global communication, and fostering understanding across cultures.</p>
                        <p className="mt-2">NLP model training is at the heart of our NLP services, where we transform your data into valuable insights that can enhance your business operations and meet your requirements. With the expertise of our team, we can assist you in integrating NLP capabilities into various applications, enabling conversational intelligence.</p>
                      </ReadMoreLessParagraph>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
