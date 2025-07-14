import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import bgImage from "/icons/get-in-touch-bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { gsap } from "gsap";
import semantic_segmentation from "/techniques/video/semantic-segmentation.mp4";
import polyline from "/techniques/video/polyline.mp4";
import polygoncontour_apple from "/techniques/video/polygoncontour-apple.mp4";
import keypoint from "/techniques/video/keypoint.mp4";
import ellipse from "/techniques/video/ellipse.mp4";
import cuboidal from "/techniques/video/cuboidal.mp4";
import bounding_box from "/techniques/video/bounding-box.mp4";
import leftArrow from "/techniques/left-arrow.svg";
import "../Techniques/cursor.scss";

const AnnotationTechniques = () => {
  const cards = [
    {
      id: 1,
      title: "2D/3D Bounding Box",
      img: bounding_box,
      content:
        "Bounding boxes are often utilised for object detection and localization tasks. Annotating objects using bounding boxes is required when creating datasets to train machine learning models. We annotate objects using properly bounded 2D boxes.",
    },
    {
      id: 2,
      title: "Semantic Segmentation",
      img: semantic_segmentation,
      content:
        "Semantic segmentation enables the recognition and understanding of an image with pixel-level accuracy. Through this computer vision task, we seek to classify every pixel within an image into separate object classifications. The annotation technique holds immense potential across a wide range of applications. We do perfect segmentation and data annotation for various use cases.",
    },
    {
      id: 3,
      title: "Polygon/Contour",
      img: polygoncontour_apple,
      content:
        "Our team has developed their skills in this specialized annotation approach to perfection. In a wide range of applications, we enable exact identification and analysis, a precise contour is drawn around each object in an image to identify it. Our experts are well-versed in the polygon annotation technique.",
    },
    {
      id: 4,
      title: "Cuboidal",
      img: cuboidal,
      content:
        "We have a team of skilled annotators who have specialised skills in cuboidal data annotations. This annotation technique entails constructing precise cuboidal representations that encompass items or scenarios within three-dimensional regions. With the help of cuboidal data annotation, in-depth information is provided to develop AI and machine learning models.",
    },
    {
      id: 5,
      title: "Keypoint",
      img: keypoint,
      content:
        "Keypoint annotations serve as reference markers, helping computer algorithms reliably recognise and monitor important objects or features. This data annotation technique is mainly useful for detecting facial features, facial expressions, emotions, human body parts, and poses. We create perfect annotations in images using points. It helps in the recognition of facial expressions, stances, and emotions.",
    },
    {
      id: 6,
      title: "Polyline",
      img: polyline,
      content:
        "Polyline annotation technique helps to detect all types of lanes on varied roads, including city streets and highways, etc. Polylines aid in the detection of all types of lanes on various roads, such as city streets, highways, etc. We provide the best polyline data annotation services for a variety of industries.",
    },
    {
      id: 7,
      title: "Ellipse",
      img: ellipse,
      content:
        "By capturing the shape of the object with an ellipse, machine learning algorithms can recognise and track the object in subsequent images more easily. Through this data annotation, we help enhance AI models' power.",
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(4); // Default slidesToShow

  // Update settings to use dynamic slidesToShow
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1274,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const [slides, setSlides] = useState(cards.slice(0, 2));
  const [showAll, setShowAll] = useState(false);
  const boxRef = useRef(null);
  const cardRefs = useRef([]);
  const [, setVideosLoaded] = useState(false);

  const handleViewAll = () => {
    setSlides(showAll ? cards.slice(0, 2) : cards);
    setShowAll(!showAll);
  };
  const sectionRef = useRef(null);
  const [hasInitialAnimationPlayed, setHasInitialAnimationPlayed] =
    useState(false);
  const floatingAnimations = useRef([]);

  // animation
  useEffect(() => {
    gsap.from(boxRef.current, {
      // opacity: 0,
      x: 500,
      duration: 1,
    });

    const container = document.querySelector(".custom-cursor-container");
    const shapes = document.querySelectorAll(".shape");

    if (!container || shapes.length === 0) return;

    const { width, height } = container.getBoundingClientRect();

    shapes.forEach((shape) => {
      gsap.set(shape, {
        x: width / 2,
        y: height / 2,
      });
    });

    const handleMouseMove = (evt) => {
      const { left, top } = container.getBoundingClientRect();
      const mouseX = evt.clientX - left;
      const mouseY = evt.clientY - top;

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!boxRef.current || cardRefs.current.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasInitialAnimationPlayed) {
              runInitialAnimation();
              setHasInitialAnimationPlayed(true);
            }

            startFloatingAnimation();
          } else {
            pauseFloatingAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      pauseFloatingAnimation();
      if (observer) observer.disconnect();
    };
  }, [hasInitialAnimationPlayed]);

  const [activeVideos, setActiveVideos] = useState([]);
  const [showTitles, setShowTitles] = useState([]);

  // Modified runInitialAnimation function
  const runInitialAnimation = () => {
    const sliderContainer = boxRef.current.innerSlider.list;
    const containerWidth = sliderContainer.clientWidth;
    const containerHeight = sliderContainer.clientHeight;
    const cardsToAnimate = Array.from(cardRefs.current).slice(0, 7);

    // Reset position with proper z-index and opacity
    gsap.set(cardsToAnimate, {
      x: (i) => {
        const card = cardsToAnimate[i];
        const left = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        return containerWidth * 0.5 - left - cardWidth * 0.5;
      },
      y: (i) => {
        const card = cardsToAnimate[i];
        const top = card.offsetTop;
        const cardHeight = card.offsetHeight;
        return containerHeight * 0.5 - top - cardHeight * 0.5;
      },
      opacity: 1,
      rotationY: 180,
      transformOrigin: "center center",
      zIndex: 1,
      immediateRender: true,
    });

    // Create animation sequence
    const tl = gsap.timeline();

    // 1. Move to position and fade in with proper z-index
    tl.to(
      cardsToAnimate,
      {
        duration: 1.5,
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 2,
        ease: "power2.out",
        delay: 0.3,
      },
      0
    );

    tl.to(
      cardsToAnimate,
      {
        duration: 2.5,
        rotationY: 0,
        ease: "back.out(1.7)",
        onStart: () => {
          // Show videos when flip starts
          setActiveVideos(
            Array.from({ length: cardsToAnimate.length }, (_, i) => i)
          );
        },
        onUpdate: () => {
          // Show titles when rotationY passes 90 degrees (mid-flip)
          cardsToAnimate.forEach((card, i) => {
            if (
              gsap.getProperty(card, "rotationY") < 90 &&
              !showTitles.includes(i)
            ) {
              setShowTitles((prev) => [...prev, i]);
            }
          });
        },
      },
      "-=0.3"
    );
  };

  const startFloatingAnimation = () => {
    const cardsToAnimate = Array.from(cardRefs.current).slice(0, 7);
    pauseFloatingAnimation();
    cardsToAnimate.forEach((card) => {
      const animation = gsap.to(card, {
        y: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      floatingAnimations.current.push(animation);
    });
  };

  const pauseFloatingAnimation = () => {
    floatingAnimations.current.forEach((anim) => anim.kill());
    floatingAnimations.current = [];
  };
  // Handle window resize to update slidesToShow
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
      if (window.innerWidth >= 1274) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 600) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }}
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = () => {
    // Calculate if we're at the end
    const isAtEnd = currentSlide >= cards.length - slidesToShow;
    if (!isAtEnd) {
      boxRef.current.slickNext();
    } else {
      // If at end, jump to the last possible position that shows all slides
      const lastPossibleSlide = Math.max(0, cards.length - slidesToShow);
      boxRef.current.slickGoTo(lastPossibleSlide);
      setCurrentSlide(lastPossibleSlide);
    }
  };

  const goToPrev = () => {
    boxRef.current.slickPrev();
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const borderColorClasses = [
    "border-[#0C9DFC]",
    "border-[#547ED8]",
    "border-[#4771CD]",
  ];
 const [hoveredIndex, setHoveredIndex] = useState(null);
 const handleToggle = (index) => {
    setHoveredIndex((prevIndex) => (prevIndex === index ? null : index));
  };

 
  return (
    <section>
      <div className="overflow-hidden font-primary-regular">
        <div className="relative w-full">
          {/* Gradient Background */}
          <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff] rounded-[16px] lg:rounded-[35px] flex justify-center items-center relative z-20">
            <img
              src={bgImage}
              alt="Your Image"
              className="w-full z-10 opacity-[0.3] h-56 lg:h-64 xl:h-full"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white transform">
              <h3 className="heading-h2 lg:mb-4">ANNOTATION TECHNIQUES</h3>
              <p className="text-base lg:text-[19px] lg:leading-8 text-[#FFFBF0] px-2 sm:px-5 md:px-8 xl:px-16 2xl:px-40">
                In today&apos;s digital age, visual data plays a pivotal role in
                various applications, from computer vision to machine learning.
                This requires precise and informative annotations. Here, our
                annotation techniques come into play.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="relative w-full overflow-hidden bg-[#37508A] custom-cursor-container h-[20rem] lg:h-[28rem] 2xl:h-[32rem]">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="bg-[#FFFBF0] mix-blend-lighten absolute inset-0">
            <div className="flex items-center justify-center w-full h-full">
              <h2 className="text-center heading-h2 leading-[1.8em]!">
                OUR JOURNEY INTO <br /> IMAGE ANNOTATION WILL TAKE US THROUGH
                <br /> A VARIETY OF ANNOTATION TECHNIQUES
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="absolute w-full pt-2">
                <div className="grid w-full min-h-screen">
                  <div className="w-full overflow-hidden">
                    <div className="grid gap-5 md:grid-cols-3 place-items-center">
                      <div className="flex flex-col pt-40 marquee-text-track h-max mt-14 gap-y-40">
                        <p className="px-4 py-2 translate-x-20 max-w-fit">
                          Polyline
                        </p>
                        <p className="px-4 py-2 max-w-fit translate-x-[16rem]">
                          Ellipse
                        </p>
                        <p className="px-4 py-2 max-w-fit">
                          Semantic Segmentation
                        </p>
                        <p className="px-4 py-2 translate-x-20 max-w-fit">
                          Polyline
                        </p>
                        <p className="px-4 py-2 max-w-fit translate-x-[16rem]">
                          Ellipse
                        </p>
                        <p className="px-4 py-2 max-w-fit">
                          Semantic Segmentation
                        </p>
                      </div>

                      <div className="flex flex-col pt-40 marquee-text-track h-max mt-14 gap-y-40">
                        <p className="px-4 py-2 translate-x-20 max-w-fit">
                          2D/3D Bounding Box
                        </p>
                        <p className="px-4 py-2 max-w-fit">Cuboidal</p>
                        <p className="px-4 py-2 max-w-fit translate-x-[10rem]">
                          Keypoint
                        </p>
                        <p className="px-4 py-2 translate-x-20 max-w-fit">
                          2D/3D Bounding Box
                        </p>
                        <p className="px-4 py-2 max-w-fit">Cuboidal</p>
                        <p className="px-4 py-2 max-w-fit translate-x-[10rem]">
                          Keypoint
                        </p>
                      </div>

                      <div className="flex flex-col pt-40 marquee-text-track h-max mt-14 gap-y-40">
                        <p className="px-4 py-2 max-w-fit">Polygon/Contour</p>
                        <p className="px-4 py-2 max-w-fit">Keypoint</p>
                        <p className="px-4 py-2 max-w-fit">Polygon/Contour</p>
                        <p className="px-4 py-2 max-w-fit">Keypoint</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* large screen */}
      <div
        className="container relative hidden pb-40 pl-8 mx-auto lg:block"
        ref={sectionRef}
      >
        <div className="relative">
          <div
            onClick={goToPrev}
            className={`absolute z-20 transform -translate-y-1/2 top-44 -left-9 ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <button className="p-2 cursor-pointer">
              <img src={leftArrow} className="size-8" alt="" />
            </button>
          </div>
          <div
            onClick={goToNext}
            className={`absolute top-44 -right-2 transform -translate-y-1/2 z-20 mr-0.5 ${
              currentSlide >= cards.length - settings.slidesToShow
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <button className="p-2 cursor-pointer">
              <img src={leftArrow} className="rotate-180 size-8" alt="" />
            </button>
          </div>
        </div>

        <Slider
          {...settings}
          ref={boxRef}
          beforeChange={(current, next) => setCurrentSlide(next)}
        >
          {cards.map((card, index) => {
            const borderColor =
              borderColorClasses[(card.id - 1) % borderColorClasses.length];
            const isVideoActive = activeVideos.includes(index);
            const isTitleVisible = showTitles.includes(index);
            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative h-fit content bounce-right-to-left p-4 md:pr-10 ${
                  card.id % 2 !== 0 ? "" : "mt-10"
                }`}
                style={{ zIndex: 1 }} // Base z-index
              >
                <div
                  className={`face1 p-3 border rounded-2xl z-10 group-hover:bg-linear-to-b group-hover:from-[#7EBCF3] group-hover:to-[#006DE8] group-hover:rounded-b-none ${borderColor}`}
                >
                  {/* Show video only when active */}
                  {isVideoActive ? (
                    <>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full rounded-[12px]"
                        onLoadedData={() => setVideosLoaded(true)}
                      >
                        <source src={card.img} type="video/mp4" />
                      </video>
                      {isTitleVisible && (
                        <h3 className="heading-h3 text-[#37508A] group-hover:hidden 2xl:w-[80%] p-2">
                          {card.title}
                        </h3>
                      )}
                    </>
                  ) : (
                    <>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full rounded-[12px]"
                        onLoadedData={() => setVideosLoaded(true)}
                      >
                        <source src={card.img} type="video/mp4" />
                      </video>
                    </>
                  )}
                </div>
                {isVideoActive ? (
                  <div className="face face2 bg-linear-to-b from-[#7EBCF3] to-[#006DE8] flex-col p-5 2xl:p-10 rounded-b-xl z-0 hidden group-hover:block transform transition duration-500 ease-in-out">
                    <div className="text-white">
                      <h3 className="heading-h4 2xl:w-[80%] pb-2 border-b border-b-[#FFFBF0]">
                        {card.title}
                      </h3>
                      <p className="mt-2 paragraph">{card.content}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </Slider>
      </div>

      {/* small screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 p-2 lg:hidden md:p-4 font-primary-regular md:gap-4">
        {slides.map((card, index) => {
          const borderColorClass =
            borderColorClasses[index % borderColorClasses.length];

          return (
            <div
              key={index}
              className={`group relative h-fit content bounce-right-to-left flex flex-col`}
              // onClick={() => setHoveredIndex(index)}
               onClick={() => handleToggle(index)}
            >
              <div
                className={`face1 p-3 border rounded-2xl z-10 ${hoveredIndex === index ? "bg-linear-to-b from-[#7EBCF3] to-[#006DE8]" : ""}  group-hover:bg-linear-to-b group-hover:from-[#7EBCF3] group-hover:to-[#006DE8] ${borderColorClass} `}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full"
                >
                  <source src={card.img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3 className={`text-[17px] md:text-[22px] lg:text-3xl text-[#37508A] group-hover:hidden ${hoveredIndex === index ? "hidden" : ""} p-2`}>
                  {card.title}
                </h3>
              </div>
              <div className={`face face2 -mt-2 bg-linear-to-b from-[#7EBCF3] to-[#006DE8] flex-col p-10 rounded-b-xl z-0 ${hoveredIndex === index ? "block" : "hidden"} transform transition duration-500 ease-in-out`}>
                <div className="text-white">
                  <h3 className="text-[17px] md:text-[22px] lg:text-3xl pb-2 border-b border-b-[#FFFBF0]">
                    {card.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-3 mb-5 lg:hidden">
        <div
          className="flex items-center justify-center group"
          onClick={handleViewAll}
        >
          <button className="border border-[#13B2F5] py-5 text-[#37508A] text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
            {showAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
          <svg
            className="relative -ml-12 right-2"
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
      {/* end of small screen */}
    </section>
  );
};

export default AnnotationTechniques;