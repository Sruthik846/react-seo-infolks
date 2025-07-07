import { useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "./styles.css";
import blackdot from "/home/icons/black-dot.svg";
import quotes from "/home/icons/quotes.svg";
import leftArrow from "/home/icons/client-left-arrow.svg";
import rightArrow from "/home/icons/client-right-arrow.svg";
import Slider from "react-slick";
import React from 'react';


gsap.registerPlugin(Draggable);

const Carousel = () => {
  const carouselRef = useRef(null);
  const rotationRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(1); // Initial active index set to center card
  const [activeId, setactiveId] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true); // to prevent rapid clicks


  const data = [
    {
      id:1,
      title: "At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.",
      author: "Mikael Rousson, Signality",
    },
    {
      id:2,
      title: "The team at Infolks has consistently delivered high-quality data annotation services, allowing us to focus on our core AI solutions. Their expertise and dedication are unmatched.",
      author: "Jane Doe, TechCorp",
    },
    {
      id:3,
      title: "Infolks' attention to detail and commitment to deadlines have been invaluable to our projects. Highly recommend their services!",
      author: "John Smith, AI Innovations",
    },
    {
      id:4,
      title: "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },{
      id:5,
      title: "At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.",
      author: "Mikael Rousson, Signality",
    },
    {
      id:6,
      title: "The team at Infolks has consistently delivered high-quality data annotation services, allowing us to focus on our core AI solutions. Their expertise and dedication are unmatched.",
      author: "Jane Doe, TechCorp",
    },
    {
      id:7,
      title: "Infolks' attention to detail and commitment to deadlines have been invaluable to our projects. Highly recommend their services!",
      author: "John Smith, AI Innovations",
    },
    {
      id:8,
      title: "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
    {
      id:9,
      title: "At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.",
      author: "Mikael Rousson, Signality",
    },
    {
      id:10,
      title: "The team at Infolks has consistently delivered high-quality data annotation services, allowing us to focus on our core AI solutions. Their expertise and dedication are unmatched.",
      author: "Jane Doe, TechCorp",
    },
    {
      id:11,
      title: "Infolks' attention to detail and commitment to deadlines have been invaluable to our projects. Highly recommend their services!",
      author: "John Smith, AI Innovations",
    },
    {
      id:12,
      title: "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },

    {
      id:13,
      title: "At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.",
      author: "Mikael Rousson, Signality",
    },
    {
      id:14,
      title: "The team at Infolks has consistently delivered high-quality data annotation services, allowing us to focus on our core AI solutions. Their expertise and dedication are unmatched.",
      author: "Jane Doe, TechCorp",
    },
    {
      id:15,
      title: "Infolks' attention to detail and commitment to deadlines have been invaluable to our projects. Highly recommend their services!",
      author: "John Smith, AI Innovations",
    },
    {
      id:16,
      title: "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
    {
      id:17,
      title: "At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.",
      author: "Mikael Rousson, Signality",
    },
    {
      id:18,
      title: "The team at Infolks has consistently delivered high-quality data annotation services, allowing us to focus on our core AI solutions. Their expertise and dedication are unmatched.",
      author: "Jane Doe, TechCorp",
    },
    {
      id:19,
      title: "Infolks' attention to detail and commitment to deadlines have been invaluable to our projects. Highly recommend their services!",
      author: "John Smith, AI Innovations",
    },
    {
      id:20,
      title: "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
    {
      id: 21,
      title:
        "'At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.'",
      author: "Mikael Rousson, Signality",
    },
    {
      id: 22,
      title:
        "'Team Infolks is professional, prompt, and scalable. The annotation teams are very flexible and follow guidelines precisely, paying attention to details. Infolks' customer support is brilliant and very responsive at all times'",
      author: "Fariborz, Ipsotek",
    },
    {
      id: 23,
      title:
        "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
    {
      id: 24,
      title:
        "'Infolks' team is highly professional and efficient in their work. They respond quickly and are extremely prompt in their actions. Our collaboration with them has been fantastic thus far.'",
      author: "Sumit Singh, Labeller",
    },

    {
      id: 25,
      title:
        "'At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.'",
      author: "Mikael Rousson, Signality",
    },
    {
      id: 26,
      title:
        "'Team Infolks is professional, prompt, and scalable. The annotation teams are very flexible and follow guidelines precisely, paying attention to details. Infolks' customer support is brilliant and very responsive at all times'",
      author: "Fariborz, Ipsotek",
    },
    {
      id: 27,
      title:
        "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
    {
      id: 28,
      title:
        "'Infolks' team is highly professional and efficient in their work. They respond quickly and are extremely prompt in their actions. Our collaboration with them has been fantastic thus far.'",
      author: "Sumit Singh, Labeller",
    },
    {
      id: 29,
      title:
        "'At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.'",
      author: "Mikael Rousson, Signality",
    },
    {
      id: 30,
      title:
        "'Team Infolks is professional, prompt, and scalable. The annotation teams are very flexible and follow guidelines precisely, paying attention to details. Infolks' customer support is brilliant and very responsive at all times'",
      author: "Fariborz, Ipsotek",
    },

    {
      id: 31,
      title:
        "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
    {
      id: 32,
      title:
        "'Infolks' team is highly professional and efficient in their work. They respond quickly and are extremely prompt in their actions. Our collaboration with them has been fantastic thus far.'",
      author: "Sumit Singh, Labeller",
    },
    {
      id: 33,
      title:
        "'At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.'",
      author: "Mikael Rousson, Signality",
    },
    {
      id: 34,
      title:
        "'Team Infolks is professional, prompt, and scalable. The annotation teams are very flexible and follow guidelines precisely, paying attention to details. Infolks' customer support is brilliant and very responsive at all times'",
      author: "Fariborz, Ipsotek",
    },
    {
      id: 35,
      title:
        "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
    {
      id: 36,
      title:
        "'Infolks' team is highly professional and efficient in their work. They respond quickly and are extremely prompt in their actions. Our collaboration with them has been fantastic thus far.'",
      author: "Sumit Singh, Labeller",
    },

  ];

  const rotateCarousel = (direction) => {
    const newRotation = rotationRef.current + direction * 10;
    gsap.to(carouselRef.current, {
      rotation: newRotation,
      duration: 0.6, // Smooth easing
      ease: "power2.inOut", // Smooth easing
      onUpdate: () => {
        rotationRef.current = gsap.getProperty(carouselRef.current, "rotation");
        let newIndex = Math.round(rotationRef.current / 10) % 36;
        newIndex = newIndex < 0 ? 36 + newIndex : newIndex;
        setActiveIndex(newIndex);
        
      },
    });
  };

   const nextSlide = () => {
    setactiveId(activeId - 1);
    setActiveIndex(activeIndex - 1);
    rotateCarousel(1);

    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 600);
  };

  const prevSlide = () => {
    setactiveId(activeId + 1);
    setActiveIndex(activeIndex + 1);
    rotateCarousel(-1);

    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 600);
  };

  // tab view
  const testimonials = [
    {
      text: "At Signality, we have been relying on Infolks' services for over three years for data annotation and live data QA. We have been highly impressed by their responsiveness, availability, and, more importantly, the high quality of the services provided.",
      author: "Mikael Rousson, Signality",
    },
    {
      text: "The team at Infolks has consistently delivered high-quality data annotation services, allowing us to focus on our core AI solutions. Their expertise and dedication are unmatched.",
      author: "Jane Doe, TechCorp",
    },
    {
      text: "Infolks' attention to detail and commitment to deadlines have been invaluable to our projects. Highly recommend their services!",
      author: "John Smith, AI Innovations",
    },
    {
      text: "'We do a lot of projects with Infolks. It's great to see a company from Palakkad doing such good work.'",
      author: "Jamsheed Kamardeen, Blend",
    },
  ];
  const sliderRef = useRef(null);

  // eslint-disable-next-line react/prop-types
  const NextArrow = ({ onClick }) => (
    <button
      className="w-10 h-10 bg-[#D9D9D9] rounded-full flex justify-center items-center absolute next-slide -bottom-20 left-1/2"
      onClick={onClick}
    >
      <img src={rightArrow} className="" />
    </button>
  );

  // eslint-disable-next-line react/prop-types
  const PrevArrow = ({ onClick }) => (
    <button
      className="w-10 h-10 bg-[#D9D9D9] rounded-full flex justify-center items-center absolute prev-slide -bottom-20 right-1/2"
      onClick={onClick}
    >
      <img src={leftArrow} className="" />
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: -1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: -1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const wrappers = data.map((item, i) => {
    return (
      <div
        className={`wrapper font-primary-regular text-[#37508A] ${
          activeId === item.id && isContentVisible ? "active" : ""
        }`}
        key={i}
        style={{ transform: `rotate(${i * 10}deg)` }}
      >
        {activeId === item.id ? (
        <div className={`relative`}>
            <div className={`p-8 text-black text-md absolute border-2 border-[#37508ab6] -left-2.5 top-1.5 h-[400px] w-[350px]`}>
              <img src={blackdot} alt="" />
              <p className="mt-5 mb-5 paragraph text-[#595759]">{item.title}</p>
              <img
                src={quotes}
                alt=""
                style={{ marginLeft: "232px", rotate: "10deg" }}
              />
              <p className="paragraph bottom-0 mt-5 text-[#000000] font-primary-medium">
                {item.author}
              </p>
            </div>
            <div className="p-8 text-black text-md absolute z-20 top-0 bg-[linear-gradient(to_right,#F1EAE6,#D6E6EC)] h-[400px] w-[350px]">
              <img src={blackdot} alt="" />
              <p className="mt-5 mb-5 paragraph text-[#595759]">{item.title}</p>
              <img
                src={quotes}
                alt=""
                style={{ marginLeft: "232px", rotate: "10deg" }}
              />
              <p className="paragraph text-[#000000] font-primary-medium bottom-10 absolute ">
                {item.author}
              </p>
            </div>
          </div>
        ) : (
         <div className="p-8 text-black text-md bg-[#E9EAE2] w-[331px] h-[390px] relative transition-all duration-[1000ms]">
            <img src={blackdot} alt="" />
            <p className="mt-5 mb-5 text-[14px] lg:text-[17px] text-[#595759]">
            {item.title}
            </p>
            <img
              src={quotes}
              alt=""
              style={{ marginLeft: "232px", rotate: "10deg" }}
            />
            <p className="paragraph text-[#000000] font-primary-medium bottom-10 absolute">
              {item.author}
            </p>
          </div>
        )}
      </div>
    );
  });

  return (
    <section className="flex flex-col items-center justify-center w-full pt-10 pb-10 overflow-hidden lg:pt-20 2xl:pb-20 font-primary-regular">
      <h2 className="text-[#37508A] font-primary-regular heading-h2 text-center">
        WHAT OUR CLIENTS HAVE TO SAY
      </h2>
      <div className="carousel-container-section lg:-top-28 min-h-[390px] md:min-h-[500px] max-h-[570px] w-full 2xl:mt-20 3xl:mt-0 md:mt-10 mt-5">
        <div className="hidden carousel lg:block top-28 " ref={carouselRef}>
          {wrappers}
        </div>
        <div className="container relative block w-full h-full pt-4 pb-4 mx-auto lg:hidden">
          <div className="relative slider-container">
            <Slider ref={sliderRef} {...settings} className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative px-4">
                  <div className="p-6 -ml-2 mt-2 bg-linear-to-r from-[#F1EAE6] to-[#D6E6EC] border-2 border-[#37508ab6] h-[293px] rounded-xl shadow-md flex flex-col items-start space-y-4">
                    <img src={blackdot} alt="" />
                    <p className="mt-5 mb-5 text-[13px] text-[#595759]">
                      {testimonial.text}
                    </p>
                    <img
                      src={quotes}
                      alt=""
                      style={{ marginLeft: "180px", rotate: "10deg" }}
                    />
                    <div className="absolute text-sm font-semibold text-gray-800 bottom-8">
                      {testimonial.author}
                    </div>
                  </div>
                  <div className="absolute top-0 p-6 bg-linear-to-r from-[#F1EAE6] to-[#D6E6EC] h-[293px] rounded-xl shadow-md flex flex-col items-start space-y-4">
                    <img src={blackdot} alt="" />
                    <p className="mt-5 mb-5 text-[13px] text-[#595759]">
                      {testimonial.text}
                    </p>
                    <img
                      src={quotes}
                      alt=""
                      style={{ marginLeft: "180px", rotate: "10deg" }}
                    />
                    <div className="absolute text-sm font-semibold text-gray-800 bottom-8">
                      {testimonial.author}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* large view buttons */}
        <div className="carousel-controls -bottom-40 lg:-bottom-[110px] 2xl:-bottom-[138px] hidden lg:flex">
          <button
            className="w-12 h-12 bg-[#D9D9D9] rounded-full flex justify-center items-center transition-transform duration-75"
            onClick={!isDisabled ? nextSlide : undefined}
          >
            <img
              src={leftArrow}
              className={`prev-slide z-50 ${
                isDisabled ? "cursor-default opacity-60" : "cursor-pointer"
              }`}
              alt=""
            />
          </button>

          <button
            className="w-12 h-12 bg-[#D9D9D9] rounded-full flex justify-center items-center transition-transform duration-75"
            onClick={!isDisabled ? prevSlide : undefined}
          >
            <img
              src={rightArrow}
              // disabled={isDisabled}
              className={`next-slide ${
                isDisabled ? "cursor-default opacity-60" : "cursor-pointer"
              }`}
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
