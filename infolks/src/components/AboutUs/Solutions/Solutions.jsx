import { useEffect, useState } from "react";
import right_arrow from "/About/icons/right_arrow.svg";
import left_arrow from "/About/icons/left_arrow.svg";
import webfolks_logo from "/About/icons/webfolks-logo.svg";
import dataways_logo from "/About/icons/dataways-logo.svg";
import medrays_logo from "/About/icons/medrays-logo.svg";
import { Link } from "react-router-dom";
import "./style.css";

const Solutions = () => {
  const data = [
    {
      id: 1,
      title: "WEBFOLKS",
      link: "https://webfolks.in/",
      image: webfolks_logo,
      content:
        "Webfolks, an exclusive software development entity from Infolks Group with a team of brilliant and talented professionals providing the highest quality and most timely services. With our extensive experience, we are dedicated to providing excellent products and services, including Web-based ERP, Mobile Applications, Web Design, E-commerce, Content Management Systems, Customer Relationship Management, and Web Applications along with Graphic design and Digital Marketing services.",
    },
    {
      id: 2,
      link: "https://medrays.ai/",
      title: "MEDRAYS",
      image: medrays_logo,
      content:
        "Medrays, a medical data annotation platform from  Infolks Group, composed of medical experts and a vibrant hub of certified medical professionals. We guarantee the availability of our professionals to ensure high-quality labeling outputs.",
    },
    {
      id: 3,
      title: "DATAWAYS",
      link: "https://dataways.ai/",
      image: dataways_logo,
      content:
        "Dataways, a data collection platform, gathers and processes diverse supervised training and testing datasets covering images, text, audio, video, and 3D point clouds for AI/ML models.",
    },
  ];

  const [sliderData, setSliderData] = useState(data[0]);
  const [currentSlide, setCurrentSlide] = useState(0); // Start from the first "real" slide
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        const nextIndex = (prev + 1) % data.length; // Wrap to the first slide if it reaches the end
        setSliderData(data[nextIndex]); // Align sliderData with next index
        return nextIndex;
      });
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        const prevIndex = (prev - 1 + data.length) % data.length; // Wrap to the last slide if it goes before the first slide
        setSliderData(data[prevIndex]); // Align sliderData with previous index
        return prevIndex;
      });
    }
  };

  return (
    <section className="w-full">
      <div className="md:mt-20 mt-10 section-container mx-auto">
        <div className="lg:p-5 lg:bg-[#F9F5E9] lg:w-[70%] rounded-[10px] relative">
          <div className="lg:p-14 2xl:p-24">
            <div className="lg:px-0 lg:pt-0 lg:pb-0 px-5 pt-8 pb-60  bg-[#F9F5E9] lg:w-[55%] text-[#37508A] flex flex-col justify-center items-center lg:items-start">
              <h2
                className="heading-h2 hidden lg:block uppercase border-b border-[#37508A] pb-2 font-primary-medium" >
                Our <br />
                Solutions
              </h2>
              <h2 className="heading-h2 block lg:hidden text-center uppercase border-b border-[#37508A] pb-2 font-primary-medium">
                Our Solutions
              </h2>
              <p className="mt-4 paragraph">
                Infolks specialises in a wide range of innovative solutions
                beyond data annotation services. We excel in diverse areas such
                as software development, data collection, and medical data
                annotation. Our commitment to excellence drives us to offer
                tailored solutions that leverage technology and industry
                knowledge.
              </p>
              <div className="mt-5 lg:flex hidden">
                <button
                  onClick={prevSlide}
                  className={`w-18 arrow-button ${
                    currentSlide === 0 ? "cursor-pointer" : "cursor-pointer"
                  }`}
                >
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="27"
                      cy="27"
                      r="26.25"
                      transform="rotate(-180 27 27)"
                      stroke="#37508A"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23.772 18.2674L24.4223 18.8783L17.3361 25.5912L16.4251 26.4542L17.68 26.4542L38.1311 26.4542C38.4879 26.4542 38.7 26.7093 38.7 26.9009C38.7 27.1708 38.4744 27.405 38.1311 27.405L17.8632 27.405L16.606 27.405L17.5198 28.2685L24.4212 34.789L23.7584 35.4441L14.5885 26.8299L23.772 18.2674ZM23.7576 35.7616L23.5741 35.957L23.7576 35.7616Z"
                      fill="#37508A"
                      stroke="black"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className={`w-18 arrow-button ${
                    currentSlide === 2 ? "cursor-pointer" : "cursor-pointer"
                  }`}
                >
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="27"
                      cy="27"
                      r="26.25"
                      stroke="#37508A"
                      stroke-width="1.5"
                    />
                    <path
                      d="M30.228 35.7326L29.5777 35.1217L36.6639 28.4088L37.5749 27.5458L36.32 27.5458L15.8689 27.5458C15.5121 27.5458 15.3 27.2907 15.3 27.0991C15.3 26.8292 15.5256 26.595 15.8689 26.595L36.1368 26.595L37.394 26.595L36.4802 25.7315L29.5788 19.211L30.2416 18.5559L39.4115 27.1701L30.228 35.7326ZM30.2424 18.2384L30.4259 18.043L30.2424 18.2384Z"
                      fill="#37508A"
                      stroke="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:absolute lg:top-0 h-full lg:-right-64 2xl:-right-80 top-96 flex justify-center items-center lg:-mt-0 -mt-52">
            <Link to={sliderData.link} target="_blank">
              <div className="relative group">
                {/* Back Div - Moves on Hover */}
                <div className="z-10 ml-2 bg-[#FFFBF0] w-[300px] md:w-[360px] lg:w-[500px] 2xl:w-[590px] text-[#37508A] p-5 lg:p-10 rounded-2xl border border-[#37508A] flex flex-col justify-center lg:justify-start items-center lg:items-start">
                  <div className="bg-[#F9F5E9] lg:w-52 rounded-2xl flex justify-center items-center">
                    <img
                      src={sliderData.image}
                      className="w-32 lg:w-40"
                      alt=""
                    />
                  </div>
                  <p className="mt-4 paragraph">{sliderData.content}</p>
                </div>

                {/* Front Div - Fixed Position */}
                <div className="absolute top-0 ml-2 z-0 bg-[#FFFBF0] w-[300px] md:w-[360px] lg:w-[500px] 2xl:w-[590px] text-[#37508A] p-5 lg:p-10 rounded-2xl border border-[#37508A] flex flex-col justify-center lg:justify-start items-center lg:items-start transition-all duration-300 ease-in-out group-hover:ml-4 group-hover:-mt-2 group-hover:mr-2">
                  <div className="bg-[#F9F5E9] lg:w-52 rounded-2xl flex justify-center items-center">
                    <img
                      src={sliderData.image}
                      className="w-32 lg:w-40"
                      alt=""
                    />
                  </div>
                  <p className="mt-4 paragraph">{sliderData.content}</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="gap-4 mt-5 pb-5 lg:hidden flex justify-center">
            <img
              src={left_arrow}
              onClick={prevSlide}
              className={`w-12 ${
                currentSlide === 0 ? "cursor-pointer" : "cursor-pointer"
              }`}
              alt=""
              disabled={currentSlide === 0}
            />
            <img
              src={right_arrow}
              onClick={nextSlide}
              disabled={currentSlide === 2}
              className={`w-12 ${
                currentSlide === 2 ? "cursor-pointer" : "cursor-pointer"
              }`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
