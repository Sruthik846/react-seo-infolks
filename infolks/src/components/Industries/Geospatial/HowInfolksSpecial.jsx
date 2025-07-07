import { useState } from "react";
import bgimage1 from "/industries/agriculture/infolks-specialcard-white-bg.png";
import bgimage2 from "/industries/agriculture/infolks-specialcard-white-bg2.png";

import timelyDelivery from "/industries/icons/time-delivery.svg";
import time_delivery_hoverImg from "/industries/icons/time-delivery-hover.svg";
import client_centric_approach_hover from "/industries/icons/client-centric-hover.svg";
import client_centric_approach_Img from "/industries/icons/client-centric.svg";
import qualityAssurance from "/industries/icons/quality-normal.svg";
import qualityAssurance_hover from "/industries/icons/quality-hover.svg";
import industryExperience from "/industries/icons/industry-expert.svg";
import industryExperience_hover from "/industries/icons/industry-experience-hover.svg";
import specialises_team_of_annotators from "/industries/icons/specialized-team.svg";
import specialises_team_of_annotators_hover from "/industries/icons/specialised-team-hover.svg";
import continuous_improvement from "/industries/icons/continuous-improvement.svg";
import continuous_improvement_hover from "/industries/icons/continuous-improvement-hover.svg";
import arrowLeft from "/industries/agriculture/icons/arrow-left.svg";
import arrowRight from "/industries/agriculture/icons/arrow-right.svg";

import arrow from "/home/icons/arrowRight.png";
import "./cards.css";

function HowInfolksSpecial() {
  const initialState = [
    {
      idx: 1,
      pos: 1,
      text: "Specialised Team of Annotators",
      content: `We have specialized annotator teams for different areas, from medical to automotive, ensuring expertise in specific sectors, including GIS-based geospatial datasets.`,
      active: true,
      img: bgimage1,
      icon: specialises_team_of_annotators,
      hoverIcon: specialises_team_of_annotators_hover,
      borderColor: "border-[#5F82CC]",
    },
    {
      idx: 2,
      pos: 2,
      text: "Industry Experience",
      content: `Our industry experience allows us to provide accurate annotations tailored to specific industry needs, especially in GIS-driven geospatial sectors.`,
      active: true,
      img: bgimage2,
      icon: industryExperience,
      hoverIcon: industryExperience_hover,
      borderColor: "border-[#547ED8]",
    },
    {
      idx: 3,
      pos: 3,
      text: "Quality Assurance",
      content: `Each annotated output undergoes a rigorous triple-level quality check to ensure high standards are maintained. We have implemented an efficient quality management system and attained ISO 9001:2015 accreditation.`,
      active: true,
      img: bgimage1,
      icon: qualityAssurance,
      hoverIcon: qualityAssurance_hover,
      borderColor: "border-[#AABDE7]",
    },
    {
      idx: 4,
      pos: 4,
      text: "Timely Delivery",
      content: `We pride ourselves on delivering annotated data within specified timelines, ensuring that our clients' projects progress smoothly.`,
      active: true,
      img: bgimage2,
      icon: timelyDelivery,
      hoverIcon: time_delivery_hoverImg,
      borderColor: "border-[#0C9DFC]",
    },
    {
      idx: 5,
      pos: 5,
      text: "Client-centric Approach",
      content: `We focus on understanding our clients' needs to offer tailored annotation solutions that align with their goals effectively.`,
      active: false,
      img: bgimage1,
      icon: client_centric_approach_Img,
      hoverIcon: client_centric_approach_hover,
      borderColor: "border-[#5F82CC]",
    },
    {
      idx: 6,
      pos: 6,
      text: "Continuous Improvement",
      content: `We continuously refine annotation techniques and approaches based on industry trends, GIS integration challenges, and client feedback.`,
      active: false,
      img: bgimage2,
      icon: continuous_improvement,
      hoverIcon: continuous_improvement_hover,
      borderColor: "border-[#547ED8]",
    },
  ];

  const [cards, setCards] = useState(initialState);
  const [hoveredCard, setHoveredCard] = useState(null);

  const updateCards = (nextCardIdx, updatePosFn) => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.idx === nextCardIdx) {
          console.log(`Deactivating card ${card.idx}`);
          return { ...card, active: false, pos: updatePosFn(prevCards) };
        }
        if (!card.active) {
          console.log(`Activating card ${card.idx}`);
          return { ...card, active: true, pos: updatePosFn(prevCards) };
        }
        return card;
      });
    });
  };

  const handleRightClick = () => {
    const activeCards = cards
      .filter((f) => f.active)
      .sort((a, b) => a.pos - b.pos);
    if (activeCards.length < 2) return; // Prevent errors

    const nextCardIdx = activeCards[0].idx; // Get the first card in active list
    updateCards(
      nextCardIdx,
      (prevState) => Math.max(...prevState.map((o) => o.pos)) + 1
    );
  };

  const handleLeftClick = () => {
    const activeCards = cards
      .filter((f) => f.active)
      .sort((a, b) => a.pos - b.pos);
    if (activeCards.length < 2) return; // Prevent errors

    const nextCardIdx = activeCards[activeCards.length - 1].idx; // Get the last active card
    updateCards(
      nextCardIdx,
      (prevState) => Math.min(...prevState.map((o) => o.pos)) - 1
    );
  };

  const handleMouseEnter = (idx) => {
    setHoveredCard(idx);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const [cardss, setCard] = useState(initialState.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? initialState.slice(0, 4) : initialState);
    setShowAll(!showAll);
  };

  return (
    <section className="mb-10 md:mb-10 lg:mb-20 font-primary-regular">
      <div>
        <h2 className="heading-h2 text-[#37508A] text-center  md:mt-12 my-5 lg:mt-20">
          HOW INFOLKS SPECIAL?
        </h2>
      </div>
      <div className="hidden lg:flex gap-4 md:gap-10 mt-16 justify-center items-center md:p-1">
        <div className="flex xl:gap-5">
          <img
            src={arrowLeft}
            className="text-xl md:text-5xl cursor-pointer flex justify-center items-center"
            onClick={handleLeftClick}
            alt="left arrow"
          />
          <div className="flex gap-4 md:gap-0 w-full relative justify-center items-center z-0">
            {cards
              .filter((f) => f.active) // Get active cards
              .sort((a, b) => a.pos - b.pos) // Sort by position
              .slice(0, 4) // Take only the first 4 cards
              .map((card) => {
                return (
                  <div
                    key={card.idx}
                    onMouseEnter={() => handleMouseEnter(card.idx)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMouseEnter(card.idx)}
                    className="relative z-10 group mx-2 card"
                  >
                    <div
                      className={`flex gap-5 justify-center items-center rounded-[80px] border-2 ${
                        card.borderColor
                      } p-5
  bg-[#FFFBF0] xl:h-[20rem] xl:w-60 2xl:h-[436px] 2xl:w-[328px] h-[18rem] w-52
  group-hover:bg-gradient-to-b group-hover:from-[#02BAE2] group-hover:to-[#0280FB]
  ${
    hoveredCard === card.idx
      ? "bg-gradient-to-b from-[#02BAE2] to-[#0280FB]"
      : "bg-[#FFFBF0]"
  }`}
                    >
                      {hoveredCard === card.idx ? (
                        <div className="absolute inset-0 flex flex-col overflow-hidden">
                          <div className="text-white p-4 2xl:p-8 lg:w-22 lg:h-22 2xl:w-34 2xl:h-34">
                            <img
                              src={card.hoverIcon}
                              className="w-full h-full ml-24 xl:ml-32 2xl:ml-48"
                              alt="hover icon"
                            />
                            <div className="absolute bottom-10 right-4 2xl:right-8 left-4 2xl:left-8">
                              <h3 className="text-[20px] lg:text-[22px] 2xl:text-[24px] border-b border-white font-primary-medium leading-7 2xl:leading-8">
                                {card.text}
                              </h3>
                              <p className="mt-2 xl:mt-4 text-[12px] lg:text-[14px] 2xl:text-[18px]">
                                {card.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute flex flex-col">
                          <div
                            className={
                              card.img === bgimage1
                                ? "flex flex-col justify-center items-center -rotate-5 "
                                : "flex flex-col justify-center items-center rotate-5 "
                            }
                          >
                            <img
                              src={card.icon}
                              className="w-20 2xl:w-32"
                              alt="icon"
                            />
                            <h1 className="text-[#5F82CC] heading-h4 leading-8 text-center mt-2 md:mt-5 font-primary-medium px-2">
                              {card.text}
                            </h1>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <img
            src={arrowRight}
            className="text-xl md:text-5xl cursor-pointer flex justify-center items-center"
            onClick={handleRightClick}
            alt="right arrow"
          />
        </div>
      </div>

      {/* medium & small screen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-10 justify-center items-center p-2 md:p-4 lg:p-10 lg:hidden">
        {cardss.map((card) => (
          <div
            key={card.idx}
            onMouseEnter={() => handleMouseEnter(card.idx)}
            onMouseLeave={handleMouseLeave}
            className="relative z-10 group"
          >
            <div className="flex flex-col gap-2 justify-center items-center border-4 border-[#5F82CC] hover:border-[#0C9DFC] rounded-3xl p-5 md:h-80">
              <img src={card.icon} className="w-16" alt="" />
              <h5 className="text-[20px] md:text-[25px] text-[#5F82CC] group-hover:text-[#0C9DFC] text-center leading-7">
                {card.text}
              </h5>
              <svg
                width="135"
                height="7"
                viewBox="0 0 135 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path-fill"
                  d="M0.37692 3.27344L3.26367 6.16019L6.15042 3.27344L3.26367 0.386686L0.37692 3.27344ZM134.15 3.27345L131.264 0.386697L128.377 3.27345L131.264 6.1602L134.15 3.27345ZM3.26367 3.77344L131.264 3.77345L131.264 2.77345L3.26367 2.77344L3.26367 3.77344Z"
                  fill="#5F82CC"
                />
              </svg>

              <p className="text-center group-hover:text-[#0C9DFC] text-[16px] 3xl:text-[18px] text-[#37508A] leading-6">
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:hidden mt-5">
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
    </section>
  );
}

export default HowInfolksSpecial;
