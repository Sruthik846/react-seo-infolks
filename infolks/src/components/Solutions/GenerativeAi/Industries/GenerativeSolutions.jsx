import { useEffect, useRef, useState } from "react";
import bgimage from "/solutions/common/main-solutions-bg.png";
import healthcare from "/solutions/generative-ai/generative-solutions/healthcare.jpg";
import automotive from "/solutions/generative-ai/generative-solutions/automotive.jpg";
import retail from "/solutions/generative-ai/generative-solutions/retail.jpg";
import finance from "/solutions/generative-ai/generative-solutions/finance.jpg";
import manufacturing from "/solutions/generative-ai/generative-solutions/manufacturing.jpg";
import agriculture from "/solutions/generative-ai/generative-solutions/agriculture.jpg";
import food_beverages from "/solutions/generative-ai/generative-solutions/food-beverages.jpg";
import waste_management from "/solutions/generative-ai/generative-solutions/waste-management.jpg";
import logistic_transportation from "/solutions/generative-ai/generative-solutions/logistic-transportation.jpg";
import marketing from "/solutions/generative-ai/generative-solutions/marketing.jpg";
import gaming from "/solutions/generative-ai/generative-solutions/gaming.jpg";

import healthcare_tab from "/solutions/generative-ai/generative-solutions/tab/healthcare_tab.jpg";
import automotive_tab from "/solutions/generative-ai/generative-solutions/tab/automotive_tab.jpg";
import retail_tab from "/solutions/generative-ai/generative-solutions/tab/retail_tab.jpg";
import finance_tab from "/solutions/generative-ai/generative-solutions/tab/finance_tab.jpg";
import manufacturing_tab from "/solutions/generative-ai/generative-solutions/tab/manufacturing_tab.jpg";
import agriculture_tab from "/solutions/generative-ai/generative-solutions/tab/agriculture_tab.jpg";
import food_beverages_tab from "/solutions/generative-ai/generative-solutions/tab/food-beverages_tab.jpg";
import waste_management_tab from "/solutions/generative-ai/generative-solutions/tab/waste-management_tab.jpg";
import logistic_transportation_tab from "/solutions/generative-ai/generative-solutions/tab/logistic-transportation_tab.jpg";
import marketing_tab from "/solutions/generative-ai/generative-solutions/tab/marketing_tab.jpg";
import gaming_tab from "/solutions/generative-ai/generative-solutions/tab/gaming_tab.jpg";

import healthcare_mob from "/solutions/generative-ai/generative-solutions/mob/healthcare-mob.jpg";
import automotive_mob from "/solutions/generative-ai/generative-solutions/mob/automotive-mob.jpg";
import retail_mob from "/solutions/generative-ai/generative-solutions/mob/retail-mob.jpg";
import finance_mob from "/solutions/generative-ai/generative-solutions/mob/finance-mob.jpg";
import manufacturing_mob from "/solutions/generative-ai/generative-solutions/mob/manufacturing-mob.jpg";
import agriculture_mob from "/solutions/generative-ai/generative-solutions/mob/agriculture-mob.jpg";
import food_beverages_mob from "/solutions/generative-ai/generative-solutions/mob/food-beverages-mob.jpg";
import waste_management_mob from "/solutions/generative-ai/generative-solutions/mob/waste-management-mob.jpg";
import logistic_transportation_mob from "/solutions/generative-ai/generative-solutions/mob/logistic-transportation-mob.jpg";
import marketing_mob from "/solutions/generative-ai/generative-solutions/mob/marketing-mob.jpg";
import gaming_mob from "/solutions/generative-ai/generative-solutions/mob/gaming-mob.jpg";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLayoutEffect } from "react";

const images = [
  {
    id: 1,
    title: "Healthcare ",
    content:
      "Generative AI solutions are instrumental in revolutionizing healthcare practices. They support various critical functions, including medical imaging analysis, aiding in drug discovery, analyzing patient data, and delivering personalized treatment recommendations. These advancements significantly contribute to enhancing healthcare practices and outcomes.",
    image: healthcare,
    imageTab: healthcare_tab,
    imageMobile: healthcare_mob,
  },
  {
    id: 2,
    title: "Automotive",
    content:
      "Generative AI is reshaping the automotive sector by optimizing design, manufacturing, and autonomous driving technology. Through advanced algorithms, it enables lighter, more efficient vehicle components, streamlined production processes, and enhanced safety features for autonomous vehicles.",
    image: automotive,
    imageTab: automotive_tab,
    imageMobile: automotive_mob,
  },
  {
    id: 3,
    title: "Retail",
    content: `Generative AI solutions revolutionise retail by customising customer interactions, delivering personalised messages, and suggesting relevant products. Also, it fortifies cybersecurity by swiftly detecting fraudulent activities like phishing attempts in customer communications. This innovative dual application enhances customer experiences while ensuring a secure shopping environment. `,
    image: retail,
    imageTab: retail_tab,
    imageMobile: retail_mob,
  },
  {
    id: 4,
    title: "Finance",
    content:
      "Generative AI solutions are pivotal in finance, providing robust tools for decision-making, risk assessment, and algorithmic trading. They generate synthetic financial data and forecast market trends, empowering institutions to proactively manage risks and capitalize on opportunities. This enhances efficiency and fosters success in a rapidly evolving financial landscape.",
    image: finance,
    imageTab: finance_tab,
    imageMobile: finance_mob,
  },
  {
    id: 5,
    title: "Manufacturing ",
    content: `Generative AI utilizes advanced algorithms to automate tasks such as predictive maintenance and defect detection, boosting efficiency and customization in manufacturing. This transformative technology is reshaping traditional processes, rendering them more agile, efficient, and responsive to changing market needs.`,
    image: manufacturing,
    imageTab: manufacturing_tab,
    imageMobile: manufacturing_mob,
  },
  {
    id: 6,
    title: "Agriculture",
    content: `Generative AI is transforming agriculture by optimizing crop yields, resource allocation, and sustainability practices. By analyzing data and employing predictive modeling, it enables farmers to make informed decisions regarding planting, irrigation, and pest management.`,
    image: agriculture,
    imageTab: agriculture_tab,
    imageMobile: agriculture_mob,
  },
  {
    id: 7,
    title: "Food & Beverages",
    content:
      "By employing advanced algorithms and data analysis, generative AI facilitates the development of innovative recipes and efficient supply chain management. This technology drives efficiency and innovation in the sector, leading to improved product and consumer experiences.",
    image: food_beverages,
    imageTab: food_beverages_tab,
    imageMobile: food_beverages_mob,
  },
  {
    id: 8,
    title: "Waste Management",
    content:
      "Generative AI revolutionizes waste management with innovative solutions, optimizing recycling processes, reducing waste, and improving resource recovery. Through advanced algorithms and data analytics, enables predictive modeling for efficient waste collection and sorting. This leads to enhanced operational effectiveness and cost savings.",
    image: waste_management,
    imageTab: waste_management_tab,
    imageMobile: waste_management_mob,
  },
  {
    id: 9,
    title: "Logistics & Transportation",
    content:
      "Generative AI is transforming logistics through predictive analytics, automated decision-making, and optimized operations. By forecasting demand, streamlining inventory management, and optimizing transportation routes, it enhances efficiency and reduces costs for logistics companies.",
    image: logistic_transportation,
    imageTab: logistic_transportation_tab,
    imageMobile: logistic_transportation_mob,
  },
  {
    id: 10,
    title: "Marketing",
    content:
      "Generative AI is reshaping marketing by crafting personalized content, refining ad targeting, and boosting customer engagement. Analyzing data and automating content creation, enables tailored campaigns that connect with individual preferences, driving conversions and revolutionizing marketing strategies.",
    image: marketing,
    imageTab: marketing_tab,
    imageMobile: marketing_mob,
  },
  {
    id: 11,
    title: "Gaming",
    content:
      "Within the gaming sector, generative AI is utilised to create gaming environments, characters, and storylines, and enhance gaming experiences.",
    image: gaming,
    imageTab: gaming_tab,
    imageMobile: gaming_mob,
  },
];
const GenerativeSolutions = () => {
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
    <section className="mx-auto container px-1 md:px-0 relative pt-20">
      <div className="bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-[35px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16 ">
          <div>
            <div className="rounded-t-[35px] md:rounded-t-[36px] z-0 relative flex flex-col justify-center items-center h-full lg:min-h-[1200px] xl:min-h-[1100px] 2xl:min-h-[1250px] bg-linear-to-r from-[#038EFF] to-[#2b96ee] overflow-hidden">
              <img
                src={bgimage}
                className="w-full h-full z-0 lg:block hidden absolute inset-0"
                alt=""
              />
              <div className="lg:absolute top-0 z-20 lg:mt-0 h-full w-full flex justify-center items-center flex-col md:pt-20 xl:pt-0 2xl:pt-20 pt-10">
                <h2 className="hidden lg:block heading-h2 text-white lg:mb-5 text-center pt-10 lg:pt-0 lg:leading-[50px] 2xl:leading-[63px]">
                  GENERATIVE AI
                  <br />
                  <span>SOLUTIONS ACROSS INDUSTRIES</span>{" "}
                </h2>

                <h3 className="block lg:hidden heading-h3 text-white text-center mb-2 pt-2">
                  GENERATIVE AI
                  <br />
                  <span>SOLUTIONS ACROSS INDUSTRIES</span>
                </h3>
                <p className="paragraph text-white text-center mx-auto container responsive-section-container">
                  Generative AI learns patterns and structures from extensive
                  datasets and utilizes this learned information to generate new
                  content that aligns with similar patterns. Generative AI
                  models find applications in various sectors, spanning content
                  creation, design, gaming, healthcare, and more.
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

                <div className="hidden lg:flex justify-center items-center xl:gap-10 mt-5 ml-[10rem] xl:ml-[12rem] 2xl:ml-[13rem] lg:mb-10 xl:mb-24">
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
                  {cards.slice(0, -1).map((item, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeSolutions;
