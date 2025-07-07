import { useRef } from "react";
import donation from "/pricing/donation/donation.jpg";
import "./style.css";

const OurDonations = () => {
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
    <section className="w-full mx-auto xl:container font-primary-regular text-[#37508A]">
      <div className="flex flex-col bg-[#FFFBF0] font-primary-regular text-[#37508A]">
        <div
          className="flex overflow-x-scroll hide-scroll-bar"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-10 w-full xl:px-20 2xl:px-28">
            <div className="relative group lg:h-[480px] xl:h-[450px] 2xl:h-[650px]">
              <div className="absolute top-0 bg-[#F9F5E9] shadow-[4px_4px_10px_rgba(150,150,150,0.2)] card-compact bg-base-100 mb-3 lg:mb-10 border z-0 rounded-2xl ml-3 mr-3 border-[#5F82CC] select-none group-hover:border-[#13B2F5]">
                <div className="flex flex-col-reverse lg:flex-row lg:gap-10">
                  <div className="flex flex-1 p-4 lg:p-10 2xl:p-28 flex-col justify-center">
                    <h2 className="heading-h2 hidden lg:block 2xl:leading-[63px] lg:leading-[53px]">
                      OUR DONATION TO <br />
                      TOMORROW’S <br />
                      LEARNING WORLD
                    </h2>
                    <h2 className="heading-h2 block lg:hidden">
                      OUR DONATION TO TOMORROW’S LEARNING WORLD
                    </h2>
                    <p className="paragraph mt-1">
                      We are committed to empowering the next generation of
                      university students and scholars. Recognizing their
                      potential to shape tomorrow&apos;s world, we extend our
                      support by offering exclusive pricing options tailored to
                      their needs and aspirations. Our commitment to nurturing
                      the next generation is driven by our belief in the vital
                      role they play in advancing knowledge and driving
                      innovation.
                    </p>
                  </div>

                  <div className="flex flex-1">
                    <img
                      src={donation}
                      className="w-full h-72 md:h-96 lg:h-[100%]  object-cover rounded-2xl p-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#F9F5E9] shadow-[4px_4px_10px_rgba(150,150,150,0.2)] bg-base-100 mb-3 lg:mb-10 border z-10 border-[#13B2F5] rounded-3xl ml-3 mr-3 group-hover:ml-1 group-hover:mt-2 group-hover:mr-5 transition-all duration-300 ease-in-out">
                <div className="flex flex-col-reverse lg:flex-row lg:gap-10">
                  <div className="flex flex-1 p-4 lg:p-10 2xl:p-28  flex-col justify-center">
                    <h2 className="heading-h2 hidden lg:block 2xl:leading-[63px] lg:leading-[53px]">
                      OUR DONATION TO <br />
                      TOMORROW’S <br />
                      LEARNING WORLD
                    </h2>
                    <h2 className="block lg:hidden heading-h2">
                      OUR DONATION TO TOMORROW’S LEARNING WORLD
                    </h2>
                    <p className="paragraph mt-1">
                      We are committed to empowering the next generation of
                      university students and scholars. Recognizing their
                      potential to shape tomorrow&apos;s world, we extend our
                      support by offering exclusive pricing options tailored to
                      their needs and aspirations. Our commitment to nurturing
                      the next generation is driven by our belief in the vital
                      role they play in advancing knowledge and driving
                      innovation
                    </p>
                  </div>
                  <div className="flex flex-1">
                    <img
                      src={donation}
                      className="w-full h-72 md:h-96 lg:h-[100%] object-cover rounded-2xl p-2"
                      alt=""
                    />
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

export default OurDonations;
