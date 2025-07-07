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
import traceability_tracking_of_objects from "/industries/logistic/traceability-tracking-of-objects.jpg";
import inspection_quality_control_of_goods from "/industries/logistic/inspection-quality-control-of-goods.jpg";
import equipment_condition_monitoring from "/industries/logistic/equipment-condition-monitoring.jpg";
import barcode_labeling from "/industries/logistic/barcode-labeling.jpg";
import automated_handling_systems from "/industries/logistic/automated-handling-systems.jpg";
import gsap from "gsap";

const AnnotationUsecases = () => {
  // -------------- readmore character limit for different screen sizes -----------
  const [charLimit, setCharLimit] = useState(301);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(301);
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
      headinh1: "Traceability and",
      heading2: "Tracking of Objects",
      content: `AI in logistics improves object traceability and tracking by utilising various AI algorithms. Perfect data annotation services are crucial for establishing traceability and tracking systems. By annotating essential data elements like barcodes, QR codes, serial numbers, and RFID tags, logistics companies guarantee precise documentation of every item's progress through the supply chain. This labeling process ensures accurate traceability and enhances the overall efficiency of logistics operations. `,
      img: traceability_tracking_of_objects,
    },
    {
      id: 2,
      headinh1: "Inspection and Quality",
      heading2: "Control of Goods",
      content: `AI in logistics plays a critical role in automating the inspection and quality control of products, ensuring items fulfil demanding requirements with precision and efficiency. Logistics companies can establish robust quality control processes by accurately annotating vital data points pertaining to product specifications, defects, and quality parameters. With the assistance of data annotation services, they can efficiently uphold stringent standards for product quality and safety, ensuring that their goods meet and exceed expectations.`,
      img: inspection_quality_control_of_goods,
    },
    {
      id: 3,
      headinh1: "Equipment",
      heading2: "Condition Monitoring",
      content: `The application of AI in logistics improves the accuracy and efficiency of equipment condition monitoring. In logistics, ensuring equipment reliability is pivotal. By annotating vital data points like performance metrics and wear patterns, logistics firms gain crucial insights. This precise data annotation is key to seamless operations, minimising disruptions, and maximising equipment efficiency.`,
      img: equipment_condition_monitoring,
    },
    {
      id: 4,
      headinh1: "Barcode Labeling",
      heading2: "",
      content: `Barcodes are associated with products to identify and categorise them using various labeling techniques. AI in logistics enhances barcode labeling by recognising product features, enabling precise sorting, and decreasing errors in distribution centers. The best data annotation services enable effortless tracking and seamless sorting. Through precise data annotation, each package and product is assigned a distinct digital signature, simplifying the process of tracking and sorting with the utmost ease. With our services, we help you label identification codes for goods like barcodes, QR codes, etc.`,
      img: barcode_labeling,
    },
    {
      id: 5,
      headinh1: "Automated",
      heading2: "Handling Systems",
      content: `In the realm of logistical applications, automated handling systems have rapidly evolved into the cornerstone of efficient operations. The integration of  AI in logistics within automated handling systems ensures adaptive decision-making. Our data annotation services guarantee that your logistics processes operate with unparalleled efficiency.`,
      img: automated_handling_systems,
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

  return (
    <section className="mt-5 pb-14 select-none font-primary-regular">
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
          <h2 className="hidden sm:block text-center mb-2 lg:mb-5 uppercase heading-h2 leading-[63px]">
            DATA ANNOTATION USECASES IN LOGISTICS
          </h2>

          {/* small screen title */}
          <h2 className="block sm:hidden text-center mb-2 lg:mb-5 uppercase heading-h2">
            DATA ANNOTATION USECASES IN LOGISTICS
          </h2>
        </div>
        <div className="text-center">
          <div className="responsive-section-container">
            <ReadMoreLess
              id="dataannotation_usecases"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              In the evolving logistics industry, annotated data continues to be
              the catalyst, revolutionising reliability and speed in supply
              chain management. Explore the impactful realm of data annotation
              services in logistics with us. Through real-world projects,
              witnessing raw data transforms into actionable intelligence,
              improving decision-making, and reshaping the logistics landscape.
              Our expertise and innovative solutions accelerate the evolution of
              AI in logistics, making it faster, smarter, and highly adaptable
              to the demands of the modern world. To get a deeper idea of our
              services, go through usecases.
            </ReadMoreLess>
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
                        className="lg:-mt-32 xl:-mt-28 2xl:-mt-20 mb-5"
                        alt=""
                      />
                      <img src={vector2} className="absolute ml-96" alt="" />
                      <h3 className="heading-h3 2xl:text-[40px] leading-[45px] 2xl:mt-10">
                        {item.headinh1} <br />
                        {item.heading2}
                      </h3>
                      <p className="mt-2 2xl:mt-5 lg:text-[15px] xl:text-[18px] 2xl:text-[19px]">
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
                      className="absolute inset-0 h-full object-cover rounded-lg"
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
                    <div className="mt-2">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"...Read more"}
                        readLessText={"...Read less"}
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
                    <div className="mt-2">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"...Read more"}
                        readLessText={"...Read less"}
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
                      className="absolute top-0 object-cover rounded-lg h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="grid gap-3 p-2 lg:p-10 md:hidden lg:hidden pb-5">
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
                    {item.headinh1} <br />
                    {item.heading2}
                  </h3>
                  <ReadMoreLess
                    id={item.headinh1}
                    charLimit={200}
                    readMoreText={"...Read more"}
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
