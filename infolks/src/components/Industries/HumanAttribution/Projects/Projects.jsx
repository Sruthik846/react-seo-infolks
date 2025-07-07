import { useEffect, useRef, useState } from "react";
import bgimageCard from "/industries/agriculture/recent-annotation-bg-image.png";
import arrowLeft from "/industries/agriculture/icons/arrow-left.svg";
import arrowRight from "/industries/agriculture/icons/arrow-right.svg";
import recent_annotation_bg_vector from "/industries/agriculture/recent-annotation-bg-vector.png";
import recent_annotation_img_bluebg from "/industries/agriculture/recent-annotation-img-blue-bg.png";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import arrow from "/home/icons/arrowRight.png";
import action_recognition from "/industries/human attribution/action-recognition.jpg";
import face_hair_labeling from "/industries/human attribution/face-hair-labeling.jpg";
import person_tracking from "/industries/human attribution/person-tracking.jpg";
import face_body_posture_labeling from "/industries/human attribution/face-body-posture-labeling.jpg";
import photoshoot from "/industries/human attribution/photoshoot.jpg";

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateValue, setTranslateValue] = useState("81%");
  const [isTransitioning, setIsTransitioning] = useState(true); // Default to 80%
  useEffect(() => {
    const updateTranslateValue = () => {
      if (window.innerWidth >= 1280) {
        // Extra Large Screen (xl)
        setTranslateValue("81%");
      } else if (window.innerWidth >= 1024) {
        // Large Screen (lg)
        setTranslateValue("100.1");
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
      headinh1: "Action Recognition",
      heading2: " ",
      content: `Advanced computer vision techniques enable comprehensive action recognition by analyzing nuanced facial cues alongside hand gestures, body postures, and facial expressions. Data annotation is key, facilitating accurate labeling of images or videos for precise analysis of human behavior in digital environments.`,
      img: action_recognition,
    },
    {
      id: "02",
      headinh1: "Face & Hair",
      heading2: "Labeling",
      content: `We label faces and hair in provided frames, enhancing facial recognition and image analysis accuracy. This precise annotation enhances facial recognition systems and enables more accurate analysis in various applications.`,
      img: face_hair_labeling,
    },
    {
      id: "03",
      headinh1: "Person Tracking",
      heading2: "",
      content: `This project focuses on identifying and labeling individuals within provided frames.Through advanced tracking algorithms, we aim to accurately detect and label individuals for crowd monitoring, security surveillance, and behavioral analysis applications. By precisely annotating individuals in real-time video feeds, we enhance situational awareness and improve decision-making processes in various contexts, including public safety and retail analytics.`,
      img: person_tracking,
    },
    {
      id: "04",
      headinh1: "Face & Body",
      heading2: "Posture Labeling",
      content: `This aims to classify body facing (front-facing and non-front-facing) and facial posing by analyzing head pose. Utilizing advanced computer vision techniques, we accurately identify and label these attributes in images or video frames. This enhances applications such as gesture recognition and emotion detection, contributing to improved human behavior analysis in various domains.`,
      img: face_body_posture_labeling,
    },
    {
      id: "05",
      headinh1: "Photoshoot",
      heading2: "",
      content: `This project involves identifying and labeling individuals in images based on ID, position types, and recognition types. Through advanced image recognition techniques, we accurately detect and label people, streamlining photoshoot workflows and improving overall efficiency in image management and analysis.`,
      img: photoshoot,
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
    <section className="flex flex-col lg:flex-row gap-2 md:gap-4 xl:gap-32 lg:my-8 font-primary-regular my-8 md:my-14">
      <div className="">
        <h2 className="lg:mt-5 px-5 heading-h2 text-center lg:text-left lg:mb-5 uppercase w-full lg:w-2/3 lg:pl-14 2xl:pl-28 lg:leading-[50px] 2xl:leading-[63px]">
          OUR RECENT PROJECTS
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
        <div className="gap-5 mt-8 hidden lg:flex lg:pl-14 2xl:pl-28">
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
                      <img
                        src={item.img}
                        className="h-full object-cover rounded-xl"
                        alt=""
                      />
                      <img
                        src={recent_annotation_img_bluebg}
                        className="absolute top-0 h-full rounded-xl"
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
          )
        )}
      </div>

      <div className="sm:block responsive-section-container grid gap-3 pb-5 p-2 md:hidden lg:hidden">
        {cardss.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="flex flex-col">
              <div className="z-10 relative">
                <img
                  src={item.img}
                  alt=""
                  className="h-60 w-full object-cover rounded-t-xl"
                />
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
        ))}
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

export default RecentProjects;
