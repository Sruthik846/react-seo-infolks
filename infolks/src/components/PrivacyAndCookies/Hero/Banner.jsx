import Navbar from "../../../layouts/Navbar";
import banner from "/Blog/blog_bg.png";
import banner2 from "/Blog/blog_bg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";

const Banner = () => {
  return (
    <section className="lg:h-[350px] xl:h-[500px] 2xl:h-[650px] h-[360px] relative font-primary-regular">
      <Navbar />
      <div className="relative">
        <img
          className="w-full h-[600px] lg:h-full relative"
          src={banner}
          alt="Background Image"
        />
        <img src={banner2} className="absolute top-0 w-full h-[600px] lg:h-full" alt="" />
        <div className="absolute inset-0 bg-linear-to-l from-[#ccd2f01f] to-[#021aa1ab] bg-opacity-70"></div>

        <div className="absolute inset-0 flex flex-col container mx-auto justify-center items-center text-center h-[430px] lg:h-[400px] xl:h-[600px] 2xl:h-[650px]">
          <h1 className="hero-banner-contactheading-h1">PRIVACY AND COOKIES POLICY</h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
