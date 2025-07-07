import { useEffect, useState } from "react";
import audio_tagging from "/solutions/audio-annotations/services/desktop/audio-tagging.jpg";
import audio_translation from "/solutions/audio-annotations/services/desktop/audio-translation.jpg";
import emotion_recognition from "/solutions/audio-annotations/services/desktop/emotion-recognition.jpg";
import speaker_recognition from "/solutions/audio-annotations/services/desktop/speaker-recognition.jpg";
import audio_transcription from "/solutions/audio-annotations/services/desktop/audio-transcription.jpg";
import acoustic_fingerprinting from "/solutions/audio-annotations/services/desktop/acoustic-fingerprinting.jpg";
import audio_content_analysis from "/solutions/audio-annotations/services/desktop/audio-content-analysis.jpg";

// tab images
import audio_taggingTab from "/solutions/audio-annotations/services/tab/audio-tagging.jpg";
import audio_translationTab from "/solutions/audio-annotations/services/tab/audio-translation.jpg";
import emotion_recognitionTab from "/solutions/audio-annotations/services/tab/emotion-recognition.jpg";
import speaker_recognitionTab from "/solutions/audio-annotations/services/tab/speaker-recognition.jpg";
import audio_transcriptionTab from "/solutions/audio-annotations/services/tab/audio-transcription.jpg";
import acoustic_fingerprintingTab from "/solutions/audio-annotations/services/tab/acoustic-fingerprinting.jpg";
import audio_content_analysisTab from "/solutions/audio-annotations/services/tab/audio-content-analysis.jpg";

// mobile images
import audio_taggingMobile from "/solutions/audio-annotations/services/mobile/audio-tagging.jpg";
import audio_translationMobile from "/solutions/audio-annotations/services/mobile/audio-translation.jpg";
import emotion_recognitionMobile from "/solutions/audio-annotations/services/mobile/emotion-recognition.jpg";
import speaker_recognitionMobile from "/solutions/audio-annotations/services/mobile/speaker-recognition.jpg";
import audio_transcriptionMobile from "/solutions/audio-annotations/services/mobile/audio-transcription.jpg";
import acoustic_fingerprintingMobile from "/solutions/audio-annotations/services/mobile/acoustic-fingerprinting.jpg";
import audio_content_analysisMobile from "/solutions/audio-annotations/services/mobile/audio-content-analysis.jpg";

import transparentBg from "/solutions/transparentBg.svg";
import arrow from "/home/icons/arrowRight.png";

const slides = [
  {
    id: 1,
    title: "Audio Tagging",
    imageUrl: audio_tagging,
    imageUrlTab: audio_taggingTab,
    imageUrlMobile: audio_taggingMobile,
    content:
      "Audio annotation involves audio tagging, where different parts of audio data get labeled. This process assigns tags to various sound elements, such as speech types, music genres, and background noises. These tags are important for training AI models to better understand audio inputs. Audio tagging significantly improves AI applications focused on sound analysis, like speech recognition and music systems.",
  },
  {
    id: 2,
    title: "Audio Translation",
    imageUrl: audio_translation,
    imageUrlTab: audio_translationTab,
    imageUrlMobile: audio_translationMobile,
    content:
      "Audio translation involves annotating and transcribing audio data, enabling machine learning models to interpret and translate spoken words or phrases into various languages. These annotated datasets serve as invaluable resources for training AI models, allowing them to decode and translate audio content with increased precision.",
  },
  {
    id: 3,
    title: "Emotion Recognition",
    imageUrl: emotion_recognition,
    imageUrlTab: emotion_recognitionTab,
    imageUrlMobile: emotion_recognitionMobile,
    content:
      "Emotion annotation includes teaching machines to evaluate and identify emotions conveyed in natural language expressions or speech recordings. Machine learning systems are trained to associate specific words with distinct emotions. Our skilled workforce can analyse and classify sounds based on tone, loudness, tempo, and voice quality, commonly utilised for distinguishing emotions, gender, and other characteristics.",
  },
  {
    id: 4,
    title: "Speaker Recognition",
    imageUrl: speaker_recognition,
    imageUrlTab: speaker_recognitionTab,
    imageUrlMobile: speaker_recognitionMobile,
    content: `Speaker recognition in audio involves identifying individuals by their voices. It operates by analysing unique aspects of speech patterns to create a distinct voice signature for each person. This technology finds applications in security, investigations, and personalised experiences across various industries. Essentially, it uses a person's voice to confirm their identity.`,
  },
  {
    id: 5,
    title: "Audio Transcription",
    imageUrl: audio_transcription,
    imageUrlTab: audio_transcriptionTab,
    imageUrlMobile: audio_transcriptionMobile,
    content: `Audio transcription is a critical step before audio annotation. These files often vary in quality and may contain interfering elements, such as background noise, all of which receive specific labels. Transcription plays a vital role in converting spoken words into text, which is essential for training machine learning models to understand human speech.`,
  },
  {
    id: 6,
    title: "Acoustic Fingerprinting",
    imageUrl: acoustic_fingerprinting,
    imageUrlTab: acoustic_fingerprintingTab,
    imageUrlMobile: acoustic_fingerprintingMobile,
    content: `We analyze your audio sample and generate acoustic relevant characteristics of particular content to identify different versions of a single recording with the same title.`,
  },
  {
    id: 7,
    title: "Audio Content Analysis",
    imageUrl: audio_content_analysis,
    imageUrlTab: audio_content_analysisTab,
    imageUrlMobile: audio_content_analysisMobile,
    content: `Experts in audio content analysis label various sections within audio files by adding detailed markers to identify sounds, voices (such as gunshots, sirens, or animal sounds), emotions, and more. This process aids in tasks like speech recognition and understanding emotions in audio. Labeling audio enhances how we utilise audio data for AI, research, and decision-making purposes.`,
  },
];
const infiniteData = Array(10).fill(slides).flat();

const ServicesOffered = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from the first "real" slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeItem, setActiveItem] = useState(slides[0]);

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
      setCurrentSlide((prev) => prev + 1);
      const id = activeItem.id % infiniteData.length;
      setActiveItem(infiniteData[id]);
      setIsTransitioning(false);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      if (currentSlide === 1) {
        setIsTransitioning(false); // Temporarily disable transition
        setCurrentSlide(infiniteData.length); // Jump to cloned last slide

        setTimeout(() => {
          setIsTransitioning(true); // Re-enable transition
          setCurrentSlide(infiniteData.length - 0); // Move to actual last slide
          setActiveItem(infiniteData[infiniteData.length - 1]); // Update active item
          console.log(infiniteData[infiniteData.length - 1]);
        }, 50); // Small delay to force reflow
      } else {
        setCurrentSlide((prev) => prev - 1);
        const id =
          (activeItem.id - 2 + infiniteData.length) % infiniteData.length;
        setActiveItem(infiniteData[id]);
        setIsTransitioning(false);
      }
    }
  };

  const [cards, setCard] = useState(slides.slice(0, 1));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? slides.slice(0, 1) : slides);
    setShowAll(!showAll);
  };
  return (
    <section className="lg:mt-20 mt-5 mb-10 lg:mb-20 xl:-mb-16 2xl:mb-20 relative font-primary-regular">
      <div className="text-[#37508A] flex flex-col justify-center items-center">
        <h2 className="heading-h2 lg:mb-5 text-center m-2 md:m-0">
          AUDIO ANNOTATION SERVICES OFFERED
        </h2>
        <p className="paragraph text-center responsive-section-container">
          At Infolks, we provide high-quality audio annotation solutions
          customised to meet your specific needs at any scale. Our global team
          handles audio annotation for various purposes, including
          transcription, audio tagging, speaker recognition, emotion
          recognition, and more.
        </p>
      </div>

      <div className="pt-10 hidden lg:block">
        <div className="relative w-full h-[790px] flex items-center justify-center overflow-hidden font-primary-regular">
          <div
            className={`relative w-full h-full flex transition-transform duration-700 ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={{ transform: `translateX(-${currentSlide * 90 - 30}%)` }}
          >
            {[
              infiniteData[infiniteData.length - 1],
              ...infiniteData,
              ...infiniteData,
              infiniteData[0],
            ].map((slide, index) => (
              <div
                key={index}
                className="shrink-0 w-[90%] h-full xl:h-[80%] 2xl:h-full relative flex"
              >
                <div
                  className="absolute inset-0 h-full w-full overflow-hidden bg-no-repeat xl:bg-cover 2xl:bg-contain lg:bg-cover rounded-[10px]"
                  style={{
                    backgroundImage: `url(${
                      window.innerWidth >= 1728
                        ? slide.imageUrl
                        : window.innerWidth >= 1024
                        ? slide.imageUrlTab
                        : slide.imageUrlTab
                    })`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-[10px]"></div>
                </div>
<div className="w-40 h-full absolute top-0 right-0 bg-[#FFFBF0]">
                </div>              </div>
            ))}
          </div>

          <div className="absolute overflow-hidden xl:top-14 2xl:top-24 lg:left-10 xl:left-22 2xl:left-52 bg-[#FFFBF0] lg:pl-10 2xl:pl-16 pr-16 rounded-lg shadow-lg w-[587px] 2xl:w-[687px] lg:h-[520px] 2xl:h-[620px] text-[#37508A] flex lg:gap-6 xl:gap-10">
            <img src={transparentBg} className="absolute inset-0 z-0 w-full overflow-hidden" alt="" />
            <div className="flex flex-col gap-3 justify-center items-center z-10">
              <button
                className={`bg-[#13B2F5] text-white p-2 rounded-lg w-[54px] h-[54px] flex justify-center items-center cursor-pointer`}
                onClick={prevSlide}
              >
                <svg
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.57407 18.957L0.0458101 10.0061C-0.0152684 9.89135 -0.0152684 9.76703 0.0458102 9.65228L9.58425 0.758788C9.64533 0.644035 9.83874 0.644035 9.9609 0.758788L10.928 1.66726C11.0501 1.78202 11.0501 1.96371 10.928 2.08803L3.67998 8.95419L24.1311 8.95419C24.691 8.95419 25.2 9.36539 25.2 9.90091C25.2 10.4938 24.7012 10.905 24.1311 10.905L3.86322 10.905L10.928 17.5799C11.0501 17.6947 11.0501 17.8764 10.928 17.9911L9.95072 18.957C9.82856 19.0143 9.63514 19.0143 9.57407 18.957Z"
                    fill="#FFFBF0"
                  />
                </svg>
              </button>
              <button
                className={`bg-[#13B2F5] text-white p-2 rounded-lg w-[54px] h-[54px] flex justify-center items-center cursor-pointer`}
                onClick={nextSlide}
              >
                <svg
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4259 0.0430309L25.9542 8.9939C26.0153 9.10865 26.0153 9.23297 25.9542 9.34772L16.4158 18.2412C16.3547 18.356 16.1613 18.356 16.0391 18.2412L15.072 17.3327C14.9499 17.218 14.9499 17.0363 15.072 16.912L22.32 10.0458L1.86887 10.0458C1.30899 10.0458 0.799997 9.63461 0.799997 9.09908C0.799997 8.50618 1.29881 8.09498 1.86887 8.09498L22.1368 8.09499L15.072 1.42009C14.9499 1.30533 14.9499 1.12364 15.072 1.00888L16.0493 0.0430308C16.1714 -0.0143465 16.3649 -0.0143464 16.4259 0.0430309Z"
                    fill="#FFFBF0"
                  />
                </svg>
              </button>
            </div>
            <div className=" lg:w-[75%] xl:w-full 2xl:w-[60%]">
              <div className="relative">
                <svg
                  width="70"
                  height="120"
                  viewBox="0 0 70 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{ mixBlendMode: "multiply" }}>
                    <path
                      d="M0 0H70V110C70 115.523 65.5229 120 60 120H10C4.47715 120 0 115.523 0 110V0Z"
                      fill="#13B2F5"
                      fillOpacity="0.06"
                    />
                  </g>
                </svg>
                <div className="absolute bottom-5 left-5 text-[30px]">
                  <h5>0{activeItem.id}</h5>
                </div>
              </div>

              <h3 className="heading-h3 mb-4 border-b-[1px] border-b-[#37508a98] mt-20 xl:mt-5 2xl:mt-20 pb-3">
                {activeItem.title}
              </h3>
              <p className="paragraph">{activeItem.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden p-2 md:p-4 font-primary-regular">
        {cards.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <img
              src={item.imageUrlMobile}
              className="rounded-lg"
              alt=""
            />
            <h3 className="heading-h3 border-b border-b-[#37508A] w-fit">
              {item.title}
            </h3>
            <p className="paragraph pb-5">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:hidden">
        <div
          className="flex group justify-center items-center"
          onClick={handleViewAll}
        >
          <button
            className={`bg-[#FFFBF0] border border-[#13B2F5] text-[#37508A] py-4 md:py-6 text-[13px] md:text-[16px] rounded-full flex p-4 px-5 md:px-8 w-[140px] md:w-[200px] items-center transition-all duration-300 ease-in-out group-hover:w-[120px] md:group-hover:w-[100px]`}
          >
            {showAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
          <span className="relative h-[30px] w-[30px] md:w-[50px] md:h-[50px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-8 md:-ml-12 group-hover:ml-2 p-2 md:p-2 transition-all duration-300 ease-in-out">
            <img src={arrow} alt="" className="w-5" style={{ fill: "blue" }} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
