import KeyIndustries from "./Industries/KeyIndustries";
import TalkToExperts from "./TalkToExperts";
import "../Industry/style.css";
import "../Industry/cursor.scss";
import { useEffect } from "react";
import gsap from "gsap";

const Industry = () => {
  useEffect(() => {
    const container = document.querySelector(".custom-cursor-container");
    const shapes = document.querySelectorAll(".shape");

    if (!container || shapes.length === 0) return;

    const { width, height } = container.getBoundingClientRect();

    shapes.forEach((shape) => {
      gsap.set(shape, {
        x: width / 2,
        y: height / 2,
      });
    });

    const handleMouseMove = (evt) => {
      const { left, top } = container.getBoundingClientRect();
      const mouseX = evt.clientX - left;
      const mouseY = evt.clientY - top;

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container relative px-5 mx-auto md:px-0">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] font-primary-regular overflow-hidden -mt-16">
          <div className="relative overflow-hidden bg-[#37508A] custom-cursor-container lg:h-80 2xl:h-[28rem]">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="bg-[#FFFBF0] mix-blend-lighten absolute inset-0">
              <div className="flex items-center justify-center w-full h-full pointer-events-none">
                <h2 className="text-center heading-h2 leading-[1.8em]!">
                  TAKE A LOOK AT <br /> THE KEY INDUSTRIES IN WHICH OUR DATA
                  <br /> ANNOTATION EXPERTISE SHINE.
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center w-full mt-10 lg:mt-80 2xl:mt-96">
                <div className="absolute w-full pt-2">
                  <div className="grid w-full min-h-screen">
                    <div className="w-full overflow-hidden">
                      <div className="grid grid-cols-3 gap-5">
                        <div className="flex flex-col pt-40 marquee-text-track h-max mt-14 gap-y-40">
                          <p className="px-4 py-2 translate-x-20 max-w-fit">
                            Agriculture
                          </p>
                          <p className="px-4 py-2 max-w-fit translate-x-[16rem]">
                            Geospatial
                          </p>
                          <p className="px-4 py-2 max-w-fit">Healthcare</p>
                          <p className="px-4 py-2 max-w-fit  md:translate-x-[10rem] whitespace-nowrap">
                            Human attribution
                          </p>
                          <p className="px-4 py-2 max-w-fit">Healthcare</p>
                          <p className="px-4 py-2 translate-x-20 max-w-fit">
                            Agriculture
                          </p>
                          <p className="px-4 py-2 max-w-fit translate-x-[16rem]">
                            Geospatial
                          </p>
                          <p className="px-4 py-2 max-w-fit">Healthcare</p>
                          <p className="px-4 py-2 max-w-fit  md:translate-x-[10rem] whitespace-nowrap">
                            Human attribution
                          </p>
                          <p className="px-4 py-2 max-w-fit">Healthcare</p>
                        </div>

                        <div className="flex flex-col pt-40 marquee-text-track h-max mt-14 gap-y-40">
                          <p className="px-4 py-2 -mt-5 translate-x-20 max-w-fit md:mt-0">
                            Automotive
                          </p>
                          <p className="px-4 py-2 max-w-fit md:translate-x-[16rem] whitespace-nowrap">
                            Security & Survilence
                          </p>
                          <p className="px-4 py-2 max-w-fit -mt-14 md:mt-0">
                            Retail
                          </p>
                          <p className="px-4 py-2 max-w-fit translate-x-20 md:translate-x-[10rem]">
                            Manufacturing
                          </p>
                          <p className="px-4 py-2 max-w-fit">Livestock</p>
                          <p className="px-4 py-2 translate-x-20 max-w-fit">
                            Automotive
                          </p>
                          <p className="px-4 py-2 max-w-fit md:translate-x-[16rem] whitespace-nowrap">
                            Security & Survilence
                          </p>
                          <p className="px-4 py-2 max-w-fit -mt-14 md:mt-0">
                            Retail
                          </p>
                          <p className="px-4 py-2 max-w-fit translate-x-20 md:translate-x-[10rem]">
                            Manufacturing
                          </p>
                          <p className="px-4 py-2 max-w-fit">Livestock</p>
                        </div>

                        <div className="flex flex-col pt-40 marquee-text-track h-max mt-14 gap-y-40">
                          <p className="px-4 py-2 mt-10 -translate-x-20 max-w-fit md:mt-0 md:translate-x-20 whitespace-nowrap">
                            Food & Beverages
                          </p>
                          <p className="px-4 py-2 max-w-fit translate-x-[16rem] whitespace-nowrap">
                            Finance and Banking
                          </p>
                          <p className="px-4 py-2 max-w-fit -mt-14 md:mt-0">
                            Sports
                          </p>
                          <p className="px-4 py-2 max-w-fit md:translate-x-[10rem]">
                            Waste management
                          </p>
                          <p className="px-4 py-2 max-w-fit">Logistics</p>
                          <p className="px-4 py-2 mt-10 -translate-x-20 max-w-fit md:mt-0 md:translate-x-20 whitespace-nowrap">
                            Food & Beverages
                          </p>
                          <p className="px-4 py-2 max-w-fit translate-x-[16rem] whitespace-nowrap">
                            Finance and Banking
                          </p>
                          <p className="px-4 py-2 max-w-fit -mt-14 md:mt-0">
                            Sports
                          </p>
                          <p className="px-4 py-2 max-w-fit md:translate-x-[10rem]">
                            Waste management
                          </p>
                          <p className="px-4 py-2 max-w-fit">Logistics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <KeyIndustries />
          <TalkToExperts />
        </div>
      </section>
    </div>
  );
};

export default Industry;
