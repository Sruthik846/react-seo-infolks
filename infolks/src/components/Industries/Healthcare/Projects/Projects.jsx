import { useState, useRef, useEffect } from "react";
import "../style.css";
import bgimageCard from "/industries/agriculture/icons/agriculture-industry-bgimage.svg";
import vector1 from "/industries/agriculture/icons/agriculture-industry-vector1.svg";
import vector2 from "/industries/agriculture/icons/Vector.png";
import vector3 from "/industries/agriculture/icons/vector1.png";
import vector4 from "/industries/agriculture/icons/vector2.png";
import imgbg from "/industries/agriculture/img-bg.png";
import arrow from "/home/icons/arrowRight.png";
import eye_cell_analysis from "/industries/healthcare/eye-cell-analysis.jpg";
import foetal_brian_labeling from "/industries/healthcare/foetal-brian-labeling.jpg";
import medical_records_documentation from "/industries/healthcare/medical-records-documentation.jpg";
import diabetic_retinopathy from "/industries/healthcare/diabetic-retinopathy.jpg";
import teeth_and_gum_labeling from "/industries/healthcare/teeth-and-gum-labeling.jpg";
import tissue_labeling from "/industries/healthcare/tissue-labeling.jpg";
import cell_pipette_labeling from "/industries/healthcare/cell-pipette-labeling.jpg";
import baby_keypoint from "/industries/healthcare/baby-keypoint.jpg";
import medical_instrument_labeling from "/industries/healthcare/medical-instrument-labeling.jpg";
import cell_labeling from "/industries/healthcare/cell-labeling.jpg";
import surgeons_robot_labeling from "/industries/healthcare/surgeons-robot-labeling.jpg";

// small device images
import eye_cell_analysis_sm from "/industries/healthcare/eye-cell-analysis-sm.jpg";
import foetal_brian_labeling_sm from "/industries/healthcare/foetal-brian-labeling-sm.jpg";
import medical_records_documentation_sm from "/industries/healthcare/medical-records-documentation-sm.jpg";
import diabetic_retinopathy_sm from "/industries/healthcare/diabetic-retinopathy-sm.jpg";
import teeth_and_gum_labeling_sm from "/industries/healthcare/teeth-and-gum-labeling-sm.jpg";
import tissue_labeling_sm from "/industries/healthcare/tissue-labeling-sm.jpg";
import cell_pipette_labeling_sm from "/industries/healthcare/cell-pipette-labeling-sm.jpg";
import medical_instrument_labeling_sm from "/industries/healthcare/medical-instrument-labeling-sm.jpg";
import cell_labeling_sm from "/industries/healthcare/cell-labeling-sm.jpg";
import surgeons_robot_labeling_sm from "/industries/healthcare/surgeons-robot-labeling-sm.jpg";

import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph";
import ReadMoreLess from "../../../ReadMoreLess";
import gsap from "gsap";

const DataLabelingProjects = () => {
  // -------------- readmore character limit for different screen sizes -----------
  const [charLimit, setCharLimit] = useState(300);

  useEffect(() => {
    const updateCharLimit = () => {
      if (window.innerWidth >= 1280) {
        // Extra large screens (xl)
        setCharLimit(300);
      } else if (window.innerWidth >= 1024) {
        // Large screens (lg)
        setCharLimit(200);
      } else if (window.innerWidth >= 768) {
        // Medium screens (md)
        setCharLimit(180);
      } else {
        // Small screens and below (sm and xs)
        setCharLimit(162);
      }
    };

    // Initial check
    updateCharLimit();

    // Update charLimit on window resize
    window.addEventListener("resize", updateCharLimit);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCharLimit);
    };
  }, []);
  // ----------------- end of charLimit section ----------------

  const data = [
    {
      id: 1,
      headinh1: "Eye Cell Analysis",
      heading2: "",
      content: `AI models have emerged as invaluable assets in the field of ophthalmology, simplifying and revolutionising treatments for a variety of eye disorders. Skilled professionals accurately classify scanned retinal images, identifying specific traits and symptoms linked to eye illnesses. This thorough annotation process is critical because it ensures that AI models obtain high-quality, accurately labeled data. `,
      img: eye_cell_analysis,
      imgSmall: eye_cell_analysis_sm,
    },
    {
      id: 2,
      headinh1: "Fetal Brain Labeling",
      heading2: "",
      content: `AI-enhanced brain care for patients helps identify various brain disorders. We annotate scanned brain images, which help determine brain diseases. We perform the labelings required to train and evaluate ML models capable of analysing MRI images and detecting tumour structures.`,
      img: foetal_brian_labeling,
      imgSmall: foetal_brian_labeling_sm,
    },
    {
      id: 3,
      headinh1: "Medical Records Documentation ",
      heading2: "",
      content: `Medical records can be huge, ranging from patients' personal details to their medical histories. We accurately label them to process quality training data for training in computer vision and NLP systems used in medical data handling. This annotated documentation not only ensures the integrity and accuracy of patient information but also serves as the foundation for the development of advanced healthcare technologies.`,
      img: medical_records_documentation,
      imgSmall: medical_records_documentation_sm,
    },
    {
      id: 4,
      headinh1: "Diabetic Retinopathy",
      heading2: "",
      content: `We enable AI-driven technologies to detect nuanced patterns and abnormalities that the human eye may miss by exploiting these annotated datasets. At our core, we recognise the critical importance of precision and accuracy in diagnosing diabetic diseases. Through meticulous medical data annotation, we transform raw retinal images into a wealth of structured information, essential for advanced diagnostic tools. Our dedicated team of experts annotates and ensures that every subtle detail within these images is accurately labeled.`,
      img: diabetic_retinopathy,
      imgSmall: diabetic_retinopathy_sm,
    },
    {
      id: 5,
      headinh1: "Teeth and Gum Labeling",
      heading2: "",
      content: `AI supports dentistry for long-term patient outcomes. AI-driven dental imaging helps to make sense of data quickly. We analyse the radiographs and tooth images and label them using various labeling techniques.`,
      img: teeth_and_gum_labeling,
      imgSmall: teeth_and_gum_labeling_sm,
    },

    {
      id: 6,
      headinh1: "Tissue Labeling ",
      heading2: "",
      content: `Tissue labeling is at the forefront of enhancing comprehension of diseases, expediting drug discovery, and enhancing patient care. Utilising our medical data annotation services, we expertly label a diverse range of medical data, encompassing histological images, pathology slides, and microscopic tissue images. Our services enable medical experts to delve into intricate biological mechanisms by precisely annotating crucial facts, including cell types, topologies, and abnormalities. `,
      img: tissue_labeling,
      imgSmall: tissue_labeling_sm,
    },
    {
      id: 7,
      headinh1: "Cell & Pipette Labeling",
      heading2: "",
      content: `Cell and pipette labeling are important in the medical industry because they ensure accuracy and precision in a variety of research and diagnostic applications. We focus our specialised medical data annotation services on labeling critical biological components such as cells and pipettes.  Our experience in cell labeling includes annotating various cell types, structures, and cellular interactions.`,
      img: cell_pipette_labeling,
      imgSmall: cell_pipette_labeling_sm,
    },
    {
      id: 8,
      headinh1: "Baby Keypoint",
      heading2: "",
      content: `Baby keypoint annotation, a critical part of AI in healthcare, is the exact detection and labeling of key locations on a baby's body. Our annotation services are useful in paediatric healthcare since they allow for reliable analysis of developmental milestones, monitoring of growth patterns, and detecting musculoskeletal diseases.`,
      img: baby_keypoint,
      imgSmall: baby_keypoint,
    },
    {
      id: 9,
      headinh1: "Medical Instrument Labeling",
      heading2: "",
      content: `Our skilled team annotates a wide range of medical instruments, from surgical tools to diagnostic equipment, ensuring perfect identification and labeling for every instrument. Our careful annotation approach serves as a foundation, supporting medical training programmes, streamlining inventory management, and improving surgical processes. `,
      img: medical_instrument_labeling,
      imgSmall: medical_instrument_labeling_sm,
    },
    {
      id: 10,
      headinh1: "Cell Labeling",
      heading2: "",
      content: `We label various microscopic cell images, including nuclei fluorescence images, cell fluorescence images, phase-contrast images, and UV images. These images play a crucial role in the detection and analysis of diseases. Through precise annotation, we ensure accurate identification and categorization of cellular structures, aiding in the advancement of disease detection and analysis techniques.`,
      img: cell_labeling,
      imgSmall: cell_labeling_sm,
    },
    {
      id: 11,
      headinh1: "Surgeons & Robot Labeling",
      heading2: "",
      content: `Label surgeons, robots, tools, and equipment in provided frames. By accurately annotating these elements, we enhance the understanding and analysis of surgical procedures involving robotic assistance. Through precise labeling, we enable the development of advanced surgical techniques and contribute to the improvement of robotic surgical systems, ultimately enhancing patient outcomes and surgical efficiency.`,
      img: surgeons_robot_labeling,
      imgSmall: surgeons_robot_labeling_sm,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX);
    setDragging(true);
  };

  const handleDragMove = (e) => {
    if (dragging) {
      const dragCurrentX = e.clientX || e.touches[0].clientX;
      const dragDistance = dragStartX - dragCurrentX;
      if (dragDistance > 100 && currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setDragging(false);
      } else if (dragDistance < -100 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setDragging(false);
      }
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  // ------------ transform value for different screen sizes---------------
  const [translateXValue, setTranslateXValue] = useState(0);

  useEffect(() => {
    const updateTranslateValue = () => {
      if (window.innerWidth >= 1734) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 70.8); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 77.9); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 77.9);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 86.1);
      }
    };

    updateTranslateValue();
    window.addEventListener("resize", updateTranslateValue);

    return () => window.removeEventListener("resize", updateTranslateValue);
  }, [currentIndex]);

  // ---------------End of transform value section-------------------

  // below md block
  const [cardss, setCard] = useState(data.slice(0, 2));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? data.slice(0, 2) : data);
    setShowAll(!showAll);
  };
//drag animation..................../////////////////////////////////

const [blobColor, setBlobColor] = useState("#0C9DFC"); // Default white
const handleMouseEnterText = () => setBlobColor("#02BAE2"); // White for text section
const handleMouseEnterImage = () => setBlobColor("#0C9DFC"); // Blue for image section

const jellyRef = useRef(null);
const textRef = useRef(null);
const pos = useRef({ x: 0, y: 0 }).current;
const vel = useRef({ x: 0, y: 0 }).current;
const [isMouseInsideCarousel, setIsMouseInsideCarousel] = useState(false);

useEffect(() => {
  const setFromEvent = (e) => {
    if (!carouselRef.current) return;
    const carouselRect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - carouselRect.left;
    const y = e.clientY - carouselRect.top;

    // Check if the mouse is inside the carousel
    if (
      x >= 0 &&
      x <= carouselRect.width &&
      y >= 0 &&
      y <= carouselRect.height
    ) {
      setIsMouseInsideCarousel(true); // Show blob

      gsap.to(pos, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        onUpdate: () => {
          vel.x = e.clientX - pos.x;
          vel.y = e.clientY - pos.y;
        },
      });

      // loop();
    } else {
      setIsMouseInsideCarousel(false); // Hide blob when outside
    }
  };

  window.addEventListener("mousemove", setFromEvent);
  return () => {
    window.removeEventListener("mousemove", setFromEvent);
  };
}, [pos,vel]);

//custom cursor
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", updateCursorPosition);
  return () => {
    window.removeEventListener("mousemove", updateCursorPosition);
  };
}, []);

// End drag animation.....................///////////////////////////////

  return (
    <section className="md:mt-5 pb-14 select-none font-primary-regular">
       <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          ref={jellyRef}
          className="jelly-blob"
          style={{
            backgroundColor: blobColor,
            visibility: isMouseInsideCarousel ? "visible" : "hidden",
          }}
        >
          <div ref={textRef} className="inside-text">
            <p>Drag</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-[#37508A]">
        <div className="responsive-section-container">
          {/* large screen title */}
          <h2 className="hidden sm:block text-center mb-3 lg:mb-5 uppercase heading-h2">
            RECENT DATA <br />
            LABELING PROJECTS IN HEALTHCARE
          </h2>

          {/* medium screen title */}
          <h2 className="block sm:hidden text-center uppercase heading-h2 mb-2">
            RECENT DATA LABELING PROJECTS IN HEALTHCARE
          </h2>
        </div>

        <div className="text-center mx-auto container">
          <div className="responsive-section-container">
            <ReadMoreLessParagraph
              id="healthcare_data_labelling"
              charLimit={charLimit}
              readMoreText={"Read more"}
              readLessText={"Read less"}
              readLessClassName="paragraph text-[#20B3F1]"
              readMoreClassName="paragraph text-[#20B3F1]"
            >
              <p>
                The link between AI and annotated data increases the overall
                medical technology. Datasets generated from various AI models
                help train different healthcare models. Annotated data generated
                from AI models facilitates continuous learning and improvement
                of healthcare algorithms.
              </p>{" "}
              <br />
              <p>
                The healthcare sector benefits from more exact diagnoses,
                enhanced patient management, and the creation of cutting-edge
                healthcare solutions by utilising data annotation services in
                various specific medical contexts. Here are our use cases to
                show how medical data annotation services are being utilised in
                the medical field.
              </p>
            </ReadMoreLessParagraph>
          </div>
        </div>
        <div
          className="carousel-cursor lg:mt-4 2xl:mt-8 p-4 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 2xl:pl-28 cursor-grab"
          style={{ position: "relative", left: "0px", top: "0px" }}
          ref={carouselRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="carousel-inner gap-6"
            style={{
              display: "flex",
              transition: dragging ? "none" : "transform 0.5s ease",
              transform: `translateX(${translateXValue}%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                className="shrink-0 lg:w-[85%] xl:w-[78%] 2xl:w-[72%]"
                key={index}
              >
                <div className="relative w-full">
                  <img
                    src={bgimageCard}
                    alt="Background"
                    className="w-full h-auto rounded-box"
                  />
                  <div className="absolute inset-0 flex">
                    <div className="w-[60%] pl-10 pr-10 2xl:pl-24 2xl:pr-20 text-white overflow-hidden text-left"
                    onMouseEnter={handleMouseEnterText}>
                      <img
                        src={vector3}
                        className="lg:-mt-40 2xl:-mt-36 -ml-56 2xl:-ml-64"
                        alt=""
                      />
                      <img
                        src={vector4}
                        className="lg:-mt-28 xl:-mt-20 2xl:-mt-20 mb-5"
                        alt=""
                      />
                      <img src={vector2} className="absolute ml-96" alt="" />
                      <h3 className="heading-h3 2xl:text-[40px] leading-[45px] 2xl:mt-10">
                        {item.headinh1} <br />
                        {item.heading2}
                      </h3>
                      <p className="mt-5 lg:text-[16px] xl:text-[18px] 2xl:text-[19px]">
                        {item.content}
                      </p>
                      <img
                        src={vector1}
                        className="ml-[278px] xl:ml-[420px] absolute -bottom-24 z-0"
                        alt=""
                      />
                    </div>
                    <div className="w-[40%] z-10 relative ml-1"
                      onMouseEnter={handleMouseEnterImage}
                      >
                      <img
                        src={item.img}
                        className="pointer-events-none h-full w-full rounded-[10px]"
                        alt=""
                      />
                      <img
                        src={imgbg}
                        className="pointer-events-none absolute top-0 rounded-[10px] h-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center p-4 pb-5 lg:p-10 hidden lg:hidden">
          {cardss.map((item, index) =>
            item.id % 2 == 0 ? (
              <div
                className="bg-linear-to-r from-[#02B9E2] to-[#0280FB] text-white text-left rounded-lg"
                key={index}
              >
                <div className="flex">
                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full object-cover rounded-lg"
                    />
                    <img
                      src={imgbg}
                      className="absolute inset-0 h-full object-cover rounded-lg w-full"
                      alt=""
                    />
                  </div>
                  <div className="w-[60%] pl-5 pr-5 pb-5">
                    <img
                      src={vector3}
                      className="-mt-36 ml-64 rotate-90"
                      alt=""
                    />
                    <img src={vector2} className="ml-72 w-10" alt="" />
                    <img src={vector4} className="-mt-40 ml-40" alt="" />
                    <h3 className="heading-h3">
                      {item.headinh1} {item.heading2}
                    </h3>
                    <div className="mt-2 text-[18px]">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"....Read more"}
                        readLessText={"....Read less"}
                        readMoreClassName="paragraph"
                        readLessClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="bg-linear-to-r from-[#02B9E2] to-[#0280FB] text-white text-left rounded-lg"
                key={index}
              >
                <div className="flex">
                  <div className="w-[60%] pl-5 pr-5 pb-5">
                    <img src={vector3} className="-mt-36 -ml-40" alt="" />
                    <img src={vector2} className="ml-72 w-10" alt="" />
                    <img src={vector4} className="-mt-40 ml-40" alt="" />
                    <h3 className="heading-h3">
                      {item.headinh1} {item.heading2}
                    </h3>
                    <div className="mt-2 text-[18px]">
                      <ReadMoreLess
                        id={item.headinh1}
                        charLimit={400}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="paragraph"
                        readLessClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>

                  <div className="w-[40%] z-10 relative">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full object-cover rounded-lg"
                    />
                    <img
                      src={imgbg}
                      className="absolute top-0 object-cover rounded-lg h-full w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="sm:block grid responsive-section-container mt-2 pb-5 lg:p-10 md:hidden lg:hidden">
          {cardss.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="flex flex-col">
                <div className="z-10 relative">
                  <img
                    src={item.imgSmall}
                    alt=""
                    className="h-60 w-full object-cover rounded-t-xl"
                  />
                  <img
                    src={imgbg}
                    className="absolute inset-0 h-60 w-full object-cover rounded-t-xl"
                    alt=""
                  />
                </div>
                <div className="-mt-1 text-white text-left p-3 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-lg">
                  <h3 className="heading-h3 font-primary-medium mb-1 mt-2">
                    {item.headinh1} {item.heading2}
                  </h3>
                  <ReadMoreLess
                    id={item.headinh1}
                    charLimit={180}
                    readMoreText={"Read more"}
                    readLessText={"Read less"}
                    readMoreClassName="paragraph"
                    readLessClassName="paragraph"
                  >
                    {item.content}
                  </ReadMoreLess>
                </div>
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
              className={`bg-[#FFFBF0] border border-[#13B2F5] text-[#37508A] text-[12px] md:text-[14px] rounded-full flex p-3 px-5 md:px-5 items-center transition-all duration-300 ease-in-out ${
                showAll
                  ? "w-[150px] md:w-[160px] group-hover:w-[110px] md:group-hover:w-[130px]"
                  : "w-[140px] md:w-[150px] group-hover:w-[100px] md:group-hover:w-[110px]"
              }`}
            >
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
            <span className="relative w-[30px] h-[30px] md:w-[35px] md:h-[35px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-8 group-hover:ml-2 transition-all duration-300 ease-in-out">
              <img
                src={arrow}
                alt=""
                className="w-4 md:w-5"
                style={{ fill: "blue" }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataLabelingProjects;
