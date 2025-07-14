import { useEffect, useRef, useState } from "react";
import bgimageCard from "/industries/agriculture/recent-annotation-bg-image.png";
import arrowLeft from "/industries/agriculture/icons/arrow-left.svg";
import arrowRight from "/industries/agriculture/icons/arrow-right.svg";
import recent_annotation_bg_vector from "/industries/agriculture/recent-annotation-bg-vector.png";
import recent_annotation_img_bluebg from "/industries/agriculture/recent-annotation-img-blue-bg.png";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import arrow from "/home/icons/arrowRight.png";
import road_condition_monitoring from "/industries/automotive/road-condition-monitoring.jpg";
import license_plate_recognition from "/industries/automotive/license-plate-recognition.jpg";
import lidar_labeling from "/industries/automotive/lidar-labeling-3d.jpg";
import vehicleVideoTracking from "/industries/automotive/video/vehicle-video-tracking.mp4";

const RecentAnnotations = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateValue, setTranslateValue] = useState("80%");
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const updateTranslateValue = () => {
      if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) {
        // Extra Large Screen (xl)
        setTranslateValue("81%");
      } else if (window.innerWidth >= 1024) {
        // Large Screen (lg)
        setTranslateValue("100%");
      } else {
        // Default for smaller screens
        setTranslateValue("100%");
      }}
    };

    // Set initial value
    updateTranslateValue();

    // Update on window resize
    window.addEventListener("resize", updateTranslateValue);
    return () => window.removeEventListener("resize", updateTranslateValue);
  }, []);

  const data = [
    {
      id: "01",
      headinh1: "Road-Condition",
      heading2: "Monitoring",
      content: `Road condition monitoring is a vital part of the automotive industry, impacting safety, performance, maintenance, infrastructure, and environmental sustainability. By providing real-time data on road conditions, such as wet or icy surfaces, potholes, or debris, drivers can make informed decisions. We specialise in providing accurate and reliable data annotation for comprehensive road condition analysis, ensuring enhanced safety and performance of autonomous vehicles on the roads.`,
      img: road_condition_monitoring,
    },
    {
      id: "02",
      headinh1: "License Plate",
      heading2: "Recognition ",
      content: `Embracing LPR technology, the automotive sector is advancing towards a safer and more efficient future. Our specialised data annotation services provide precise and meticulously tagged datasets, vital for training LPR algorithms to recognise licence plates swiftly and accurately. Our skilled annotators work meticulously within extensive datasets, ensuring the system's effectiveness, particularly in varying lighting and angles.`,
      img: license_plate_recognition,
    },
    {
      id: "03",
      headinh1: "Vehicle Video",
      heading2: "Tracking",
      content: `This project aims to deploy a vehicle video tracking system for labeling and tracking vehicles on roads. Using advanced computer vision, the system identifies vehicles, classifies them, and tracks their movements in real-time. We're focused on developing robust algorithms, integrating with existing infrastructure, and providing a user-friendly interface for monitoring and analysis. This system will enhance road safety, traffic management, and law enforcement, improving overall transportation efficiency and security.`,
      img: vehicleVideoTracking,
    },
    {
      id: "04",
      headinh1: "Lidar Labeling",
      heading2: "",
      content: `Accurately labeling objects and obstacles in LiDAR data enhances autonomous vehicle perception systems. This involves developing efficient annotation processes and leveraging advanced algorithms to improve safety and performance in autonomous driving technologies, thus supporting innovation and adoption in the automotive sector.`,
      img: lidar_labeling,
    },
  ];

  const extendedData = [
    data[data.length - 1], // Clone the last item
    ...data,
    data[0], // Clone the first item
  ];
  const hasFirstIterationRun = useRef(false); // Persistent flag

  extendedData.map((_, index) => {
    // Check if this is the first iteration (index === 0 and flag is false)
    const isFirstIteration = index === 0 && !hasFirstIterationRun.current;

    if (isFirstIteration) {
      hasFirstIterationRun.current = true; // Set flag to true after first use
    }
  });

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(data.length);
      }, 300);
    } else if (currentIndex === extendedData.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 300);
    }
  }, [currentIndex, data.length, extendedData.length]);

  // below md block
  const [cardss, setCard] = useState(data.slice(0, 2));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? data.slice(0, 2) : data);
    setShowAll(!showAll);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-20  font-primary-regular text-[19px] mb-5 md:mb-14">
      <div className="ml-2">
        <h2 className="heading-h2 text-center lg:mb-5 uppercase w-full lg:w-2/3 lg:pl-20 lg:leading-[50px] 2xl:leading-[63px]">
          RECENT ANNOTATION PROJECTS
        </h2>
        <div className="justify-center md:flex hidden lg:hidden">
          <svg
            width="468"
            height="7"
            viewBox="0 0 468 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.113249 3.59229L3 6.47904L5.88675 3.59228L3 0.705534L0.113249 3.59229ZM467.887 3.59224L465 0.705493L462.113 3.59225L465 6.479L467.887 3.59224ZM3 4.09229L465 4.09224L465 3.09224L3 3.09229L3 4.09229Z"
              fill="#37508A"
            />
          </svg>
        </div>

        <div className="flex justify-center sm:flex p-2 md:hidden lg:hidden">
          <svg
            width="269"
            height="6"
            viewBox="0 0 269 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.613249 3L3.5 5.88675L6.38675 3L3.5 0.113249L0.613249 3ZM268.387 2.99998L265.5 0.113226L262.613 2.99998L265.5 5.88673L268.387 2.99998ZM3.5 3.5L265.5 3.49998L265.5 2.49998L3.5 2.5L3.5 3.5Z"
              fill="#37508A"
            />
          </svg>
        </div>
        <div className="gap-5 mt-10 hidden lg:flex lg:pl-20">
          <button onClick={handlePrevious}>
            <img src={arrowLeft} className="cursor-pointer" alt="Previous" />
          </button>
          <p className="text-[#37508A] paragraph flex items-center">
          {currentIndex === 0
              ? `0${data.length} - 0${data.length}`
              : `0${(currentIndex -1 ) % data.length +1} - 0${data.length}`}
          </p>
          <button onClick={handleNext}>
            <img src={arrowRight} className="cursor-pointer" alt="Next" />
          </button>
        </div>
      </div>

      <div
        className="carousel p-4 space-x-2 rounded-box overflow-hidden hidden lg:block"
        style={{ position: "relative", left: "0px", top: "0px" }}
      >
        <div
          className="carousel-inner gap-3"
          style={{
            display: "flex",
            transition: isTransitioning ? "transform 0.3s ease" : "none",
            transform: `translateX(-${
              currentIndex * parseInt(translateValue)
            }%)`,
          }}
        >
          {extendedData.map((item, index) => {
            const isFirstIteration =
              index === 0 && !hasFirstIterationRun.current;
            const isMp4 = item.img.endsWith(".mp4");

            return (
              <div
                className={`carousel-item shrink-0  lg:w-[100%] ${
                  isFirstIteration || index === 0
                    ? "lg:w-[96.6%] xl:w-[79%] 2xl:w-[79%]"
                    : "lg:w-[98.3%] xl:w-[79.6%] 2xl:w-[80.1%]"
                }`}
                key={item.id}
              >
                <div className="relative">
                  <img
                    src={bgimageCard}
                    alt="Background"
                    className="w-full rounded-box lg:h-[28rem] xl:[35rem] 2xl:h-[508px]"
                  />
                  <img
                    src={recent_annotation_bg_vector}
                    className="absolute top-0 h-full w-full rounded-xl"
                    alt=""
                  />
                  <h3 className="absolute top-8 left-8 z-20 text-white text-3xl">
                    {item.id}
                  </h3>
                  <svg
                    width="56"
                    height="58"
                    viewBox="0 0 56 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-5 left-5 z-10 opacity-40"
                  >
                    <g style={{ mixBlendMode: "plus-darker" }}>
                      <rect width="56" height="58" rx="10" fill="#2e2d2d" />
                    </g>
                  </svg>

                  <div className="absolute inset-0 flex">
                    <div className="w-[30%] relative">
                      {/* Render video or image based on file type */}
                      {isMp4 ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover mb-4 rounded-xl transition-all duration-300"
                          src={item.img}
                        />
                      ) : (
                        <img
                          className="w-full h-full object-cover mb-4 rounded-xl transition-all duration-300"
                          src={item.img}
                          alt="Card"
                        />
                      )}
                      <img
                        src={recent_annotation_img_bluebg}
                        className="absolute top-0 h-full rounded-xl w-full"
                        alt=""
                      />
                    </div>
                    <div className="w-[70%] p-10 text-[#37508A] flex flex-col justify-center">
                      <h3 className="heading-h3">
                        {item.headinh1} <br /> {item.heading2}
                      </h3>
                      <p className="mt-5 paragraph">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:grid grid-cols-1 gap-6 justify-center items-center p-4 pb-5 lg:p-10 hidden lg:hidden">
        {cardss.map((item, index) => {
          const isMp4 = item.img.endsWith(".mp4");
          return item.id % 2 == 0 ? (
            <div
              className="bg-linear-to-r from-[#E1E8F4] to-[#FFFBF0] text-left rounded-lg"
              key={index}
            >
              <div
                className="bg-cover bg-center"
                style={{
                  backgroundImage: `url('${recent_annotation_bg_vector}')`,
                }}
              >
                <div className="flex">
                  <div className="w-[60%] p-5 flex flex-col justify-center">
                    <h3 className="heading-h3">
                      {item.headinh1} {item.heading2}
                    </h3>
                    <div className="mt-2">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readLessClassName="paragraph"
                        readMoreClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>

                  <div className="w-[40%] z-10 relative h-96">
                    {isMp4 ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover mb-4 rounded-xl transition-all duration-300"
                        src={item.img}
                      />
                    ) : (
                      <img
                        className="w-full h-full object-cover mb-4 rounded-xl transition-all duration-300"
                        src={item.img}
                        alt="Card"
                      />
                    )}
                    <img
                      src={recent_annotation_img_bluebg}
                      className="absolute top-0 h-full w-full object-cover rounded-lg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="bg-linear-to-r from-[#FFFBF0] to-[#E1E8F4]  text-left rounded-lg"
              key={index}
            >
              <div
                className="bg-cover bg-center"
                style={{
                  backgroundImage: `url('${recent_annotation_bg_vector}')`,
                }}
              >
                <div className="flex">
                  <div className="w-[40%] z-10 relative h-96">
                    {isMp4 ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover mb-4 rounded-xl transition-all duration-300"
                        src={item.img}
                      />
                    ) : (
                      <img
                        className="w-full h-full object-cover mb-4 rounded-xl transition-all duration-300"
                        src={item.img}
                        alt="Card"
                      />
                    )}
                    <img
                      src={recent_annotation_img_bluebg}
                      className="absolute top-0 h-full w-full object-cover rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="w-[60%] p-5 flex flex-col justify-center">
                    <h3 className="heading-h3">
                      {item.headinh1} {item.heading2}
                    </h3>
                    <div className="mt-2">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readLessClassName="paragraph"
                        readMoreClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sm:block responsive-section-container grid gap-3 pb-5 p-2 md:hidden lg:hidden">
        {cardss.map((item, index) => {
          const isMp4 = item.img.endsWith(".mp4");
          return (
            <div key={index} className="mb-3">
              <div className="flex flex-col">
                <div className="z-10 relative">
                  {isMp4 ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-60 md:h-80 object-cover mb-4 rounded-xl transition-all duration-300"
                      src={item.img}
                    />
                  ) : (
                    <img
                      className="w-full h-60 md:h-80 object-cover mb-4 rounded-xl transition-all duration-300"
                      src={item.img}
                      alt="Card"
                    />
                  )}
                  <img
                    src={recent_annotation_img_bluebg}
                    className="absolute inset-0 h-60 object-cover w-full rounded-t-xl"
                    alt=""
                  />
                </div>
                <div className="-mt-1 text-left p-4 bg-linear-to-r from-[#E1E8F4] to-[#FFFBF0] rounded-b-xl">
                  <h3 className="heading-h3 mb-1">
                    {item.headinh1} {item.heading2}
                  </h3>
                  <ReadMoreLess
                    id={item.headinh1}
                    charLimit={200}
                    readMoreText={"Read more"}
                    readLessText={"...Read less"}
                    readLessClassName="paragraph"
                    readMoreClassName="paragraph"
                  >
                    {item.content}
                  </ReadMoreLess>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center lg:hidden">
        <div
          className="flex group justify-center items-center"
          onClick={handleViewAll}
        >
          <button className="border border-[#13B2F5] text-[#37508A] text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
            {showAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
          <span className="relative w-[50px] h-[50px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-12">
            <img src={arrow} alt="" className="w-6" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default RecentAnnotations;
