import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Annotation_Industries from "../AnnotationIndustries/AnnotationIndustries";
import Usecases from "../UseCases/Usecases";
import arvr_blogBg from "/solutions/ar-vr/ai-applications/arvr-blogBg.png";
import bgimage from "/solutions/common/main-solutions-bg.png";

// Desktop Image
import automatic_speech_recognition from "/solutions/ar-vr/ai-applications/automatic-speech-recognition.jpg";
import object_labeling from "/solutions/ar-vr/ai-applications/object-labeling.jpg";
import text_recognition_translation2 from "/solutions/ar-vr/ai-applications/text-recognition-translation2.jpg";
import remote_assistance_collaboration from "/solutions/ar-vr/ai-applications/remote-assistance-collaboration.jpg";
import training from "/solutions/ar-vr/ai-applications/training.jpg";
import intelligent_avatars from "/solutions/ar-vr/ai-applications/intelligent-avatars.jpg";
import content_generation from "/solutions/ar-vr/ai-applications/content-generation.jpg";
import gesture_recognition from "/solutions/ar-vr/ai-applications/gesture-recognition.jpg";

// Tab Image
import automatic_speech_recognition_tab from "/solutions/ar-vr/ai-applications/tab/automatic-speech-recognition-tab.jpg";
import object_labeling_tab from "/solutions/ar-vr/ai-applications/tab/object-labeling-tab.jpg";
import text_recognition_translation2_tab from "/solutions/ar-vr/ai-applications/tab/text-recognition-translation2-tab.jpg";
import remote_assistance_collaboration_tab from "/solutions/ar-vr/ai-applications/tab/remote-assistance-collaboration-tab.jpg";
import training_tab from "/solutions/ar-vr/ai-applications/tab/training-tab.jpg";
import intelligent_avatars_tab from "/solutions/ar-vr/ai-applications/tab/intelligent-avatars-tab.jpg";
import content_generation_tab from "/solutions/ar-vr/ai-applications/tab/content-generation-tab.jpg";
import gesture_recognition_tab from "/solutions/ar-vr/ai-applications/tab/gesture-recognition-tab.jpg";

// mob Image
import automatic_speech_recognition_mob from "/solutions/ar-vr/ai-applications/mob/automatic-speech-recognition-mob.jpg";
import object_labeling_mob from "/solutions/ar-vr/ai-applications/mob/object-labeling-mob.jpg";
import text_recognition_translation2_mob from "/solutions/ar-vr/ai-applications/mob/text-recognition-translation2-mob.jpg";
import remote_assistance_collaboration_mob from "/solutions/ar-vr/ai-applications/mob/remote-assistance-collaboration-mob.jpg";
import training_mob from "/solutions/ar-vr/ai-applications/mob/training-mob.jpg";
import intelligent_avatars_mob from "/solutions/ar-vr/ai-applications/mob/intelligent-avatars-mob.jpg";
import content_generation_mob from "/solutions/ar-vr/ai-applications/mob/content-generation-mob.jpg";
import gesture_recognition_mob from "/solutions/ar-vr/ai-applications/mob/gesture-recognition-mob.jpg";

import Team from "../../Common/Team";
import high_quality_data_labeling2 from "/solutions/ar-vr/data-labelling/high-quality-data-labeling2.jpg";
import high_quality_data_labeling from "/solutions/ar-vr/data-labelling/high-quality-data-labeling.jpg";

import high_quality_data_labelingTab from "/solutions/ar-vr/data-labelling/high-quality-data-labelingTab.jpg";
import high_quality_data_labelingMob from "/solutions/ar-vr/data-labelling/high-quality-data-labelingMob.jpg";

import ConnectUs from "../../../Common/Contact/ConnectUs";
import bgImage from "/icons/get-in-touch-bg.png";
import IconButton from "../../../Common/button/IconButton";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    title: "Automatic Speech Recognition",
    content:
      "ASR enhances the user experience in AR and VR by enabling users to summon or interact with virtual content using verbal commands. This technology adds dynamism and responsiveness to the experience, allowing users to control and manipulate virtual elements through speech.",
    image: automatic_speech_recognition,
    imageTab: automatic_speech_recognition_tab,
    imageMobile: automatic_speech_recognition_mob,
  },
  {
    id: 2,
    title: "Object Labeling",
    content:
      "Object labeling uses AI to match images from these devices with predefined labels, aiding in recognizing objects in the virtual world and providing users with accurate and relevant information about what they see.",
    image: object_labeling,
    imageTab: object_labeling_tab,
    imageMobile: object_labeling_mob,
  },
  {
    id: 3,
    title: "Text Recognition & Translation",
    content: `Instantly recognize and extract text from images or real-world scenarios, allowing for seamless integration of digital information into the user's environment.`,
    image: text_recognition_translation2,
    imageTab: text_recognition_translation2_tab,
    imageMobile: text_recognition_translation2_mob,
  },
  {
    id: 4,
    title: "Remote Assistance & Collaboration",
    content:
      "AI facilitates remote assistance and collaboration in AR environments by enabling features such as real-time language translation, object recognition, and spatial annotation. This allows remote experts to provide guidance and support to users in different locations, enhancing productivity and knowledge sharing.",
    image: remote_assistance_collaboration,
    imageTab: remote_assistance_collaboration_tab,
    imageMobile: remote_assistance_collaboration_mob,
  },
  {
    id: 5,
    title: "Training ",
    content: `Training AI-powered AR and VR systems are providing perfect training by providing immersive simulations and interactive learning experiences. AI algorithms can adapt training scenarios based on user performance, provide real-time feedback, and personalize learning paths to maximize effectiveness.`,
    image: training,
    imageTab: training_tab,
    imageMobile: training_mob,
  },
  {
    id: 6,
    title: "Intelligent Avatars",
    content: `AI-driven avatars in VR environments are capable of recognizing and responding to users' emotional cues, creating more empathetic and engaging interactions. These emotionally intelligent avatars are used in applications ranging from virtual therapy sessions to customer service simulations.`,
    image: intelligent_avatars,
    imageTab: intelligent_avatars_tab,
    imageMobile: intelligent_avatars_mob,
  },
  {
    id: 7,
    title: "Content Generation",
    content:
      "AI can generate content dynamically within AR and VR environments, such as procedurally generated landscapes, interactive objects, and adaptive narratives, leading to endless possibilities for immersive experiences.",
    image: content_generation,
    imageTab: content_generation_tab,
    imageMobile: content_generation_mob,
  },
  {
    id: 8,
    title: "Gesture Recognition",
    content:
      "AI algorithms can interpret hand gestures and body movements, facilitating intuitive interactions within AR and VR environments. This functionality is crucial for a variety of applications including gaming, training simulations, and virtual collaboration, enhancing user engagement and immersion.",
    image: gesture_recognition,
    imageTab: gesture_recognition_tab,
    imageMobile: gesture_recognition_mob,
  },
];

const AI_Applications = () => {
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
    }, [currentIndex]);

 
  const [cards, setCard] = useState(images.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? images.slice(0, 3) : images);
    setShowAll(!showAll);
  };

  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-[35px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <div>
            <div className="rounded-t-[35px] md:rounded-t-[36px] z-0 relative flex flex-col justify-center items-center h-full lg:min-h-[1210px] xl:min-h-[900px] 2xl:min-h-[1100px] bg-linear-to-r from-[#038EFF] to-[#2b96ee] overflow-hidden">
              <img
                src={bgimage}
                className="w-full h-full z-0 lg:block hidden absolute inset-0"
                alt=""
              />
              <div className="lg:absolute top-0 z-20 lg:mt-0 h-full w-full flex justify-center items-center flex-col">
                <h2 className="hidden lg:block heading-h2 text-white lg:mb-5 text-center pt-10 lg:pt-0 2xl:pt-10 lg:leading-[50px] 2xl:leading-[63px]">
                  AI APPLICATIONS IN AR & VR
                </h2>

                <h3 className="block lg:hidden heading-h3 text-white text-center mb-2 pt-10">
                  AI APPLICATIONS IN AR & VR
                </h3>

                {/* Carousel */}
                <div
                  ref={carouselRef}
                  className="relative w-full hidden lg:flex items-center justify-center mt-26 lg:mt-12 xl:mt-8 "
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
                      <h3
                        ref={titleRef}
                        className=" heading-h4 text-white mb-2"
                      >
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
                    <p
                      ref={subtitleRef}
                      className=" paragraph text-white w-[90%] mt-3"
                    >
                      {images[currentIndex].content}
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-center items-center lg:gap-4">
                    <button
                      onClick={prevSlide}
                      className=" text-white bg-[#13B2F5] p-2 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className=" text-white bg-[#13B2F5] p-2 h-12 w-12  rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </div>
                </div>

                {/* Medium screen */}
                <div className="block lg:hidden p-2 md:p-4 text-white">
                  {cards.slice(0, -1).map((item, index) => (
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

            {/* Connect our professional  */}
            <div className="bg-linear-to-r from-[#038EFF] to-[#2b96ee] rounded-b-[35px]">
              {/* <ConnectUs title="CONNECT OUR PROFESSIONALS" buttonText="Contact Now" /> */}
              <section className="flex justify-center items-center font-primary-regular">
                <div className="relative w-full z-20">
                  {/* Gradient Background */}
                  <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff] rounded-[36px] lg:rounded-[35px] flex justify-center items-center relative z-0">
                    <img
                      src={bgImage}
                      alt="Your Image"
                      className="w-full z-10 opacity-[0.3] h-40 md:h-44 lg:h-full rounded-[36px] lg:rounded-[35px]"
                    />
                    <div className="absolute inset-0 text-white z-20 text-center flex flex-col gap-2 lg:gap-4 justify-center items-center">
                      <h3 className="heading-h3 uppercase md:mb-2 font-primary-medium">
                        CONNECT OUR PROFESSIONALS
                      </h3>
                      <IconButton link={"/contact"} />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <Team
              title="BOOST YOUR AR & VR SYSTEMS WITH HIGH QUALITY DATA LABELING"
              content="Data labeling is the backbone of AI-powered AR and VR systems,
              enabling the building of immersive, interactive, and realistic
              experiences. It is the crucial component that enables these
              technologies to deliver exceptional user engagement, making data
              annotation indispensable for the advancement of AR and VR
              applications."
              content2="The precision of data annotation significantly influences the
              results of AR and VR solutions. Each pixel or byte of data
              necessitates annotation by specialists well-versed in the specific
              domain of the images being annotated."
              image1={high_quality_data_labeling}
              image2={high_quality_data_labeling2}
              imageTab={high_quality_data_labelingTab}
              imageMobile={high_quality_data_labelingMob}
            />
            <Annotation_Industries />
          </div>
          <Usecases />
          <div
            style={{
              backgroundImage: `url(${arvr_blogBg})`,
              backgroundSize: "cover", // Optional, adjusts how the background image covers the element
              backgroundPosition: "center", // Optional, centers the image
              width: "100%", // Optional, sets the width of the container
            }}
            className="rounded-[16px] lg:rounded-[35px]"
          >
            <ConnectUs
              title="CONNECT OUR SPECIALISTS"
              buttonText="Contact Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI_Applications;
