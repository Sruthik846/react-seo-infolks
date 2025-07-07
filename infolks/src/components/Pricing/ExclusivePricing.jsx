import { useRef } from "react";
import exclusive_pricing from "/pricing/icons/exclusive-pricing.svg";
import "./style.css";

const ExclusivePricing = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full mx-auto xl:container p-2 md:p-4 lg:p-0 lg:mt-10 2xl:mt-2 font-primary-regular text-[#37508A] xl:mb-2">
      <div className="flex flex-col bg-[#FFFBF0] font-primary-regular text-[#37508A]">
        <div
          className="flex hide-scroll-bar"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="hidden md:flex gap-10 w-full  xl:px-20 2xl:px-28">
            <div className="relative group md:h-[150px] lg:h-[240px] w-[100%]">
              <div className="lg:w-[99%] p-5 lg:p-10 absolute top-0 bg-[#F9F5E9] card-compact bg-base-100 mb-3 lg:mb-10 border z-0 rounded-2xl ml-3 mr-3 border-[#5F82CC] select-none group-hover:border-[#13B2F5]">
                <div className="flex gap-10">
                  <div className="flex justify-center items-center">
                    <img
                      src={exclusive_pricing}
                      className="w-32 object-cover"
                      alt=""
                    />
                  </div>

                  <div>
                    <h2 className="heading-h3 2xl:leading-[50px]">
                      EXCLUSIVE <br />
                      PRICING FOR UNIVERSITIES
                    </h2>
                    <p className="paragraph mt-1">
                      Infolks supports the university students and scholars with
                      exclusive pricing by foreseeing that they are the future.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-[99%] p-5 lg:p-10 bg-[#F9F5E9] bg-base-100 mb-3 lg:mb-10 border z-10 border-[#13B2F5] rounded-3xl ml-3 mr-3 group-hover:ml-1 group-hover:mt-2 group-hover:mr-5 transition-all duration-300 ease-in-out">
                <div className="flex gap-10">
                  <div className="flex justify-center items-center">
                    <img
                      src={exclusive_pricing}
                      className="w-32 object-cover"
                      alt=""
                    />
                  </div>

                  <div>
                    <h2 className="heading-h3 2xl:leading-[50px]">
                      EXCLUSIVE <br />
                      PRICING FOR UNIVERSITIES
                    </h2>
                    <p className="paragraph mt-1">
                      Infolks supports the university students and scholars with
                      exclusive pricing by foreseeing that they are the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile screen */}
          <div className="flex flex-col md:hidden lg:hidden w-full">
            <div className="relative group h-[250px] w-[100%]">
              <div className="lg:w-[100%] p-5 absolute top-0 bg-[#F9F5E9] card-compact bg-base-100 mb-10 border z-0 rounded-2xl ml-3 mr-3 border-[#5F82CC] select-none group-hover:border-[#13B2F5]">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 justify-center items-center">
                    <img src={exclusive_pricing} className="w-16" alt="" />
                    <h2 className="heading-h2 ">
                      EXCLUSIVE <br />
                      PRICING FOR UNIVERSITIES
                    </h2>
                  </div>

                  <div>
                    <p className="paragraph mt-1">
                      Infolks supports the university students and scholars with
                      exclusive pricing by foreseeing that they are the future.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-[100%] p-5 bg-[#F9F5E9] bg-base-100 mb-10 border z-10 border-[#13B2F5] rounded-3xl ml-3 mr-3 group-hover:ml-0 group-hover:mt-3 group-hover:mr-5 transition-all duration-300 ease-in-out">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5 justify-center items-center">
                    <img src={exclusive_pricing} className="w-16" alt="" />
                    <h2 className="heading-h2">
                      EXCLUSIVE <br />
                      PRICING FOR UNIVERSITIES
                    </h2>
                  </div>

                  <div>
                    <p className="paragraph mt-1">
                      Infolks supports the university students and scholars with
                      exclusive pricing by foreseeing that they are the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivePricing;
