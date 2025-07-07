import { useEffect, useRef, useState } from "react";
import bgimageCard from "/industries/agriculture/recent-annotation-bg-image.png";
// import veg from "/industries/agriculture/vegetable-fruit-defect-labeling.png";
import arrowLeft from "/industries/agriculture/icons/arrow-left.svg";
import arrowRight from "/industries/agriculture/icons/arrow-right.svg";
import recent_annotation_bg_vector from "/industries/agriculture/recent-annotation-bg-vector.png";
import recent_annotation_img_bluebg from "/industries/agriculture/recent-annotation-img-blue-bg.png";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import arrow from "/home/icons/arrowRight.png";
import metal_bar_serial_number_labeling from "/industries/logistic/metal-bar-serial-number-labeling.jpg";
import parcel_tracking from "/industries/logistic/parcel-tracking.jpg";
import tyre_labeling from "/industries/logistic/tyre-labeling.jpg";

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateValue, setTranslateValue] = useState("86%"); // Default to 80%
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const updateTranslateValue = () => {
      if (window.innerWidth >= 1280) {
        // Extra Large Screen (xl)
        setTranslateValue("86%");
      } else if (window.innerWidth >= 1024) {
        // Large Screen (lg)
        setTranslateValue("100%");
      } else {
        // Default for smaller screens
        setTranslateValue("100%");
      }
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
      headinh1: "Metal Bar Serial",
      heading2: "Number Labeling",
      content: `The Metal Bar Serial Number Labeling project improves inventory management and quality control by streamlining barcode labeling and serial number recording on metal bars. Advanced technology ensures accurate identification and labeling, while integration with a centralized database enhances traceability and efficiency. With a user-friendly interface and robust measures, the project boosts productivity and accuracy, ultimately enhancing operational efficiency and customer satisfaction.`,
      img: metal_bar_serial_number_labeling,
    },
    {
      id: "02",
      headinh1: "Parcel",
      heading2: "Tracking",
      content: `This project focuses on efficient package identification and tracking. By implementing advanced tracking technologies and barcode labeling methods, it ensures accurate parcel identification and real-time tracking updates. Integration with a centralized database enables seamless retrieval of parcel information. With its user-friendly interface and robust tracking capabilities, the project aims to enhance logistics efficiency and customer satisfaction.`,
      img: parcel_tracking,
    },
    {
      id: "03",
      headinh1: "Tyre",
      heading2: "Labeling",
      content: `The Tyre Labeling project aims to streamline tire labeling and serial number recording. It enhances traceability and quality control in the automotive industry. Through advanced labeling techniques and serial number recording systems, it ensures accurate tire identification and tracking. Integration with a centralized database facilitates efficient retrieval of tire information. With a user-friendly interface and robust tracking capabilities, the project improves operational efficiency and customer satisfaction.`,
      img: tyre_labeling,
    },
  ];

  const extendedData = [
    data[data.length - 1], // Clone the last item
    ...data,
    data[0], // Clone the first item
  ];
  const hasFirstIterationRun = useRef(false); // Persistent flag

  extendedData.map((index) => {
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
    // Smoothly reset to the original index without transition
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(data.length);
      }, 300); // Match transition duration
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
    <section className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-32 mt-14 mb-14 font-primary-regular text-[19px] lg:pl-20">
      <div className="">
        <h2 className="heading-h2 text-center lg:text-left lg:mt-5 lg:mb-5 uppercase w-full lg:w-2/3 lg:leading-[50px] 2xl:leading-[63px]">
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

        <div className="flex justify-center sm:flex md:hidden lg:hidden">
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
        <div className="gap-5 mt-10 hidden lg:flex">
          <button onClick={handlePrevious}>
            <img
              src={arrowLeft}
              className="lg:w-10 2xl:w-full cursor-pointer"
              alt="Previous"
            />
          </button>
          <p className="text-[#37508A] paragraph flex items-center">
            {currentIndex === 0
              ? `0${data.length} - 0${data.length}` // Show "03 - 03" instead of "00 - 03"
              : `0${((currentIndex - 1) % data.length) + 1} - 0${data.length}`}
          </p>
          <button onClick={handleNext}>
            <img src={arrowRight} className="lg:w-10 2xl:w-full cursor-pointer" alt="Next" />
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

            return (
              <div
                className={`carousel-item shrink-0  lg:w-[100%] ${
                  isFirstIteration || index === 3
                    ? "lg:w-[97%] xl:w-[84%] 2xl:w-[84.3%]"
                    : "lg:w-[98.5%] xl:w-[84.6%] 2xl:w-[85.1%]"
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
                      <img
                        src={item.img}
                        className="h-full object-cover rounded-xl w-full"
                        alt=""
                      />
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

      <div className="md:grid grid-cols-1 gap-6 pb-5 justify-center items-center p-4 lg:p-10 hidden lg:hidden">
        {cardss.map((item, index) =>
          item.id % 2 == 0 ? (
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
                    <div className="mt-2 text-[18px]">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"Read more"}
                        readLessText={".....Read less"}
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>

                  <div className="w-[40%] z-10 relative h-96">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
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
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                    <img
                      src={recent_annotation_img_bluebg}
                      className="absolute top-0 h-full w-full object-cover rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="w-[60%] p-5 flex flex-col justify-center">
                    <h3 className="heading-h3">
                      {item.headinh1} <br /> {item.heading2}
                    </h3>
                    <div className="mt-2 text-[18px]">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="grid gap-3 p-2 pb-5 lg:p-10 md:hidden lg:hidden">
        {cardss.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col">
              <div className="z-10 relative">
                <img
                  src={item.img}
                  alt=""
                  className="h-60 w-full object-cover rounded-t-xl"
                />
                <img
                  src={recent_annotation_img_bluebg}
                  className="absolute inset-0 h-60 w-full object-cover rounded-t-xl"
                  alt=""
                />
              </div>
              <div className="-mt-1 text-[15px] text-left p-4 bg-linear-to-r from-[#E1E8F4] to-[#FFFBF0] rounded-b-lg">
                <h3 className="heading-h3 mb-1">
                  {item.headinh1} {item.heading2}
                </h3>
                <ReadMoreLess
                  id={item.headinh1}
                  charLimit={200}
                  readMoreText={"Read more"}
                  readLessText={"...Read less"}
                >
                  {item.content}
                </ReadMoreLess>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:hidden">
        <div
          className="flex group justify-center items-center"
          onClick={handleViewAll}
        >
          <button
            className={`bg-[#FFFBF0] border border-[#13B2F5] text-[#37508A] text-[12px] md:text-[14px] rounded-full flex p-3 px-5 md:px-5 items-center transition-all duration-300 ease-in-out ${
              showAll
                ? "w-[150px] md:w-[160px] group-hover:w-[110px] md:group-hover:w-[130px]"
                : "w-[140px] md:w-[150px] group-hover:w-[100px] md:group-hover:w-[110px]"
            }`}
          >
            {showAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
          <span className="relative w-[30px] h-[30px] md:w-[35px] md:h-[35px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-8 group-hover:ml-2 transition-all duration-300 ease-in-out">
            <img src={arrow} alt="" className="w-4 md:w-5" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
