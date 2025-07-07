import { useLayoutEffect, useState } from "react";
// import bgimage from "/solutions/common/main-solutions-bg.png";
import healthcare from "/solutions/text-annotations/industries/desktop/healthcare.jpg";
import automotive from "/solutions/text-annotations/industries/desktop/automotive.jpg";
import retail from "/solutions/text-annotations/industries/desktop/retail.jpg";
import finance_banking from "/solutions/text-annotations/industries/desktop/finance-banking.jpg";
import manufacturing from "/solutions/text-annotations/industries/desktop/manufacturing.jpg";
import agriculture from "/solutions/text-annotations/industries/desktop/agriculture.jpg";
import mapping from "/solutions/text-annotations/industries/desktop/mapping.jpg";
import waste_management from "/solutions/text-annotations/industries/desktop/waste-management.jpg";
import sports from "/solutions/text-annotations/industries/desktop/sports.jpg";
import logistics from "/solutions/text-annotations/industries/desktop/logistics.jpg";

// tab images
import healthcareTab from "/solutions/text-annotations/industries/tab/healthcare.jpg";
import automotiveTab from "/solutions/text-annotations/industries/tab/automotive.jpg";
import retailTab from "/solutions/text-annotations/industries/tab/retail.jpg";
import finance_bankingTab from "/solutions/text-annotations/industries/tab/finance-banking.jpg";
import manufacturingTab from "/solutions/text-annotations/industries/tab/manufacturing.jpg";
import agricultureTab from "/solutions/text-annotations/industries/tab/agriculture.jpg";
import mappingTab from "/solutions/text-annotations/industries/tab/mapping.jpg";
import waste_managementTab from "/solutions/text-annotations/industries/tab/waste-management.jpg";
import sportsTab from "/solutions/text-annotations/industries/tab/sports.jpg";
import logisticsTab from "/solutions/text-annotations/industries/tab/logistics.jpg";

// mobile images
import healthcareMobile from "/solutions/text-annotations/industries/mobile/healthcare.jpg";
import automotiveMobile from "/solutions/text-annotations/industries/mobile/automotive.jpg";
import retailMobile from "/solutions/text-annotations/industries/mobile/retail.jpg";
import finance_bankingMobile from "/solutions/text-annotations/industries/mobile/finance-banking.jpg";
import manufacturingMobile from "/solutions/text-annotations/industries/mobile/manufacturing.jpg";
import agricultureMobile from "/solutions/text-annotations/industries/mobile/agriculture.jpg";
import mappingMobile from "/solutions/text-annotations/industries/mobile/mapping.jpg";
import waste_managementMobile from "/solutions/text-annotations/industries/mobile/waste-management.jpg";
import sportsMobile from "/solutions/text-annotations/industries/mobile/sports.jpg";
import logisticsMobile from "/solutions/text-annotations/industries/mobile/logistics.jpg";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const KeyIndustries = () => {
  const images = [
    {
      id: 1,
      title: "Healthcare",
      content:
        "Text annotation in medical AI is essential for organising and extracting insights from vast medical data. It involves labeling medical records and clinical notes to train AI models for precise disease detection and personalised care. ",
      image: healthcare,
      imageTab: healthcareTab,
      imageMobile: healthcareMobile,
    },
    {
      id: 2,
      title: "Automotive ",
      content:
        "Text annotation is vital in the automotive sector, supporting the advancement of diverse technologies. It assists in training AI models for autonomous vehicles, enabling the recognition of road features and the comprehension of voice commands.",
      image: automotive,
      imageTab: automotiveTab,
      imageMobile: automotiveMobile,
    },
    {
      id: 3,
      title: "Retail ",
      content: `In retail, text annotation involves the examination and labeling of data from product descriptions, customer reviews, and inquiries. This categorisation enables businesses to enhance their search and recommendation systems, gain insights into customer sentiments, and improve overall customer service.`,
      image: retail,
      imageTab: retailTab,
      imageMobile: retailMobile,
    },
    {
      id: 4,
      title: "Finance & Banking",
      content:
        "Text annotation in finance involves analysing and labeling information in texts such as news, reports, and social media to comprehend market sentiments, manage risks, and detect fraud. By categorising data and monitoring compliance, financial institutions can make better decisions and adhere to regulations effectively.",
      image: finance_banking,
      imageTab: finance_bankingTab,
      imageMobile: finance_bankingMobile,
    },
    {
      id: 5,
      title: "Manufacturing ",
      content:
        "Text annotation in manufacturing involves marking images or texts to identify problems in the production process. It helps maintain quality by identifying defects early and preventing faulty products from reaching the market, thus saving costs.",
      image: manufacturing,
      imageTab: manufacturingTab,
      imageMobile: manufacturingMobile,
    },
    {
      id: 6,
      title: "Agriculture",
      content:
        "Text annotation in agriculture involves marking and analysing data related to crops, weather, and farming methods. This helps farmers make informed decisions about irrigation, pest control, and crop planning. Organising this information enhances farming techniques and aids in developing automated technologies for more efficient and sustainable practices.",
      image: agriculture,
      imageTab: agricultureTab,
      imageMobile: agricultureMobile,
    },
    {
      id: 7,
      title: "Mapping",
      content:
        "Mapping text annotation labels and marking geographical elements like landmarks, roads, and buildings on maps. It enhances navigation, improves map accuracy, aids route planning, and supports location services. ",
      image: mapping,
      imageTab: mappingTab,
      imageMobile: mappingMobile,
    },
    {
      id: 8,
      title: "Waste Management",
      content:
        "Text annotation in waste management involves labeling and categorizing textual data to optimize waste collection, recycling, and resource allocation. Streamlining data processing enables efficient decision-making and enhances sustainability efforts.",
      image: waste_management,
      imageTab: waste_managementTab,
      imageMobile: waste_managementMobile,
    },
    {
      id: 9,
      title: "Sports",
      content:
        "Text annotation involves the labeling of data from match reports, player statistics, and commentary. This process enhances performance analysis for coaches and analysts, while also enriching fan experiences through personalized content and insights.",
      image: sports,
      imageTab: sportsTab,
      imageMobile: sportsMobile,
    },
    {
      id: 10,
      title: "Logistic",
      content:
        "Text annotation drives efficiency by categorizing and labeling shipment data, enabling optimized route planning and inventory management. This process supports swift decision-making, cost reduction, and improved overall supply chain performance.",
      image: logistics,
      imageTab: logisticsTab,
      imageMobile: logisticsMobile,
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
  }, [currentIndex,direction]);

  const [cards, setCard] = useState(images.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? images.slice(0, 3) : images);
    setShowAll(!showAll);
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-full lg:min-h-[1000px] xl:min-h-[950px] 2xl:min-h-[1150px] bg-linear-to-r from-[#038EFF] to-[#2b96ee] overflow-hidden">
      <h2 className="heading-h2 text-white mb-2 lg:mb-5 text-center pt-10 lg:pt-0 2xl:pt-10">
        TEXT ANNOTATION ACROSS KEY INDUSTRIES
      </h2>
      <p className="paragraph text-white text-center mx-auto container responsive-section-container">
        Text annotation in the context of key industries involves labeling
        specific information within text data related to various sectors or
        domains that are significant in business or society. Have a look at some
        key industries.
      </p>

      {/* Carousel */}
      <div
        ref={carouselRef}
                  className="relative w-full hidden lg:flex items-center justify-center mt-26 lg:mt-12 2xl:mt-16"
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

      <div className="hidden lg:flex justify-center items-center xl:gap-10 mt-5 ml-[10rem]  xl:ml-[12rem] 2xl:ml-[13rem] lg:mb-10 xl:mb-10">
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
      <div className="block lg:hidden p-2 md:p-4 text-white">
        {cards.slice(1, -1).map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <img
              src={item.imageTab}
              className="hidden md:block h-full w-full object-cover rounded-lg"
              alt=""
            />
            <img
              src={item.imageMobile}
              className="block md:hidden h-full w-full object-cover rounded-lg"
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
  );
};

export default KeyIndustries;
