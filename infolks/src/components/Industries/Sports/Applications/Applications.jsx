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
import player_tracking from "/industries/sports/player-tracking.jpg";
import performance_assessment from "/industries/sports/performance-assessment.jpg";
import sports_team_analysis from "/industries/sports/sports-team-analysis.jpg";
import multi_player_pose_tracking from "/industries/sports/multi-player-pose-tracking.jpg";
import highlight_generation from "/industries/sports/highlight-generation.jpg";
import sports_activity_scoring from "/industries/sports/sports-activity-scoring.jpg";

import performance_assessment_Small from "/industries/sports/performance-assessment-sm.jpg";
import sports_activity_scoring_Small from "/industries/sports/sports-activity-scoring-sm.jpg";
import player_tracking_Small from "/industries/sports/player-tracking-sm.jpg";
import highlight_generation_Small from "/industries/sports/highlight-generation-sm.jpg";
import gsap from "gsap";

const Applications = () => {
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
      title: "Object Tracking",
      content: `Object tracking serves as a fundamental pillar in sports broadcasting, reshaping how viewers experience the game. Recent years have witnessed remarkable advancements in player tracking, driven by AI technologies. Our precise data labeling methods enable us to capture every intricate detail of the game, from subtle player movements to strategic plays on the field. By employing bounding box techniques, we accurately label players in the footage, generating top-notch training data crucial for the development of real-time tracking modules.`,
      imgUrl: player_tracking,
      imgSmall: player_tracking_Small,
    },
    {
      id: 2,
      title: "Performance Assessment",
      content: `Performance assessment in the sports industry has entered a new era with the integration of data annotation and artificial intelligence. We derive important insights from annotated data by employing powerful algorithms, providing a complete picture of player strengths, weaknesses, and overall team dynamics. This annotated data serves as the foundation for AI-driven performance analysis, allowing coaches and athletes to delve deeply into the complexities of the game.`,
      imgUrl: performance_assessment,
      imgSmall: performance_assessment_Small,
    },
    {
      id: 3,
      title: "Sports Team Analysis",
      content: `In the dynamic sports industry, multi-player pose tracking is a game-changer, and we're at the forefront of this revolution. Our precision in annotating sports data allows seamless real-time tracking of multiple players, redefining sports analytics. Our expert team captures intricate movements, turning raw data into invaluable insights. With our annotation solutions, sports organisations can refine strategies, enhance player performance, and offer fans a more immersive and data-rich experience.`,
      imgUrl: sports_team_analysis,
    },
    {
      id: 4,
      title: "Multi-Player Pose Tracking",
      content: `We're transforming sports analytics with our precise annotations, enabling real-time tracking of multiple players. By harnessing AI in sports, teams can precisely track player movements, enabling a deeper understanding of gameplay patterns. Our expert team accurately annotates sports data, capturing intricate athlete movements. Through our annotation services, the sports industry can refine strategies, enhance player performance, and offer fans a more immersive, data-rich experience.`,
      imgUrl: multi_player_pose_tracking,
    },
    {
      id: 5,
      title: "Highlight Generation",
      content: `Getting attention and presenting information seamlessly is critical in the sports industry. Our experience in data annotation transforms content development, notably in highlight generation. We thoroughly annotate important moments, player actions, and game-changing occurrences. With our data annotation services, sports enthusiasts and professionals can immerse themselves in the thrill of matches, ensuring each game becomes an unforgettable experience. `,
      imgUrl: highlight_generation,
      imgSmall: highlight_generation_Small,
    },
    {
      id: 6,
      title: "Sports Activity Scoring",
      content: `In the competitive world of sports, understanding player performance and game dynamics is crucial. Our data annotation services help boost AI in sports activity scoring by elevating accuracy and precision. We accurately annotate data collected from sensors, cameras, and wearables and provide comprehensive insights into player movements and tactics, enabling sports organisations to refine strategies and optimise gameplay.`,
      imgUrl: sports_activity_scoring,
      imgSmall: sports_activity_scoring_Small,
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
        setTranslateXValue(-currentIndex * 68); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 75.7); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 75.7);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 84.7);
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
          <h2 className="text-center lg:mb-5 uppercase heading-h2 leading-[63px]">
            Applications of AI in Sports
          </h2>
        </div>

        <div className="text-center mx-auto container">
          <div className="responsive-section-container">
            <ReadMoreLess
              id="sports_application"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              AI has fundamentally transformed the sports industry, reshaping
              how athletes train, teams, strategize, and fans engage with the
              game. It has been marked in a new era where preparation methods,
              game plans, and fan experiences have undergone a profound
              metamorphosis. AI algorithms in annotating sports-related data
              elevate the precision, speed, and depth of insights drawn from the
              extensive information within the sports sector. Our use cases in
              the sports sector serve as compelling evidence of the
              extraordinary capabilities unlocked through data annotation.
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
                    <div className="w-[60%] pl-10 pr-10 2xl:pl-24 2xl:pr-20 text-white overflow-hidden text-left" onMouseEnter={handleMouseEnterText}>
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
                      src={item.imgUrl}
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
                    <h3 className="heading-h3">{item.title}</h3>
                    <div className="mt-2 text-[18px]">
                      <ReadMoreLess
                        id={item.title}
                        charLimit={400}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="paragraph"
                        readLessClassName="paragraph"
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
                        readLessText={"Read less"}
                        readMoreClassName="paragraph"
                        readLessClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>

                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.imgUrl}
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

        <div className="gap-3 grid responsive-section-container mt-2 pb-5 lg:p-10 md:hidden lg:hidden">
          {cardss.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <div className="z-10 relative">
                  {item.imgSmall ? (
                    <img
                      src={item.imgSmall}
                      alt=""
                      className="h-60 w-full object-cover rounded-t-xl"
                    />
                  ) : (
                    <img
                      src={item.imgUrl}
                      alt=""
                      className="h-60 w-full object-cover rounded-t-xl"
                    />
                  )}
                  <img
                    src={imgbg}
                    className="absolute inset-0 h-60 w-full object-cover rounded-t-xl"
                    alt=""
                  />
                </div>
                <div className="-mt-1 text-[16px] text-white text-left p-4 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-lg">
                  <h3 className="heading-h3 mb-1">{item.title}</h3>
                  <ReadMoreLess
                    id={item.title}
                    charLimit={200}
                    readMoreText={"Read more"}
                    readLessText={"Read less"}
                    readMoreClassName="paragraph"
                    readLessClassName="paragraph"
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

export default Applications;
