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

import object_tracking from "/industries/security & surveilance/object-tracking.jpg";
import people_movement_behavioural_analysis from "/industries/security & surveilance/people-movement-behavioural-analysis.jpg";
import vehicle_identification_number_plate_detection from "/industries/security & surveilance/vehicle-identification-number-plate-detection.jpg";
import person_recognition_biometric_security from "/industries/security & surveilance/person-recognition-biometric-security.jpg";
import ai_in_night_vision from "/industries/security & surveilance/ai-in-night-vision.jpg";
import illegal_activity_discussion from "/industries/security & surveilance/illegal-activity-discussion.jpg";
import driver_traffic_safety_application from "/industries/security & surveilance/driver-traffic-safety-application.jpg";
import security_surveillance from "/industries/security & surveilance/security-surveillance.jpg";
import automated_video_summarisation from "/industries/security & surveilance/automated-video-summarisation.jpg";
import accident_traffic_incident_detection from "/industries/security & surveilance/accident-traffic-incident-detection.jpg";
import smart_parking_vehicle_surveillance from "/industries/security & surveilance/smart-parking-vehicle-surveillance.jpg";

// Small device

import object_tracking_sm from "/industries/security & surveilance/usecaseSm/object-tracking.jpg";
import people_movement_behavioural_analysis_sm from "/industries/security & surveilance/usecaseSm/people-movement-behavioural-analysis.jpg";
import vehicle_identification_number_plate_detection_sm from "/industries/security & surveilance/usecaseSm/vehicle-identification-number-plate-detection.jpg";
import person_recognition_biometric_security_sm from "/industries/security & surveilance/usecaseSm/person-recognition-biometric-security.jpg";
import ai_in_night_vision_sm from "/industries/security & surveilance/usecaseSm/ai-in-night-vision.jpg";
import illegal_activity_discussion_sm from "/industries/security & surveilance/usecaseSm/illegal-activity-discussion.jpg";
import driver_traffic_safety_application_sm from "/industries/security & surveilance/usecaseSm/driver-traffic-safety-application.jpg";
import security_surveillance_sm from "/industries/security & surveilance/usecaseSm/security-surveillance.jpg";
import automated_video_summarisation_sm from "/industries/security & surveilance/usecaseSm/automated-video-summarisation.jpg";
import accident_traffic_incident_detection_sm from "/industries/security & surveilance/usecaseSm/accident-traffic-incident-detection.jpg";
import smart_parking_vehicle_surveillance_sm from "/industries/security & surveilance/usecaseSm/smart-parking-vehicle-surveillance.jpg";

import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph.jsx";
import gsap from "gsap";

const Applications = () => {
  const data = [
    {
      id: 1,
      headinh1: "Object Tracking ",
      heading2: "",
      content: `AI-powered security cameras have redefined object-tracking capabilities and leveraging data annotation to enhance their efficiency. The integration of AI and data annotation in object tracking enables security systems to swiftly detect anomalies, monitor specific targets, and provide valuable insights for various applications. Our data annotation services involve labeling and categorising objects within video streams and images, enabling AI algorithms to track and analyse their movements in real-time.`,
      img: object_tracking,
      imgSmall: object_tracking_sm,
    },
    {
      id: 2,
      headinh1: "People Movement &",
      heading2: "Behavioural Analysis",
      content: `Utilising AI-powered security cameras for people's movement and behavior analysis is changing surveillance through the best data annotation. By integrating AI and data annotation, these systems can differentiate between normal and suspicious activities, detect crowd movements, assess behavioural patterns, and identify potential security risks.  This annotated data serves as the backbone for training AI models to recognise and analyse various movement patterns, gestures, and behaviours. `,
      img: people_movement_behavioural_analysis,
      imgSmall: people_movement_behavioural_analysis_sm,
    },
    {
      id: 3,
      headinh1: "Vehicle Identification &",
      heading2: "Number Plate Detection",
      content: `AI data annotation for vehicle identification and number plate detection involves precise labeling of images and video frames to train algorithms. This process enables AI models to accurately recognise vehicles and swiftly extract number plate information. Continuous learning from annotated datasets enhances AI systems' proficiency in categorising vehicles effectively. `,
      img: vehicle_identification_number_plate_detection,
      imgSmall: vehicle_identification_number_plate_detection_sm,
    },
    {
      id: 4,
      headinh1: "Person Recognition &",
      heading2: "Biometric Security",
      content: `AI plays a critical role in personal recognition and biometric security, aided by data annotation techniques. This annotation includes the precise labeling and categorising of biometric data such as facial traits, fingerprints, iris patterns, and voiceprints etc. This annotated data is used to train AI models to identify and authenticate individuals based on their unique biological traits.`,
      img: person_recognition_biometric_security,
      imgSmall: person_recognition_biometric_security_sm,
    },
    {
      id: 5,
      headinh1: "AI in Night Vision",
      heading2: "",
      content: `AI in night vision technology relies on annotated datasets encompassing various types of low-light or infrared images and videos.  These datasets are annotated to highlight objects, people, or animals within the images, thereby helping AI systems learn and interpret the features present under varied lighting conditions.`,
      img: ai_in_night_vision,
      imgSmall: ai_in_night_vision_sm,
    },
    {
      id: 6,
      headinh1: "Illegal Activity",
      heading2: "Discussion",
      content: `AI supported by thorough data annotation, plays a crucial role in identifying and mitigating illegal activities across various domains. Through precise data annotation, AI systems gain the ability to detect anomalies and identify suspicious behaviors associated with crimes like theft, vandalism, trespassing, and other unlawful acts. Annotated data empowers these systems to swiftly recognise such illegal behaviors, aiding in proactive detection and prevention efforts.`,
      img: illegal_activity_discussion,
      imgSmall: illegal_activity_discussion_sm,
    },
    {
      id: 7,
      headinh1: "Driver and Traffic",
      heading2: "Safety Application",
      content: `AI and data annotation services are instrumental in developing innovative solutions that significantly contribute to improving overall driver and traffic safety standards. The annotated data helps in training AI models to recognise and interpret various traffic scenarios, road signs, pedestrian movements, and potential hazards. Annotated data includes vehicles, pedestrians, road signs, traffic signals, lane markings, and hazards. AI algorithms learn from this data to provide key safety features such as lane departure warnings, pedestrian detection, traffic sign recognition, and collision avoidance systems.`,
      img: driver_traffic_safety_application,
      imgSmall: driver_traffic_safety_application_sm,
    },
    {
      id: 8,
      headinh1: "Security & Surveillance ",
      heading2: "",
      content: `AI-based security and surveillance heavily rely on data annotation to bolster their efficacy. The annotated data encompasses various visual elements such as individuals, vehicles, objects, and activities captured through cameras or sensors. We label this datas, by enabling AI algorithms to discern normal behavior from suspicious or potentially threatening actions. Through continual learning from annotated datasets, AI-driven security and surveillance systems evolve to adapt and enhance their ability to protect and secure diverse environments.`,
      img: security_surveillance,
      imgSmall: security_surveillance_sm,
    },
    {
      id: 9,
      headinh1: "Automated Video",
      heading2: "Summarisation",
      content: `In automated video summarisation, AI utilises annotated data to segment videos, label scenes, and identify keyframes. This annotation helps AI models extract essential information, enabling the creation of concise video summaries that capture the most relevant aspects of the original content.`,
      img: automated_video_summarisation,
      imgSmall: automated_video_summarisation_sm,
    },
    {
      id: 10,
      headinh1: "Accident & Traffic",
      heading2: "Incident Detection",
      content: `AI cameras for accident and traffic incident detection rely on annotated visual data, encompassing images and videos of traffic scenes, accidents, and incidents. This annotated data is fundamental for training AI models to swiftly interpret complex traffic scenarios with accuracy, enhancing the system's capabilities for incident recognition and response.`,
      img: accident_traffic_incident_detection,
      imgSmall: accident_traffic_incident_detection_sm,
    },
    {
      id: 11,
      headinh1: "Smart Parking &",
      heading2: "Vehicle Surveilance",
      content: `In smart parking and vehicle surveillance, AI security cameras use data annotation to enhance their functions. Annotated data helps identify and differentiate various vehicle types and their movements, improving the efficient monitoring and management of parking areas.`,
      img: smart_parking_vehicle_surveillance,
      imgSmall: smart_parking_vehicle_surveillance_sm,
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
        setTranslateXValue(-currentIndex * 70.8); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 78); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 78);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 86.2);
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
        setCharLimit(330);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(170);
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
        <h2 className="heading-h2 text-center lg:mb-5 uppercase md:w-2/3 lg:leading-[50px] 2xl:leading-[63px]">
          Annotation Usecases In AI Security Camera
        </h2>
        <div className="text-[16px] md:text-[18px] 3xl:text-[20px] text-center responsive-section-container">
          <div className="p-3 md:p-5 lg:p-0">
            <ReadMoreLessParagraph
              id="security_application"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              <p>
                AI cameras use labeled datasets to identify and classify
                objects, people, etc. These are the foundations for training
                advanced AI systems to detect, recognise, and understand visual
                information. This annotated data helps algorithms differentiate
                between normal and suspicious behaviour, enabling effective
                detection of anomalies or threats. Continual learning from
                annotated datasets enhances these cameras&apos; accuracy,
                adaptability, and proactive threat detection, bolstering
                security across diverse environments.
              </p>
              <p className="mt-2">
                Data annotation projects related to AI security cameras
                encompass a range of crucial use cases essential for enhancing
                surveillance capabilities and threat detection. Here are several
                data annotation projects for AI security cameras that encompass
                various use cases.
              </p>
            </ReadMoreLessParagraph>
          </div>
        </div>
        <div
          className="carousel-cursor xl:py-14 py-10 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 2xl:pl-28 cursor-grab"
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

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center py-10 p-4 lg:p-10 hidden lg:hidden">
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
                      src={item.imgSmall}
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

        <div className="sm:block grid gap-3 p-2 lg:p-10 md:hidden lg:hidden pb-5">
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
                <div className="-mt-1 text-[15px] text-white text-left p-4 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-lg">
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
