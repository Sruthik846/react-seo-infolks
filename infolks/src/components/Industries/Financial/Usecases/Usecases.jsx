import { useState, useRef, useEffect } from "react";
import "../style.css";
import bgimageCard from "/industries/agriculture/icons/agriculture-industry-bgimage.svg";
import vector1 from "/industries/agriculture/icons/agriculture-industry-vector1.svg";
import vector2 from "/industries/agriculture/icons/Vector.png";
import vector3 from "/industries/agriculture/icons/vector1.png";
import vector4 from "/industries/agriculture/icons/vector2.png";
import imgbg from "/industries/agriculture/img-bg.png";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import arrow from "/home/icons/arrowRight.png";

// large screen
import fraud_detection from "/industries/financial/fraud-detection.jpg";
import utility_bill_labeling from "/industries/financial/utility-bill-labeling.jpg";
import text_localisation from "/industries/financial/text-localisation.jpg";
import chatbots from "/industries/financial/chatbots.jpg";
import insurance from "/industries/financial/insurance.jpg";

// medium screen
import fraud_detection_md from "/industries/financial/medium/fraud-detection.jpg";
import utility_bill_labeling_md from "/industries/financial/medium/utility-bill-labeling.jpg";
import text_localisation_md from "/industries/financial/medium/text-localisation.jpg";
import chatbots_md from "/industries/financial/medium/chatbots.jpg";
import insurance_md from "/industries/financial/medium/insurance.jpg";

// medium screen
import fraud_detection_sm from "/industries/financial/small/fraud-detection.jpg";
import utility_bill_labeling_sm from "/industries/financial/small/utility-bill-labeling.jpg";
import text_localisation_sm from "/industries/financial/small/text-localisation.jpg";
import chatbots_sm from "/industries/financial/small/chatbots.jpg";
import insurance_sm from "/industries/financial/small/insurance.jpg";
import gsap from "gsap";

const Usecases = () => {
  // -------------- readmore character limit for different screen sizes -----------
  const [charLimit, setCharLimit] = useState(300);

  useEffect(() => {
    const updateCharLimit = () => {
      if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(300);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(200);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setCharLimit(180);
      } else {
        // Small screens and below (sm and xs)
        setCharLimit(162);
      }}
    };

    // Initial check
    updateCharLimit();

    // Update charLimit on window resize
    window.addEventListener("resize", updateCharLimit);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCharLimit);
    };
  }, []);
  // ----------------- end of charLimit section ----------------

  //drag animation..................../////////////////////////////////

  const [blobColor, setBlobColor] = useState("#0C9DFC"); // Default white
  const handleMouseEnterText = () => setBlobColor("#02BAE2"); // White for text section
  const handleMouseEnterImage = () => setBlobColor("#0C9DFC"); // Blue for image section

  const jellyRef = useRef(null);
  const textRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 }).current;
  const vel = useRef({ x: 0, y: 0 }).current;
  const [isMouseInsideCarousel, setIsMouseInsideCarousel] = useState(false);

  useEffect(() => {
    const setFromEvent = (e) => {
      if (!carouselRef.current) return;
      const carouselRect = carouselRef.current.getBoundingClientRect();
      const x = e.clientX - carouselRect.left;
      const y = e.clientY - carouselRect.top;

      // Check if the mouse is inside the carousel
      if (
        x >= 0 &&
        x <= carouselRect.width &&
        y >= 0 &&
        y <= carouselRect.height
      ) {
        setIsMouseInsideCarousel(true); // Show blob

        gsap.to(pos, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35,
          onUpdate: () => {
            vel.x = e.clientX - pos.x;
            vel.y = e.clientY - pos.y;
          },
        });

        // loop();
      } else {
        setIsMouseInsideCarousel(false); // Hide blob when outside
      }
    };

    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [pos,vel]);

  //custom cursor
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // End drag animation.....................///////////////////////////////


  const data = [
    {
      id: 1,
      title: "Fraud Detection",
      content: `Annotated data is essential for training machine learning models to detect patterns associated with fraudulent activity. AI in finance, swiftly detect and flag fraudulent transactions in real time through analysis of annotated data, ensuring customer and system protection. The financial sector employs sophisticated algorithms that constantly monitor these annotated transactions in real-time. Through our precise data annotation, we not only preserves the integrity of the financial system but also protects customers from potential financial losses and identity theft.`,
      img: fraud_detection,
      imgMedium: fraud_detection_md,
      imgSmall: fraud_detection_sm,
    },
    {
      id: 2,
      title: "Utility Bill Labeling",
      content: `Utility bill annotation plays a vital role in promoting sustainability, enabling organisations to monitor and enhance their resource usage. Our data annotation services provide critical precision and accuracy, particularly when dealing with utility bills, ensuring informed decision-making and long-term practices.`,
      img: utility_bill_labeling,
      imgMedium: utility_bill_labeling_md,
      imgSmall: utility_bill_labeling_sm,
    },
    {
      id: 3,
      title: "Text Localisation ",
      content: `Text localisation is vital for tailoring financial content to diverse languages and bridging communication gaps. Data annotation, with precise labeling, provides the necessary framework for AI algorithms to comprehend various languages and dialects effectively. Our experts annotate financial details like currency amounts, dates, company names, and market trends in documents, reports, news, and communications.`,
      img: text_localisation,
      imgMedium: text_localisation_md,
      imgSmall: text_localisation_sm,
    },
    {
      id: 4,
      title: "ChatBots ",
      content: `In the fast-paced world of finance, precise communication is essential. Chatbots, driven by data annotation and AI technology, are key players. These intelligent chatbots, backed by carefully annotated data, significantly enhance user interactions, fostering strong and meaningful customer relationships. Our experts label financial data points like transactions, account balances, investments, and market trends to empower chatbots to quickly access and analyse pertinent information.`,
      img: chatbots,
      imgMedium: chatbots_md,
      imgSmall: chatbots_sm,
    },
    {
      id: 5,
      title: "Insurance ",
      content: `AI in finance industry, especially in insurance, is undergoing a remarkable evolution through the fusion of data annotation. From managing claims to conducting virtual inspections and evaluating risks, data annotation serves as the vital link driving these advancements. Through data annotation, AI systems gain the ability to decipher extensive datasets, ensuring precise policy pricing, fraud detection, and enhanced underwriting processes for insurers.`,
      img: insurance,
      imgMedium: insurance_md,
      imgSmall: insurance_sm,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX);
    setDragging(true);
  };

  const handleDragMove = (e) => {
    if (dragging) {
      const dragCurrentX = e.clientX || e.touches[0].clientX;
      const dragDistance = dragStartX - dragCurrentX;
      if (dragDistance > 100 && currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setDragging(false);
      } else if (dragDistance < -100 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setDragging(false);
      }
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  // ------------ transform value for different screen sizes---------------
  const [translateXValue, setTranslateXValue] = useState(0);

  useEffect(() => {
    const updateTranslateValue = () => {
      if (window.innerWidth >= 1734) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 66.6); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 74.7); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 74.7);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 84);
      }
    };

    updateTranslateValue();
    window.addEventListener("resize", updateTranslateValue);

    return () => window.removeEventListener("resize", updateTranslateValue);
  }, [currentIndex]);

  // ---------------End of transform value section-------------------

  // below md block
  const [cardss, setCard] = useState(data.slice(0, 2));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? data.slice(0, 2) : data);
    setShowAll(!showAll);
  };

  return (
    <section className="md:mt-5 pb-14 select-none font-primary-regular">
          <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          ref={jellyRef}
          className="jelly-blob"
          style={{
            backgroundColor: blobColor,
            visibility: isMouseInsideCarousel ? "visible" : "hidden",
          }}
        >
          <div ref={textRef} className="inside-text">
            <p>Drag</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-[#37508A]">
        <div className="responsive-section-container">
          {/* large screen title */}
          <h2 className="hidden sm:block text-center lg:mb-5 uppercase heading-h2 leading-[63px]">
            VARIOUS ANNOTATION <br />
            USECASES IN FINANCIAL & BANKING
          </h2>

          {/* medium screen title */}
          <h2 className="block sm:hidden text-center uppercase heading-h2 mb-2">
            VARIOUS ANNOTATION USECASES IN FINANCIAL & BANKING
          </h2>
        </div>
        <div className="responsive-section-container text-center">
          <ReadMoreLess
            id="financial_usecases"
            charLimit={charLimit}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readLessClassName="paragraph text-[#20B3F1]"
            readMoreClassName="paragraph text-[#20B3F1]"
          >
            In the dynamic financial landscape, our data annotation services
            stand at the forefront, propelling transformative innovations. We
            boast a wide range of impactful use cases within the financial
            sector, each contributing to our deep commitment to excellence. With
            an ongoing commitment to excellence, we are delighted to present a
            varied range of meaningful usecases in the financial sector. Each
            annotation we provide shows our commitment to keeping the financial
            industry at the forefront of technological innovation, with data
            annotation as its guiding light.
          </ReadMoreLess>
        </div>
        <div
          className="carousel-cursor lg:mt-4 2xl:mt-8 p-4 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 2xl:pl-20 cursor-grab"
          style={{ position: "relative", left: "0px", top: "0px" }}
          ref={carouselRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="carousel-inner gap-6"
            style={{
              display: "flex",
              transition: dragging ? "none" : "transform 0.5s ease",
              transform: `translateX(${translateXValue}%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                className="shrink-0 lg:w-[85%] xl:w-[78%] 2xl:w-[72%]"
                key={index}
              >
                <div className="relative w-full">
                  <img
                    src={bgimageCard}
                    alt="Background"
                    className="w-full h-auto rounded-box"
                  />
                  <div className="absolute inset-0 flex">
                    <div className="w-[60%] pl-10 pr-10 2xl:pl-24 2xl:pr-20 text-white overflow-hidden text-left"
                     onMouseEnter={handleMouseEnterText}>
                      <img
                        src={vector3}
                        className="lg:-mt-40 2xl:-mt-36 -ml-56 2xl:-ml-64"
                        alt=""
                      />
                      <img
                        src={vector4}
                        className="lg:-mt-28 xl:-mt-20 2xl:-mt-20 mb-5"
                        alt=""
                      />
                      <img src={vector2} className="absolute ml-96" alt="" />
                      <h3 className="heading-h3 2xl:text-[40px] leading-[45px] 2xl:mt-10">
                        {item.title}
                      </h3>
                      <p className="mt-2 xl:mt-5 lg:text-[16px] xl:text-[18px] 2xl:text-[19px]">
                        {item.content}
                      </p>
                      <img
                        src={vector1}
                        className="ml-[278px] xl:ml-[420px] absolute -bottom-24 z-0"
                        alt=""
                      />
                    </div>
                    <div className="w-[40%] z-10 relative ml-1"
                      onMouseEnter={handleMouseEnterImage}>
                      <img
                        src={item.img}
                        className="pointer-events-none h-full w-full rounded-[10px]"
                        alt=""
                      />
                      <img
                        src={imgbg}
                        className="pointer-events-none absolute top-0 rounded-[10px] h-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center p-4 pb-5 lg:p-10 hidden lg:hidden">
          {cardss.map((item, index) =>
            item.id % 2 == 0 ? (
              <div
                className="bg-linear-to-r from-[#02B9E2] to-[#0280FB] text-white text-left rounded-lg"
                key={index}
              >
                <div className="flex">
                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.imgMedium}
                      alt=""
                      className="h-full object-cover rounded-lg"
                    />
                    <img
                      src={imgbg}
                      className="absolute top-0 h-full object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                  <div className="w-[60%] pl-5 pr-5 pb-5">
                    <img
                      src={vector3}
                      className="-mt-36 ml-64 rotate-90"
                      alt=""
                    />
                    <img src={vector2} className="ml-72 w-10" alt="" />
                    <img src={vector4} className="-mt-40 ml-40" alt="" />
                    <h3 className="heading-h3">{item.title}</h3>
                    <div className="mt-2">
                      <ReadMoreLess
                        id={item.title}
                        charLimit={400}
                        readMoreText={"...Read more"}
                        readLessText={"....Read less"}
                        readLessClassName="paragraph"
                        readMoreClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="bg-linear-to-r from-[#02B9E2] to-[#0280FB] text-white text-left rounded-lg"
                key={index}
              >
                <div className="flex">
                  <div className="w-[60%] pl-5 pr-5 pb-5">
                    <img src={vector3} className="-mt-36 -ml-40" alt="" />
                    <img src={vector2} className="ml-72 w-10" alt="" />
                    <img src={vector4} className="-mt-40 ml-40" alt="" />
                    <h3 className="heading-h3">{item.title}</h3>
                    <div className="mt-2">
                      <ReadMoreLess
                        id={item.title}
                        charLimit={400}
                        readMoreText={".....Read more"}
                        readLessText={".....Read less"}
                        readLessClassName="paragraph"
                        readMoreClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>

                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.imgMedium}
                      alt=""
                      className="h-full object-cover rounded-lg"
                    />
                    <img
                      src={imgbg}
                      className="absolute top-0 h-full object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="sm:block grid responsive-section-container mt-2 pb-5 lg:p-10 md:hidden lg:hidden">
          {cardss.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex flex-col">
                <div className="z-10 relative">
                  <img
                    src={item.imgSmall}
                    alt=""
                    className="h-full w-full object-cover rounded-t-lg"
                  />
                  <img
                    src={imgbg}
                    className="absolute inset-0 h-full w-full object-cover rounded-t-lg"
                    alt=""
                  />
                </div>
                <div className="-mt-1 text-[16px] text-white text-left p-4 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-lg">
                  <h3 className="heading-h3 mb-1">{item.title}</h3>
                  <ReadMoreLess
                    id={item.title}
                    charLimit={200}
                    readMoreText={"...Read more"}
                    readLessText={"....Read less"}
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
              <img
                src={arrow}
                alt=""
                className="w-4 md:w-5"
                style={{ fill: "blue" }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usecases;
