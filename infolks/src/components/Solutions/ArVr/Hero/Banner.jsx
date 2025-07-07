import banner from "/solutions/ar-vr/banner/banner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";
import Navbar from "../../../../layouts/Navbar.jsx";
import PrimaryButton from "../../../Common/button/PrimaryButton.jsx";

const Banner = () => {
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
            AI DATA TO IMPROVE
            <br />
            AUGMENTED REALITY & VIRTUAL REALITY
          </h1>
          <div className="flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%] lg:w-[70%]">
          <p className="paragraph">
              AR and VR enhance real-life experiences by seamlessly integrating
              digital information into physical surroundings, blending virtual,
              and tangible worlds.</p> 
              <p className="paragraph mt-1">
              To make the most of AR and VR, it&apos;s
              important to create dependable and creative solutions for
              immersive user experiences. Using accurately labeled, top-notch
              data is key for building a solid base in the AR/VR realm.
          </p>
          </div> 
          <PrimaryButton text={"CONNECT OUR EXPERTS"} link={"/contact"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
