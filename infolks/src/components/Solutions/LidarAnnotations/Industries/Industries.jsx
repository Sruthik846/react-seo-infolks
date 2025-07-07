import { useEffect, useRef, useState } from "react";
import bgimage from "/solutions/common/main-solutions-bg.png";

import healthcare from "/solutions/lidar-annotations/various-industries/desktop/healthcare.jpg";
import automotive from "/solutions/lidar-annotations/various-industries/desktop/automotive.jpg";
import retail from "/solutions/lidar-annotations/various-industries/desktop/retail.jpg";
import agriculture from "/solutions/lidar-annotations/various-industries/desktop/agriculture.jpg";
import manufacturing from "/solutions/lidar-annotations/various-industries/desktop/manufacturing.jpg";
import security_surveilance from "/solutions/lidar-annotations/various-industries/desktop/security-surveilance.jpg";
import geospatial from "/solutions/lidar-annotations/various-industries/desktop/geospatial.jpg";
import sports from "/solutions/lidar-annotations/various-industries/desktop/sports.jpg";
import waste_management from "/solutions/lidar-annotations/various-industries/desktop/waste-management.jpg";
import construction from "/solutions/lidar-annotations/various-industries/desktop/construction.jpg";

// tab images
import healthcareTab from "/solutions/lidar-annotations/various-industries/tab/healthcare.jpg";
import automotiveTab from "/solutions/lidar-annotations/various-industries/tab/automotive.jpg";
import retailTab from "/solutions/lidar-annotations/various-industries/tab/retail.jpg";
import agricultureTab from "/solutions/lidar-annotations/various-industries/tab/agriculture.jpg";
import manufacturingTab from "/solutions/lidar-annotations/various-industries/tab/manufacturing.jpg";
import security_surveilanceTab from "/solutions/lidar-annotations/various-industries/tab/security-surveilance.jpg";
import geospatialTab from "/solutions/lidar-annotations/various-industries/tab/geospatial.jpg";
import sportsTab from "/solutions/lidar-annotations/various-industries/tab/sports.jpg";
import waste_managementTab from "/solutions/lidar-annotations/various-industries/tab/waste-management.jpg";
import constructionTab from "/solutions/lidar-annotations/various-industries/tab/construction.jpg";

// mobile images
import healthcareMobile from "/solutions/lidar-annotations/various-industries/mobile/healthcare.jpg";
import automotiveMobile from "/solutions/lidar-annotations/various-industries/mobile/automotive.jpg";
import retailMobile from "/solutions/lidar-annotations/various-industries/mobile/retail.jpg";
import agricultureMobile from "/solutions/lidar-annotations/various-industries/mobile/agriculture.jpg";
import manufacturingMobile from "/solutions/lidar-annotations/various-industries/mobile/manufacturing.jpg";
import security_surveilanceMobile from "/solutions/lidar-annotations/various-industries/mobile/security-surveilance.jpg";
import geospatialMobile from "/solutions/lidar-annotations/various-industries/mobile/geospatial.jpg";
import sportsMobile from "/solutions/lidar-annotations/various-industries/mobile/sports.jpg";
import waste_managementMobile from "/solutions/lidar-annotations/various-industries/mobile/waste-management.jpg";
import constructionMobile from "/solutions/lidar-annotations/various-industries/mobile/construction.jpg";

// import { useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLayoutEffect } from "react";

const VariousIndustries = () => {
  const images = [
    {
      id: 1,
      title: "Healthcare ",
      content:
        "The transformation of healthcare through Lidar annotation involves enabling precise 3D modeling for medical imaging and surgical planning. Additionally, it aids in monitoring movement during rehabilitation and facilitates navigation for individuals with disabilities. It also enhances hospital navigation and sanitation monitoring, detects falls, and improves surgical robotics. These applications highlight Lidar's role in advancing healthcare delivery and improving patient outcomes.",
      image: healthcare,
      imageTab: healthcareTab,
      imageMobile: healthcareMobile,
    },
    {
      id: 2,
      title: "Automotive",
      content:
        "Lidar plays a critical role in enabling autonomous vehicles by facilitating object detection, mapping, and navigation. Lidar annotation services are instrumental in labeling various objects such as pedestrians, vehicles, lanes, and traffic signs, among others, to train AI models effectively.",
      image: automotive,
      imageTab: automotiveTab,
      imageMobile: automotiveMobile,
    },
    {
      id: 3,
      title: "Retail",
      content: `LiDAR annotation involves labeling store components such as shelves, products, and customers. This labeling facilitates streamlined inventory management and enhances overall customer experiences. `,
      image: retail,
      imageTab: retailTab,
      imageMobile: retailMobile,
    },
    {
      id: 4,
      title: "Agriculture",
      content: `Precision agriculture is revolutionized by Lidar technology, which provides comprehensive insights into crop health, topography, and terrain. Lidar annotation services play a crucial role in labeling and interpreting data. This enables farmers to make informed decisions that optimize crop yields and resource utilization.`,
      image: agriculture,
      imageTab: agricultureTab,
      imageMobile: agricultureMobile,
    },
    {
      id: 5,
      title: "Manufacturing ",
      content: `LiDAR annotation supports spatial mapping and analysis, streamlining tasks like asset tracking, quality control, and safety monitoring in manufacturing. Manufacturers leverage LiDAR annotations to boost operational efficiency, uphold product quality, and foster a secure work environment.`,
      image: manufacturing,
      imageTab: manufacturingTab,
      imageMobile: manufacturingMobile,
    },
    {
      id: 6,
      title: "Security & Surveillance",
      content:
        "Lidar annotation is utilized for annotating objects and terrains in defense applications such as border surveillance and mapping. Annotation plays a crucial role in defense by detailing objects like vehicles, structures, and natural features. This process greatly enhances strategic planning, surveillance, and quick responses to threats across diverse terrains and environments.",
      image: security_surveilance,
      imageTab: security_surveilanceTab,
      imageMobile: security_surveilanceMobile,
    },
    {
      id: 7,
      title: "Geospatial ",
      content:
        "Geospatial Lidar annotation is essential for precise terrain mapping in various sectors, supporting planning, development, and monitoring. It helps map vegetation cover and assess crop health in forestry and agriculture. Lidar aids in disaster management by swiftly assessing damage. Urban planning creates detailed 3D city models. These annotations are crucial for ensuring precise and accurate geological studies, providing valuable insights into the composition and structure of the land for various scientific and practical applications.",
      image: geospatial,
      imageTab: geospatialTab,
      imageMobile: geospatialMobile,
    },
    {
      id: 8,
      title: "Waste Management",
      content:
        "Lidar annotation is crucial in waste management, providing precise spatial data for planning, monitoring, and optimizing processes. It enables accurate measurement of waste volume, identification of environmental concerns, and efficient sorting efforts. Additionally, lidar annotation aids in optimizing waste collection routes and enhancing operational efficiency, contributing to more effective and sustainable waste management practices.",
      image: waste_management,
      imageTab: waste_managementTab,
      imageMobile: waste_managementMobile,
    },
    {
      id: 9,
      title: "Construction ",
      content:
        "LiDAR technology revolutionizes engineering and construction projects, enabling precise site planning, road design, utility mapping, and earthwork calculations. Its detailed data capture streamlines processes, enhances safety, and ensures efficient project outcomes. Lidar annotation assists in city mapping, infrastructure planning, and building information modeling (BIM), ensuring accurate representation of buildings, roads, and utilities.  ",
      image: construction,
      imageTab: constructionTab,
      imageMobile: constructionMobile,
    },
    {
      id: 10,
      title: "Sports  ",
      content:
        "Enables spatial mapping and analysis for player tracking, performance analysis, and audience engagement in sports. Sports organizations leverage these annotations to refine training methods, enhance fan experiences, and optimize venue layouts for maximum efficiency and safety.",
      image: sports,
      imageTab: sportsTab,
      imageMobile: sportsMobile,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(500);
  // const [prevIndex, setPrevIndex] = useState(images.length-1);
  const carouselRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Title and Subtitle Animations (Run on every `currentIndex` change)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.3, delay: 0 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { autoAlpha: 0, y: -50 },
        { autoAlpha: 1, y: 0, duration: 0.4, delay: 0.1 }
      );
    });

    return () => ctx.revert();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setDirection(500);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setDirection(-500);
  };

  // Calculate indices for the previous and next images using modular arithmetic
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  // Runs when `currentIndex` changes
  useEffect(() => {
    images.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
  

  useLayoutEffect(() => {
    if (!carouselRef.current) return;
  
    gsap.fromTo(
      carouselRef.current,
      { x: direction },
      { x: 0, duration: 0.7, ease: "back.out(1.7)" }
    );
  }, [currentIndex]);

  const [cards, setCard] = useState(images.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? images.slice(0, 3) : images);
    setShowAll(!showAll);
  };
  return (
    <div className="z-0 relative flex flex-col justify-center items-center h-full lg:min-h-[1250px] xl:min-h-[1100px] 2xl:min-h-[1300px] bg-linear-to-r from-[#038EFF] to-[#2b96ee] overflow-hidden">
      {/* <div className=" bg-linear-to-r from-[#038EFF]  to-[#2b96ee] h-full rounded-[16px] lg:rounded-[30px] relative"> */}
      <img
        src={bgimage}
        className="w-full h-full z-0 lg:block hidden absolute inset-0"
        alt=""
      />
      <div className="lg:absolute top-0 z-20 pt-5 md:pt-10 lg:pt-20 xl:pt-14 2xl:pt-20 flex justify-center items-center flex-col">
        <h2 className="hidden lg:block heading-h2 text-white lg:mb-5 text-center pt-10 lg:pt-0 lg:leading-[50px] 2xl:leading-[63px]">
          LIDAR ANNOTATION <br />
          <span>ACROSS VARIOUS INDUSTRIES</span>
        </h2>

        <h3 className="block lg:hidden heading-h3 text-white text-center mb-2 pt-10">
          LIDAR ANNOTATION <br />
          <span>ACROSS VARIOUS INDUSTRIES</span>
        </h3>
        <p className="paragraph p-5 md:p-4 lg:p-0 text-white text-center responsive-section-container">
          We specialize in providing accurate Lidar annotations essential for
          training AI models. Our focus is on delivering precise data crucial
          for enhancing various industries, from autonomous vehicles to advanced
          robotics. With precise attention to detail, we aim to drive innovation
          and empower businesses and researchers with top-quality annotated
          Lidar data.
        </p>
        {/* Carousel */}
        <div
          ref={carouselRef}
                  className="relative w-full hidden lg:flex items-center justify-center mt-26 lg:mt-12 2xl:mt-26"
        >
          <div className="flex w-full justify-center gap-20 xl:gap-24 2xl:gap-16">
            <div className="2xl:w-[30%] w-[15%] flex justify-center relative -translate-x-20">
              <img
                src={images[prevIndex].image}
                alt="Previous"
                        className="w-full h-[430px] 2xl:h-[590px] object-cover rounded-r-lg transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-25 h-full"></div>
            </div>
            <div className="2xl:w-[100%] flex justify-center relative">
              <img
                src={images[currentIndex].image}
                alt={images[currentIndex].title}
                        className="w-full h-[480px] 2xl:h-[615px] rounded-lg object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-25"></div>
            </div>
            <div className="2xl:w-[30%] w-[15%] flex justify-center relative translate-x-20">
              <img
                src={images[nextIndex].image}
                alt="Next"
                        className="w-full h-[430px] 2xl:h-[590px] object-cover rounded-l-lg transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-25 h-full"></div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center xl:gap-10 mt-5 ml-[10rem] xl:ml-[12rem] 2xl:ml-[13rem] lg:mb-10 xl:mb-10">
          <div className="flex flex-col w-[75%] 2xl:w-[67rem] xl:w-[48rem] 2xl:min-h-48">
            <div className="flex justify-center items-center gap-8 border-b border-b-white w-fit">
              <h3 ref={titleRef} className=" heading-h4 text-white mb-2">
                {images[currentIndex].title}
              </h3>
              <svg
                width="15"
                height="15"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.84646 0.94088L18.1296 0.932328C18.2453 0.973858 18.3254 1.06396 18.3574 1.18877L17.5547 14.1372C17.5868 14.262 17.4544 14.3939 17.297 14.394L16.0503 14.3949C15.8928 14.395 15.7758 14.2633 15.7794 14.0899L16.3197 4.1723L2.32323 18.1147C1.94005 18.4964 1.32699 18.5454 0.98224 18.1573C0.600556 17.7276 0.677218 17.0895 1.06736 16.7008L14.9384 2.88332L5.80636 2.86194C5.64888 2.86205 5.53192 2.73037 5.54164 2.56392L5.58869 1.19766C5.63535 1.07279 5.76772 0.940935 5.84646 0.94088Z"
                  fill="white"
                />
              </svg>
            </div>
            <p ref={subtitleRef} className=" paragraph text-white w-[90%] mt-3">
              {images[currentIndex].content}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start lg:gap-4">
            <button
              onClick={prevSlide}
              className=" text-white bg-[#13B2F5] p-2 h-12 rounded-full w-12 flex justify-center items-center cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className=" text-white bg-[#13B2F5] p-2 h-12 rounded-full w-12 flex justify-center items-center cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
        {/* Medium screen */}
        <div className="block lg:hidden p-5 md:p-4 text-white">
          {cards.slice(1, -1).map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                src={item.imageTab}
                className="hidden md:block h-full w-full object-cover rounded-[18px]"
                alt=""
              />
              <img
                src={item.imageMobile}
                className="block md:hidden h-full w-full object-cover rounded-[18px]"
                alt=""
              />
              <div className="flex justify-center items-center gap-8 border-b border-b-white w-fit">
                <h3 className="heading-h3">{item.title}</h3>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.84646 0.94088L18.1296 0.932328C18.2453 0.973858 18.3254 1.06396 18.3574 1.18877L17.5547 14.1372C17.5868 14.262 17.4544 14.3939 17.297 14.394L16.0503 14.3949C15.8928 14.395 15.7758 14.2633 15.7794 14.0899L16.3197 4.1723L2.32323 18.1147C1.94005 18.4964 1.32699 18.5454 0.98224 18.1573C0.600556 17.7276 0.677218 17.0895 1.06736 16.7008L14.9384 2.88332L5.80636 2.86194C5.64888 2.86205 5.53192 2.73037 5.54164 2.56392L5.58869 1.19766C5.63535 1.07279 5.76772 0.940935 5.84646 0.94088Z"
                    fill="white"
                  />
                </svg>
              </div>

              <p className="paragraph pb-5">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:hidden pb-5">
          <div
            className="flex group justify-center items-center"
            onClick={handleViewAll}
          >
            <button className="bg-[#13B2F5] text-white py-6 text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
            <span className="relative w-[50px] h-[50px] right-2 bg-white rounded-full flex justify-center items-center -ml-12">
              <svg
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.8622 0.381798L28.4491 10.3272C28.517 10.4547 28.517 10.5928 28.4491 10.7203L17.8508 20.602C17.783 20.7295 17.5681 20.7295 17.4323 20.602L16.3578 19.5926C16.2221 19.4651 16.2221 19.2632 16.3578 19.1251L24.4111 11.496L1.68764 11.496C1.06554 11.496 0.5 11.0391 0.5 10.4441C0.5 9.78531 1.05423 9.32841 1.68764 9.32841L24.2075 9.32841L16.3578 1.91186C16.2221 1.78436 16.2221 1.58247 16.3578 1.45497L17.4436 0.381798C17.5794 0.318046 17.7943 0.318046 17.8622 0.381798Z"
                  fill="#13B2F5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default VariousIndustries;
