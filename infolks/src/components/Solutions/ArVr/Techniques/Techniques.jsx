import { useState } from "react";
import "../Carousel.css";
import keypoint from "/solutions/ar-vr/techniques/keypoints.svg";
import boundingbox from "/solutions/ar-vr/techniques/bounding-boxs.svg";
import cuboidal from "/solutions/ar-vr/techniques/cuboids.svg";
import cloud from "/solutions/ar-vr/techniques/3d-clouds.svg";
import semantic_segementation from "/solutions/ar-vr/techniques/semantic-segementations.svg";
import polygon from "/solutions/ar-vr/techniques/polygons.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const Techniques_in_arVR = () => {
  const [selected, setSelected] = useState(0);
  const data = [
    {
      id: 1,
      title: "Keypoint",
      description: `By annotating key points within AR and VR environments, specific elements and crucial features can be identified, labeled, and tracked with remarkable accuracy.`,
      imageUrl: keypoint,
    },
    {
      id: 2,
      title: "Bounding box",
      description: `Precisely outlining objects or elements of interest with bounding boxes creates designated areas around them within the AR or VR space.`,
      imageUrl: boundingbox,
    },
    {
      id: 3,
      title: "Cuboidal",
      description: `In VR simulations, cuboidal annotation enables realistic object manipulation, positioning, and interaction within a three-dimensional virtual space.`,
      imageUrl: cuboidal,
    },
    {
      id: 4,
      title: "3D point cloud",
      description: `3D point cloud technology enables the precise overlay of digital content onto the real world, seamlessly aligning virtual elements with the physical environment.`,
      imageUrl: cloud,
    },
    {
      id: 5,
      title: "Semantic Segementation",
      description: `Semantic segmentation enables precise identification and separation of objects or surfaces, allowing accurate placement of digital overlays while ensuring realistic interactions with the real-world environment in AR & VR.`,
      imageUrl: semantic_segementation,
    },
    {
      id: 6,
      title: "Polygon/Contour",
      description: `Polygon or contour labeling allows for the precise placement of digital assets by accurately defining the shapes and boundaries of objects in the real world.`,
      imageUrl: polygon,
    },
  ];

  const moveToSelected = (direction) => {
    let newSelected;
    if (direction === "next") {
      newSelected = Math.min(selected + 1, data.length - 1);
    } else if (direction === "prev") {
      newSelected = Math.max(selected - 1, 0);
    } else {
      newSelected = direction;
    }
    setSelected(newSelected);
  };

  const getClasses = (index) => {
    const diff = index - selected;
    if (diff === 0) return "selected";
    if (diff === 1) return "next";
    if (diff === 2) return "nextSecond";
    if (diff === 3) return "nextnextSecond";
    if (diff === 4) return "nextnextnextSecond";
    if (diff === 5) return "nextnextnextnextSecond";
    if (diff === -1) return "prev";
    if (diff === -2) return "prevSecond";
    if (diff === -3) return "prevprevSecond";
    if (diff === -4) return "prevprevprevSecond";
    if (diff === -5) return "prevprevprevprevSecond";
    return diff > 4 ? "hideRight" : "hideLeft";
  };

  const [slides, setSlides] = useState(data.slice(0, 2));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setSlides(showAll ? data.slice(0, 2) : data);
    setShowAll(!showAll);
  };


  return (
    <section className="mt-10 lg:mt-20 mb-5 lg:mb-20 flex flex-col lg:flex-row gap-20 xl:gap-32 3xl:gap-52 font-primary-regular select-none overflow-hidden pt-10 items-center">
      <div className="flex z-0 justify-center items-center lg:mb-10 mb-0">
        <h2 className="heading-h2 text-center md:text-left 2xl:w-2/3 lg:leading-[50px] 2xl:leading-[63px]">
          TECHNIQUES IN AR & VR
        </h2>
      </div>

      <div className="flex z-10 w-full items-center justify-center mb-5">
        <main className="h-full bg-none w-full">
          <div className="relative w-full h-full hidden lg:block mt-20 mb-28">
            <Swiper
              effect="cards"
              grabCursor={true}
              slidesPerView={1}
              loop={false}
              initialSlide={0}
              speed={500}
              modules={[EffectCards, Mousewheel]}
              mousewheel={{ invert: false }}
              cardsEffect={{
                perSlideOffset: 18, // always 0 here
                perSlideRotate: 7,
                slideShadows: false,
              }}
           
              className="rounded-3xl "
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="bg-none rounded-3xl">
                  <div className=" bg-linear-to-r from-[#02B9E2] to-[#0281FA] border border-[#6FB8F9] flex flex-col h-64 md:h-[420px] w-[350px] 2xl:w-[410px] overflow-hidden rounded-3xl lg:p-6 xl:p-8 text-white">
                    <div className="overflow-hidden flex flex-col h-full">
                      <div className="flex justify-end">
                        <img
                          src={item.imageUrl}
                          className="w-12 2xl:w-16"
                          alt="icon"
                        />
                      </div>
                      <div className="mt-auto">
                        <h3 className="border-b pb-2 heading-h3 mt-4 md:mt-8">
                          {item.title}
                        </h3>
                        <p className="mt-2 font-primary-regular paragraph">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="buttons mt-4 md:mt-0 justify-between md:absolute md:bottom-4 md:w-full hidden lg:flex">
            <button id="prev" className="arrow left hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 50 80"
                xmlSpace="preserve"
              >
                <polyline
                  fill="none"
                  stroke="#D5AD6D"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="45.63,75.8 0.375,38.087 45.63,0.375"
                />
              </svg>
            </button>
            <button id="next" className="arrow right hidden">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 50 80"
                xmlSpace="preserve"
              >
                <polyline
                  fill="none"
                  stroke="#D5AD6D"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0.375,0.375 45.63,38.087 0.375,75.8"
                />
              </svg>
            </button>
          </div>

          {/* ---------------- small and medium screens ---------------------- */}
          <div className="lg:hidden p-2 md:p-4 font-primary-regular grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
            {slides.map((item, index) => (
              <a
                key={index}
                className={`transition-transform duration-500 ease-in-out ${getClasses(
                  index
                )}`}
                onClick={() => moveToSelected(index)}
              >
                <div className="bg-linear-to-r from-[#02B9E2] to-[#0281FA] border border-[#6FB8F9] flex flex-col md:h-[380px] w-full rounded-3xl p-4 md:p-5 text-white">
                  <div className="overflow-hidden">
                    <img
                      src={keypoint}
                      className="w-8 md:w-10"
                      alt="Keypoint Icon"
                    />
                    <h3 className="border-b pb-2 heading-h3 mt-4 md:mt-8">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-primary-regular paragraph">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center lg:hidden mt-5 mb-5">
            <div
              className="flex group justify-center items-center"
              onClick={handleViewAll}
            >
              <button className="bg-[#13B2F5] py-5 text-white text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
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
                <circle cx="30.5" cy="30.1572" r="30" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.8622 19.205L43.4491 29.1504C43.517 29.278 43.517 29.4161 43.4491 29.5436L32.8508 39.4252C32.783 39.5527 32.5681 39.5527 32.4323 39.4252L31.3578 38.4158C31.2221 38.2883 31.2221 38.0864 31.3578 37.9483L39.4111 30.3192L16.6876 30.3192C16.0655 30.3192 15.5 29.8623 15.5 29.2673C15.5 28.6085 16.0542 28.1517 16.6876 28.1517L39.2075 28.1517L31.3578 20.7351C31.2221 20.6076 31.2221 20.4057 31.3578 20.2782L32.4436 19.205C32.5794 19.1413 32.7943 19.1413 32.8622 19.205Z"
                  fill="#13B2F5"
                />
              </svg>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Techniques_in_arVR;
