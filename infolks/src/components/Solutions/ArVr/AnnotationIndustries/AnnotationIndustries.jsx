import { useState } from "react";
import white_left_arrow from "/solutions/common/icons/white-left-arrow.svg";
import white_right_arrow from "/solutions/common/icons/white-right-arrow.svg";

import healthcare from "/solutions/ar-vr/annotation-industries/healthcare.jpg";
import Techniques_in_arVR from "../Techniques/Techniques";
import retail from "/solutions/ar-vr/annotation-industries/retail.jpg";
import automotive from "/solutions/ar-vr/annotation-industries/automotive.jpg";
import manufacturing from "/solutions/ar-vr/annotation-industries/manufacturing.jpg";
import gaming_entertainment from "/solutions/ar-vr/annotation-industries/gaming-entertainment.jpg";
import architecture from "/solutions/ar-vr/annotation-industries/architecture.jpg";
import transportation from "/solutions/ar-vr/annotation-industries/transportation.jpg";
import education from "/solutions/ar-vr/annotation-industries/education.jpg";
import media from "/solutions/ar-vr/annotation-industries/media.jpg";



import healthcare_mob from "/solutions/ar-vr/annotation-industries/mob/healthcare_mob.jpg";
import retail_mob from "/solutions/ar-vr/annotation-industries/mob/retail_mob.jpg";
import automotive_mob from "/solutions/ar-vr/annotation-industries/mob/automotive_mob.jpg";
import manufacturing_mob from "/solutions/ar-vr/annotation-industries/mob/manufacturing_mob.jpg";
import gaming_entertainment_mob from "/solutions/ar-vr/annotation-industries/mob/gaming-entertainment_mob.jpg";
import architecture_mob from "/solutions/ar-vr/annotation-industries/mob/architecture_mob.jpg";
import transportation_mob from "/solutions/ar-vr/annotation-industries/mob/transportation_mob.jpg";
import education_mob from "/solutions/ar-vr/annotation-industries/mob/education_mob.jpg";
import media_mob from "/solutions/ar-vr/annotation-industries/mob/media_mob.jpg";

const Annotation_Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [
    {
      id: 1,
      image: healthcare,
      image_mob: healthcare_mob,
      title: "Healthcare",
      description:
        "AR and VR technologies create a secure training environment for healthcare professionals, enabling them to refine procedures and enhance decision-making skills. Precision in data annotation plays a pivotal role in maximizing the potential of AR and VR within healthcare. It improves application quality by assuring accuracy in medical imaging, patient records, and simulations, leading to breakthroughs in diagnosis, training, surgeries, and overall patient care.",
    },
    {
      id: 2,
      image: automotive,
      image_mob: automotive_mob,
      title: "Automotive ",
      description:
        "AR and VR technology have altered the automotive industry, influencing design, manufacturing, and sales. Data annotation is crucial for accurate virtual representations of automobile components. With the assistance of AI in VR & AR, this accuracy promotes advancements in design, manufacturing, and consumer interactions, promoting industrial innovation.",
    },
    {
      id: 3,
      image: retail,
      image_mob: retail_mob,
      title: "Retail ",
      description:
        "AR & VR are redefining retail with virtual store experiences and interactive in-store features. Advanced algorithms drive precise annotation, improve product visualization and customization, and revolutionize retail engagement for increased customer happiness.",
    },
    {
      id: 4,
      image: manufacturing,
      image_mob: manufacturing_mob,
      title: "Manufacturing",
      description:
        "AR and VR are transforming manufacturing by enhancing training, design, assembly, maintenance, quality control, supply chain management, safety, customer engagement, and data analysis. These technologies streamline operations, reduce errors, and empower workers with real-time information, driving innovation and competitiveness.",
    },
    {
      id: 5,
      image: gaming_entertainment,
      image_mob: gaming_entertainment_mob,
      title: "Gaming & Entertainment",
      description:
        "AR and VR have altered gaming and entertainment by immersing people in interactive digital worlds. Data annotation is critical for assuring accuracy in gaming elements and interactions. Precise annotation improves realism and enables intuitive user experiences. This labeling process is still important in creating the immersive and encouraging immersive and encouraging AR/VR worlds for gamers and entertainment supporters.",
    },
    {
      id: 6,
      image: architecture,
      image_mob: architecture_mob,
      title: "Architecture & Real Estate",
      description:
        "AI-assisted data annotation is critical for improving architectural element recognition and analysis, as well as enriching VR/AR experiences.   AI in VR generates realistic simulations, and AI in AR generates real-time data overlays for informed decisions. ",
    },
    {
      id: 7,
      image: transportation,
      image_mob: transportation_mob,
      title: "Transportation",
      description:
        "AR and VR technologies are changing transportation by improving navigation systems and customer experiences. AR overlays real-time information for navigation, while VR provides immersive entertainment during travel. Data annotation is critical to optimizing these experiences by ensuring the exact mapping of data and accurate virtual content. Transportation-related AR and VR applications provide more accurate and interesting experiences for travelers.",
    },
    {
      id: 8,
      image: media,
      image_mob: media_mob,
      title: "Media & entertainment",
      description:
        "In media & entertainment, AR & VR redefine audience interaction. VR immerses users in diverse experiences, from gaming to interactive storytelling, while AR enhances live events by overlaying digital elements onto reality. Precise annotation improves accuracy in VR simulations and AR overlays, increasing the realism of the content. ",
    },
    {
      id: 9,
      image: education,
      image_mob: education_mob,
      title: "Education & Training",
      description:
        "AR & VR annotation applications for education and training revolutionizes immersive learning experiences. We enhance educational content and training simulations by annotating virtual elements in augmented and virtual reality environments. This application empowers educators and trainers to create interactive and engaging lessons, allowing learners to explore complex concepts in a dynamic and immersive manner.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const [slides, setSlides] = useState(cards.slice(0, 2));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setSlides(showAll ? cards.slice(0, 2) : cards);
    setShowAll(!showAll);
  };
  return (
    <section className="p-2 md:p-4 lg:p-5 relative lg:mt-16 font-primary-regular text-[19px]">
      <div className="bg-linear-to-r from-[#02B9E2] to-[#0281FA] p-2 md:p-4 lg:p-10 rounded-2xl text-white">
        <div>
          <h2 className="heading-h2 mt-7 mb-7 text-center">
            DATA ANNOTATION INDUSTRIES IN AR & VR
          </h2>
          <div className="flex justify-center mx-auto container">
            <p className="paragraph text-center">
              Industries spanning retail, automotive, aerial, marketing, etc.
              are increasingly embracing AR and VR technologies. Now is the
              opportune moment to pioneer the groundbreaking solutions the
              market demands. We empower your creativity and innovation while
              ensuring high-quality experiences for your customers. Here note
              some of our usecases in AR & VR Solution.
            </p>
          </div>

          <div className="mt-10">
            <div className="w-full ">
              <div className="relative">
                {/* large screen */}
                <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hidden lg:grid">
                {[...cards, ...cards].slice(currentIndex, currentIndex + 3).map((card, index) => (
                       <div
                       className={`flex-none p-4 bg-[#02B2E5] border border-[#89CAFF] rounded-lg shadow-md transform transition-all duration-300 ${
                         hoveredIndex === index ? "" : "2xl:h-[35rem] xl:h-96 md:h-96 h-64"
                       }`}
                       key={index}
                       onMouseEnter={() => setHoveredIndex(index)}
                       onMouseLeave={() => setHoveredIndex(null)}
                     >
                       <div className="relative">
                         <img
                           className={`w-full object-cover mb-4 rounded-lg transition-all duration-300 h-auto`}
                           src={card.image}
                           alt="Card"
                         />
                         <div
                           className={`absolute inset-0 bg-linear-to-l from-[#021aa125] to-[#021aa198] bg-opacity-70 transition-opacity duration-300 ${
                             hoveredIndex === index
                               ? "opacity-0"
                               : "opacity-100"
                           }`}
                         ></div>
                       </div>
                       <h3
                         className={`heading-h3 ${
                           hoveredIndex === index
                             ? "border-b border-white pb-2"
                             : ""
                         }`}
                       >
                         {card.title}
                       </h3>
                       {hoveredIndex === index && (
                         <p className="mt-2 text-white h-full paragraph">
                           {card.description}
                         </p>
                       )}
                     </div>
                   ))}
               </div>
                {/* prev & next arrows */}
                <div className="hidden lg:flex items-center justify-center mt-10 relative gap-5">
                  <img
                    src={white_left_arrow}
                    className={`w-10 cursor-pointer`}
                    onClick={handlePrev}
                    alt=""
                  />
                  <img
                    src={white_right_arrow}
                    className={`w-10 cursor-pointer`}
                    onClick={handleNext}
                    alt=""
                  />
                </div>

                {/* ---------------- small and medium screens ---------------------- */}
                <div className="lg:hidden p-2 md:p-4 font-primary-regular grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                  {slides.map((item, index) => (
                    <div
                      className={`flex-none p-4 bg-[#02B2E5] border border-[#89CAFF] rounded-lg shadow-md transform transition-all duration-300 ${
                        hoveredIndex === index ? "" : "lg:h-80"
                      }`}
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="relative">
                        <img
                          className={`w-full object-cover mb-2 md:mb-4 rounded-lg transition-all duration-300 h-auto`}
                          src={item.image_mob}
                          alt="Card"
                        />
                        <div
                          className={`absolute inset-0 bg-linear-to-l from-[#021aa125] to-[#021aa198] bg-opacity-70 transition-opacity duration-300 ${
                            hoveredIndex === index ? "opacity-0" : "opacity-100"
                          }`}
                        ></div>
                      </div>
                      <h3
                        className={`heading-h3 ${
                          hoveredIndex === index
                            ? "border-b border-white pb-2"
                            : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                      {hoveredIndex === index && (
                        <p className="mt-2 text-white h-full paragraph">
                          {item.description}
                        </p>
                      )}
                    </div>
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
              </div>
            </div>
          </div>
        </div>

        <Techniques_in_arVR />
      </div>
    </section>
  );
};

export default Annotation_Industries;
