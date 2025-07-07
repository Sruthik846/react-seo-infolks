import { useRef, useState } from "react";
import "../style.css";
import free_cost from "/pricing/icons/free-cost.svg";
import risk_free from "/pricing/icons/risk-free.svg";
import satisfaction from "/pricing/icons/satisfaction.svg";
import volume_requirement from "/pricing/icons/volume-requirement.svg";
import flexible from "/pricing/icons/flexible.svg";
import client_preference from "/pricing/icons/client-preference.svg";

const FreeDemo = () => {
  // mouse scroll
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

  const data = [
    { id: 1, title: "Completely free with no hidden charges", img: free_cost },
    {
      id: 2,
      title: "Risk-free services with no document signing",
      img: risk_free,
    },
    {
      id: 3,
      title: "Services provided until complete satisfaction",
      img: satisfaction,
    },
    {
      id: 4,
      title: "No minimum or maximum volume requirement",
      img: volume_requirement,
    },
    {
      id: 5,
      title: "Flexible to perform pilot in any platform",
      img: flexible,
    },
    {
      id: 6,
      title: "Output format as per the client preference",
      img: client_preference,
    },
  ];

  const [slides, setSlides] = useState(data.slice(0, 2));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setSlides(showAll ? data.slice(0, 2) : data);
    setShowAll(!showAll);
  };
  const borderColorClasses = [
    "border-[#0C9DFC]",
    "border-[#5F82CC]",
    "border-[#13B2F5]",
    "border-[#AABDE7]",
  ];


  return (
    <div className="flex flex-col xl:mx-auto w-full lg:pt-10 font-primary-regular overflow-hidden text-[#37508A]">
      <h2 className="heading-h2 p-4 md:p-5 lg:p-10 text-center text-[#37508A] lg:mb-5">
        FREE DEMO
      </h2>
      <div
        className="flex flex-col overflow-x-scroll lg:pl-10 2xl:pl-28 lg:pb-10 hide-scroll-bar"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* large screen */}
        <div className="flex flex-nowrap cursor-grab">
          {data.map((item, index) => {
            const borderColor =
            borderColorClasses[(item.id - 1) % borderColorClasses.length];
            return (
              <div
                key={index}
                className="relative group h-[400px] hidden lg:block pr-5"
              >
                <div className={`w-[300px] h-[369px] p-10 absolute top-0 bg-[#F9F5E9] group-hover:bg-linear-to-l from-[#F1EAE6] to-[#D6E6EC] card-compact bg-base-100 mb-10 border-2 z-0 rounded-2xl ml-3 select-none ${borderColor} group-hover:border-[#13B2F5]`}>
                  <div>
                    <figure>
                      <img src={item.img} alt="Shoes" className="p-2 h-24 w-24" />
                    </figure>
                  </div>
  
                  <div className="flex flex-col gap-2 justify-center items-center p-10 w-full absolute left-0 bottom-4">
                    <div className="h-0.5 w-full bg-[#37508a9c]"></div>
                    <h5 className="heading-h5">{item.title}</h5>
                  </div>
                </div>
  
                <div
                  key={index}
                  className={`p-5 w-[300px] h-[369px] bg-[#F9F5E9] bg-base-100 mb-10 border-2 ${borderColor} z-10 rounded-3xl ml-3 group-hover:ml-1 group-hover:mt-2 group-hover:border-[#13B2F5] group-hover:mr-3 transition-all duration-300 ease-in-out`}
                >
                  <div className="p-4">
                    <figure>
                      <img src={item.img} alt="Shoes" className="mt-2" />
                    </figure>
                  </div>
  
                  <div className="p-5 flex gap-10 justify-around items-center">
                    {/* <h5 className="heading-h5">{item.title}</h5> */}
                  </div>
                </div>
              </div>
            )
          } 
          )}
        </div>

        {/* ---------------- small and medium screens ---------------------- */}
        <div className="lg:hidden p-2 md:p-4 font-primary-regular grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
          {slides.map((item, index) => (
            <div key={index} className="relative group h-[330px] ">
              <div className="w-full h-80 p-10 absolute top-0 bg-[#F9F5E9] group-hover:bg-linear-to-l from-[#F1EAE6] to-[#D6E6EC] card-compact bg-base-100 border z-0 rounded-2xl border-[#5F82CC] select-none group-hover:border-[#13B2F5]">
                <div>
                  <figure>
                    <img src={item.img} alt="Shoes" className="p-2 h-20 w-20" />
                  </figure>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center p-10 w-full absolute left-0 bottom-4">
                  <div className="h-0.5 w-full bg-[#37508a9c]"></div>
                  <h5 className="heading-h5">{item.title}</h5>
                </div>
              </div>

              <div
                key={index}
                className="p-5 w-full h-80 bg-[#F9F5E9] bg-base-100 border z-10 border-[#13B2F5] rounded-3xl group-hover:ml-0 group-hover:mt-2 group-hover:mr-3 transition-all duration-300 ease-in-out"
              >
                <div className="p-4">
                  <figure>
                    <img
                      src={item.img}
                      alt="Shoes"
                      className="p-2 mt-2 hidden"
                    />
                  </figure>
                </div>

                <div className="p-5 flex gap-10 justify-around items-center">
                  <h5 className="heading-h5">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all button */}
        <div className="flex justify-center lg:hidden mt-5 mb-5">
          <div
            className="flex group justify-center items-center"
            onClick={handleViewAll}
          >
            <button className="bg-[#13B2F5] text-white py-6 text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
            <span className="relative w-[50px] h-[50px] right-2 bg-white rounded-full flex justify-center items-center -ml-12">
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.8622 0.381798L28.4491 10.3272C28.517 10.4547 28.517 10.5928 28.4491 10.7203L17.8508 20.602C17.783 20.7295 17.5681 20.7295 17.4323 20.602L16.3578 19.5926C16.2221 19.4651 16.2221 19.2632 16.3578 19.1251L24.4111 11.496L1.68764 11.496C1.06554 11.496 0.5 11.0391 0.5 10.4441C0.5 9.78531 1.05423 9.32841 1.68764 9.32841L24.2075 9.32841L16.3578 1.91186C16.2221 1.78436 16.2221 1.58247 16.3578 1.45497L17.4436 0.381798C17.5794 0.318046 17.7943 0.318046 17.8622 0.381798Z"
                  fill="#13B2F5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDemo;
