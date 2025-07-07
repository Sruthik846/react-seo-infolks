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
import animal_identification_track from "/industries/livestock/animal-identification-track.jpg";
import health_monitoring from "/industries/livestock/health-monitoring.jpg";
import behaviour_analysis from "/industries/livestock/behaviour-analysis.jpg";
import precision_livestock_farming from "/industries/livestock/precision-livestock-farming.jpg";
import automated_milking_system from "/industries/livestock/automated-milking-system.jpg";
import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph.jsx";
import gsap from "gsap";

const AnnotationUsecases = () => {
  // -------------- readmore character limit for different screen sizes -----------
  const [charLimit, setCharLimit] = useState(300);

  useEffect(() => {
    const updateCharLimit = () => {
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
      }
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

  const data = [
    {
      id: 1,
      headinh1: "Animal Identification ",
      heading2: "and Tracking",
      content: `Livestock management can revolutionise their practices by effortlessly merging data annotation services with AI technology. AI in livestock management, animal identification, and tracking stand as transformative use cases, propelled by the precision of data annotation services. By labeling data points related to animal features like unique identities (ear tags, neck chains, tattoos, EIDs, etc.), postures, movements, activities, etc. By tracking the cow's calving history, breeding dates, pregnancy status, and reproductive performance, it helps to improve herd health, reproduction, and the general productivity of livestock. This annotated dataset serves as the cornerstone for training advanced AI algorithms.`,
      img: animal_identification_track,
    },
    {
      id: 2,
      headinh1: "Health",
      heading2: "Monitoring",
      content: `Data annotation services are instrumental in the accurate and timely monitoring of animal health in livestock management. They empower AI systems to provide precise insights, contributing to healthier animals and more effective health management practices.`,
      img: health_monitoring,
    },
    {
      id: 3,
      headinh1: "Behaviour",
      heading2: "Analysis",
      content: `AI In the livestock sector, animal behaviour is essential for ensuring their welfare and streamlining production methods. To enhance advanced technology such as machine learning and computer vision, experts use data annotation services and annotate large datasets received from a variety of sources, such as video recordings and sensor data. Our experts annotate animal behaviours like feeding habits, social interactions, and mobility, offering invaluable insights to both livestock researchers and farmers.`,
      img: behaviour_analysis,
    },
    {
      id: 4,
      headinh1: "Precision Livestock ",
      heading2: "Farming",
      content: `The combination of AI and data annotation offers a future of more accurate and long-term reproductive control practices in the livestock sector. Data annotation improves the quality of reproductive outcomes by thoroughly annotating numerous behavioral and physiological factors, ranging from heat cycles to optimal breeding times. This integration ensures the well-being and productivity of livestock, paving the way for a more efficient and sustainable agricultural future.`,
      img: precision_livestock_farming,
    },
    {
      id: 5,
      headinh1: "Automated",
      heading2: " Milking System",
      content: `The integration of AI and data annotation presents a future of more accurate and long-term reproductive control practices in the livestock sector. Our usecase is AI in livestock, showcasing how data annotations empower automated milking processes. Our annotation services delves into the seamless integration of AI into livestock, showcasing how data annotation helps to revolutionise milking processes. `,
      img: automated_milking_system,
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
        setTranslateXValue(-currentIndex * 74.6); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 74.6);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 83.9);
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

  //drag animation..................../////////////////////////////////

  const [blobColor, setBlobColor] = useState("#0C9DFC"); // Default white
  const handleMouseEnterText = () => setBlobColor("#02BAE2"); // for text section
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
            VARIOUS <br />
            ANNOTATION USECASES IN LIVESTOCK
          </h2>

          {/* medium screen title */}
          <h2 className="block sm:hidden text-center uppercase heading-h2 mb-2">
            VARIOUS ANNOTATION USECASES IN LIVESTOCK
          </h2>
        </div>

        <div className="text-center mx-auto container">
          <div className="responsive-section-container">
            <ReadMoreLessParagraph
              id="livestock_annotation_usecases"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              <p>
                The annotation of AI data emerges as a crucial cornerstone,
                shaping the landscape of the modern livestock sector. Through
                precise annotation, vast volumes of data related to livestock
                behaviour, health metrics, and environmental factors are curated
                and structured. This annotated data serves as the lifeblood for
                training sophisticated machine learning models. We annotate
                diverse datasets encompassing animal movements, feeding
                patterns, genetic information, and health records. These AI
                models gain profound insights into the intricacies of livestock
                management.
              </p>
              <p className="mt-2">
                Thorough annotation of AI data in the livestock sector not only
                revolutionises animal farming practices but also fosters
                sustainable and ethical approaches. Using annotated data, these
                models learn to recognise patterns in animal behaviour, enabling
                early detection of diseases, optimising feeding schedules, and
                improving overall herd management.
              </p>
            </ReadMoreLessParagraph>
          </div>
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
                        className="lg:-mt-32 xl:-mt-20 2xl:-mt-20 mb-2"
                        alt=""
                      />
                      <img src={vector2} className="absolute ml-96" alt="" />
                      <h3 className="heading-h3 leading-[42px] 2xl:mt-10">
                        {item.headinh1} <br />
                        {item.heading2}
                      </h3>
                      <p className="mt-2 xl:mt-5 lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
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
                        className="pointer-events-none h-full w-full rounded-[10px] object-cover"
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

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center p-4 lg:p-10 hidden lg:hidden">
          {cardss.map((item, index) =>
            item.id % 2 == 0 ? (
              <div
                className="bg-linear-to-r from-[#02B9E2] to-[#0280FB] text-white text-left rounded-lg"
                key={index}
              >
                <div className="flex">
                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full object-cover rounded-lg"
                    />
                    <img
                      src={imgbg}
                      className="absolute inset-0 h-full w-full object-cover rounded-lg"
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
                    <h3 className="heading-h3">
                      {item.headinh1} {item.heading2}
                    </h3>
                    <div className="mt-2 text-[18px]">
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
                    <h3 className="heading-h3">
                      {item.headinh1} {item.heading2}
                    </h3>
                    <div className="mt-2 text-[18px]">
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

                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full object-cover rounded-lg"
                    />
                    <img
                      src={imgbg}
                      className="absolute top-0 object-cover rounded-lg h-full w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="grid gap-3 responsive-section-container mt-2 pb-5 lg:p-10 md:hidden lg:hidden">
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
                    src={imgbg}
                    className="absolute inset-0 h-60 w-full object-cover rounded-t-xl"
                    alt=""
                  />
                </div>
                <div className="-mt-1 text-[16px] text-white text-left p-4 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-lg">
                  <h3 className="heading-h3 mb-1">
                    {item.headinh1} {item.heading2}
                  </h3>
                  <ReadMoreLess
                    id={item.headinh1}
                    charLimit={200}
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

export default AnnotationUsecases;
