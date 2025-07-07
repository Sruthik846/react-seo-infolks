import { useState, useRef, useEffect } from "react";
import bounding_box from "/solutions/video-annotations/techniques/desktop/bounding-box.jpg";
import keypoint from "/solutions/video-annotations/techniques/desktop/keypoint.jpg";
import polygon from "/solutions/video-annotations/techniques/desktop/polygon.jpg";
import polyline from "/solutions/video-annotations/techniques/desktop/polyline.jpg";
import semantic_segmentation from "/solutions/video-annotations/techniques/desktop/semantic-segmentation.jpg";


// tab images
import bounding_boxTab from "/solutions/video-annotations/techniques/tab/bounding-box.jpg";
import keypointTab from "/solutions/video-annotations/techniques/tab/keypoint.jpg";
import polygonTab from "/solutions/video-annotations/techniques/tab/polygon.jpg";
import polylineTab from "/solutions/video-annotations/techniques/tab/polyline.jpg";
import semantic_segmentationTab from "/solutions/video-annotations/techniques/tab/semantic-segmentation.jpg";

// mobile images
import bounding_boxMobile from "/solutions/video-annotations/techniques/mobile/bounding-box.jpg";
import keypointMobile  from "/solutions/video-annotations/techniques/mobile/keypoint.jpg";
import polygonMobile  from "/solutions/video-annotations/techniques/mobile/polygon.jpg";
import polylineMobile  from "/solutions/video-annotations/techniques/mobile/polyline.jpg";
import semantic_segmentationMobile  from "/solutions/video-annotations/techniques/mobile/semantic-segmentation.jpg";


const AnnotationTechniques = () => {
  const data = [
    {
      id: 1,
      title: "Bounding Box",
      content: `Bounding box video annotation is crucial for training AI models to identify and track objects in videos. It's essential for applications like surveillance, self-driving cars, and action recognition. Labeling objects in videos provides valuable data for teaching algorithms to understand and analyse visual information. `,
      img: bounding_box,
      imgTab: bounding_boxTab,
      imgMobile: bounding_boxMobile,
    },
    {
      id: 2,
      title: "Polygon/ Contour",
      content: `Polygon annotation involves drawing shapes with multiple sides around objects in images or videos. This technique outlines the boundaries of various objects, like vehicles, people, and buildings, within the visual content.`,
      img: polygon,
      imgTab: polygonTab,
      imgMobile: polygonMobile,
    },
    {
      id: 3,
      title: "Polyline",
      content: `Polyline techniques in video annotation services involve drawing lines or curves along the contours or paths of objects within video frames. These techniques allow for tracking and understanding the movement, direction, or changes in the shape of objects over time in the video sequence.`,
      img: polyline,
      imgTab: polylineTab,
      imgMobile: polylineMobile,
    },
    {
      id: 4,
      title: "Keypoint",
      content: `Keypoint techniques in video annotation entail identifying and marking specific points or landmarks within video frames. Annotating these points helps track movements, poses, and changes across the video, aiding in tasks like gesture recognition, action analysis, and object tracking for AI models learned from video data.`,
      img: keypoint,
      imgTab: keypointTab,
      imgMobile: keypointMobile,
    },
    {
      id: 5,
      title: "Semantic Segmentation",
      content: `Semantic segmentation in video annotation involves labeling every pixel in video frames to categorize objects or areas based on their meaning. This detailed labeling helps AI models understand videos better, which is useful in areas like self-driving cars and surveillance.
`,
      img: semantic_segmentation,
      imgTab: semantic_segmentationTab,
      imgMobile: semantic_segmentationMobile,
    },
  ];
  const items = [...data, ...data, ...data, ...data];

  const [currentIndex, setCurrentIndex] = useState(data.length);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (currentIndex === data.length * 2) {
      // If at the last duplicate, reset to first real slide
      setTimeout(() => {
        setCurrentIndex(data.length);
      }, 300);
    } else if (currentIndex === data.length - 1) {
      // If at the first duplicate, reset to last real slide
      setTimeout(() => {
        setCurrentIndex(data.length * 2 - 1);
      }, 300);
    }
  }, [currentIndex, data.length]);

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX);
    setDragging(true);
  };

 const handleDragMove = (e) => {
  if (!dragging) return;

  const dragCurrentX = e.clientX || e.touches[0].clientX;
  const dragDistance = dragStartX - dragCurrentX;

  if (Math.abs(dragDistance) > 50) { // Adjust threshold for smoothness
    requestAnimationFrame(() => {
      if (dragDistance > 0) {
        moveNext();
      } else {
        movePrev();
      }
      setDragging(false);
    });
  }
};


  const handleDragEnd = () => {
    setDragging(false);
  };

  const moveNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 3 >= items.length) {
        return prevIndex; // Don't move if we are at the last items
      }
      return prevIndex + 1;
    });
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex; // Don't move if we are at the first item
      }
      return prevIndex - 1;
    });
  };
  

  const getDisplayedItems = () => {
    if (currentIndex + 5 <= items.length) {
      return items.slice(currentIndex, currentIndex + 5);
    }
    
    return [
      ...items.slice(currentIndex),
      ...items.slice(0, (currentIndex + 5) % items.length),
    ];
  };

  const [cards, setCard] = useState(items.slice(0, 1));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? data.slice(0, 1) : data);
    setShowAll(!showAll);
  };

  return (
    <section className="mt-5 lg:mt-20 xl:mt-16 2xl:mt-20 pb-5 select-none font-primary-regular">
      <div className="flex flex-col justify-center items-center text-[#37508A]">
        <h2 className="heading-h2 text-center lg:mb-5 uppercase lg:w-2/3 lg:leading-[50px] 2xl:leading-[63px]">
          Types of Video <br /> Annotation Techniques
        </h2>

        <div className="text-[16px] md:text-[18px] 3xl:text-[20px] text-center mx-auto container">
          <p className="p-3 md:p-5 lg:p-0 paragraph responsive-section-container">
              Frame-level video annotation services encompass several techniques
              used to label individual frames with specific information, such as
              object classification or tracking. These techniques include
              bounding boxes, semantic segmentation, landmarking, polyline, and
              3D cuboids. Each technique serves the purpose of labeling frames
              with specific information. These annotations provide crucial data
              points for understanding and analysing video content
              frame-by-frame.
          </p>
        </div>

        <div
          className="carousel mt-8 space-x-5 rounded-box z-0 hidden lg:block overflow-hidden w-full"
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
            className="p-5 overflow-hidden"
            style={{
              display: "flex",
              transition: dragging ? "none" : "transform 0.5s ease-out",
              transform: `translateX(calc(-${currentIndex * 20}% - ${dragging}px))`,
            }}

          >
            {getDisplayedItems().map((item, index) => (
              
              <div
                className="carousel-item shrink-0 w-[36.33%] p-3 cursor-grab"
                key={index}
              >
                <div className="relative bg-white p-8 rounded-[16px] lg:rounded-[35px] shadow-lg border border-[#0384F9]">
                  <img
                    src={item.img}
                    className="h-60 md:h-80 lg:h-full w-full rounded-[16px] border border-[#0384F9] lg:rounded-[35px]"
                    alt={item.title}
                  />
                  <h3 className="heading-h3 mt-10">{item.title}</h3>
                  <p className="mt-5 mb-5 paragraph h-60 lg:h-72 xl:h-52 2xl:h-44">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mobile view  */}
        <div className="lg:hidden p-2 md:p-4 font-primary-regular flex flex-col gap-3 text-[#37508A]">
          {cards.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative bg-white p-2 rounded-[16px] lg:rounded-[35px] shadow-lg border border-[#13B2F5]">
                <img
                  src={item.imgMobile}
                  className="md:hidden h-full w-full object-cover rounded-[16px] lg:rounded-[35px]"
                  alt={item.title}
                />
                <img
                  src={item.imgTab}
                  className="hidden md:block h-full w-full object-cover rounded-[16px] lg:rounded-[35px]"
                  alt={item.title}
                />
                <h3 className="text-[19px] md:text-[25px]  mt-3">
                  {item.title}
                </h3>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] mb-3">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:hidden pt-5">
          <div
            className="flex group justify-center items-center"
            onClick={handleViewAll}
          >
            <button className="border border-[#13B2F5] py-5 text-[#37508A] text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
            <svg
              className="relative right-2 -ml-12"
              width="50"
              height="50"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30.5" cy="30" r="30" fill="#13B2F5" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.8622 19.0478L43.4491 28.9932C43.517 29.1207 43.517 29.2589 43.4491 29.3864L32.8508 39.268C32.783 39.3955 32.5681 39.3955 32.4323 39.268L31.3578 38.2586C31.2221 38.1311 31.2221 37.9292 31.3578 37.7911L39.4111 30.162L16.6876 30.162C16.0655 30.162 15.5 29.7051 15.5 29.1101C15.5 28.4513 16.0542 27.9944 16.6876 27.9944L39.2075 27.9944L31.3578 20.5779C31.2221 20.4504 31.2221 20.2485 31.3578 20.121L32.4436 19.0478C32.5794 18.9841 32.7943 18.9841 32.8622 19.0478Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotationTechniques;
