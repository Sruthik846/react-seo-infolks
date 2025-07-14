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
import smart_bin_system from "/industries/waste management/smart-bin-system.jpg";
import smart_sorting_recycling from "/industries/waste management/smart-sorting-recycling.jpg";
import optimising_waste_collection from "/industries/waste management/optimising-waste-collection.jpg";
import waste_material_monitoring from "/industries/waste management/waste-material-monitoring.jpg";
import waste_prevention from "/industries/waste management/waste-prevention.jpg";
import improving_sustainability from "/industries/waste management/improving-sustainability.jpg";
import waste_sorting from "/industries/waste management/waste-sorting.jpg";
import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph.jsx";
// Small deveice
import smart_bin_system_sm from "/industries/waste management/smart-bin-system-sm.jpg";
import smart_sorting_recycling_sm from "/industries/waste management/smart-sorting-recycling-sm.jpg";
import optimising_waste_collection_sm from "/industries/waste management/optimising-waste-collection-sm.jpg";
import waste_material_monitoring_sm from "/industries/waste management/waste-material-monitoring-sm.jpg";
import waste_prevention_sm from "/industries/waste management/waste-prevention-sm.jpg";
import improving_sustainability_sm from "/industries/waste management/improving-sustainability-sm.jpg";
import waste_sorting_sm from "/industries/waste management/waste-sorting-sm.jpg";
import gsap from "gsap";

const Applications = () => {
  const data = [
    {
      id: 1,
      title: "Smart Bin Systems",
      content: `Smart bins with AI technology constantly collect data on the types and amounts of waste being disposed of. The technology enables these smart bins to optimise waste collection schedules based on real-time data.
                The combination of AI with smart bins and precise data annotation has revolutionised garbage management, making it very efficient and sustainable. Precisely labeled data empowers waste management systems to effectively direct recyclable materials to suitable processing facilities. By categorising waste types like paper, plastic, glass, and metal accurately, this labeling guarantees that these materials are identified correctly and directed to the right recycling centers.`,
      imgUrl: smart_bin_system,
      imgSmall: smart_bin_system_sm,
    },
    {
      id: 2,
      title: "Smart Sorting and Recycling",
      content: `AI-powered sorting and recycling advancements streamline waste management by annotating images and videos to recognize materials like plastic, paper, glass, and metal. This enables automated sorting at recycling facilities, enhancing accuracy and reducing contamination. Additionally, AI deciphers recycling symbols on packaging, ensuring precise sorting and minimizing errors. Moreover, AI detects hazardous materials in annotated data, preventing their entry into recycling streams and ensuring safe handling. These innovations promise more efficient recycling processes and contribute to environmental sustainability.`,
      imgUrl: smart_sorting_recycling,
      imgSmall: smart_sorting_recycling_sm,
    },
    {
      id: 3,
      title: "Optimising Waste Collection",
      content: `Data annotation enables waste composition classification, informing collection frequency and resource allocation decisions. AI models, trained on annotated historical data, forecast future waste generation, optimizing collection routes and resources. Annotated image analysis by AI swiftly detects illegal dumping sites, aiding enforcement and reducing environmental damage. These advancements promise more efficient waste management and environmental conservation.`,
      imgUrl: optimising_waste_collection,
      imgSmall: optimising_waste_collection_sm,
    },
    {
      id: 4,
      title: "Waste Materials Monitoring",
      content: `Annotating data for waste material monitoring is a basic practise in modern AI waste management. The process involves categorising waste into separate categories, such as organic, recyclable, hasardous, and non-recyclable waste. Annotating data entails the identification of diverse waste materials, including paper, plastic, organic waste, hasardous substances, and more. Precisely categorising these materials is vital for gaining insights into the specific composition of waste generated in particular regions.`,
      imgUrl: waste_material_monitoring,
      imgSmall: waste_material_monitoring_sm,
    },
    {
      id: 5,
      title: "Waste Prevention",
      content: `Data annotation services for waste prevention are where we make a significant impact in our quest for a cleaner, more sustainable world. The best data annotation services enable you to make informed decisions that significantly reduce waste generation. Our services are precisely developed to address the unique requirements of waste prevention. We specialise in annotating large amounts of data and accurately identifying various waste products, ranging from recyclables like paper, plastic, glass, etc., to hazardous chemicals requiring special attention. From identifying high-waste locations to understanding consumption trends, an AI-driven strategy enables informed decisions. `,
      imgUrl: waste_prevention,
      imgSmall: waste_prevention_sm,
    },
    {
      id: 6,
      title: "Improving Sustainability",
      content: `AI-powered chatbots, trained with annotated data, promote recycling awareness by answering user queries on proper recycling practices and encouraging responsible waste disposal. Data annotation aids in evaluating the efficacy of new recycling technologies, speeding up innovation in waste management. Additionally, AI models trained on annotated sensor data monitor landfill emissions, facilitating strategies to reduce greenhouse gas emissions. These advancements drive more sustainable waste management practices and contribute to environmental preservation efforts.`,
      imgUrl: improving_sustainability,
      imgSmall: improving_sustainability_sm,
    },
    {
      id: 7,
      title: "Waste Sorting",
      content: `The use of data annotation in waste sorting procedures enables businesses and municipalities to significantly improve their recycling efforts.  Artificial intelligence-powered intelligence systems use precisely annotated data to recognise distinct patterns and characteristics particular to each waste category, including paper, plastic, glass, metal, organic waste, and hazardous items. This detailed data annotation improves waste sorting and encourages more effective recycling practices.`,
      imgUrl: waste_sorting,
      imgSmall: waste_sorting_sm,
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
        setTranslateXValue(-currentIndex * 69); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 84.8); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 84.8);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 97.1);
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
        setCharLimit(322);
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

  return (
    <section className="mt-10 sm:mt-20 select-none font-primary-regular">
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
        <h2 className="hidden lg:block heading-h2 text-center lg:mb-5 uppercase lg:leading-[50px] 2xl:leading-[63px]">
          Data Annotation Usecases In
          <br /> Waste Management
        </h2>
        <h2 className="block lg:hidden heading-h2 text-center lg:mb-5 uppercase lg:leading-[50px] 2xl:leading-[63px]">
          Data Annotation Usecases In
          <br /> Waste Management
        </h2>

        <div className="text-[16px] md:text-[18px] 3xl:text-[20px] text-center responsive-section-container">
          <div className="p-3 md:p-5 lg:p-0">
            <ReadMoreLessParagraph
              id="waste_management_applications"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              <p>
                AI training data helps to provide training datasets in AI waste
                management systems. The use of training datasets is critical to
                the success of AI waste management. Our waste management
                processes function with unique efficiency and precision by
                leveraging the power of artificial intelligence and precisely
                annotated data.
              </p>
              <p className="mt-2">
                Our AI waste management solutions redefine standard practices,
                from automated sorting systems that identify recyclables to
                predictive analysis that optimise waste collection processes.
                Explore our annotation solutions coming under AI Waste
                Management and witness the seamless integration of technology
                and AI using annotated data.
              </p>
            </ReadMoreLessParagraph>
          </div>
        </div>
        <div
          className="carousel-cursor xl:py-14 py-10 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 cursor-grab"
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
                className="shrink-0 lg:w-[95%] xl:w-[85%] 2xl:w-[72%]"
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
                        className="lg:-mt-36 -ml-56 2xl:-ml-64"
                        alt=""
                      />
                      <img
                        src={vector4}
                        className="lg:-mt-28 xl:-mt-20 2xl:-mt-20 mb-5"
                        alt=""
                      />
                      <img src={vector2} className="absolute ml-96" alt="" />
                      <h3 className="heading-h3 2xl:text-[40px] leading-[45px] 2xl:mt-10">
                        {item.title} <br />
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
                        src={item.imgUrl}
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

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center xl:py-14 py-10 p-4 lg:p-10 hidden lg:hidden">
          {cardss.map((item, index) =>
            item.id % 2 == 0 ? (
              <div
                className="bg-linear-to-r from-[#02B9E2] to-[#0280FB] text-white text-left rounded-lg"
                key={index}
              >
                <div className="flex">
                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.imgUrl}
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
                    <h3 className="heading-h3">{item.title}</h3>
                    <div className="mt-2 text-[18px]">
                      <ReadMoreLess
                        id={item.title}
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
                    <h3 className="heading-h3">{item.title}</h3>
                    <div className="mt-2 text-[18px]">
                      <ReadMoreLess
                        id={item.title}
                        charLimit={400}
                        readMoreText={"Read more"}
                        readLessText={"....Read less"}
                        readLessClassName="paragraph"
                        readMoreClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>

                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.imgSmall}
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

        <div className="sm:block grid gap-3 p-2 lg:p-10 md:hidden lg:hidden pb-5">
          {cardss.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex flex-col">
                <div className="z-10 relative">
                  <img
                    src={item.imgSmall}
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
                  <h2 className="heading-h3 mb-1">{item.title}</h2>
                  <ReadMoreLess
                    id={item.title}
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

        <div className="flex justify-center lg:hidden pb-10">
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
      </div>
    </section>
  );
};

export default Applications;
