import { useState } from "react";
import times_of_india_logo from "/About/icons/times-of-india.svg";
import tf1 from "/About/icons/tf1.svg";
import gulf_news from "/About/icons/gulf-news.svg";
import dailyO from "/About/icons/dailyO-logo.svg";
import silicon_india from "/About/icons/silicon-india-logo.svg";
import deutsche_welle from "/About/icons/deutsche-welle.svg";
// import arrow from "/home/icons/arrowRight.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import arrow1 from "/home/icons/arrow.svg";
import hoverArrow from "/home/icons/arrow blue.svg";
import "./style.css";
import media_presence_left_arrow from "/About/icons/media-presence-left-arrow.svg";
import media_presence_right_arrow from "/About/icons/media-presence-right-arrow.svg";

const MediaPresents = () => {
  const data = [
    {
      id: 1,
      name: "Deutsche Welle",
      logo: deutsche_welle,
      title: "How AI is creating jobs in India",
      writtenBy: "Julia Henrichmann",
      publishedOn: "March 14, 2023",
      media: "German Media company",
      link: "https://www.dw.com/en/how-ai-is-creating-jobs-in-india/video-64979986",
    },
    {
      id: 2,
      name: "The Times Of India",
      logo: times_of_india_logo,
      title:
        "How artificial intelligence is creating jobs in India, not just stealing them",
      writtenBy: "Sonam Joshi",
      publishedOn: "September 09, 2019",
      media: "Indian newspaper",
      link: "https://timesofindia.indiatimes.com/india/how-artificial-intelligence-is-creating-jobs-in-india-not-just-stealing-them/articleshow/71030863.cms",
    },
    {
      id: 3,
      name: "Gulf News",
      logo: gulf_news,
      title: "How data preparation for AI is creating jobs in Kerala",
      writtenBy: "Priya Mathew",
      publishedOn: " September 16, 2019",
      media: "Dubai Newspaper",
      link: "https://gulfnews.com/world/asia/india/how-data-preparation-for-ai-is-creating-jobs-in-kerala-1.1568618232994",
    },
    {
      id: 4,
      name: "TF1",
      logo: tf1,
      title: "India: These little hands that feed AI algorithms",
      writtenBy: "Marion LAOUAMEN, Khansa JUNED and Akash GHAI",
      publishedOn: "November 28, 2023",
      media: "French Television Network",
      link: "https://www.tf1info.fr/high-tech/video-inde-a-la-rencontre-des-petites-mains-annotateurs-de-donnees-derriere-les-systemes-d-intelligence-artificielle-ia-2277624.html",
    },
    {
      id: 5,
      name: "DailyO",
      logo: dailyO,
      title: `TechnologyHow an army of data labellers are behind India's AI boom`,
      writtenBy: "Roshni Majumdar",
      publishedOn: "January 23, 2020",
      media: "India Today Group",
      link: "https://www.dailyo.in/technology/data-labelling-artificial-intelligence-indian-ai-sector-facebook-technology-32396",
    },
    {
      id: 6,
      name: "Siliconindia",
      logo: silicon_india,
      title: `10 Most Promising Data & Image Annotation Companies - 2021`,
      writtenBy: "Silicon India Magazine",
      publishedOn: "December, 2020",
      media: "India Edition",
      link: "https://enterprise-services.siliconindia.com/ranking/data-image-annotation-companies-2020-rid-1139.html#google_vignette",
    },
  ];

  // const [cards, setCard] = useState(data.slice(0, 2));
  // const [showAll, setShowAll] = useState(false);

  // const handleViewAll = () => {
  //   setCard(showAll ? data.slice(0, 2) : data);
  //   setShowAll(!showAll);
  // };

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <img
        src={media_presence_right_arrow}
        alt="Next Arrow"
        style={{ width: "30px", right: "-34px" }}
      />
    ),
    prevArrow: (
      <img
        src={media_presence_left_arrow}
        alt="Prev Arrow"
        style={{ width: "30px" }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full">
      <div className="section-top section-container mx-auto">
        <div className="bg-[#F9F5E9] border border-[#37508A] font-primary-regular rounded-2xl flex flex-col justify-center items-center">
          <div className="mx-auto container flex flex-col justify-center items-center pt-5 lg:pt-10 lg:pb-5">
            <h2 className="heading-h2 pb-2">OUR MEDIA PRESENCE</h2>
            <p className="paragraph lg:pt-4 p-2 lg:w-2/3 text-center">
              We are proud to be recognized and featured in numerous reputable
              media outlets around the world. Here are some highlights of our
              press coverage:
            </p>
          </div>

          {/* Carousel for large screens */}
          <div className="w-full">
            <div className="p-10 lg:p-10 2xl:p-20 bg-[#D9D9D9] flex flex-col gap-10 justify-center 2xl:items-center">
              <div
                className="slider-container max-w-[1200px]"
                id="media_presence"
              >
                <Slider {...settings}>
                  {data.map((item, index) => (
                    <div key={index} className="relative group">
                      <div
                        className="2xl:w-[383px] w-full shadow-outer-box-custom rounded-[20px] p-2 md:p-5 flex flex-col border border-[#37508A] bg-[#FFFBF0]" // Added mx-4 for horizontal spacing
                      >
                        <div className="flex-row gap-20 pt-3 relative">
                          <div className="xl:h-[43px] h-[26px] w-[158px] mb-5">
                            <img
                              src={item.logo}
                              className="h-full object-contain" // Changed to object-contain for better image fit
                              alt={item.name}
                            />
                          </div>
                          <div className="border-b border-b-[#37508A] shadow_custom"></div>
                        </div>
                        <div className="h-24 md:h-24 pt-5">
                          <h5 className="xl:text-2xl text-xl font-medium">
                            {item.title}
                          </h5>
                        </div>
                        <div className="flex text-[#91959D] justify-between min-h-28">
                          <div className="flex flex-col text-[#91959D] justify-end">
                            <p className="2xl:text xl:text-lg text-sm font-medium">
                              Written By: {item.writtenBy} <br />
                            </p>
                            <p className="2xl:text xl:text-lg text-sm font-medium">
                              Published On: {item.publishedOn}
                            </p>
                          </div>
                          <div className="flex items-end">
                            <Link to={item.link}>
                              <button
                                className="w-10 h-10 mt-2 md:w-8 md:h-8 md:mt-0 bg-[#13B2F5] rounded-full flex justify-center items-center hover:bg-white"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                              >
                                <img
                                  src={
                                    isHovered === index ? hoverArrow : arrow1
                                  }
                                  alt="arrow"
                                  className="w-3 md:w-4"
                                />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div
                        key={index}
                        className="absolute top-0 2xl:w-[383px] w-full shadow-outer-box-custom rounded-[20px] p-2 md:p-5 flex flex-col border border-[#37508A] bg-[#FFFBF0] transition-all duration-300 ease-in-out group-hover:ml-2 group-hover:-mt-2 group-hover:mr-2" // Added mx-4 for horizontal spacing
                      >
                        <div className="flex-row gap-20 pt-3 relative">
                          <div className="xl:h-[43px] h-[26px] w-[158px] mb-5">
                            <img
                              src={item.logo}

                              
                              className="h-full object-contain" // Changed to object-contain for better image fit
                              alt={item.name}
                            />
                          </div>
                          <div className="border-b border-b-[#37508A] shadow_custom"></div>
                        </div>
                        <div className="h-24 md:h-24 pt-5">
                          <h5 className="xl:text-2xl text-xl font-medium ">
                            {item.title}
                          </h5>
                        </div>
                        <div className="flex text-[#91959D] justify-between min-h-28">
                          <div className="flex flex-col text-[#91959D] justify-end">
                            <p className="2xl:text xl:text-lg text-sm font-medium">
                              Written By: {item.writtenBy} <br />
                            </p>
                            <p className="2xl:text xl:text-lg text-sm font-medium">
                              Published On: {item.publishedOn}
                            </p>
                          </div>
                          <div className="flex items-end">
                            <Link to={item.link}>
                              <button
                                className="w-10 h-10 mt-2 md:w-8 md:h-8 md:mt-0 bg-[#13B2F5] rounded-full flex justify-center items-center hover:bg-white"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                              >
                                <img
                                  src={
                                    isHovered === index ? hoverArrow : arrow1
                                  }
                                  alt="arrow"
                                  className="w-3 md:w-4"
                                />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFBF0] justify-center items-center border-t border-[#37508ab6] rounded-2xl p-3 md:p-5 w-full -mt-5">
            <p className="paragraph text-center">
              Stay tuned as we continue to make headlines and share our journey
              with you.
            </p>
          </div>
        </div>

        {/* <div className="block lg:hidden bg-[#D9D9D9] w-full rounded-xl">
          <div className="p-5 md:p-10 lg:p-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg p-2 md:p-5 lg:p-10 flex flex-col border border-[#37508A] bg-[#FFFBF0]"
                >
                  <div className="flex gap-5 pt-4 border-b border-b-[#37508A] pb-4">
                    <div className="h-10 w-40">
                      <img
                        src={item.logo}
                        className="w-full h-full object-fit"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="sm:h-28 md:h-32 pt-5">
                    <h5 className="heading-h5">{item.title}</h5>
                  </div>
                  <div className="flex flex-col text-[#91959D]">
                    <p className="paragraph">
                      written By: {item.writtenBy} <br />
                    </p>
                    <p className="paragraph">
                      Published On: {item.publishedOn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-5 pb-4">
              <div
                className="flex group justify-center items-center"
                onClick={handleViewAll}
              >
                <button
                  className={`bg-[#FFFBF0] border border-[#13B2F5] text-[#37508A] text-[12px] md:text-[14px] rounded-full flex p-3 px-5 items-center transition-all duration-300 ease-in-out ${
                    showAll
                      ? "w-[150px] md:w-[160px] group-hover:w-[110px] md:group-hover:w-[130px]"
                      : "w-[140px] md:w-[150px] group-hover:w-[100px] md:group-hover:w-[110px]"
                  }`}
                >
                  {showAll ? "SHOW LESS" : "VIEW ALL"}
                </button>
                <span className="relative w-[30px] h-[30px] md:w-[35px] md:h-[35px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-8 group-hover:ml-3 transition-all duration-300 ease-in-out">
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

          <div className="bg-[#FFFBF0] justify-center items-center border-t border-[#37508ab6] rounded-2xl p-3 md:p-5 w-full -mt-5">
            <p className="paragraph text-center">
              Stay tuned as we continue to make headlines and share our journey
              with you.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MediaPresents;
