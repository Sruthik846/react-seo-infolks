import { useEffect, useRef, useState } from "react";
import bgimage from "/solutions/common/main-solutions-bg.png";

import healthcare from "/solutions/image-annotations/industries/desktop/healthcare.jpg";
import automotive from "/solutions/image-annotations/industries/desktop/automotive.jpg";
import retail from "/solutions/image-annotations/industries/desktop/retail.jpg";
import finance_banking from "/solutions/image-annotations/industries/desktop/finance-banking.jpg";
import manufacturing from "/solutions/image-annotations/industries/desktop/manufacturing.jpg";
import agriculture from "/solutions/image-annotations/industries/desktop/agriculture.jpg";
import food_beverages from "/solutions/image-annotations/industries/desktop/food-beverages.jpg";
import security_surveilance from "/solutions/image-annotations/industries/desktop/security-surveilance.jpg";
import sports from "/solutions/image-annotations/industries/desktop/sports.jpg";
import rail_tech from "/solutions/image-annotations/industries/desktop/rail-tech.jpg";
import logistics from "/solutions/image-annotations/industries/desktop/logistics.jpg";

// tab images
import healthcareTab from "/solutions/image-annotations/industries/tab/healthcare.jpg";
import automotiveTab from "/solutions/image-annotations/industries/tab/automotive.jpg";
import retailTab from "/solutions/image-annotations/industries/tab/retail.jpg";
import finance_bankingTab from "/solutions/image-annotations/industries/tab/finance-banking.jpg";
import manufacturingTab from "/solutions/image-annotations/industries/tab/manufacturing.jpg";
import agricultureTab from "/solutions/image-annotations/industries/tab/agriculture.jpg";
import food_beveragesTab from "/solutions/image-annotations/industries/tab/food-beverages.jpg";
import security_surveilanceTab from "/solutions/image-annotations/industries/tab/security-surveilance.jpg";
import sportsTab from "/solutions/image-annotations/industries/tab/sports.jpg";
import rail_techTab from "/solutions/image-annotations/industries/tab/rail-tech.jpg";
import logisticsTab from "/solutions/image-annotations/industries/tab/logistics.jpg";

// mobile images
import healthcareMobile from "/solutions/image-annotations/industries/desktop/healthcare.jpg";
import automotiveMobile from "/solutions/image-annotations/industries/desktop/automotive.jpg";
import retailMobile from "/solutions/image-annotations/industries/desktop/retail.jpg";
import finance_bankingMobile from "/solutions/image-annotations/industries/desktop/finance-banking.jpg";
import manufacturingMobile from "/solutions/image-annotations/industries/desktop/manufacturing.jpg";
import agricultureMobile from "/solutions/image-annotations/industries/desktop/agriculture.jpg";
import food_beveragesMobile from "/solutions/image-annotations/industries/desktop/food-beverages.jpg";
import security_surveilanceMobile from "/solutions/image-annotations/industries/desktop/security-surveilance.jpg";
import sportsMobile from "/solutions/image-annotations/industries/desktop/sports.jpg";
import rail_techMobile from "/solutions/image-annotations/industries/desktop/rail-tech.jpg";
import logisticsMobile from "/solutions/image-annotations/industries/desktop/logistics.jpg";


// import { useRef } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLayoutEffect } from "react";

const KeyIndustries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(500);
  
  const images = [
    {
      id: 1,
      title: "Healthcare ",
      content:
        "Precise annotation of medical images, such as X-rays, MRI scans, and CT scans, is fundamental for accurate diagnosis, treatment planning, and disease monitoring. Accurate annotations empower AI systems to automate disease detection, boost efficiency, and aid medical professionals in delivering superior patient care.",
      image: healthcare,
      imageTab: healthcareTab,
      imageMobile: healthcareMobile,
    },
    {
      id: 2,
      title: "Automotive",
      content:
        "Image annotation in this industry facilitates object detection, lane recognition, and obstacle identification, crucial for enhancing safety in self-driving cars and advanced driver-assistance systems. Annotated data serves as a cornerstone for training AI algorithms, facilitating the development of robust autonomous vehicle technologies that prioritise passenger safety.",
      image: automotive,
      imageTab: automotiveTab,
      imageMobile: automotiveMobile,
    },
    {
      id: 3,
      title: "Retail",
      content: `Image annotations mainly assist in product recognition, visual search, object detection for inventory management, and recommendation systems based on customer preferences. Through annotated data, retailers can optimise their operations, improve product visibility, and create tailored experiences that resonate with individual consumer needs and preferences.`,
      image: retail,
      imageTab: retailTab,
      imageMobile: retailMobile,
    },
    {
      id: 4,
      title: "Financial and Banking",
      content:
        "Precise annotations on financial documents, such as checks, invoices, and forms, streamline the extraction of critical information, aiding in faster processing and accurate data interpretation. Image labeling empowers AI models to detect fraudulent patterns in financial data, enhancing security measures by identifying suspicious anomalies.",
      image: finance_banking,
      imageTab: finance_bankingTab,
      imageMobile: finance_bankingMobile,
    },
    {
      id: 5,
      title: "Manufacturing ",
      content: `Annotated data trains machine learning models to help automate inspections, reducing errors, and enhancing production efficiency. This aids manufacturers in identifying areas for improvement & optimising processes and ensuring consistent quality across operations. `,
      image: manufacturing,
      imageTab: manufacturingTab,
      imageMobile: manufacturingMobile,
    },
    {
      id: 6,
      title: "Agriculture",
      content: `Accurate annotations enable the identification and labeling of crops, pests, and pertinent features within these images. Leveraging annotated data empowers agricultural experts to implement predictive models and precision farming techniques.`,
      image: agriculture,
      imageTab: agricultureTab,
      imageMobile: agricultureMobile,
    },
    {
      id: 7,
      title: "Food & Beverages",
      content:
        "In the food and beverage industry, image annotation solutions are indispensable for quality control, inventory management, and product recognition. These solutions facilitate precise labeling of food items, packaging, and production equipment in images, optimizing processes and ensuring compliance with regulations.",
      image: food_beverages,
      imageTab: food_beveragesTab,
      imageMobile: food_beveragesMobile,
    },
    {
      id: 8,
      title: "Security and Surveillance",
      content:
        "Enhancing security systems and surveillance technology, image labeling enables accurate identification and tracking of objects or individuals across diverse environments. Leveraging annotated data empowers security systems to efficiently recognise patterns, potential threats, and critical insights, thereby strengthening overall safety and vigilance in various settings.",
      image: security_surveilance,
      imageTab: security_surveilanceTab,
      imageMobile: security_surveilanceMobile,
    },
    {
      id: 9,
      title: "Sports ",
      content:
        "Image annotation entails labeling diverse images like action shots, training videos, and player movements captured via cameras and sensors. These annotations offer valuable insights into player positioning, technique, and biomechanics, enabling coaches and athletes to enhance performance and refine training approaches.",
      image: sports,
      imageTab: sportsTab,
      imageMobile: sportsMobile,
    },
    {
      id: 10,
      title: "Rail-Tech",
      content:
        "Image annotation is a fundamental process in various technological fields, where it involves labeling objects within images to train algorithms for tasks such as object detection and recognition. This annotation enables the development of more accurate and efficient systems for applications like surveillance, monitoring, and maintenance within the rail industry. ",
      image: rail_tech,
      imageTab: rail_techTab,
      imageMobile: rail_techMobile,
    },
    {
      id: 11,
      title: "Logistic ",
      content:
        "Labeling various types of images, including parcels, barcodes, shipping labels, and warehouse inventory. This labeling optimizes sorting, tracking, and inventory management processes, leading to enhanced efficiency and accuracy in logistics operations.",
      image: logistics,
      imageTab: logisticsTab,
      imageMobile: logisticsMobile,
    },
  ];
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
    // useEffect(() => {
    //   if (!carouselRef.current) return;
    //   gsap.fromTo(
    //     carouselRef.current,
    //     { x: direction },
    //     { x: 0, duration: 0.7, ease: "back.out(1.7)" }
    //   );
    // });
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
      <div className="z-0 -mt-20 md:-mt-16 relative flex flex-col justify-center items-center h-full lg:min-h-[1200px] xl:min-h-[1100px] 2xl:min-h-[1400px] bg-linear-to-r from-[#038EFF] to-[#2b96ee] overflow-hidden">
        <img
          src={bgimage}
          className="w-full h-full z-0 lg:block hidden absolute inset-0"
          alt=""
        />
        <div className="lg:absolute top-0 z-20 mt-20 lg:mt-0 h-full w-full flex justify-center items-center flex-col">
          <h2 className="hidden lg:block heading-h2 text-white lg:mb-5 text-center pt-10 2xl:pt-20 lg:leading-[50px] 2xl:leading-[63px]">
            IMAGE ANNOTATION
            <br />
            <span>ACROSS KEY INDUSTRIES</span>
          </h2>

          <h3 className="block lg:hidden heading-h3 text-white text-center mb-2 pt-10">
            IMAGE ANNOTATION ACROSS
            <br />
            <span> KEY INDUSTRIES</span>
          </h3>
          <p className="paragraph text-white text-center mx-auto container responsive-section-container">
            Image annotation is vital across various industries for training
            machine learning models and computer vision systems. Producing
            high-quality image labeling is essential for generating accurate
            datasets. In sectors such as autonomous technology, healthcare,
            commerce, geospatial analysis, finance, government, and others,
            various AI/ML applications heavily rely on effective image
            annotation techniques.
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
                      <h3
                        ref={titleRef}
                        className=" heading-h4 text-white mb-2"
                      >
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
                    <p
                      ref={subtitleRef}
                      className=" paragraph text-white w-[90%] mt-3"
                    >
                      {images[currentIndex].content}
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-start lg:gap-4">
                    <button
                      onClick={prevSlide}
                      className=" text-white bg-[#13B2F5] p-2 h-12 rounded-full w-12 flex justify-center items-center cursor-pointer "
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
      </div>
  );
};

export default KeyIndustries;
