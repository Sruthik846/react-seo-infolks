import { useState } from "react";
import arrow from "/home/icons/arrowRight.png";
import healthcareIcon from "/home/icons/healthcare-icon.svg";
import automotiveIcon from "/home/icons/automotive-icon.svg";
import retailIcon from "/home/icons/retail-icon.svg";
import finanaceBankingIcon from "/home/icons/finance-banking-icon.svg";
import manufacturingIcon from "/home/icons/manufacturing-icon.svg";
import agricultureIcon from "/home/icons/agriculture-icon.svg";
import foodBeveragesIcon from "/home/icons/food-beverages-icon.svg";
import livestockIcon from "/home/icons/livestock-icon.svg";
import securitySurveilanceIcon from "/home/icons/security-surveillance-icon.svg";
import sportsIcon from "/home/icons/sports-icon.svg";
import humanAttributionIcon from "/home/icons/human-attribution-icon.svg";
import wasteManagementIcon from "/home/icons/waste-management-icon.svg";
import logisticIcon from "/home/icons/logistic-icon.svg";
import geosPatialIcon from "/home/icons/geospatial-icon.svg";
import healthcare from "/home/solutions/healthcare.jpg";
import automotive from "/home/solutions/automotive.jpg";
import retail from "/home/solutions/retail.jpg";
import financeBanking from "/home/solutions/finance-banking.jpg";
import manufacturing from "/home/solutions/manufacturing.jpg";
import agriculture from "/home/solutions/agriculture.jpg";
import foodBeverages from "/home/solutions/food-beverages.jpg";
import livestock from "/home/solutions/livestock.jpg";
import securitySurveillance from "/home/solutions/security-suveilance.jpg";
import sports from "/home/solutions/sports.jpg";
import humanAttribution from "/home/solutions/human-attribution.jpg";
import wasteManagement from "/home/solutions/waste-management.jpg";
import logistic from "/home/solutions/logistics.jpg";
import geospatial from "/home/solutions/geospatial.jpg";

import healthcareMobile from "/home/solutions/mobile/healthcare.jpg";
import automotiveMobile from "/home/solutions/mobile/automotive.jpg";
import retailMobile from "/home/solutions/mobile/retail.jpg";
import financeBankingMobile from "/home/solutions/mobile/finance-banking.jpg";
import manufacturingMobile from "/home/solutions/mobile/manufacturing.jpg";
import agricultureMobile from "/home/solutions/mobile/agriculture.jpg";
import foodBeveragesMobile from "/home/solutions/mobile/food-beverages.jpg";
import livestockMobile from "/home/solutions/mobile/livestock.jpg";
import securitySurveillanceMobile from "/home/solutions/mobile/security-suveilance.jpg";
import sportsMobile from "/home/solutions/mobile/sports.jpg";
import humanAttributionMobile from "/home/solutions/mobile/human-attribution.jpg";
import wasteManagementMobile from "/home/solutions/mobile/waste-management.jpg";
import logisticMobile from "/home/solutions/mobile/logistics.jpg";
import geospatialMobile from "/home/solutions/mobile/geospatial.jpg";
import "./solution.css";
import solution_icons_animation from "/home/solutions/animation/solution-animation.gif";
import { Link } from "react-router-dom";
import hoverArrow from "/home/icons/arrow blue.svg";
import React from 'react';


const Solutions = () => {
  const solutiondata = [
    {
      id: 1,
      title: "Healthcare",
      img: healthcare,
      imgMobile: healthcareMobile,
      icon: healthcareIcon,
      link: "/industries/healthcare",
    },
    {
      id: 2,
      title: "Automotive",
      img: automotive,
      imgMobile: automotiveMobile,
      icon: automotiveIcon,
      link: "/industries/automotive",
    },
    {
      id: 3,
      title: "Retail",
      img: retail,
      imgMobile: retailMobile,
      icon: retailIcon,
      link: "/industries/retail",
    },
    {
      id: 4,
      title: "Finance & Banking",
      img: financeBanking,
      imgMobile: financeBankingMobile,
      icon: finanaceBankingIcon,
      link: "/industries/finance-banking",
    },
    {
      id: 5,
      title: "Manufacturing",
      img: manufacturing,
      imgMobile: manufacturingMobile,
      icon: manufacturingIcon,
      link: "/industries/manufacturing",
    },
    {
      id: 6,
      title: "Agriculture",
      img: agriculture,
      imgMobile: agricultureMobile,
      icon: agricultureIcon,
      link: "/industries/agriculture",
    },
    {
      id: 7,
      title: "Food & Beverages",
      img: foodBeverages,
      imgMobile: foodBeveragesMobile,
      icon: foodBeveragesIcon,
      link: "/industries/food-beverages",
    },
    {
      id: 8,
      title: "Livestock",
      img: livestock,
      imgMobile: livestockMobile,
      icon: livestockIcon,
      link: "/industries/livestock",
    },
    {
      id: 9,
      title: "Security & Surveillance",
      img: securitySurveillance,
      imgMobile: securitySurveillanceMobile,
      icon: securitySurveilanceIcon,
      link: "/industries/security-survilance",
    },
    {
      id: 10,
      title: "Sports",
      img: sports,
      imgMobile: sportsMobile,
      icon: sportsIcon,
      link: "/industries/sports",
    },
    {
      id: 11,
      title: "Human Attribution",
      img: humanAttribution,
      imgMobile: humanAttributionMobile,
      icon: humanAttributionIcon,
      link: "/industries/human-attribution",
    },
    {
      id: 12,
      title: "Waste Management",
      img: wasteManagement,
      imgMobile: wasteManagementMobile,
      icon: wasteManagementIcon,
      link: "/industries/waste-management",
    },
    {
      id: 13,
      title: "Logistic",
      img: logistic,
      imgMobile: logisticMobile,
      icon: logisticIcon,
      link: "/industries/logistic",
    },
    {
      id: 14,
      title: "Geospatial",
      img: geospatial,
      imgMobile: geospatialMobile,
      icon: geosPatialIcon,
      link: "/industries/geospatial",
    },
  ];

  const [activeItem, setActiveItem] = useState(null); // Changed default to null
  const [cards, setCard] = useState(solutiondata.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? solutiondata.slice(0, 3) : solutiondata);
    setShowAll(!showAll);
  };

  const [activeTab, setActiveTab] = useState(1);

  // Function to handle next tab
  const nextTab = () => {
    setActiveTab((prevTab) =>
      prevTab === solutiondata.length - 1 ? 0 : prevTab + 1
    );
  };

  // Function to handle previous tab
  const prevTab = () => {
    setActiveTab((prevTab) =>
      prevTab === 0 ? solutiondata.length - 1 : prevTab - 1
    );
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="container mx-auto font-primary-regular md:max-w-[85%]">
      <div className="flex lg:gap-10 pt-10 lg:pt-32 lg:flex-row flex-col relative ">
        <div className="flex lg:w-[50%] 2xl:flex-1 flex-col">
          <h2 className="heading-h2 text-[#37508A] text-center lg:text-left w-full 2xl:w-[600px] lg:leading-[63px]">
            FROM HEALTHCARE TO RETAIL: OUR SERVICES EMPOWER INDUSTRY- SPECIFIC
            SOLUTIONS
          </h2>
          <p className="paragraph text-[#37508A] text-center lg:text-left lg:mt-5 md:p-4 lg:p-0 py-3">
            In training AI or machine learning algorithms, accurate labeling of
            data is crucial. This is where our annotation service plays a
            pivotal role in revolutionising data labeling across diverse
            industries. We provide customised solutions tailored to meet the
            unique needs of each sector.
          </p>

          {/* large screen */}
          <div className="hidden lg:flex justify-center items-center flex-col mt-4">
            <div className="w-[497px] h-[558px] bg-linear-to-r from-[#BEC6F5] to-[#021AA1] rounded-full transform relative overflow-hidden">
              <div className="w-[497px] h-[558px] pt-5 bg-linear-to-r from-[#57cae49c] to-[#0396FF] rounded-full transform relative overflow-hidden flex flex-col gap-5 justify-center items-center">
                <div className="w-full h-full">
                  <img
                    src={solution_icons_animation}
                    alt=""
                    className="-mt-16"
                  />
                </div>

                <div className="absolute top-96 flex flex-col justify-center items-center">
                  <h2 className="text-white text-4xl mb-3">Explore More</h2>
                  <Link to="/industries">
                    <button
                      className="w-[60px] h-[60px] right-1 bg-[#13B2F5] rounded-full flex justify-center items-center hover:bg-white"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={isHovered ? hoverArrow : arrow} // Change hoverArrow to your hover SVG image source
                        alt=""
                        className="w-6"
                        style={{ fill: isHovered ? "red" : "blue" }} // Change the colors accordingly
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* large screen */}
        <div className="hidden flex-1 lg:flex lg:w-[50%] 2xl:w-full flex-col pl-10 gap-1.5">
          {solutiondata.map((item) => (
            <Link to={item.link} key={item.id}>
              <div
                className={`flex lg:gap-8 ${
                  activeItem === item.id
                    ? "text-[#0396FF] border-b-2 border-[#0396FF] cursor-pointer py-3"
                    : "text-[#37508A] border-b-2 border-[#E2E8F0] cursor-pointer py-3"
                }`}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="w-9 h-9">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-full h-full"
                    style={{
                      filter:
                        activeItem === item.id
                          ? "brightness(0) saturate(100%) invert(31%) sepia(86%) saturate(1812%) hue-rotate(206deg) brightness(99%) contrast(98%)"
                          : "none",
                      fill: activeItem === item.id ? "#0396FF" : "none", // Apply blue fill when active
                    }}
                  />
                </div>
                <h5 className="heading-h6">{item.title}</h5>
                {activeItem === item.id && (
                  <img
                    src={item.img}
                    alt="Active Item"
                    className={`${
                      item.id > 10
                        ? " absolute right-0 bottom-8 rounded-[18px] object-cover h-60 w-60 2xl:h-fit 2xl:w-fit"
                        : " absolute right-0 mt-8 rounded-[18px] object-cover h-60 w-60 2xl:h-fit 2xl:w-fit"
                    }`}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* mobile screen */}
        <div className="block md:hidden p-2 md:p-4 font-primary-regular">
          {cards.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 py-2">
              <img
                src={item.imgMobile}
                className="h-full rounded-lg w-full"
                alt=""
              />

              <div className="flex gap-2 justify-center items-center mb-2">
                <div className="w-9 h-9">
                  <img src={item.icon} className="w-full h-full" alt="" />
                </div>
                <Link to={item.link}>
                  <h3 className="heading-h3">{item.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:hidden">
          <div
            className="flex group justify-center items-center"
            onClick={handleViewAll}
          >
            <button
              className={`bg-[#FFFBF0] border border-[#13B2F5] text-[#37508A] text-[12px] md:text-[14px] rounded-full flex p-3 px-5 items-center transition-all duration-300 ease-in-out ${
                showAll
                  ? "w-[150px] md:w-[160px] group-hover:w-[110px] md:group-hover:w-[130px]"
                  : "w-[140px] md:w-[150px] group-hover:w-[100px] md:group-hover:w-[110px]"
              }`}
            >
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
            <span className="relative w-[30px] h-[30px] md:w-[35px] md:h-[35px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-8 group-hover:ml-3 transition-all duration-300 ease-in-out">
              <img
                src={arrow}
                alt=""
                className="w-4 md:w-5"
                style={{ fill: "blue" }}
              />
            </span>
          </div>
        </div>

        {/* Medium screen */}
        <div className="hidden md:block lg:hidden">
          <div className="relative w-full max-w-3xl mx-auto">
            <div className="flex justify-center space-x-4 overflow-hidden">
              {/* prev item */}
              {activeTab == 0 ? (
                <div
                  className={`shrink-0 w-full max-w-sm transition-transform duration-500 transform mt-20`}
                >
                  <img
                    src={solutiondata[14].img}
                    alt={solutiondata[14].title}
                    className="h-48 object-cover rounded-lg shadow-md ml-56 "
                  />
                  <div className="flex justify-center items-center mt-2 ml-56">
                    <div className="w-9 h-9">
                      <img
                        src={solutiondata[14].icon}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <Link to={solutiondata[14].link}>
                      <span className="ml-2 paragraph">
                        {solutiondata[14].title}
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  className={`shrink-0 w-full max-w-sm transition-transform duration-500 transform mt-20`}
                >
                  <img
                    src={solutiondata[activeTab - 1].img}
                    alt={solutiondata[activeTab - 1].title}
                    className="h-48 object-cover rounded-lg shadow-md ml-[200px] w-48"
                  />
                  <div className="flex justify-center items-center mt-2 ml-[240px]">
                    <div className="w-9 h-9">
                      <img
                        src={solutiondata[activeTab - 1].icon}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <Link to={solutiondata[activeTab - 1].link}>
                      <span className="ml-2 paragraph">
                        {solutiondata[activeTab - 1].title}
                      </span>
                    </Link>
                  </div>
                </div>
              )}

              {/* current item */}
              <div
                className={`shrink-0 max-w-sm transition-transform duration-500 transform mb-10`}
              >
                <img
                  src={solutiondata[activeTab].img}
                  alt={solutiondata[activeTab].title}
                  className="w-96 h-64 object-cover rounded-lg shadow-md"
                />
                <div className="flex justify-center items-center mt-2">
                  <div className="w-9 h-9">
                    <img
                      src={solutiondata[activeTab].icon}
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <Link to={solutiondata[activeTab].link}>
                    <span className="ml-2 paragraph">
                      {solutiondata[activeTab].title}
                    </span>
                  </Link>
                </div>
              </div>

              {/* next item */}
              {activeTab === 14 ? (
                <div
                  className={`shrink-0 w-full max-w-sm transition-transform duration-500 transform mt-20`}
                >
                  <img
                    src={solutiondata[0].img}
                    alt={solutiondata[0].title}
                    className="h-48 object-cover rounded-lg shadow-md w-48"
                  />
                  <div className="flex items-center mt-2">
                    <div className="w-9 h-9">
                      <img
                        src={solutiondata[0].icon}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <span className="ml-2 paragraph">
                      {solutiondata[0].title}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className={`shrink-0 w-full max-w-sm transition-transform duration-500 transform mt-20`}
                >
                  <img
                    src={solutiondata[activeTab + 1].img}
                    alt={solutiondata[activeTab + 1].title}
                    className="h-48 object-cover rounded-lg shadow-md -ml-1"
                  />
                  <div className="flex items-center mt-2">
                    <div className="w-9 h-9">
                      <img
                        src={solutiondata[activeTab + 1].icon}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <Link to={solutiondata[activeTab + 1].link}>
                      <span className="ml-2 paragraph">
                        {solutiondata[activeTab + 1].title}
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 items-center px-4">
              <button
                onClick={() => activeTab !== 1 && prevTab()} // Prevent click when activeTab is 1
                className={`${
                  activeTab === 1
                    ? "opacity-50 cursor-default"
                    : "cursor-pointer"
                }`}
                disabled={activeTab === 1} // Accessibility for screen readers
              >
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15.375"
                    cy="15.375"
                    r="15.375"
                    transform="matrix(-1 0 0 1 31.6143 0)"
                    fill="#13B2F5"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4587 9.76205L9.03292 14.8591C8.99814 14.9244 8.99814 14.9952 9.03292 15.0606L14.4645 20.1249C14.4993 20.1903 14.6095 20.1903 14.679 20.1249L15.2297 19.6076C15.2993 19.5422 15.2993 19.4388 15.2297 19.368L11.1024 15.4581L22.7482 15.4581C23.067 15.4581 23.3568 15.2239 23.3568 14.919C23.3568 14.5814 23.0728 14.3472 22.7482 14.3472L11.2067 14.3472L15.2297 10.5462C15.2993 10.4809 15.2993 10.3774 15.2297 10.3121L14.6732 9.76205C14.6037 9.72938 14.4935 9.72938 14.4587 9.76205Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
              <button
                onClick={() => activeTab !== 12 && nextTab()} // Prevent click when activeTab is 13
                className={`${
                  activeTab === 12
                    ? "opacity-50 cursor-default"
                    : "cursor-pointer"
                }`}
                disabled={activeTab === 12} // Accessibility for screen readers
              >
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.9893" cy="15.375" r="15.375" fill="#13B2F5" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7698 9.76205L23.1956 14.8591C23.2304 14.9244 23.2304 14.9952 23.1956 15.0606L17.764 20.1249C17.7292 20.1903 17.6191 20.1903 17.5495 20.1249L16.9988 19.6076C16.9292 19.5422 16.9292 19.4388 16.9988 19.368L21.1261 15.4581L9.48034 15.4581C9.16152 15.4581 8.87168 15.2239 8.87168 14.919C8.87168 14.5814 9.15572 14.3472 9.48034 14.3472L21.0218 14.3472L16.9988 10.5462C16.9292 10.4809 16.9292 10.3774 16.9988 10.3121L17.5553 9.76205C17.6249 9.72938 17.735 9.72938 17.7698 9.76205Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;