import { useEffect, useRef, useState } from "react";
import bgimage from "/solutions/common/main-solutions-bg.png";

import text_tagging from "/solutions/nlp/usecases/text-tagging.jpg";
import named_entity_extraction from "/solutions/nlp/usecases/named-entity-extraction.jpg";
import sentiment_analysis from "/solutions/nlp/usecases/sentiment-analysis.jpg";
import information_extraction from "/solutions/nlp/usecases/information-extraction.jpg";
import text_summarisation from "/solutions/nlp/usecases/text-summarisation.jpg";
import pos_tagging from "/solutions/nlp/usecases/pos-tagging.jpg";
import machine_translation from "/solutions/nlp/usecases/machine-translation.jpg";
import medical_record_documentation from "/solutions/nlp/usecases/medical-record-documentation.jpg";
import image_captioning from "/solutions/nlp/usecases/image-captioning.jpg";
import chatbot_conversational_ai from "/solutions/nlp/usecases/chatbot-conversational-ai.jpg";

// Tab Images
import text_tagging_tab from "/solutions/nlp/usecases/tab/text-tagging-tab.jpg";
import named_entity_extraction_tab from "/solutions/nlp/usecases/tab/named-entity-extraction-tab.jpg";
import sentiment_analysis_tab from "/solutions/nlp/usecases/tab/sentiment-analysis-tab.jpg";
import information_extraction_tab from "/solutions/nlp/usecases/tab/information-extraction-tab.jpg";
import text_summarisation_tab from "/solutions/nlp/usecases/tab/text-summarisation-tab.jpg";
import pos_tagging_tab from "/solutions/nlp/usecases/tab/pos-tagging-tab.jpg";
import machine_translation_tab from "/solutions/nlp/usecases/tab/machine-translation-tab.jpg";
import medical_record_documentation_tab from "/solutions/nlp/usecases/tab/medical-record-documentation-tab.jpg";
import image_captioning_tab from "/solutions/nlp/usecases/tab/image-captioning-tab.jpg";
import chatbot_conversational_ai_tab from "/solutions/nlp/usecases/tab/chatbot-conversational-ai-tab.jpg";

// Mobile Images
import text_tagging_mob from "/solutions/nlp/usecases/mob/text-tagging-mob.jpg";
import named_entity_extraction_mob from "/solutions/nlp/usecases/mob/named-entity-extraction-mob.jpg";
import sentiment_analysis_mob from "/solutions/nlp/usecases/mob/sentiment-analysis-mob.jpg";
import information_extraction_mob from "/solutions/nlp/usecases/mob/information-extraction-mob.jpg";
import text_summarisation_mob from "/solutions/nlp/usecases/mob/text-summarisation-mob.jpg";
import pos_tagging_mob from "/solutions/nlp/usecases/mob/pos-tagging-mob.jpg";
import machine_translation_mob from "/solutions/nlp/usecases/mob/machine-translation-mob.jpg";
import medical_record_documentation_mob from "/solutions/nlp/usecases/mob/medical-record-documentation-mob.jpg";
import image_captioning_mob from "/solutions/nlp/usecases/mob/image-captioning-mob.jpg";
import chatbot_conversational_ai_mob from "/solutions/nlp/usecases/tab/chatbot-conversational-ai-tab.jpg";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLayoutEffect } from "react";

const Usecases = () => {
  const images = [
    {
      id: 1,
      title: "Text Tagging",
      content:
        "Text tagging in NLP services holds immense importance in the ever-evolving world of artificial intelligence. Text annotation with relevant metadata for textual datasets is needed to enable AI robots and NLP-based prototypes. It aids in the identification of entities, parts of speech, the categorisation of sentences, and other tasks. We analyse unstructured data and tag it with appropriate annotations and classes so that your model can gain more insight from it.",
      image: text_tagging,
      imageTab: text_tagging_tab,
      imageMobile: text_tagging_mob,
    },
    {
      id: 2,
      title: "Named Entity Extraction",
      content:
        "Named Entity Recognition serves as the foundation for exact content categorisation in text classification, ensuring that every piece of information finds its proper place. NER is essential for information retrieval, text classification, sentiment analysis, and other applications. Through our services, we enable machines to understand the context and meaning of text to assist in extracting valuable information for further analysis or processing.",
      image: named_entity_extraction,
      imageTab: named_entity_extraction_tab,
      imageMobile: named_entity_extraction_mob,
    },
    {
      id: 3,
      title: "Sentiment Analysis",
      content: `NER plays an important role in identifying things associated with distinct sentiments. This enables machines to recognise items such as individuals, organisations, and locations within the text, bringing contextual depth to sentiment analysis. NLP model training is useful in determining the sentiment or emotional tone expressed in text data. We help classify text as positive, negative, or neutral based on the emotions or sentiments conveyed in the text.`,
      image: sentiment_analysis,
      imageTab: sentiment_analysis_tab,
      imageMobile: sentiment_analysis_mob,
    },
    {
      id: 4,
      title: "Information Extraction",
      content:
        "NLP holds a central role in transforming unstructured text data into organised and actionable insights. This is used to identify and extract structured information from unstructured text data. Our NLP annotation experts can assist you in breaking down large texts by extracting and summarising important information.",
      image: information_extraction,
      imageTab: information_extraction_tab,
      imageMobile: information_extraction_mob,
    },
    {
      id: 5,
      title: "Text Summarisation",
      content: `NLP text summarsation is used to extract the most important information from the original text and present it in a condensed form. In the ever-expanding landscape of unstructured data, our NLP experts excel in the art of text summarisation and making voluminous texts more manageable and insightful. With our NLP services, you can list appropriate keywords from a long text and create an abstract for the same.`,
      image: text_summarisation,
      imageTab: text_summarisation_tab,
      imageMobile: text_summarisation_mob,
    },
    {
      id: 6,
      title: "POS Tagging",
      content: `In NLP model training, part-of-speech tagging stands as a fundamental technique, enriching the depth of textual analysis. We analyse your text data and assign a POS tag to each word in the corpus based on its context and definition. We expertly examine your textual data by meticulously assigning precise POS tags to each word in the corpus.`,
      image: pos_tagging,
      imageTab: pos_tagging_tab,
      imageMobile: pos_tagging_mob,
    },
    {
      id: 7,
      title: "Machine Translation",
      content:
        "Machine translation is a game-changing application of NLP training systems that has transformed the way we break through language boundaries. NLP automatically translates text from one language to another using computational algorithms and models. Our team of linguistic experts can help you translate your data into another language of your choice.",
      image: machine_translation,
      imageTab: machine_translation_tab,
      imageMobile: machine_translation_mob,
    },
    {
      id: 8,
      title: "Medical Records Documentation ",
      content:
        "Medical records can be huge, ranging from patients' details to their medical histories. We accurately annotate these data to process quality training data for training computer vision and NLP model training systems used in medical data handling.",
      image: medical_record_documentation,
      imageTab: medical_record_documentation_tab,
      imageMobile: medical_record_documentation_mob,
    },
    {
      id: 9,
      title: "Image Captioning",
      content:
        "Image captioning, a fusion of computer vision and natural language processing entails training AI models to analyse images and generate coherent, contextually relevant descriptions. The relevance and coherence of image captions hinge on the contextual presentation of the images. Effective training demands sample-labeled data.",
      image: image_captioning,
      imageTab: image_captioning_tab,
      imageMobile: image_captioning_mob,
    },
    {
      id: 10,
      title: "ChatBot and Conversational AI",
      content:
        "Data annotation serves as a transformative lens through which chatbots and conversational AI systems acquire the ability to create authentic human-like language interactions. Widely recognised as the fusion of art and science in data enrichment, data annotation stands as the driving force behind the enhanced capabilities of chatbots and conversational NLP.",
      image: chatbot_conversational_ai,
      imageTab: chatbot_conversational_ai_tab,
      imageMobile: chatbot_conversational_ai_mob,
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
  }, [currentIndex,direction]);

  const [cards, setCard] = useState(images.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? images.slice(0, 3) : images);
    setShowAll(!showAll);
  };

  return (
    <div className="z-0 relative flex flex-col justify-center items-center h-full lg:min-h-[1010px] xl:min-h-[950px] 2xl:min-h-[1050px] bg-linear-to-r from-[#038EFF] to-[#2b96ee] overflow-hidden">
      <img
        src={bgimage}
        className="w-full h-full z-0 lg:block hidden absolute inset-0"
        alt=""
      />
      <div className="lg:absolute top-0 z-20 lg:mt-0 h-full w-full flex justify-center items-center flex-col">
        {/* Carousel */}
        <div
          ref={carouselRef}
                  className="relative w-full hidden lg:flex items-center justify-center mt-26 lg:mt-12 xl:mt-0 2xl:mt-16"
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
                className="hidden md:block h-full w-full object-cover rounded-lg"
                alt=""
              />
              <img
                src={item.imageMobile}
                className="block md:hidden h-full w-full object-cover rounded-lg"
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

export default Usecases;
