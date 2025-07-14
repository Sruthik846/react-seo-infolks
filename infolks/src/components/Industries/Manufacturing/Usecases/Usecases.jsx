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
import product_quality_inspection_control from "/industries/manufacturing/product-quality-inspection-control.jpg";
import equipment_monitoring_safety from "/industries/manufacturing/equipment-monitoring-safety.jpg";
import safety_of_workforce from "/industries/manufacturing/safety-of-workforce.jpg";
import real_time_barcod_reading from "/industries/manufacturing/real-time-barcode-reading.jpg";
import automated_product_assembly from "/industries/manufacturing/automated-product-assembly.jpg";
import maintain_packaging_standards from "/industries/manufacturing/maintain-packaging-standards.jpg";
import defect_detection from "/industries/manufacturing/defect-detection.jpg";
import gsap from "gsap";
 
const Usecases = () => {
  const data = [
    {
      id: 1,
      headinh1: "Product Quality Inspection",
      heading2: "and Control",
      content: `In manufacturing, top-notch product quality isn't just a goal; it's a necessity. The utilisation of AI-powered computer vision and precise data annotation significantly enhances quality control practices in the manufacturing industry. Our expert team annotates data, ensuring accuracy in every aspect of product quality testing. Recognising that every manufacturing process is unique, we offer tailored data annotation solutions.`,
      img: product_quality_inspection_control,
    },
    {
      id: 2,
      headinh1: "Equipment Monitoring",
      heading2: "and Safety",
      content: `Through precise data annotation, we transform equipment monitoring and safety in manufacturing. Our precise labeling provides deep insights into equipment behavior, ensuring smooth monitoring and robust safety standards. Expertly annotated data fuels AI-driven predictive maintenance systems, empowering proactive and cost-effective safety strategies for your manufacturing setup.`,
      img: equipment_monitoring_safety,
    },
    {
      id: 3,
      headinh1: "Safety of workforce",
      heading2: "",
      content: `We are committed to safeguarding both the workforce and equipment in the manufacturing industry by harnessing the potential of data annotation services. We are at the forefront of revolutionising safety through the strategic application of data annotation services. Our data annotation services play a pivotal role in optimising workplace safety. We provide real-time insights into industrial facilities by annotating data from multiple sources, including sensors and surveillance systems.`,
      img: safety_of_workforce,
    },
    {
      id: 4,
      headinh1: "Real-Time Barcode Reading",
      heading2: "",
      content: `We utilise annotation methods to facilitate instantaneous barcode reading, revolutionising industrial practices. By integrating data annotation seamlessly into real-time barcode reading systems, we guarantee pinpoint product identification, minimising errors, and optimising operations. Our precisely annotated data ensures swift and precise barcode recognition, improving inventory management and quality control procedures.`,
      img: real_time_barcod_reading,
    },
    {
      id: 5,
      headinh1: "Automated Product Assembly",
      heading2: "",
      content: `We enable automated systems to achieve flawless product assembly by providing perfect data annotation services. Our services help to ensure that every component fits together perfectly, ensuring precision and reducing errors. We enable exact component detection with expertly annotated data, guaranteeing that every product is assembled flawlessly. This annotated data is used to train machine learning models and guide robotic devices during the assembly process.`,
      img: automated_product_assembly,
    },
    {
      id: 6,
      headinh1: "Maintain Packaging Standards",
      heading2: "",
      content: `In manufacturing, adhering to packaging standards is crucial. It ensures safe product handling, maintains quality during transit, and upholds brand reputation. Compliance with these standards enhances operational efficiency and customer trust.`,
      img: maintain_packaging_standards,
    },
    {
      id: 7,
      headinh1: "Defect Detection",
      heading2: "",
      content: `Detecting defects is a crucial component of upholding product quality and meeting industry regulations. Data labeling is a crucial player in the training of AI models dedicated to defect detection in manufacturing. Through careful annotation of extensive datasets containing manufacturing images and sensor data, AI algorithms can acquire the ability to recognise nuanced anomalies and deviations from established quality benchmarks. Instantaneous monitoring of production processes enables the rapid identification of defects and mitigates the potential for defective products to reach consumers.`,
      img: defect_detection,
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
      if (typeof window !== "undefined") {
      if (window.innerWidth >= 1733) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 68.9); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 76.4); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 76.5);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 85.2);
      }}
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

  // -------------- readmore character limit for different screen sizes -----------
  const [charLimit, setCharLimit] = useState(370);

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
    <section className="mt-5 md:mt-10 select-none font-primary-regular">
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
        <h2 className="text-center heading-h2 lg:mb-5 uppercase lg:w-2/3 lg:leading-[50px] 2xl:leading-[63px]">
          USECASES IN THE MANUFACTURING INDUSTRY
        </h2>
        <div className="text-[16px] md:text-[18px] 3xl:text-[20px] text-center responsive-section-container">
          <div className="p-3 md:p-5 lg:p-0">
            <ReadMoreLess
              id="manufacturing_usecases"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              As technology advances, manufacturing is changing; it&apos;s
              becoming more efficient, customised, sustainable, and innovative.
              In the future, these factors will work together to shape the
              industry. Harnessing the power of AI algorithms and the labeling
              of data, the manufacturing sector is experiencing unprecedented
              advancements. The integration of AI in the manufacturing industry
              has led to significant cost savings and increased competitiveness.
              Accurate labeling of data, combined with the power of AI
              algorithms, has revolutionised the manufacturing sector. Examining
              our practical applications offers valuable insights into how our
              data annotation expertise can elevate your manufacturing
              applications significantly.
            </ReadMoreLess>
          </div>
        </div>
        <div
          className="carousel-cursorl p-4 xl:py-14 py-10 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 2xl:pl-28 cursor-grab"
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
                    <div className="w-[40%] z-10 relative ml-1" onMouseEnter={handleMouseEnterImage}>
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

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center pb-5 p-4 lg:p-10 hidden lg:hidden">
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
                      {item.headinh1} <br />
                      {item.heading2}
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

        <div className="sm:block grid gap-3 p-2 pb-5 lg:p-10 md:hidden lg:hidden">
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

        <div className="flex justify-center lg:hidden pb-6">
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
