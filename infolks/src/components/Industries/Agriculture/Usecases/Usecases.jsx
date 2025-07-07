import { useState, useRef, useEffect } from "react";
import "../agriculture.css";
import bgimageCard from "/industries/agriculture/icons/agriculture-industry-bgimage.svg";
import vector1 from "/industries/agriculture/icons/agriculture-industry-vector1.svg";
import vector2 from "/industries/agriculture/icons/Vector.png";
import vector3 from "/industries/agriculture/icons/vector1.png";
import vector4 from "/industries/agriculture/icons/vector2.png";
import imgbg from "/industries/agriculture/img-bg.png";
import ReadMoreLess from "../../../ReadMoreLess.jsx";
import arrow from "/home/icons/arrowRight.png";
import fruit_and_vegetable_labeling from "/industries/agriculture/fruit-and-vegetable-labeling.jpg";
import flowering_detection from "/industries/agriculture/flowering-detection.jpg";
import plant_disease_detection from "/industries/agriculture/plant-disease-detection.jpg";
import plant_disease_detection_sm from "/industries/agriculture/plant-disease-detection-sm.jpg";
import agriculture_product_quality_testing from "/industries/agriculture/agriculture-product-quality-testing.jpg";
import plantation_monitoring from "/industries/agriculture/plantation-monitoring.jpg";
import agriculture_robotics from "/industries/agriculture/agriculture-robotics.jpg";

const Usecases = () => {
  const data = [
    {
      id: 1,
      headinh1: "Fruit and",
      heading2: "Vegetable Labeling",
      content: `AI systems can properly detect and differentiate between various fruits and vegetables. This capacity is crucial for automating agricultural production processes, including sorting, grading, and quality control. AI systems may identify various fruits and vegetables quickly and reliably by carefully annotating enormous databases with accurate labels. Training data is thus processed to enable tracing modules in Agri-Tech used for continuous field analysis.`,
      img: fruit_and_vegetable_labeling,
    },
    {
      id: 2,
      headinh1: "Flowering",
      heading2: "Detection",
      content: `Flowering detection using data annotation represents an innovative technology that is revolutionising crop management in the agriculture industry. Intricate details of numerous flowering stages in plants are properly labeled by using various data annotation techniques. Agricultural professionals can integrate this precisely labeled data into AI systems by leveraging our annotation expertise. Through the precise labeling of relevant data, we enable the development of highly accurate AI models.`,
      img: flowering_detection,
    },
    {
      id: 3,
      headinh1: "Plant ",
      heading2: "Disease Detection",
      content: `Plant diseases indicate an enormous risk to global food security. Timely and accurate detection of these diseases is critical for farmers to take preventive measures and protect their crops. We employ advanced data annotation techniques to generate robust and reliable datasets for plant disease identification. To enhance AI in agriculture, our experts annotate huge volumes of agricultural data in order to train machine learning algorithms. `,
      img: plant_disease_detection,
      imgSmall: plant_disease_detection_sm,
    },
    {
      id: 4,
      headinh1: "Agriculture Product",
      heading2: "Quality Testing",
      content: `Accuracy and speed are essential in the ever-changing agricultural environment. Our dedication to quality motivates us to use data annotation as a powerful tool in quality control. Our data annotation expertise enables us to provide unique solutions for agricultural product quality testing. The precise annotation ensures that agricultural goods are precisely annotated based on quality factors such as size, colour, shape, growth, and defects. This precision is critical in defining product quality requirements.`,
      img: agriculture_product_quality_testing,
    },
    {
      id: 5,
      headinh1: "Plantation",
      heading2: "Monitoring ",
      content: `Healthy crops are essential for a thriving agricultural industry. Our data annotation services support the collection and annotation of crop yield data. We use precise data annotation to monitor crop health accurately, analysing data on diseases, pests, and overall vitality. This empowers them to take timely action, preventing yield losses etc. We also optimise irrigation by annotating relevant data and ensuring crops receive the right amount of water for conservation and healthy growth. `,
      img: plantation_monitoring,
    },
    {
      id: 6,
      headinh1: "Agricultural",
      heading2: "Robotics ",
      content: `Accuracy and reliability are essential in agricultural robotics. Our skilled annotators mark data carefully, allowing for smooth interaction with robotic systems. By providing precise annotations, we empower agricultural robots to operate efficiently, ensuring enhanced productivity and precision in every task. `,
      img: agriculture_robotics,
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
        setTranslateXValue(-currentIndex * 68); // Adjust value as needed
      } else if (window.innerWidth >= 1536) {
        // Large devices (lg breakpoint)
        setTranslateXValue(-currentIndex * 75.7); // Adjust value as needed
      } else if (window.innerWidth >= 1280) {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 75.7);
      } else {
        // Small & medium devices
        setTranslateXValue(-currentIndex * 84.7);
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

  return (
    <section className="md:mt-5 select-none font-primary-regular">
      <div className="flex flex-col justify-center items-center text-[#37508A]">
        <div className="responsive-section-container">
          {/* large screen title */}
          <h2 className="hidden sm:block text-center mb-3 lg:mb-5 uppercase heading-h2 lg:leading-[50px] 2xl:leading-[63px]">
            OUR USECASES FOR AI <br /> IN THE AGRICULTURE INDUSTRY
          </h2>

          {/* medium screen title */}
          <h2 className="block sm:hidden text-center uppercase heading-h2 mb-2 lg:leading-[50px] 2xl:leading-[63px]">
            OUR USECASES FOR AI IN THE AGRICULTURE INDUSTRY
          </h2>
        </div>

        <div className="text-center responsive-section-container">
          <p className="paragraph ">
            Data annotation and labeling are crucial to enhancing AI in
            agriculture. The expertise of data annotators plays a vital role in
            the field of AI in agriculture. Exploring these use cases gives you
            a thorough understanding of how our experience in data annotation
            might benefit your precision agriculture processes.
          </p>
        </div>

        <div
          className="carousel lg:mt-4 2xl:mt-8 p-4 space-x-8 rounded-box z-0 hidden lg:block overflow-hidden lg:pl-14 2xl:pl-28 cursor-grab"
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
                    <div className="w-[60%] pl-10 pr-10 2xl:pl-24 2xl:pr-20 text-white overflow-hidden text-left">
                      <img
                        src={vector3}
                        className="lg:-mt-40 2xl:-mt-36 -ml-56 2xl:-ml-64"
                        alt=""
                      />
                      <img
                        src={vector4}
                        className="lg:-mt-32 xl:-mt-20 2xl:-mt-20 mb-5"
                        alt=""
                      />
                      <img src={vector2} className="absolute ml-96" alt="" />
                      <h3 className="heading-h3 2xl:text-[40px] leading-[45px] 2xl:mt-10">
                        {item.headinh1} <br />
                        {item.heading2}
                      </h3>
                      <p className="mt-2 xl:mt-5 lg:text-[16px] xl:text-[18px] 2xl:text-[19px]">
                        {item.content}
                      </p>
                      <img
                        src={vector1}
                        className="ml-[278px] xl:ml-[420px] absolute -bottom-24 z-0"
                        alt=""
                      />
                    </div>
                    <div className="w-[40%] z-10 relative">
                      <img
                        src={item.img}
                        className="h-full w-full object-cover rounded-[10px]"
                        alt=""
                      />
                      <img
                        src={imgbg}
                        className="absolute top-0 rounded-[10px] h-full w-full"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:grid grid-cols-1 gap-6 justify-center items-center p-3 pb-5 lg:p-10 hidden lg:hidden mx-auto container">
          {cardss.map((item, index) =>
            item.id % 2 == 0 ? (
              <div
                className="bg-linear-to-r from-[#02B9E2] to-[#0280FB] text-white text-left rounded-lg"
                key={index}
              >
                <div className="flex">
                  <div className="w-[40%] z-10 relative rounded-lg">
                    {item.imgSmall ? (
                      <img
                        src={item.imgSmall}
                        alt=""
                        className="h-full object-cover rounded-lg"
                      />
                    ) : (
                      <img
                        src={item.img}
                        alt=""
                        className="h-full w-full object-cover rounded-lg"
                      />
                    )}
                    <img
                      src={imgbg}
                      className="absolute top-0 h-full w-full object-cover rounded-lg"
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
                        id="section8"
                        charLimit={350}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readLessClassName="paragraph"
                        readMoreClassName="paragraph"
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
                        id="section9"
                        charLimit={350}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readLessClassName="paragraph"
                        readMoreClassName="paragraph"
                      >
                        {item.content}
                      </ReadMoreLess>
                    </div>
                  </div>

                  <div className="w-[40%] z-10 relative rounded-lg">
                    {item.imgSmall ? (
                      <img
                        src={item.imgSmall}
                        alt=""
                        className="h-full object-cover rounded-lg"
                      />
                    ) : (
                      <img
                        src={item.img}
                        alt=""
                        className="h-full object-cover rounded-lg"
                      />
                    )}
                    <img
                      src={imgbg}
                      className="absolute top-0 h-full w-full object-cover rounded-lg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="grid gap-3 pb-5 p-2 md:hidden lg:hidden mx-auto container">
          {cardss.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <div className="z-10 relative">
                  {item.imgSmall ? (
                    <img
                      src={item.imgSmall}
                      alt=""
                      className="h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover rounded-lg"
                    />
                  )}
                  <img
                    src={imgbg}
                    className="absolute inset-0 rounded-t-xl w-full h-full"
                    alt=""
                  />
                </div>
                <div className="-mt-1 text-[16px] text-white text-left p-4 bg-linear-to-r from-[#02B9E2] to-[#0280FB] rounded-b-xl">
                  <h3 className="heading-h3 mb-1">
                    {item.headinh1}
                    {item.heading2}
                  </h3>
                  <ReadMoreLess
                    id="section10"
                    charLimit={200}
                    readMoreText={"Read more"}
                    readLessText={"Read less"}
                    readLessClassName="paragraph"
                    readMoreClassName="paragraph"
                  >
                    {item.content}
                  </ReadMoreLess>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:hidden mx-auto container">
          <div
            className="flex group justify-center items-center"
            onClick={handleViewAll}
          >
            <button className="border border-[#13B2F5] text-[#37508A] text-[14px] md:text-[16px] rounded-full flex p-4 px-8  w-[180px] md:w-[200px] items-center transition-all duration-300 ease-in-out">
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
            <span className="relative w-[50px] h-[50px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-12">
              <img src={arrow} alt="" className="w-6" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usecases;
