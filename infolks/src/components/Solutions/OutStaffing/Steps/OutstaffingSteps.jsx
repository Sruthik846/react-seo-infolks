import { useRef } from "react";
import "./style.css";

const OutstaffingSteps = () => {
  const data = [
    {
      id: 1,
      title: "Project Requirement Collection",
      title1: "Project Requirement",
      title2: "Collection",
      content:
        "We analyze project requirements and project specifics to ensure an ideal match for each client's project. Our detailed approach guarantees a precise alignment of skills and expertise, ensuring the perfect fit for your unique project objectives. ",
    },
    {
      id: 2,
      title: "Selection",
      title1: "Selection",
      content:
        "Our experts search through resource pools, leveraging vast databases to identify staff that meet client specifications. Through rigorous evaluation, we pinpoint employees whose skills precisely match our clients' criteria, offering a tailored selection of top-tier professionals for project needs.",
    },
    {
      id: 3,
      title: "Recruitment & Confirmation",
      title1: "Recruitment &",
      title2: "Confirmation",
      content:
        "Selected the right fit candidates through an interview. Once the client confirms the selected candidates, the client can hire the employees to do their projects by following proper agreement with our company.",
    },
  ];
  // const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <section className="mx-auto container p-2 md:p-4 lg:p-0 lg:pt-20 font-primary-regular text-[#37508A] bg-[#FFFBF0] ">
      <div>
        <div className="flex flex-col font-primary-regular text-[#37508A] responsive-section-container">
          <div
            className="flex overflow-x-scroll md:pb-10 hide-scroll-bar"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-10 w-full my-5 md:my-0 md:h-[210px] lg:h-[200px] items-center">
              <div className="relative group  w-[99%]">
                <div
                  className={`w-[95%] md:w-[99%] p-4 lg:p-8 absolute top-0 ml-2 z-0 bg-[#FBF7ED] card-compact bg-base-100 mb-5 border rounded-2xl border-[#5F82CC] select-none `}
                >
                  <div className="flex justify-center items-center font-primary-regular">
                    <p className="paragraph">
                      At Infolks, our streamlined outstaffing process integrates
                      skilled professionals seamlessly into your team. We
                      analyze your project needs, source tailored candidates,
                      and ensure efficient onboarding. Emphasizing clear
                      communication and transparency, we deliver a collaborative
                      outstaffing experience aligned with your objectives and
                      timelines.
                    </p>
                  </div>
                </div>

                <div
                  className={`p-4 lg:p-8 w-[95%] md:w-[99%] bg-[#FBF7ED] bg-base-100  border border-[#5F82CC] rounded-2xl z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out`}
                >
                  <div className="flex justify-center items-center font-primary-regular">
                    <p className="paragraph">
                      At Infolks, our streamlined outstaffing process integrates
                      skilled professionals seamlessly into your team. We
                      analyze your project needs, source tailored candidates,
                      and ensure efficient onboarding. Emphasizing clear
                      communication and transparency, we deliver a collaborative
                      outstaffing experience aligned with your objectives and
                      timelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="lg:p-10 flex flex-col justify-center items-center w-full">
          <h2 className="text-center mb-4 heading-h2">OUR OUTSTAFFING STEPS</h2>
          {/* large screen */}
          <div className="mt-10 flex-wrap justify-center hidden lg:flex">
            {data.map((item, index) => (
              <div
                className="relative shrink-0 p-10 2xl:h-[600px] xl:h-[450px] h-[500px] 2xl:w-[300px] xl:w-[250px] w-[200px] transition-all 2xl:hover:w-[600px] xl:hover:w-[450px] hover:w-[500px] group  ease-in-out duration-500"
                key={index}
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-linear-to-r from-[#B2D2FF] to-[#D6E3FF] group-hover:bg-linear-to-b group-hover:from-[#0b98fde8] group-hover:to-[#21b6f6c2] rounded-[50%] 2xl:h-[600px] xl:h-[450px] h-[500px] 2xl:w-[300px] xl:w-[250px] w-[200px] 2xl:group-hover:w-[600px] xl:group-hover:w-[450px] group-hover:w-[500px] absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500"></div>
                <div className="h-full flex items-center justify-center w-full">
                  <div className="text-center z-0 -rotate-90 group-hover:rotate-0 font-primary-regular text-[20px]">
                    <h3 className="heading-h4 px-10 group-hover:hidden uppercase transition-transform duration-500 w-[500px]">
                      {item.title}
                    </h3>
                    <div className="hidden group-hover:p-10 xl:group-hover:p-5 2xl:group-hover:p-10 group-hover:flex flex-col items-center w-full p-2 text-center group-hover:text-white transition-transform duration-2000 overflow-hidden">
                      <div className="h-14 w-14 rounded-full bg-linear-to-b from-[#21b6f6c2] to-[#21b6f6c2] flex justify-center items-center mb-2">
                        {item.id}
                      </div>
                      <h5
                        className="heading-h4 bg-[#50c8fb] rounded-xl w-auto mt-4 uppercase px-10 py-2 whitespace-nowrap min-w-[200px] text-center transition-all duration-1000"
                      >
                        {item.title1}
                      </h5>

                      {item.title2 && (
                        <h5 className="heading-h4 bg-[#50c8fb] rounded-xl w-auto uppercase mb-1 px-4 py-2 whitespace-nowrap min-w-[200px] text-center transition-all duration-1000">
                          {item.title2}
                        </h5>
                      )}
                      <p className="text-base xl:text-[16px] 2xl:text-lg 2xl:mt-5 ">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* small and medium size screen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={`border border-[#5F82CC] rounded-lg p-4 ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                <h5 className="text-[19px] md:text-[22px]">{item.title}</h5>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-2">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutstaffingSteps;
