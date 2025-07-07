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
import quality_Inspection from "/industries/food & beverages/quality-Inspection.jpg";
import packaging_Inspection from "/industries/food & beverages/packaging-Inspection.jpg";
import sorting_grading from "/industries/food & beverages/sorting-grading.jpg";
import defect_detection from "/industries/food & beverages/defect-detection.jpg";
import food_safety_traceability from "/industries/food & beverages/food-safety-traceability.jpg";
import gsap from "gsap";
 
const Applications = () => {
  const data = [
    {
      id: 1,
      headinh1: "Quality Inspection",
      heading2: "",
      content: `AI-driven quality inspections in the food and beverage industry minimising product recall risks and optimising production. AI-driven data annotation marks a significant advancement, ensuring the delivery of premium products and global consumer satisfaction. AI systems analyse the quality of food and beverages by analysing large datasets, guarantees enhanced quality and safety.  These annotated datasets enable AI systems to identify defects, assess product quality, and uphold stringent industry standards. `,
      img: quality_Inspection,
    },
    {
      id: 2,
      headinh1: "Packaging Inspection",
      heading2: "",
      content: `Maintaining high-quality packaging is critical in the fast-paced food and beverage industry. Using data annotation techniques is an enormous advance in ensuring that products meet the highest safety and quality criteria for worldwide customers. Data annotation involves categorising diverse information like images and sensor data, covering packaging dimensions, materials, labeling accuracy, barcodes, printing quality, and structural integrity. Our expert annotators identify and classify this data, allowing machine learning algorithms to ensure quality and industry requirements are met.`,
      img: packaging_Inspection,
    },
    {
      id: 3,
      headinh1: "Sorting & Grading",
      heading2: "",
      content: `Using AI technology enables the accurate sorting of perishable goods such as fruits and vegetables, guaranteeing that only the highest-quality products reach the market. Our advanced data annotation techniques enable firms to precisely grade goods based on variables such as size, quality, and freshness, improving overall food sector efficiency and quality.`,
      img: sorting_grading,
    },
    {
      id: 4,
      headinh1: "Defect Detection",
      heading2: "",
      content: `Ensuring the highest standards of quality and safety in the food industry is paramount, and defect detection plays a pivotal role in achieving this goal.  Through precise data labeling, where extensive datasets of food production images and sensor data are annotated, AI models can be trained to identify subtle anomalies and deviations from quality benchmarks. This robust foundation enables real-time monitoring of food manufacturing processes, allowing for the swift identification of potential defects. `,
      img: defect_detection,
    },
    {
      id: 5,
      headinh1: "Food Safety and Traceability",
      heading2: "",
      content: `Data annotation for food safety and traceability involves a wealth of critical information, encompassing product specifics like batch numbers, expiration dates, production methods, and origin details.`,
      img: food_safety_traceability,
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
      if (window.innerWidth >= 1733) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 66.7); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 74.6); // Adjust value as needed
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
 
        //  loop();
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
    <section className="md:mt-20  select-none ">
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
        <h2 className="heading-h2 text-center lg:mb-5 uppercase lg:leading-[50px] 2xl:leading-[63px] responsive-section-container">
          APPLICATIONS OF <br />
          DATA ANNOTATION IN FOOD & BEVERAGES
        </h2>
        <div className="text-[16px] md:text-[18px] 3xl:text-[20px] text-center responsive-section-container">
          <div className="p-3 md:p-5 lg:p-0">
            <p>
              {" "}
              In shaping the future of the food industry, data annotation
              services are pivotal, ensuring precision, safety, and personalised
              experiences in every gastronomic encounter.
            </p>
            <p className="mt-2">
              Annotating data is critical for training machine learning models
              that can accurately classify, detect, and analyse food and
              beverage-related data. The annotation improves the applications by
              enabling various tasks sucha as, food classification, quality
              control, product ID tracking, activity tracking, product layout,
              menu analysis, and other functions.
            </p>
          </div>
        </div>

        <div
          className="carousel-cursor mt-8 p-4 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 2xl:pl-28 cursor-grab"
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
                        {item.headinh1} <br />
                        {item.heading2}
                      </h3>
                      <p className="mt-5 lg:text-[16px] xl:text-[18px] 2xl:text-[19px]">
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

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center px-4 lg:p-10 hidden lg:hidden">
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
                      className="absolute inset-0 h-full object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                  <div className="w-[60%] pl-5 pr-5 pb-5">
                    <img
                      src={vector3}
                      className="-mt-36 ml-604rotate-90"
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
                      className="h-full object-cover"
                    />
                    <img
                      src={imgbg}
                      className="absolute top-0 h-full w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="sm:block pb-5 grid gap-3 p-2 lg:p-10 md:hidden lg:hidden mx-auto container">
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
                <div className="-mt-1 text-[16px] text-white text-left px-4 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-lg">
                  <h3 className="heading-h3 mt-3 mb-1">
                    {item.headinh1}
                    {item.heading2}
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

        <div className="flex justify-center lg:hidden pt-8">
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

export default Applications;
