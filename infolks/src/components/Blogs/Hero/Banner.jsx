import banner from "/Blog/blog_bg.png";
import banner2 from "/Blog/blog_bg2.png";
import Navbar from "../../../layouts/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Hero/banner.css";

const Banner = () => {
  return (
    <section className="h-screen relative font-primary-regular">
      <Navbar />
      <div className="relative">
        <img
          className="w-full h-screen relative object-cover"
          src={banner}
          alt="Background Image"
        />
        <img src={banner2} className="absolute top-0 w-full h-screen" alt="" />
        <div className="absolute inset-0 flex flex-col container mx-auto top-44 md:top-64 lg:top-40 2xl:top-92">
          <h1 className="text-white text-[20px] md:text-[30px] lg:text-[50px] text-center leading-[27px] md:leading-[45px] lg:leading-[60px]">
            BLOGS
          </h1>
          <div className="flex flex-col text-center justify-center items-center">
            <p className="paragraph lg:leading-8 text-[#FFFBF0] text-[16px] md:text-[20px] lg:text-[23px] mt-3 w-[90%]">
            Gain valuable insights into how data annotations act as catalysts,
            transforming the capabilities of AI and ML technologies customised
            for diverse industries. Dive into our blogs and delve into the
            pivotal role that data annotations play within various sectors,
            providing valuable insights into their impact and significance.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
