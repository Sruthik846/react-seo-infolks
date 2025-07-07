import { useState } from "react";
import white_left_arrow from "/solutions/common/icons/white-left-arrow.svg";
import white_right_arrow from "/solutions/common/icons/white-right-arrow.svg";

import healthcare from "/solutions/video-annotations/industries/gif/healthcare.mp4";
import retail from "/solutions/video-annotations/industries/gif/retail.mp4";
import automotive from "/solutions/video-annotations/industries/gif/automotive.mp4";
import manufacturing from "/solutions/video-annotations/industries/desktop/manufacturing.jpg";
import agriculture from "/solutions/video-annotations/industries/desktop/agriculture.jpg";
import food_beverages from "/solutions/video-annotations/industries/desktop/food-beverages.jpg";
import waste_management from "/solutions/video-annotations/industries/desktop/waste-management.jpg";
import logistics from "/solutions/video-annotations/industries/desktop/logistic.jpg";
import sports from "/solutions/video-annotations/industries/desktop/sports.jpg";
import finance_banking from "/solutions/video-annotations/industries/desktop/finance-banking.jpg";
import security_survilance from "/solutions/video-annotations/industries/desktop/security-survilance.jpg";

// mobile images
import manufacturingMobile from "/solutions/video-annotations/industries/mobile/manufacturing.jpg";
import agricultureMobile from "/solutions/video-annotations/industries/mobile/agriculture.jpg";
import food_beveragesMobile from "/solutions/video-annotations/industries/mobile/food-beverages.jpg";
import waste_managementMobile from "/solutions/video-annotations/industries/mobile/waste-management.jpg";
import logisticsMobile from "/solutions/video-annotations/industries/mobile/logistic.jpg";
import sportsMobile from "/solutions/video-annotations/industries/mobile/sports.jpg";
import finance_bankingMobile from "/solutions/video-annotations/industries/mobile/finance-banking.jpg";

const DiverseIndustries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [
    {
      id: 1,
      image: healthcare,
      imageMobile: healthcare,
      title: "Healthcare",
      description:
        "Video annotation is essential for accurately analyzing medical imagery like surgical videos, X-rays, MRIs, and patient monitoring footage. It aids in identifying anatomical structures, tracking disease progression, and evaluating treatment efficacy. Additionally, it supports medical personnel training, ensuring top-notch patient care and safety standards, ultimately leading to improved outcomes.",
    },
    {
      id: 2,
      image: automotive,
      imageMobile: automotive,
      title: "Automotive",
      description:
        "Annotate diverse video data, from onboard cameras and sensors, aiding AI in recognizing and responding accurately to driving scenarios. Detecting pedestrians and delineating lane boundaries, our annotations ensure precision, driving automotive innovation, and safety standards.",
    },
    {
      id: 3,
      image: retail,
      imageMobile: retail,
      title: "Retail",
      description:
        "Video annotation services redefine retail by optimizing operations and enhancing customer experiences. We annotate diverse video data, including surveillance footage and customer interactions, enabling retailers to extract actionable insights. From analyzing customer behavior to monitoring inventory levels, our annotations drive efficiency and sales, empowering retailers to stay ahead in a competitive market.",
    },
    {
      id: 4,
      image: finance_banking,
      imageMobile: finance_bankingMobile,
      title: "Finance & Banking",
      description:
        "Through annotating video data like surveillance footage, ATM transactions, and customer interactions, we enable financial institutions to bolster fraud detection, ensure compliance, and enhance customer service. These annotations offer insights into transaction patterns, customer behavior, and security breaches, empowering proactive decision-making and risk management.",
    },
    {
      id: 5,
      image: manufacturing,
      imageMobile: manufacturingMobile,
      title: "Manufacturing",
      description:
        "We offer manufacturers valuable insights into production workflows, equipment performance, and quality assurance by annotating diverse video data. This includes assembly line footage, equipment operation videos, and quality control checks. This enables informed decision-making for process optimization, reducing errors, and ensuring consistent quality standards across operations.",
    },
    {
      id: 6,
      image: agriculture,
      imageMobile: agricultureMobile,
      title: "Agriculture",
      description:
        "Annotating different types of video data, such as drone footage and field surveillance videos, empowers agricultural experts to analyze crop growth, pest infestations, and irrigation patterns. This annotated data supports the implementation of predictive models and precision farming techniques, guiding informed decisions to optimize crop management and yield.",
    },
    {
      id: 7,
      image: food_beverages,
      imageMobile: food_beveragesMobile,
      title: "Food & Beverages",
      description:
        "Video annotation is vital in the food and beverage industry for tasks like quality control, inventory management, and product recognition. It enables precise labeling of objects in footage, streamlining processes and ensuring compliance with regulations. This technology enhances operational efficiency and maintains product consistency.",
    },
    {
      id: 8,
      image: waste_management,
      imageMobile: waste_managementMobile,
      title: "Waste Management",
      description:
        "Video annotation plays a key role in waste management, facilitating tasks such as waste sorting, facility monitoring, and process optimization. By labeling objects within video footage, this technology streamlines operations and enhances recycling efforts. It helps identify recyclable materials, monitor waste collection routes, and ensure compliance with environmental regulations. Ultimately, video annotation contributes to more efficient waste practices and resource utilization.",
    },
    {
      id: 9,
      image: security_survilance,
      imageMobile: security_survilance,
      title: "Security and Surveillance",
      description:
        "Annotating a variety of video data, such as CCTV footage, drone recordings, and body camera feeds, allows for accurate identification and tracking of objects or individuals across various environments. This annotated data empowers security systems to efficiently detect suspicious behaviors, recognize potential threats, and extract valuable insights, enhancing overall safety and surveillance capabilities.",
    },
    {
      id: 10,
      image: sports,
      imageMobile: sportsMobile,
      title: "Sports",
      description:
        "Annotating diverse video data, such as game footage, training sessions, and athlete performance recordings, yields invaluable insights into player movements, tactics, and strategies. These precise annotations empower coaches and athletes to analyze performance metrics, pinpoint areas for improvement, and refine training routines effectively.",
    },
    {
      id: 11,
      image: logistics,
      imageMobile: logisticsMobile,
      title: "Logistic",
      description:
        "Annotated video data enables logistics professionals to monitor inventory movements, optimize route planning, and enhance security measures. By annotating diverse video data, including warehouse surveillance footage and delivery vehicle dashcam recordings, we streamline tracking and management processes in logistics operations.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  // if (currentIndex > cards.length - 3) {
  //   setCurrentIndex(0);
  // }

  const [slides, setSlides] = useState(cards.slice(0, 2));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setSlides(showAll ? cards.slice(0, 2) : cards);
    setShowAll(!showAll);
  };

  return (
    <section className="relative font-primary-regular -mt-10 xl:-mt-16">
      <div className="bg-linear-to-l from-[#02B9E2] to-[#0281FA] p-2 md:p-4 lg:p-10 rounded-[16px] lg:rounded-[30px] text-white">
        {/* <div className='bg-linear-to-r from-[#BEC6F5] to-[#021AA1]'> */}
        <div>
          <h2 className="heading-h2 lg:mb-5 text-center pt-14 lg:pt-10 xl:pt-20 uppercase lg:leading-[50px] 2xl:leading-[63px]">
            Video Annotation Across <br /> Diverse Industries
          </h2>
          <div className="flex justify-center items-center">
            <p className="paragraph responsive-section-container text-center">
              Video annotation is essential across various industries, involving
              precise labeling of objects, actions, or events within video
              footage for advanced analysis and automation. From healthcare to
              retail, automotive to entertainment, it aids in various tasks like
              object detection, gesture recognition, behavior analysis, etc.
            </p>
          </div>

          <div className="mt-10">
            <div className="w-full ">
              <div className="relative">
                {/* large screen */}
                <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hidden lg:grid">
                  {[...cards, ...cards]
                    .slice(currentIndex, currentIndex + 3)
                    .map((card, index) => {
                      // Check file types
                      const isMp4 = card.image.endsWith(".mp4");

                      return (
                        <div
                          className={`flex-none p-4 bg-[#02B2E5] border border-[#89CAFF] rounded-[15px] shadow-md transform transition-all duration-300 ${
                            hoveredIndex === index ? "" : "h-96"
                          }`}
                          key={index}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="relative">
                            {/* Render video or image based on file type */}
                            {isMp4 ? (
                              <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full object-cover mb-4 rounded-[7px] transition-all duration-300 h-72"
                                src={card.image}
                              />
                            ) : (
                              <img
                                className="w-full object-cover mb-4 rounded-[7px] transition-all duration-300 h-72"
                                src={card.image}
                                alt="Card"
                              />
                            )}
                            <div
                              className={`absolute inset-0 bg-linear-to-l from-[#021aa125] to-[#021aa198] bg-opacity-70 rounded-[7px] transition-opacity duration-300 ${
                                hoveredIndex === index
                                  ? "opacity-0"
                                  : "opacity-100"
                              }`}
                            ></div>
                          </div>
                          <h3
                            className={`heading-h3 ${
                              hoveredIndex === index
                                ? "border-b border-white pb-2"
                                : ""
                            }`}
                          >
                            {card.title}
                          </h3>
                          {hoveredIndex === index && (
                            <p className="mt-2 text-white h-full paragraph">
                              {card.description}
                            </p>
                          )}
                        </div>
                      );
                    })}
                </div>
                {/* prev & next arrows */}
                <div className="hidden lg:flex items-center justify-center mt-10 relative gap-5">
                  {/* Previous Button */}
                  <button onClick={handlePrev} className="cursor-pointer">
                    <img
                      src={white_left_arrow}
                      className="w-10"
                      alt="Previous Slide"
                    />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    // disabled={currentIndex + 3 >= cards.length}
                    className="cursor-pointer"
                  >
                    <img
                      src={white_right_arrow}
                      className="w-10"
                      alt="Next Slide"
                    />
                  </button>
                </div>

                {/* ---------------- small and medium screens ---------------------- */}
                <div className="lg:hidden p-2 md:p-4 font-primary-regular grid grid-cols-1 md:grid-cols-2 gap-2">
                  {slides.map((item, index) => {
                    const isMp4 = item.imageMobile.endsWith(".mp4");

                    return (
                      <div
                        className={`flex-none p-4 bg-[#02B2E5] border border-[#89CAFF] rounded-lg shadow-md transform transition-all duration-300 ${
                          hoveredIndex === index ? "" : "h-64 md:h-72"
                        }`}
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="relative">
                          {/* Conditional Rendering for Image or Video */}
                          {isMp4 ? (
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full object-cover mb-2 md:mb-4 rounded-lg transition-all duration-300 h-48"
                              src={item.image}
                            />
                          ) : (
                            <img
                              className="w-full object-cover mb-2 md:mb-4 rounded-lg transition-all duration-300 h-48"
                              src={item.imageMobile}
                              alt="Card"
                            />
                          )}
                          <div
                            className={`absolute inset-0 bg-linear-to-l from-[#021aa125] to-[#021aa198] bg-opacity-70 transition-opacity duration-300 ${
                              hoveredIndex === index
                                ? "opacity-0"
                                : "opacity-100"
                            }`}
                          ></div>
                        </div>
                        <h3
                          className={`heading-h3 ${
                            hoveredIndex === index
                              ? "border-b border-white pb-2"
                              : ""
                          }`}
                        >
                          {item.title}
                        </h3>
                        {hoveredIndex === index && (
                          <p className="mt-2 text-white h-full paragraph">
                            {item.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* View all button */}
                <div className="flex justify-center lg:hidden mt-5 mb-5">
                  <div
                    className="flex group justify-center items-center"
                    onClick={handleViewAll}
                  >
                    <button className="bg-[#13B2F5] py-5 text-white text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
                      {showAll ? "SHOW LESS" : "VIEW ALL"}
                    </button>
                    <svg
                      className="relative right-2 -ml-12"
                      width="50"
                      height="50"
                      viewBox="0 0 61 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="30.5" cy="30.1572" r="30" fill="white" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.8622 19.205L43.4491 29.1504C43.517 29.278 43.517 29.4161 43.4491 29.5436L32.8508 39.4252C32.783 39.5527 32.5681 39.5527 32.4323 39.4252L31.3578 38.4158C31.2221 38.2883 31.2221 38.0864 31.3578 37.9483L39.4111 30.3192L16.6876 30.3192C16.0655 30.3192 15.5 29.8623 15.5 29.2673C15.5 28.6085 16.0542 28.1517 16.6876 28.1517L39.2075 28.1517L31.3578 20.7351C31.2221 20.6076 31.2221 20.4057 31.3578 20.2782L32.4436 19.205C32.5794 19.1413 32.7943 19.1413 32.8622 19.205Z"
                        fill="#13B2F5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};
export default DiverseIndustries;
