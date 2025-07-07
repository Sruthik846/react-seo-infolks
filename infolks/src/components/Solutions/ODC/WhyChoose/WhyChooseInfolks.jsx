import { useEffect, useRef, useState } from "react";
import bgimage from "/solutions/common/main-solutions-bg.png";

import skilled_team from "/solutions/odc/whychoose-infolks/skilled-team.jpg";
import data_security from "/solutions/odc/whychoose-infolks/data-security.jpg";
import dedicated_team_of_experts from "/solutions/odc/whychoose-infolks/dedicated-team-of-experts.jpg";
import cost_efficiency from "/solutions/odc/whychoose-infolks/cost-efficiency.jpg";
import scalability from "/solutions/odc/whychoose-infolks/scalability.jpg";
import reasonable_service_charge from "/solutions/odc/whychoose-infolks/reasonable-service-charge.jpg";
import agility from "/solutions/odc/whychoose-infolks/agility.jpg";
import time_zone_support from "/solutions/odc/whychoose-infolks/time-zone-support.jpg";
import data_quality from "/solutions/odc/whychoose-infolks/data-quality.jpg";
import data_handling_at_any_scale from "/solutions/odc/whychoose-infolks/data-handling-at-any-scale.jpg";
import focus_on_core_business from "/solutions/odc/whychoose-infolks/focus-on-core-business.jpg";

import skilled_team_tab from "/solutions/odc/whychoose-infolks/tab/skilled-team_tab.jpg";
import data_security_tab from "/solutions/odc/whychoose-infolks/tab/data-security_tab.jpg";
import dedicated_team_of_experts_tab from "/solutions/odc/whychoose-infolks/tab/dedicated-team-of-experts_tab.jpg";
import cost_efficiency_tab from "/solutions/odc/whychoose-infolks/tab/cost-efficiency_tab.jpg";
import scalability_tab from "/solutions/odc/whychoose-infolks/tab/scalability_tab.jpg";
import reasonable_service_charge_tab from "/solutions/odc/whychoose-infolks/tab/reasonable-service-charge_tab.jpg";
import agility_tab from "/solutions/odc/whychoose-infolks/tab/agility_tab.jpg";
import time_zone_support_tab from "/solutions/odc/whychoose-infolks/tab/time-zone-support_tab.jpg";
import data_quality_tab from "/solutions/odc/whychoose-infolks/tab/data-quality_tab.jpg";
import data_handling_at_any_scale_tab from "/solutions/odc/whychoose-infolks/tab/data-handling-at-any-scale_tab.jpg";
import focus_on_core_business_tab from "/solutions/odc/whychoose-infolks/tab/focus-on-core-business_tab.jpg";

import skilled_team_mob from "/solutions/odc/whychoose-infolks/mob/skilled-team_mob.jpg";
import data_security_mob from "/solutions/odc/whychoose-infolks/mob/data-security_mob.jpg";
import dedicated_team_of_experts_mob from "/solutions/odc/whychoose-infolks/mob/dedicated-team-of-experts_mob.jpg";
import cost_efficiency_mob from "/solutions/odc/whychoose-infolks/mob/cost-efficiency_mob.jpg";
import scalability_mob from "/solutions/odc/whychoose-infolks/mob/scalability_mob.jpg";
import reasonable_service_charge_mob from "/solutions/odc/whychoose-infolks/mob/reasonable-service-charge_mob.jpg";
import agility_mob from "/solutions/odc/whychoose-infolks/mob/agility_mob.jpg";
import time_zone_support_mob from "/solutions/odc/whychoose-infolks/mob/time-zone-support_mob.jpg";
import data_quality_mob from "/solutions/odc/whychoose-infolks/mob/data-quality_mob.jpg";
import data_handling_at_any_scale_mob from "/solutions/odc/whychoose-infolks/mob/data-handling-at-any-scale_mob.jpg";
import focus_on_core_business_mob from "/solutions/odc/whychoose-infolks/mob/focus-on-core-business_mob.jpg";

import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLayoutEffect } from "react";

const WhyChooseInfolks = () => {
  const images = [
    {
      id: 0,
      title: "Skilled Team",
      content:
        "Infolks takes pride in its highly skilled and proficient teams, adept across a wide range of technologies and industries. Our dedicated expert professionals strive for excellence by leveraging their expertise to consistently meet project requirements and surpass expectations.",
      image: skilled_team,
      imageTab: skilled_team_tab,
      image_mob: skilled_team_mob,
    },
    {
      id: 1,
      title: "Data Security",
      content:
        "We prioritize data security, holding ISO 27001:2013 certification and complying with EU GDPR standards. Our in-house employees sign legally binding NDAs for secure handling, while our environment features high-standard firewall systems, secure LAN networks, and 24/7 surveillance. Restricted access to office premises prevents unauthorized use of mobile phones and electronic devices. Data is stored on a well-protected master computer, overseen by a team of dedicated security professionals ensuring strict data security measures.",
      image: data_security,
      imageTab: data_security_tab,
      imageMobile: data_security_mob,
    },
    {
      id: 2,
      title: "Dedicated Team of Experts",
      content: `With Infolks, you have the option to scale up your team with the varied skill sets, request. Our workforce possesses immense expertise in various fields of annotation.`,
      image: dedicated_team_of_experts,
      imageTab: dedicated_team_of_experts_tab,
      imageMobile: dedicated_team_of_experts_mob,
    },
    {
      id: 3,
      title: "Cost-Efficiency",
      content:
        "Our ODC services are precisely crafted to deliver exceptional cost-efficiency without compromising quality. Leveraging our offshore capabilities, we ensure competitive pricing structures that allow you to maximise your budget while receiving premium development solutions.",
      image: cost_efficiency,
      imageTab: cost_efficiency_tab,
      imageMobile: cost_efficiency_mob,
    },
    {
      id: 4,
      title: "Scalability",
      content:
        "With Infolks as your ODC partner, scalability becomes a seamless process. We understand that business needs evolve, and our flexible approach allows you to scale your operations effortlessly.",
      image: scalability,
      imageTab: scalability_tab,
      imageMobile: scalability_mob,
    },
    {
      id: 5,
      title: "Reasonable Service Charge",
      content:
        "We offer the lowest hourly rate on the market for your data labeling needs. No additional charge than the normal hourly rate.",
      image: reasonable_service_charge,
      imageTab: reasonable_service_charge_tab,
      imageMobile: reasonable_service_charge_mob,
    },
    {
      id: 6,
      title: "Agility",
      content:
        "Flexibility to synchronize working hours with business hours at your company without any compromise on the work quality.",
      image: agility,
      imageTab: agility_tab,
      imageMobile: agility_mob,
    },
    {
      id: 7,
      title: "Time Zone & Support",
      content:
        "Our team is available 24×7 to enable constant support. So this availability has helped us to compensate for the time zone differences across the globe. Feel free to reach us at any time, anywhere.",
      image: time_zone_support,
      imageTab: time_zone_support_tab,
      imageMobile: time_zone_support_mob,
    },
    {
      id: 8,
      title: "Data Quality",
      content:
        "We guarantee top-quality services with our three-tier quality assurance system. Annotators review data in real time, followed by quality approvers. Managers conduct random checks to ensure precision. Our system holds ISO 9001:2015 certification for added reliability.",
      image: data_quality,
      imageTab: data_quality_tab,
      imageMobile: data_quality_mob,
    },
    {
      id: 9,
      title: "Data Handling at Any Scale",
      content:
        "We excel in data labeling regardless of volume and can handle multiple projects simultaneously.",
      image: data_handling_at_any_scale,
      imageTab: data_handling_at_any_scale_tab,
      imageMobile: data_handling_at_any_scale_mob,
    },
    {
      id: 10,
      title: "Focus on Core Business",
      content:
        "We offer the lowest hourly rate on the market for your data labeling needs, with no additional charges beyond the standard rate.",
      image: focus_on_core_business,
      imageTab: focus_on_core_business_tab,
      imageMobile: focus_on_core_business_mob,
    },
  ];

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
  }, [currentIndex, direction]);

  const [cards, setCard] = useState(images.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? images.slice(0, 3) : images);
    setShowAll(!showAll);
  };

  return (
    <div className="z-0 relative flex flex-col justify-center items-center h-full lg:min-h-[1210px] xl:min-h-[1050px] 2xl:min-h-[1200px] bg-linear-to-r from-[#038EFF] to-[#2b96ee] overflow-hidden pb-16">
      <img
        src={bgimage}
        className="w-full h-full z-0 lg:block hidden absolute inset-0"
        alt=""
      />
      <div className="lg:absolute top-0 z-20 lg:mt-0 h-full w-full flex justify-center items-center flex-col">
        <h2 className="hidden lg:block heading-h2 text-white lg:mb-5 text-center pt-10 lg:pt-0 lg:leading-[50px] 2xl:leading-[63px]">
          WHY CHOOSE INFOLKS?
        </h2>

        <h3 className="block lg:hidden heading-h3 text-white text-center mb-2 pt-10">
          WHY CHOOSE INFOLKS?
        </h3>
        <p className="paragraph text-white text-center mx-auto container responsive-section-container">
          At Infolks, we take pride in delivering top-tier Offshore Development
          Center services that are tailored to meet your business needs.
          Partnering with us offers a myriad of benefits that set us apart in
          the industry.
        </p>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="relative w-full hidden lg:flex items-center justify-center xl:mt-10 2xl:mt-16"
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
              <h3 ref={titleRef} className=" heading-h4 text-white mb-2">
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
            <p ref={subtitleRef} className=" paragraph text-white w-[90%] mt-3">
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
          {cards.slice(1, -1).map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                src={item.imageTab}
                className="hidden md:block h-full w-full object-cover rounded-[18px]"
                alt=""
              />
              <img
                src={item.imageMobile}
                className="block md:hidden h-full w-full object-cover rounded-[18px]"
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

export default WhyChooseInfolks;
