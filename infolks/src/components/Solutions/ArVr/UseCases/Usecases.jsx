import { useEffect, useState } from "react";

import transparentBg from "/solutions/transparentBg.svg";
import precise_object_development from "/solutions/ar-vr/usecases/precise-object-development.jpg";
import pause_assessment from "/solutions/ar-vr/usecases/pause-assessment.jpg";
import architectural_visualization from "/solutions/ar-vr/usecases/architectural-visualization.jpg";
import healthcare_simulations from "/solutions/ar-vr/usecases/healthcare-simulations.jpg";
import virtual_gaming from "/solutions/ar-vr/usecases/virtual-gaming.jpg";

import precise_object_developmentTab from "/solutions/ar-vr/usecases/tab/precise-object-developmentTab.jpg";
import pause_assessmentTab from "/solutions/ar-vr/usecases/tab/pause-assessmentTab.jpg";
import architectural_visualizationTab from "/solutions/ar-vr/usecases/tab/architectural-visualizationTab.jpg";
import healthcare_simulationsTab from "/solutions/ar-vr/usecases/tab/healthcare-simulationsTab.jpg";
import virtual_gamingTab from "/solutions/ar-vr/usecases/tab/virtual-gamingTab.jpg";

import precise_object_developmentMob from "/solutions/ar-vr/usecases/mob/precise-object-developmentmob.jpg";
import pause_assessmentMob from "/solutions/ar-vr/usecases/mob/pause-assessmentmob.jpg";
import architectural_visualizationMob from "/solutions/ar-vr/usecases/mob/architectural-visualizationmob.jpg";
import healthcare_simulationsMob from "/solutions/ar-vr/usecases/mob/healthcare-simulationsmob.jpg";
import virtual_gamingMob from "/solutions/ar-vr/usecases/mob/virtual-gamingmob.jpg";

const slides = [
  {
    id: 1,
    title: "Precise Object Development",
    imageUrl: precise_object_development,
    imageUrlTab: precise_object_developmentTab,
    imageUrlMobile: precise_object_developmentMob,
    content:
      "This precise annotation empowers AR & VR systems to interpret and interact with objects seamlessly, improving the immersive experience and enabling the creation of lifelike, realistic environments for users. The accuracy and effectiveness of these immersive technologies heavily rely on precise object recognition and understanding.",
  },
  {
    id: 2,
    title: "Pause Assessment",
    imageUrl: pause_assessment,
    imageUrlTab: pause_assessmentTab,
    imageUrlMobile: pause_assessmentMob,
    content:
      "By pausing the experience, users can examine details, review information, or even receive instructional guidance without interrupting the overall flow of the simulation. The pause functionality in VR assessments plays a pivotal role in fostering a deeper understanding among users by allowing them to momentarily interrupt the assessment process. This unique feature empowers individuals to explore and investigate virtual environments or thoroughly review critical details.",
  },
  {
    id: 3,
    title: "Architectural Visualisation",
    imageUrl: architectural_visualization,
    imageUrlTab: architectural_visualizationTab,
    imageUrlMobile: architectural_visualizationMob,
    content:
      "Data annotations in AR & VR transform architectural visualization by adding detailed information to physical and virtual spaces. Annotations offer context, enhancing understanding of AR and crafting interactive VR environments.",
  },
  {
    id: 4,
    title: "Healthcare Simulations",
    imageUrl: healthcare_simulations,
    imageUrlTab: healthcare_simulationsTab,
    imageUrlMobile: healthcare_simulationsMob,
    content:
      "AR & VR technologies, supported by data annotation, revolutionise healthcare training through immersive scenarios. Annotations within AR offer real-time insights, aiding in training and practice. VR creates lifelike environments for practicing medical procedures, enhancing education, and ultimately benefiting patient care.",
  },
  {
    id: 5,
    title: "Virtual Gaming",
    imageUrl: virtual_gaming,
    imageUrlTab: virtual_gamingTab,
    imageUrlMobile: virtual_gamingMob,
    content:
      "With the help of data annotation, AR & VR redefine gaming through immersive experiences. Annotations enrich gameplay elements, AR overlays digital content onto the real world, and VR creates immersive digital environments. This integration significantly enhances gaming, providing personalised and captivating experience for players.",
  },
];
const infiniteData = Array(10).fill(slides).flat();

const Usecases = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from the first "real" slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeItem, setActiveItem] = useState(slides[0]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Transition duration in milliseconds
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev + 1);
      const id = activeItem.id % infiniteData.length;
      setActiveItem(infiniteData[id]);
      setIsTransitioning(false);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      if (currentSlide === 1) {
        setIsTransitioning(false); // Temporarily disable transition
        setCurrentSlide(infiniteData.length); // Jump to cloned last slide

        setTimeout(() => {
          setIsTransitioning(true); // Re-enable transition
          setCurrentSlide(infiniteData.length - 0); // Move to actual last slide
          setActiveItem(infiniteData[infiniteData.length - 1]); // Update active item
          console.log(infiniteData[infiniteData.length - 1]);
        }, 50); // Small delay to force reflow
      } else {
        setCurrentSlide((prev) => prev - 1);
        const id =
          (activeItem.id - 2 + infiniteData.length) % infiniteData.length;
        setActiveItem(infiniteData[id]);
        setIsTransitioning(false);
      }
    }
  };

  const [cards, setCard] = useState(slides.slice(0, 1));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? slides.slice(0, 1) : slides);
    setShowAll(!showAll);
  };
  return (
    <section className="lg:mt-20 xl:mt-10 2xl:mt-20 mt-5 mb-10 lg:mb-20 xl:-mb-16 2xl:mb-20 relative font-primary-regular">
      <div className="text-[#37508A] flex flex-col justify-center items-center">
        <h2 className="hidden lg:block heading-h2 lg:mb-5 text-center lg:leading-[50px] 2xl:leading-[63px]">
        USE CASES OF <br />
        AR & VR DATA ANNOTATION
        </h2>

        <h3 className="block lg:hidden heading-h3 lg:mb-5 text-center lg:leading-[50px] 2xl:leading-[63px]">
        USE CASES OF <br />
        AR & VR DATA ANNOTATION
        </h3>
        <p className="paragraph text-center responsive-section-container">
        With a commitment to accuracy and innovation, we remain focused on
          meeting the unique demands of each industry. Our goal with AR/VR data
          annotation is to promote enriched experiences and progress across
          multiple use cases.
        </p>
      </div>

      <div className="pt-10 hidden lg:block">
        <div className="relative w-full h-[790px] flex items-center justify-center overflow-hidden font-primary-regular">
          <div
            className={`relative w-full h-full flex transition-transform duration-700 ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={{ transform: `translateX(-${currentSlide * 90 - 30}%)` }}
          >
            {[
              infiniteData[infiniteData.length - 1],
              ...infiniteData,
              ...infiniteData,
              infiniteData[0],
            ].map((slide, index) => (
              <div
                key={index}
                className="shrink-0 w-[90%] h-full xl:h-[80%] 2xl:h-full relative flex"
              >
                {/* <div
                      className="absolute inset-0 h-full w-full bg-contain bg-no-repeat"
                      style={{ backgroundImage: `url(${slide.imageUrl})`}}
                    > */}
                <div
                  className="absolute inset-0 h-full w-full overflow-hidden bg-no-repeat xl:bg-cover 2xl:bg-contain lg:bg-cover rounded-[10px]"
                  style={{
                    backgroundImage: `url(${
                      window.innerWidth >= 1728
                        ? slide.imageUrl
                        : window.innerWidth >= 1024
                        ? slide.imageUrlTab
                        : slide.imageUrlTab
                    })`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-[10px]"></div>
                </div>
<div className="w-40 h-full absolute top-0 right-0 bg-[#FFFBF0]">
                </div>              </div>
            ))}
          </div>

          <div className="absolute overflow-hidden xl:top-14 2xl:top-24 lg:left-10 xl:left-22 2xl:left-52 bg-[#FFFBF0] lg:pl-10 2xl:pl-16 pr-16 rounded-lg shadow-lg w-[587px] 2xl:w-[687px] lg:h-[520px] 2xl:h-[620px] text-[#37508A] flex lg:gap-6 xl:gap-10">
            <img src={transparentBg} className="absolute inset-0 z-0 w-full overflow-hidden" alt="" />
          {/* <div
            className="absolute lg:left-10 xl:left-16 2xl:left-52 bg-[#FFFBF0] lg:pl-10 xl:pl-16 pr-16 rounded-lg shadow-lg w-[587px] xl:w-[687px] lg:h-[665px] xl:h-[690px] text-[#37508A] flex lg:gap-6 xl:gap-10"
            style={{
              backgroundImage: `url(${transparentBg})`,
              backgroundSize: "cover", // Adjust based on your needs
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          > */}
            <div className="flex flex-col gap-3 justify-center items-center z-10">
              <button
                className={`bg-[#13B2F5] text-white p-2 rounded-lg w-[48px] h-[48px] xl:w-[54px] xl:h-[54px] flex justify-center items-center cursor-pointer`}
                onClick={prevSlide}
              >
                <svg
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.57407 18.957L0.0458101 10.0061C-0.0152684 9.89135 -0.0152684 9.76703 0.0458102 9.65228L9.58425 0.758788C9.64533 0.644035 9.83874 0.644035 9.9609 0.758788L10.928 1.66726C11.0501 1.78202 11.0501 1.96371 10.928 2.08803L3.67998 8.95419L24.1311 8.95419C24.691 8.95419 25.2 9.36539 25.2 9.90091C25.2 10.4938 24.7012 10.905 24.1311 10.905L3.86322 10.905L10.928 17.5799C11.0501 17.6947 11.0501 17.8764 10.928 17.9911L9.95072 18.957C9.82856 19.0143 9.63514 19.0143 9.57407 18.957Z"
                    fill="#FFFBF0"
                  />
                </svg>
              </button>
              <button
                className={`bg-[#13B2F5] text-white p-2 rounded-lg w-[48px] h-[48px] xl:w-[54px] xl:h-[54px] flex justify-center items-center cursor-pointer`}
                onClick={nextSlide}
              >
                <svg
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4259 0.0430309L25.9542 8.9939C26.0153 9.10865 26.0153 9.23297 25.9542 9.34772L16.4158 18.2412C16.3547 18.356 16.1613 18.356 16.0391 18.2412L15.072 17.3327C14.9499 17.218 14.9499 17.0363 15.072 16.912L22.32 10.0458L1.86887 10.0458C1.30899 10.0458 0.799997 9.63461 0.799997 9.09908C0.799997 8.50618 1.29881 8.09498 1.86887 8.09498L22.1368 8.09499L15.072 1.42009C14.9499 1.30533 14.9499 1.12364 15.072 1.00888L16.0493 0.0430308C16.1714 -0.0143465 16.3649 -0.0143464 16.4259 0.0430309Z"
                    fill="#FFFBF0"
                  />
                </svg>
              </button>
            </div>
            <div className=" lg:w-[75%] xl:w-full 2xl:w-[60%]">
              <div className="relative">
                <svg
                  width="70"
                  height="100"
                  viewBox="0 0 70 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{ mixBlendMode: "multiply" }}>
                    <path
                      d="M0 0H70V110C70 115.523 65.5229 120 60 120H10C4.47715 120 0 115.523 0 110V0Z"
                      fill="#13B2F5"
                      fillOpacity="0.06"
                    />
                  </g>
                </svg>
                <div className="absolute bottom-5 left-5 text-[30px]">
                  <h5>0{activeItem.id}</h5>
                </div>
              </div>

              <h3 className="heading-h3 mb-4 border-b-[1px] border-b-[#37508a98] mt-20 xl:mt-5 2xl:mt-20 pb-3">
                {activeItem.title}
              </h3>
              <p className="paragraph">{activeItem.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden p-2 md:p-4 font-primary-regular">
        {cards.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <img src={item.imageUrlMobile} className="rounded-lg" alt="" />
            <h3 className="heading-h3 border-b border-b-[#37508A] w-fit">
              {item.title}
            </h3>
            <p className="paragraph pb-5">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:hidden">
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
    </section>
  );
};

export default Usecases;
