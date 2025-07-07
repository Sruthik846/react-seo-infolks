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
import roof_damage_detection from "/industries/geospatial/roof-damage-detection.jpg";
import segmentation_for_geo_sensing from "/industries/geospatial/segmentation-for-geo-sensing.jpg";
import aerial_view_for_human_racking from "/industries/geospatial/aerial-view-for-human-racking.jpg";
import construction_inspection from "/industries/geospatial/construction-inspection.jpg";
import city_layout_plan_urban_management from "/industries/geospatial/city-layout-plan-urban-management.jpg";
import disaster_management from "/industries/geospatial/disaster-management.jpg";
import traffic_management from "/industries/geospatial/traffic-management.jpg";
import climate_change_monitoring from "/industries/geospatial/climate-change-monitoring.jpg";
import satellite_view_for_aerial_field_mapping from "/industries/geospatial/satellite-view-for-aerial-field-mapping.jpg";

// small device
import roof_damage_detection_sm from "/industries/geospatial/usecaseSm/roof-damage-detection.jpg";
import segmentation_for_geo_sensing_sm from "/industries/geospatial/usecaseSm/segmentation-for-geo-sensing.jpg";
import aerial_view_for_human_racking_sm from "/industries/geospatial/usecaseSm/aerial-view-for-human-racking.jpg";
import construction_inspection_sm from "/industries/geospatial/usecaseSm/construction-inspection.jpg";
import city_layout_plan_urban_management_sm from "/industries/geospatial/usecaseSm/city-layout-plan-urban-management.jpg";
import disaster_management_sm from "/industries/geospatial/usecaseSm/disaster-management.jpg";
import traffic_management_sm from "/industries/geospatial/usecaseSm/traffic-management.jpg";
import climate_change_monitoring_sm from "/industries/geospatial/usecaseSm/climate-change-monitoring.jpg";
import satellite_view_for_aerial_field_mapping_sm from "/industries/geospatial/usecaseSm/satellite-view-for-aerial-field-mapping.jpg";

import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph.jsx";
import gsap from "gsap";

const Usecases = () => {
  const data = [
    {
      id: 1,
      headinh1: "Roof Damage",
      headinh2: "Detection",
      content: `AI technological advancements play a crucial role in disaster response and recovery efforts, enabling rapid assessment of affected areas. Precise and thorough training of data is critical for AI models to quickly recognize and evaluate the severity of roof damage. The annotated data includes satellite pictures, drone footage, and aerial images, often integrated with GIS coordinates, which provide detailed information about roof conditions.`,
      img: roof_damage_detection,
      imgSmall: roof_damage_detection_sm,
    },
    {
      id: 2,
      headinh1: "Segmentation for",
      headinh2: "Geo Sensing",
      content: `Within the geospatial industry, AI-powered geosensing segmentation is taking leading roles in the area of innovation, and data annotation is emerging as the key to its success. We are experts in annotating a wide range of data sources, including satellite photography, LiDAR scans, aerial images, and GIS-based mapping systems.`,
      img: segmentation_for_geo_sensing,
      imgSmall: segmentation_for_geo_sensing_sm,
    },
    {
      id: 3,
      headinh1: "Satellite View for",
      headinh2: "Aerial Field Mapping",
      content: `In the realm of geospatial technology, satellite views for aerial field mapping take a significant leap forward, particularly in the domain of pipe labeling. Our skilled annotators label aerial images and GIS layers to help categorize pipelines, guaranteeing precision and accuracy in the process.`,
      img: satellite_view_for_aerial_field_mapping,
      imgSmall: satellite_view_for_aerial_field_mapping_sm,
    },
    {
      id: 4,
      headinh1: "Aerial View for",
      headinh2: "Human Tracking ",
      content: `Aerial view technology stands as a cornerstone in elevating safety and security standards. The aerial view of human tracking emerges as an indispensable asset, finding its significance across a broad spectrum of GIS-integrated applications.`,
      img: aerial_view_for_human_racking,
      imgSmall: aerial_view_for_human_racking_sm,
    },
    {
      id: 5,
      headinh1: "Construction",
      headinh2: "Inspections ",
      content: `Construction inspections, empowered by data annotation, are revolutionizing the way we ensure the quality and safety of construction projects. Aerial drone inspections, often integrated with GIS data layers, are a smart, safe, and efficient solution to so many issues associated with industrial inspections.`,
      img: construction_inspection,
      imgSmall: construction_inspection_sm,
    },
    {
      id: 6,
      headinh1: "City Layout Plan &",
      headinh2: "Urban Management",
      content: `The integration of data annotation services, AI, and GIS within geospatial technology is changing the approach to city planning and management. Our dedicated team of annotators labels vital GIS data elements such as road networks, intersections, traffic lights, and pedestrian walkways.`,
      img: city_layout_plan_urban_management,
      imgSmall: city_layout_plan_urban_management_sm,
    },
    {
      id: 7,
      headinh1: "Disaster",
      headinh2: "Management ",
      content: `AI and data annotation are pivotal in disaster management, enhancing predictive capabilities and response strategies. By analyzing GIS-based weather patterns and historical data, AI forecasts floods, wildfires, and other disasters.`,
      img: disaster_management,
      imgSmall: disaster_management_sm,
    },
    {
      id: 8,
      headinh1: "Traffic",
      headinh2: "Management",
      content: `AI and data annotation streamline traffic management by analyzing GIS-synced real-time data to optimize traffic light timings and suggest alternative routes.`,
      img: traffic_management,
      imgSmall: traffic_management_sm,
    },
    {
      id: 9,
      headinh1: "Climate",
      headinh2: "Change Monitoring",
      content: `AI analyzes satellite imagery, GIS environmental layers, and weather data to track climate change impacts like glacier retreat and sea level rise, informing mitigation strategies.`,
      img: climate_change_monitoring,
      imgSmall: climate_change_monitoring_sm,
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
        setTranslateXValue(-currentIndex * 70.1); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 77.4); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 77.3);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 85.8);
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
  }, [pos, vel]);

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
    <section className="mt-10 lg:mt-20 select-none font-primary-regular">
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
        <h2 className="heading-h2 text-center lg:mb-5 uppercase lg:w-2/3">
          USE CASES IN GEOSPATIAL AI
        </h2>
        <div className="text-[16px] md:text-[18px] 3xl:text-[20px] text-center responsive-section-container">
          <div className="p-3 md:p-5 lg:p-0">
            <ReadMoreLessParagraph
              id="usecasesReadMore"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              <p>
                Annotating geospatial AI data is critical for object detection
                tasks such as identifying specific structures, vehicles, or
                natural features within images. Annotated geospatial data,
                including GIS-based inputs, serves as the foundation for
                training machine learning and artificial intelligence models.
                Annotations that accurately enable AI models to recognize these
                aerial images help applications such as urban planning, disaster
                response, and environmental monitoring.
              </p>
              <p className="mt-2">
                We are committed to driving innovation and expanding the
                boundaries of the geospatial industry. Here are some of our use
                cases in this industry.
              </p>
            </ReadMoreLessParagraph>
          </div>
        </div>

        <div
          className="carousel-cursor  p-4 xl:py-14 py-10 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 2xl:pl-28 cursor-grab"
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
                    <div
                      className="w-[60%] pl-10 pr-10 2xl:pl-24 2xl:pr-20 text-white overflow-hidden text-left"
                      onMouseEnter={handleMouseEnterText}
                    >
                      <img
                        src={vector3}
                        className="lg:-mt-52 2xl:-mt-36 -ml-56 2xl:-ml-64"
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
                        {item.headinh2}
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
                    <div
                      className="w-[40%] z-10 relative ml-1"
                      onMouseEnter={handleMouseEnterImage}
                    >
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
                      {item.headinh1} {item.headinh2}
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
                      {item.headinh1}
                      {item.headinh2}
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
                <div className="-mt-1 text-[15px] text-white text-left p-4 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-lg">
                  <h3 className="heading-h3 mb-1">
                    {item.headinh1} {item.headinh2}
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

        <div className="flex justify-center lg:hidden pb-5">
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
