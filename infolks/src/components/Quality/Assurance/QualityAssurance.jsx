import { useState } from "react";
import higherModalAccuracy from "/quality/higher-model-accuracy.jpg";
import buildingTrust from "/quality/building-trust-ensuring-reliability.jpg";
import costefficiency from "/quality/cost-efficiency.jpg";
import arrow_right from "/quality/icons/arrow_right.png";
import arrow_left from "/quality/icons/arow_left.png";

const QualityAssurance = () => {
  const data = [
    {
      id: 1,
      title: "Higher Model Accuracy",
      image: higherModalAccuracy,
      content: `It's imperative to underscore that data subjected to thorough review and rigorous quality checks serves as the cornerstone for the development of machine learning models that consistently outperform expectations.`,
    },
    {
      id: 2,
      title: "Building Trust and Ensuring Reliability ",
      image: buildingTrust,
      content: `Our clients can place absolute confidence in the annotated data, as it undergoes an accurate and stringent quality assessment process, guaranteeing its integrity and dependability.`,
    },
    {
      id: 3,
      title: "Cost-Efficiency",
      image: costefficiency,
      content: `By minimizing errors during the annotation phase, we not only realize immediate cost savings but also establish a robust foundation for long-term cost efficiency. This proactive approach diminishes the necessity for rework and promotes the seamless flow of processes downstream, ultimately optimizing resource allocation and project expenditures.`,
    },
  ];

  const [currentitem, setCurrentitem] = useState(data[0]);

  const nextClick = () => {
    const id = currentitem.id;
    const nextId = id % data.length; // Wrap around to the beginning if at the end
    setCurrentitem(data[nextId]);
    console.log("next", nextId);
  };

  const prevClick = () => {
    const id = currentitem.id;
    const prevId = (id - 2 + data.length) % data.length; // Wrap around to the end if at the beginning
    setCurrentitem(data[prevId]);
    console.log("prev", prevId);
  };

  return (
    <section className="text-[#37508A] pb-5 md:pb-16 lg:pb-20 font-primary-regular w-full px-5 md:px-16">
      <div>
        <h2 className="heading-h2 text-center mb-40">
          WHY QUALITY ASSURANCE ?
        </h2>
      </div>

      <div className="bg-linear-to-b from-[#37D5EE] to-[#038FFF] w-full flex flex-col lg:flex-row rounded-[10px] lg:gap-8 xl:gap-16">
        <div className="flex justify-center lg:justify-end lg:w-[50%]">
          <div className="bg-[#FFFBF0] h-[345px] md:h-[597px] 2xl:h-[683px] w-[90%] xl:w-[80%] p-5 -mt-28 lg:mb-28 rounded-[10px] z-10">
            <img
              src={currentitem.image}
              className="w-full h-full rounded-[10px] object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="lg:w-[50%] flex justify-center lg:justify-start">
          <div className="flex flex-col text-white w-[90%] xl:w-[80%] pb-10 relative">
            <div className="h-16 md:h-28 w-10 md:w-16 text-2xl pb-2 md:pb-4 rounded-b-lg -mt-2 md:mt-0 z-0 bg-[#49c2ff]/70 lg:bg-[#18ACF8]/20 flex flex-col items-center justify-end mb-5 lg:mb-10 2xl:mb-20">
              <h5 className="heading-h3">0{currentitem.id}</h5>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <div className="h-20 md:h-auto placecont-center lg:placecontent-start">
              <h3 className="heading-h3 2xl:w-60 border-b border-b-white pb-3 mb-5 text-center lg:text-left">
                {currentitem.title}
              </h3>
              </div>
              <p className="lg:w-[90%] 2xl:w-[80%] paragraph mb-5 h-full text-center lg:text-left">
                {currentitem.content}
              </p>
              <div className="flex gap-3 ">
                <img
                  src={arrow_left}
                  alt=""
                  onClick={prevClick}
                  className={` ${
                    currentitem.id < 2 ? "cursor-pointer" : "cursor-pointer"
                  }`}
                />
                <img
                  src={arrow_right}
                  alt=""
                  onClick={nextClick}
                  className={` ${
                    currentitem.id > 2 ? "cursor-pointer" : "cursor-pointer"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
