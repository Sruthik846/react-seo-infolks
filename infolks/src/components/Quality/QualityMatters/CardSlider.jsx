import { useEffect, useState } from "react";
// import "./CardSlider.css"; // For additional styles if needed
import iso from "/quality/ISO.jpg";
import isoSmall from "/quality/iso-sm.jpg";
import isoBefore from "/quality/ISO-before.jpg";
import isoSmallBefore from "/quality/iso-sm-before.jpg";
import sampleTeam from "/quality/sample-team.jpg";
import sample_team_before from "/quality/sample-team-before.jpg";
import sampleTeamSm from "/quality/sample-team-sm.jpg";
import sampleTeamSmBefore from "/quality/sample-team-sm-before.jpg";
import qualityBenchmark from "/quality/quality-benchmark.jpg";
import qualityBenchmarkSm from "/quality/quality-benchmark-sm.jpg";
import labelAuditing from "/quality/label-auditing.jpg";
import labelAuditingSm from "/quality/label-auditing-sm.jpg";
import qualityBasedPromotions from "/quality/quality-based-promotions.jpg";
import qualityBasedPromotionsSm from "/quality/quality-based-promotions-sm.jpg";
import qualityDayCelebration from "/quality/quality-day-celebration.jpg";
import qualityDayCelebrationSm from "/quality/quality-day-celebration-sm.jpg";
import serviceflexibility from "/quality/service-flexibility.jpg";
import serviceflexibilitySm from "/quality/service-flexibility-sm.jpg";
import service_flexibility_before from "/quality/service-flexibility-before.jpg";
import service_flexibility_sm_before from "/quality/service-flexibility-sm-before.jpg";
import label_auditing_before from "/quality/label-auditing-before.jpg";
import label_auditing_sm_before from "/quality/label-auditing-sm-before.jpg";
import quality_day_celebration_before from "/quality/quality-day-celebration-before.jpg";
import quality_day_celebration_sm_before from "/quality/quality-day-celebration-sm-before.jpg";
import quality_benchmark_before from "/quality/quality-benchmark-before.jpg";
import quality_benchmark_sm_before from "/quality/quality-benchmark-sm-before.jpg";
import quality_based_promotions_before from "/quality/quality-based-promotions-before.jpg";
import quality_based_promotions_sm_before from "/quality/quality-based-promotions-sm-before.jpg";
import arrow from "/home/icons/arrowRight.png";
import leftArrow from "/quality/icons/left-arrow.svg";
import rightArrow from "/quality/icons/right-arrow.svg";

const cardsData = [
  {
    id: 0,
    title: "ISO 9001:2015 Certification",
    description:
      "We have implemented an efficient quality management system and attained ISO 9001:2015 accreditation. This certification is a confirmation that we are following guidelines for bringing quality and efficiency to our services for improved client satisfaction. We are committed to providing high-quality services and ensuring effectiveness and continuous improvement. This certification attests to our commitment to upholding standards and guidelines in order to improve client satisfaction.",
    image: iso,
    before: isoBefore,
    smallImage: isoSmall,
    smallBefore: isoSmallBefore,
  },
  {
    id: 1,
    title: "Sample Team",
    description:
      "Every project is first handled by a proficient sample team based on the quality benchmark. The sample work also enables us to get first-hand experience and a complete view of the project.",
    image: sampleTeam,
    before: sample_team_before,
    smallImage: sampleTeamSm,
    smallBefore: sampleTeamSmBefore,
  },
  {
    id: 2,
    title: "Quality Benchmarks",
    description:
      "The client can set quality standards for any project. We guarantee to keep our work quality above these benchmarks during both sample and real-time projects. Clients can check the annotated data at any time to ensure that their required quality percentile is maintained. If the percentile falls, we are willing to rework it without additional charges until the expected quality percentile is restored.",
    image: qualityBenchmark,
    before: quality_benchmark_before,
    smallImage: qualityBenchmarkSm,
    smallBefore: quality_benchmark_sm_before,
  },
  {
    id: 3,
    title: "Label Auditing",
    description: `An experienced group of approvers, along with a team lead or project coordinator, will review the annotated data to ensure accuracy and consistency. For every project, our team follows a well-defined ratio of 1:2:5:25, consisting of 1 project coordinator, 2 sub-coordinators, 5 approvers, and 25 annotators. Approvers and team leaders can review each individual's work in real-time and assist them in obtaining clearances, enabling us to deliver high-quality results consistently.`,
    image: labelAuditing,
    before: label_auditing_before,
    smallImage: labelAuditingSm,
    smallBefore: label_auditing_sm_before,
  },
  {
    id: 4,
    title: "Quality Based Promotions",
    description:
      "Our pay and promotion systems are based on work quality and other performance traits. Employees strive to produce the highest-quality output in order to advance quickly and achieve higher pay scales.",
    image: qualityBasedPromotions,
    before: quality_based_promotions_before,
    smallImage: qualityBasedPromotionsSm,
    smallBefore: quality_based_promotions_sm_before,
  },
  {
    id: 5,
    title: "Quality Day Celebration",
    description:
      'At Infolks, we observe "Quality Day" on the first of every month to motivate and educate people about the value of quality. On this day, we recognise our top performers from the previous month.',
    image: qualityDayCelebration,
    before: quality_day_celebration_before,
    smallImage: qualityDayCelebrationSm,
    smallBefore: quality_day_celebration_sm_before,
  },
  {
    id: 6,
    title: "Service Flexibility",
    description:
      "We have made ourselves available 24/7/365 through our team of professional folks. We stretch and flex to meet the needs of our clients so that your milestones, timelines, and budgets are not compelled.",
    image: serviceflexibility,
    before: service_flexibility_before,
    smallImage: serviceflexibilitySm,
    smallBefore: service_flexibility_sm_before,
  },
];

const CardSlider = () => {
  const [activeItem, setActiveItem] = useState(cardsData[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Number of visible cards at a time

  useEffect(() => {
    const updatevisibleCards = () => {
      if (window.innerWidth >= 1546) {
        // Extra large screens (xl)
        setVisibleCards(3);
      } else if (window.innerWidth >= 1374) {
        // Large screens (lg)
        setVisibleCards(2);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setVisibleCards(2);
      } else {
        // Small screens and below (sm and xs)
        setVisibleCards(3);
      }
    };

    // Initial check
    updatevisibleCards();

    // Update charLimit on window resize
    window.addEventListener("resize", updatevisibleCards);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updatevisibleCards);
    };
  }, []);

  const handleNext = () => {
    // Increment startIndex and wrap around using modulo
    const newIndex = (startIndex + 1) % cardsData.length;
    setStartIndex(newIndex);
    // Calculate the next active item based on visible cards
    const activeIndex = (cardsData.indexOf(activeItem) + 1) % cardsData.length;
    setActiveItem(cardsData[activeIndex]);
  };

  const handlePrev = () => {
    // Decrement startIndex and handle negative indices by adding cardsData.length
    const newIndex = (startIndex - 1 + cardsData.length) % cardsData.length;
    setStartIndex(newIndex);
    // Calculate the previous active item based on visible cards
    const activeIndex =
      (cardsData.indexOf(activeItem) - 1 + cardsData.length) % cardsData.length;
    setActiveItem(cardsData[activeIndex]);
  };

  // below md block
  const [cards, setCard] = useState(cardsData.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? cardsData.slice(0, 3) : cardsData);
    setShowAll(!showAll);
  };
  // Generate looped data
  const loopedCards = [...cardsData, ...cardsData.slice(0, visibleCards)];
  const cardLength = cardsData.length;
  return (
    <section className="mx-auto container text-[#37508A] mb-5 lg:mb-20 font-primary-regular">
      <div className="px-2">
        <h2 className="heading-h2 text-center mb-5 lg:mb-20 leading-[40px] 2xl:leading-[60px]">
          WHAT SETS US <br />A PART IN TERMS OF QUALITY?
        </h2>
      </div>
      <div className="mx-auto container">
        <div className="relative px-20 group hidden lg:block">
          <div className="flex flex-col lg:flex-row overflow-hidden text-[#37508A]">
            {loopedCards
              .slice(startIndex, startIndex + visibleCards)
              .map((item) =>
                item.id === activeItem.id ? (
                  <div key={item.id} className="relative group">
                    <div
                      className={`absolute top-0 ml-2 z-0 flex-none p-2 w-full`}
                      // onClick={() => setActiveItem(item)}
                    >
                      <div
                        className={`border border-[#AABDE7] place-content-center p-3 rounded-[10px] bg-[#FFFBF0] lg:h-full ${
                          item.id === activeItem.id
                            ? "border border-blue-800"
                            : "cursor-pointer"
                        }`}
                      >
                        {item.id !== activeItem.id ? (
                          <div>
                            <div className="lg:h-[270px] w-full object-cover rounded-xl">
                              <img
                                src={item.before}
                                alt="Card image"
                                className="mb-4 w-full h-full object-cover rounded-[15px]"
                              />
                            </div>
                            <div className="flex flex-col lg:justify-between lg:h-80">
                              <h3 className="heading-h3 mb-2 mt-4">
                                {item.title}
                              </h3>
                              <p className="paragraph">
                                {item.description.slice(0, 90)}...
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 justify-items-center">
                            <div className="lg:h-[576px] w-full object-cover rounded-[15px]">
                              <img
                                src={item.image}
                                alt="Card image"
                                className={`object-cover w-full h-full rounded-xl`}
                              />
                            </div>
                            <div className="lg:px-4">
                              <h3 className="heading-h3 mb-2 mt-4">
                                {item.title}
                              </h3>
                              <p className="paragraph">{item.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`mt-2 z-10 transition-all duration-300 ease-in-out flex-none p-2 w-full`}
                      // onClick={() => setActiveItem(item)}
                    >
                      <div
                        className={`border border-[#AABDE7] place-content-center p-3 rounded-[10px] bg-[#FFFBF0] lg:h-full ${
                          item.id === activeItem.id
                            ? "border border-blue-800"
                            : "cursor-pointer"
                        }`}
                      >
                        {item.id !== activeItem.id ? (
                          <div>
                            <div className="lg:h-[270px] w-full object-cover rounded-xl">
                              <img
                                src={item.before}
                                alt="Card image"
                                className="mb-4 w-full h-full object-cover rounded-[15px]"
                              />
                            </div>
                            <div className="flex flex-col lg:justify-between lg:h-80">
                              <h3 className="heading-h3 mb-2 mt-4">
                                {item.title}
                              </h3>
                              <p className="paragraph">
                                {item.description.slice(0, 90)}...
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 justify-items-center">
                            <div className="lg:h-[576px] w-full object-cover rounded-[15px]">
                              <img
                                src={item.image}
                                alt="Card image"
                                className={`object-cover w-full h-full rounded-xl`}
                              />
                            </div>
                            <div className="lg:px-4">
                              <h3 className="heading-h3 mb-2 mt-4">
                                {item.title}
                              </h3>
                              <p className="paragraph">{item.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className={`flex-none p-2 ${
                      item.id === activeItem.id
                        ? "w-full lg:w-[70%] xl:w-[70%] 2xl:w-[55%]"
                        : "w-full lg:w-[30%] xl:w-[29%] 2xl:w-[22%]"
                    }`}
                    // onClick={() => setActiveItem(item)}
                  >
                    <div
                      className={`border border-[#AABDE7] place-content-center p-3 rounded-[10px] bg-[#FFFBF0] lg:h-full ${
                        item.id === activeItem.id
                          ? "border border-blue-800"
                          : ""
                      }`}
                    >
                      {item.id !== activeItem.id ? (
                        <div>
                          <div className="lg:h-[270px] w-full object-cover rounded-xl">
                            <img
                              src={item.before}
                              alt="Card image"
                              className="mb-4 w-full h-full object-cover rounded-[15px]"
                            />
                          </div>
                          <div className="flex flex-col lg:justify-between lg:h-80">
                            <h3 className="heading-h3 mb-2 mt-4">
                              {item.title}
                            </h3>
                            <p className="paragraph">
                              {item.description.slice(0, 90)}...
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 justify-items-center">
                          <div className="lg:h-[576px] w-full object-cover rounded-[15px]">
                            <img
                              src={item.image}
                              alt="Card image"
                              className={`object-cover w-full h-full rounded-xl`}
                            />
                          </div>
                          <div className="lg:px-4">
                            <h3 className="heading-h3 mb-2">{item.title}</h3>
                            <p className="paragraph">{item.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
          </div>
          <div className="hidden lg:flex justify-center items-center gap-2 mt-5">
            <div
              className="h-[46px] w-[46px] border border-blue-800 rounded-full flex justify-center items-center cursor-pointer"
              onClick={handlePrev}
            >
              <img src={leftArrow} alt="" />
            </div>
            <h5 className="heading-h5">
              0{activeItem.id + 1} - 0{cardLength}
            </h5>
            <div
              className="h-[46px] w-[46px] border border-blue-800 rounded-full flex justify-center items-center cursor-pointer"
              onClick={handleNext}
            >
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-1 justify-center items-center p-4 pb-5 lg:p-10 lg:hidden mx-auto container">
          {cards.map((item, index) =>
            item.id !== activeItem.id ? (
              <div
                key={index}
                className={`flex-none p-2 w-full lg:w-[70%] xl:w-[70%] 2xl:w-[55%] `}
                onClick={() => setActiveItem(item)}
              >
                <div
                  className={`border border-[#0C9DFC] place-content-center p-3 rounded-[10px] bg-[#FFFBF0] lg:h-full ${
                    item.id === activeItem.id ? "" : ""
                  }`}
                >
                  <div>
                    <div className="lg:h-[270px] w-full object-cover rounded-xl">
                      <img
                        src={item.smallBefore}
                        alt="Card image"
                        className="w-full h-[85px] md:h-[143px] object-cover rounded-[15px]"
                      />
                    </div>
                    <div className="flex flex-col lg:justify-between lg:h-80">
                      <h3 className="heading-h3 mb-2 mt-4">{item.title}</h3>
                      <p className="paragraph">
                        {item.description.slice(0, 90)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={`flex-none p-2 w-full lg:w-[24%] xl:w-[24%] 2xl:w-[21%]`}
                onClick={() => setActiveItem(item)}
              >
                <div
                  className={`border border-[#0C9DFC] place-content-center p-3 rounded-[10px] bg-[#FFFBF0] lg:h-full ${
                    item.id === activeItem.id ? "" : ""
                  }`}
                >
                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 justify-items-center">
                    <div className="lg:h-[576px] w-full object-cover rounded-[15px]">
                      <img
                        src={item.smallImage}
                        alt="Card image"
                        className={`object-cover w-full h-full rounded-xl`}
                      />
                    </div>
                    <div className="lg:px-4">
                      <h3 className="heading-h3 mt-4 mb-2">{item.title}</h3>
                      <p className="paragraph">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

          <div className="flex justify-center lg:hidden mx-auto container mt-4">
            <div
              className="flex group justify-center items-center"
              onClick={handleViewAll}
            >
              <button className="border border-[#13B2F5] text-[#37508A] text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
                {showAll ? "SHOW LESS" : "VIEW ALL"}
              </button>
              <span className="relative w-[50px] h-[50px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-12">
                <img src={arrow} alt="" className="w-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
