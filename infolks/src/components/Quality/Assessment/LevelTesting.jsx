import { useState } from "react";
import bgImg from "/quality/level-testing-bg.png";
import levelsbg from "/quality/levels-bg.png";

const LevelTesting = () => {
  const data = [
    { id: 1, title: "ANNOTATORS", content: "Analyse and annotate each data" },
    {
      id: 2,
      title: " QUALITY APPROVERS",
      content: "Check the quality and gives approval",
    },
    {
      id: 3,
      title: "QUALITY MANAGERS",
      content:
        "Randomly check whole dataset to ensure the precision of annotated data",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="text-[#37508A] mb-10 md:mb-20 font-primary-regular text-[19px] flex justify-center items-center">
      <div
        className="relative flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImg})`, height: "100%" }}
      >
        {/* <img src={bgImg} alt="" className="w-full" /> */}
        <div className="flex flex-col lg:flex-row gap-5 items-center top-5 p-5 md:p-16 lg:p-5 2xl:p-20">
          <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2 p-5 lg:p-10 2xl:p-20">
            <h2 className="lg:block hidden heading-h2 lg:w-80 mb-8 leading-[50px] 2xl:leading-[60px]">
              QUALITY ASSESSMENT: TRIPLE LEVEL TESTING
            </h2>
            <h2 className="lg:hidden heading-h2 lg:w-80 mb-8 leading-[40px]">
              QUALITY ASSESSMENT:<br></br> TRIPLE LEVEL TESTING
            </h2>
            <p className="lg:w-[90%] paragraph">
              Infolks is uncompromising in its dedication to providing the
              highest quality services. We have made it our mission to be a
              light of excellence in a world where precision and accuracy are
              important. We empower individuals and organizations to achieve
              their goals by upholding unwavering quality in all our evaluation
              processes.
            </p>
          </div>
          <div
            className="flex lg:w-1/2 relative justify-center items-center rounded-[15px] w-full"
            style={{ backgroundImage: `url(${levelsbg})`, height: "100%" }}
          >
            <div className="pt-5 pb-5 2xl:p-10 flex flex-col justify-center items-center w-full">
              <h5 className="text-center mb-4">
                We evaluate the quality of <br />
                annotated data by a Triple Level Quality check mechanism
              </h5>
              <div className="flex gap-1">
                {data.map((_, index) => (
                  <div
                    key={index}
                    className={`w-5 h-0.5 ${
                      hoveredIndex === index ? "bg-[#7FA5D7]" : "bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </div>
              <div className="mt-10 flex justify-center items-center flex-wrap flex-col md:flex-row">
                {data.map((item, index) => (
                  <div
                    className={`relative shrink-0 lg:p-10 
      h-[133px] md:h-[310px] 
      w-[250px] md:w-[133px] 
      transition-all duration-500 group
      ${
        hoveredIndex === index
          ? "h-[250px] md:w-[310px] lg:w-[200px] xl:w-[300px]"
          : "hover:w-[250px] md:hover:w-[310px] lg:hover:w-[200px] xl:hover:w-[300px]"
      }`}
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setHoveredIndex(index)}
                  >
                    <div
                      className={`bg-linear-to-r from-[#B2D2FF] to-[#D6E3FF] rounded-[50%] 
        h-[133px] md:h-[310px] 
        w-[250px] md:w-[133px] 
        absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500
        group-hover:bg-linear-to-b group-hover:from-[#5282c6de] group-hover:to-[#9dbfebde]
        ${
          hoveredIndex === index
            ? "bg-linear-to-b from-[#5282c6de] to-[#9dbfebde] h-[250px] md:w-[310px] lg:w-[200px] xl:w-[300px]"
            : "hover:w-[250px] md:hover:w-[310px] lg:hover:w-[200px] xl:hover:w-[300px]"
        }`}
                    ></div>
                    <div className="h-full flex items-center justify-center w-full">
                      <div
                        className={`text-center z-0 font-primary-regular text-[20px] transition-all duration-500 ${hoveredIndex === index ? "rotate-0" : "md:-rotate-90"} group-hover:rotate-0`}
                      >
                        <h5
                          className={`heading-h5 transition-all duration-500
  ${hoveredIndex === index ? "hidden" : ""}
`}
                        >
                          {item.title}
                        </h5>
                        <div
                          className={`transition-transform duration-500 flex-col items-center lg:w-full w-48 lg:p-2 text-center  ${
                            hoveredIndex === index
                              ? "flex text-white"
                              : "hidden group-hover:flex group-hover:text-white"
                          }`}
                        >
                          <div className="h-10 w-10 rounded-full bg-linear-to-b from-[#5282c691] to-[#9dbfeb8a] flex justify-center items-center mb-2">
                            {item.id}
                          </div>
                          <h5 className="heading-h5 bg-[#7BA4DA] rounded-lg w-full md:mt-2 lg:mt-4">
                            {item.title}
                          </h5>
                          <p className="paragraph lg:text-sm">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelTesting;
