import { useRef } from "react";
import "./style.css";
import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import nlp_services_with_trained_data from "/solutions/nlp/nlp-services-with-trained-data.jpg";
import nlp_services_with_trained_data_mob from "/solutions/nlp/nlp-services-with-trained-data-mob.jpg";

const NLPService = () => {
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
    <section>
      <div className="relative text-[#37508A] font-primary-regular lg:mb-20 md:-mt-5  mt-2 rounded-[10px] px-2 md:px-0">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] 2xl:h-[520px] object-cover rounded-[10px]"
          alt="Generative AI background"
        />
        <div className="flex justify-center items-center md:pt-5 xl:pt-0">
          <h2 className="heading-h2 absolute xl:top-10 2xl:top-2 top-0 md:top-4 flex justify-center items-center text-center pt-5 lg:pt-20 xl:pt-8 2xl:pt-16 uppercase w-[90%] lg:leading-[50px] 2xl:leading-[63px]">
            Enhance <br /> NLP Service With Trained Data
          </h2>
        </div>
        <div className="xl:px-28 lg:px-16 2xl:px-60 lg:py-0 md:mt-5 mt-10 lg:mt-12 xl:mt-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-28 sm:-mt-32 md:-mt-52 lg:-mt-80 xl:-mt-[17rem]">
            <div className="lg:w-[445px] lg:h-[523px]">
              <img
                src={nlp_services_with_trained_data}
                className="hidden lg:block h-full w-full rounded-xl object-cover"
                alt=""
              />
              <img
                src={nlp_services_with_trained_data_mob}
                className="block md:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
              <img
                src={nlp_services_with_trained_data_mob}
                              className="hidden md:block lg:hidden h-full w-full rounded-xl object-cover"
                              alt=""
                            />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-10 xl:px-20 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <div className="w-full text-center lg:text-left p-1">
                <p className="paragraph">
                  The AI-fueled NLP algorithms showcase an extraordinary
                  capability to untangle the complex layers within human
                  language. AI in NLP model training revolutionises industries,
                  from chatbots streamlining customer support to tailored
                  content suggestions. Its innovation potential spans diverse
                  sectors, driving transformative change.
                </p>
                <p className="paragraph mt-3">
                  Precise annotation of vast textual data enables AI systems to
                  navigate and understand human language. Our experienced team
                  of annotators tags and labels large amounts of textual data,
                  transforming it into a valuable resource for training AI
                  models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-section-container  p-4 lg:p-0 font-primary-regular text-[#37508A] ">
        <div className="flex flex-col font-primary-regular text-lg text-[#37508A]">
          <div
            className="flex overflow-x-scroll pb-10 hide-scroll-bar"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-10 w-full">
              <div className="relative group md:h-[100px] w-[90%] lg:w-[95%] mx-auto">
                <div
                  className={`w-[99%] lg:p-8 p-4 absolute top-0 ml-2 z-0 bg-[#FBF7ED] card-compact bg-base-100 mb-10 border rounded-2xl border-[#5F82CC] select-none `}
                >
                  <div className="flex justify-center items-center font-primary-regular">
                    <p className="paragraph">
                      As per the report, the global natural language processing
                      (NLP) market size is expected to reach USD 68.1 billion by
                      2028.
                    </p>
                  </div>
                </div>

                <div
                  className={`lg:p-8 p-4 w-[99%] bg-[#FBF7ED] bg-base-100 md:mb-10 border border-[#5F82CC] rounded-2xl z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out`}
                >
                  <div className="flex justify-center items-center font-primary-regular">
                    <p className="paragraph">
                      As per the report, The global natural language processing
                      (NLP) market size is expected to reach USD 68.1 billion by
                      2028.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NLPService;
