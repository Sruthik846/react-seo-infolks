import { useState } from "react";
import "./service.css";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import ServicesButton from "../../../ui/ServicesButton";
import imageAnnotationBefore from "/home/services/images/image-annotations/image-annotation-before.jpg";
import imageAnnotationAfter from "/home/services/images/image-annotations/image-annotation-after.jpg";
import textAnnotationBefore from "/home/services/images/text-annotations/text-annotation-before.jpg";
import textAnnotationAfter from "/home/services/images/text-annotations/text-annotation-after.jpg";
import audioAnnotationBefore from "/home/services/images/audio-annotations/audio-annotation-before.jpg";
import audioAnnotationAfter from "/home/services/images/audio-annotations/audio-annotation-after.jpg";
import lidarAnnotations from "/home/services/images/lidar-annotations/lidar-annotation.jpg";
import productCategarizationBefore from "/home/services/images/product-categorizations/product-categorization-before.jpg";
import productCategarizationAfter from "/home/services/images/product-categorizations/product-categorization-after.jpg";
import generativeAI from "/home/services/images/generative-ai/generative-ai.jpg";
import nlpBefore from "/home/services/images/nlp/nlp-before.jpg";
import nlpAfter from "/home/services/images/nlp/nlp-after.jpg";
import vrAr from "/home/services/images/vr-ar/vr-ar.jpg";
import arrow from "/home/icons/arrowRight.png";
import video_annotation from "/home/services/videos/video-annotation.gif";
import PrimaryButton from "../../Common/button/PrimaryButton";
import React from 'react';


const Stackcards = () => {
  const slides = [
    {
      id: 1,
      classId: "servicecard1",
      title: "Image Annotation",
      imageUrl: imageAnnotationBefore,
      imageUrl2: imageAnnotationAfter,
      link: "/solutions/image-annotation",
      hasComparison: true,
      content: `The accuracy and richness of image annotations play a pivotal
                  role in enhancing the performance of AI and ML models. We
                  enable the training of machine learning and computer vision
                  models to detect and analyse objects, regions, and other
                  features within images through precise image labeling.`,
    },
    {
      id: 2,
      classId: "servicecard2",
      title: "Video Annotation",
      imageUrl: video_annotation,
      imageUrl2: video_annotation,
      link: "/solutions/video-annotation",
      hasComparison: false,
      content: `Accurate video annotation is essential for training AI models.
                  Our video annotation solutions enable machine learning and
                  computer vision models to interpret and analyse video contents
                  accurately. We help you effectively launch your AI initiatives
                  by providing high-quality video training data.`,
    },
    {
      id: 3,
      classId: "servicecard3",
      title: "Text Annotation",
      imageUrl: textAnnotationBefore,
      imageUrl2: textAnnotationAfter,
      link: "/solutions/text-annotation",
      hasComparison: true,
      content: `High-quality annotations are crucial for training and
                  evaluating NLP models. Our text annotation solutions aim to
                  improve machine learning, natural language processing, and
                  data analysis by making text comprehensible and
                  machine-readable.`,
    },
    {
      id: 4,
      classId: "servicecard4",
      title: "Audio Annotation",
      imageUrl: audioAnnotationBefore,
      imageUrl2: audioAnnotationAfter,
      link: "/solutions/audio-annotation",
      hasComparison: true,
      content: `Audio annotation is essential for various applications
                  requiring audio data conversion into machine-readable format.
                  Our audio annotation services add metadata to your recorded
                  sounds or speech to enhance the relevance of human-bot
                  interaction. We assist organisations in efficiently and
                  accurately annotating audio files.`,
    },
    {
      id: 5,
      classId: "servicecard5",
      title: "LiDAR Annotation",
      imageUrl: lidarAnnotations,
      imageUrl2: lidarAnnotations,
      link: "/solutions/lidar-annotation",
      hasComparison: false,
      content: `Our LiDAR annotation solutions aim to improve machine learning
                  and computer vision by making 3D LiDAR data interpretable and
                  actionable. Our professional annotators have a thorough
                  understanding of LiDAR technology and 3D perception, ensuring
                  the highest annotation quality.`,
    },
    {
      id: 6,
      classId: "servicecard6",
      title: "Product Categorization",
      imageUrl: productCategarizationBefore,
      imageUrl2: productCategarizationAfter,
      link: "/solutions/product-categorisation",
      hasComparison: true,
      content: `Data annotation enables precise product categorization by
                  systematically sorting items based on specific attributes. By
                  leveraging human labeling, this methodology streamlines
                  navigation and enriches user experience by effectively
                  grouping similar products, thereby facilitating easier
                  discovery across industries.`,
    },
    {
      id: 7,
      classId: "servicecard7",
      title: "Generative AI",
      imageUrl: generativeAI,
      imageUrl2: generativeAI,
      link: "/solutions/generative-ai",
      hasComparison: false,
      content: `In generative AI, precise data labeling is crucial for
                  refining model accuracy. Accurate labels form the foundation
                  for effective model training, enabling a deeper understanding
                  of context and semantics. Our services cover labeling tasks
                  for processing various generative AI datasets, including
                  images, videos, audio, text, and tabular data.`,
    },
    {
      id: 8,
      classId: "servicecard8",
      title: "NLP",
      imageUrl: nlpBefore,
      imageUrl2: nlpAfter,
      hasComparison: true,
      link: "/solutions/nlp",
      content: `Natural language processing applications have broad uses
                  across various industries and domains. Our NLP labeling
                  service specialises in labeling textual data to support
                  various language-related tasks and applications.`,
    },
    {
      id: 9,
      classId: "servicecard9",
      title: "VR and AR",
      imageUrl: vrAr,
      imageUrl2: vrAr,
      link: "/solutions/ar-vr",
      hasComparison: false,
      content: `Integrating virtual reality (VR) and augmented reality (AR)
                  into data annotation processes dramatically improves
                  efficiency and precision. VR immerses annotators in simulated
                  environments, enhancing their capacity to interact with and
                  annotate intricate data like 3D objects and spatial
                  information with heightened accuracy.`,
    },
    // {
    //   id: 10,
    //   classId: "servicecard10",
    //   title: "Card4",
    //   description: "",
    //   link: "#",
    //   hidden: true,
    // },
  ];
  const [cards, setCard] = useState(slides.slice(0, 1));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? slides.slice(0, 1) : slides);
    setShowAll(!showAll);
  };
  return (
    <section className="main font-primary-regular">
      {/* large screen */}
      <div className="hidden lg:flex lg:p-5 2xl:p-0 justify-center items-center">
        <ul id="servicecards" className="w-[86%] pt-20">
          {slides.map((service) => (
            <li
              key={service.id}
              className={`cardd top-[50px] 2xl:top-[150px] ${service.hidden ? "hidden" : ""}`}
              id={service.classId}
            >
              <div className="service-card-body bg-[#E9EAE2] flex justify-between px-10">
                <div className="flex-1 inline-flex 2xl:px-10 py-14 2xl:py-20">
                  <div className="flex flex-col justify-center items-center gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={` ${
                          service.id === i + 1
                            ? "w-2 h-8 rounded-md bg-[#BDBDBD]"
                            : "w-2 h-3 rounded-md bg-[#D9D9D9]"
                        }`}
                      ></div>
                    ))}
                  </div>

                  <div className="px-10 2xl:px-16">
                    <ServicesButton />
                    <h3 className="heading-h3 text-[#37508A] mt-5">
                      {service.title}
                    </h3>
                    <p className="text-[#37508A] paragraph mt-2">
                      {service.content}
                    </p>

                    <div className="mt-7 w-[75%] xl:w-[55%] 2xl:w-[48%]">
                      <PrimaryButton
                        text={"EXPLORE MORE"}
                        link={service.link}
                      ></PrimaryButton>
                    </div>
                  </div>
                </div>

                {service.hasComparison ? (
                  <div className="relative py-20 2xl:px-20">
                    <ImgComparisonSlider className="rounded-[35px] focus:outline-hidden cursor-pointer">
                      <img
                        slot="first"
                        src={service.imageUrl}
                        className="w-[300px] xl:w-[465px] h-[326px] object-cover"
                      />
                      <img
                        slot="second"
                        src={service.imageUrl2}
                        className="w-[300px] xl:w-[465px] h-[326px] opacity-50 object-cover"
                      />
                    </ImgComparisonSlider>
                  </div>
                ) : (
                  <div className="relative py-20 2xl:px-20">
                    <img
                      src={service.imageUrl}
                      className="w-[300px] xl:w-[465px] h-[326px] rounded-[35px] object-cover"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Medium screen */}
      <div className="block lg:hidden mt-5 mb-5 lg:p-2 md:p-4 bg-[#E9EAE2] rounded-lg font-primary-regular">
        {cards.map((item, index) => (
          <div key={index} className="flex flex-col lg:gap-4 gap-1 p-2">
            {item.id === 2 ||
            item.id === 5 ||
            item.id === 7 ||
            item.id === 9 ? (
              <div className="focus:outline-hidden lg:p-2 mb-2">
                <img
                  slot="first"
                  src={item.imageUrl}
                  className="w-full h-[274px] lg:h-[326px] object-cover rounded-xl lg:rounded-[35px]"
                />
              </div>
            ) : (
              <ImgComparisonSlider className="rounded-xl lg:rounded-[35px] focus:outline-hidden lg:p-2 mb-2">
                <img
                  slot="first"
                  src={item.imageUrl}
                  className="w-full h-[274px] lg:h-[326px] object-cover"
                />
                <img
                  slot="second"
                  src={item.imageUrl2}
                  className="w-full h-[274px] lg:h-[326px] opacity-50 object-cover"
                />
              </ImgComparisonSlider>
            )}
            <div className="p-2 flex flex-col gap-1">
              <ServicesButton />
              <h3 className="heading-h3 mb-2">{item.title}</h3>
              <p className="paragraph pb-5">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:hidden">
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
    </section>
  );
};

export default Stackcards;