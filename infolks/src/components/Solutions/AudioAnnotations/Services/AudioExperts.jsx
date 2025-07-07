import { useRef } from "react";
import audio_experts from "/solutions/audio-annotations/icon/audio-experts.svg";
import "./style.css";

const AudioExperts = () => {
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
    <section className="responsive-section-container p-2 md:p-6 font-primary-regular text-[#37508A] ">
      <div className="flex flex-col bg-[#FFFBF0] font-primary-regular text-[#37508A]">
        <div
          className="flex overflow-x-scroll hide-scroll-bar"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-10 h-[490px] md:h-[400px] lg:h-[220px] w-full">
            <div className="relative group w-[100%]">
              <div
                className={` w-[95%] md:w-[99%] p-5 absolute top-0 ml-2 z-0 bg-[#FBF7ED] card-compact bg-base-100 border rounded-2xl border-[#5F82CC] select-none`}
              >
                <div className="flex flex-col lg:flex-row md:gap-5 lg:gap-10 justify-center lg:items-center">
                  <div className="bg-[#e4e4e4b0] p-10 px-20 rounded-2xl justify-center items-center hidden lg:flex">
                    <img src={audio_experts} className="w-36" alt="" />
                  </div>

                  <div className="flex flex-row items-center gap-5 lg:hidden">
                    <div className="bg-[#e4e4e4b0] p-4 md:p-8 rounded-2xl flex justify-center items-center">
                      <img src={audio_experts} className="w-32" alt="" />
                    </div>
                    <h3 className="heading-h3">Audio Annotation Experts</h3>
                  </div>

                  <div>
                    <h3 className="heading-h3 hidden lg:block">
                      Audio Annotation Experts
                    </h3>
                    <p className="paragraph mt-1">
                      The expertise of our specialised team in the audio
                      annotation is pivotal for precisely labeling and
                      categorising audio data essential for machine learning.
                      Their proficiency ensures the development of top-tier
                      annotated datasets, forming the cornerstone for training
                      AI models. This team significantly enhances the accuracy
                      and performance of diverse AI applications reliant on
                      audio inputs.
                    </p>
                  </div>
                </div>
              </div> 

              <div
                className={`p-5 w-[95%] md:w-[99%] bg-[#FBF7ED] bg-base-100 border border-[#5F82CC] rounded-3xl z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out`}
              >
                <div className="flex flex-col lg:flex-row md:gap-5 lg:gap-10 justify-center lg:items-center">
                  <div className="bg-[#e4e4e4b0] p-10 px-20 rounded-2xl justify-center items-center hidden lg:flex">
                    <img src={audio_experts} className="w-36" alt="" />
                  </div>

                  <div className="flex flex-row items-center gap-5 lg:hidden">
                    <div className="bg-[#e4e4e4b0] p-4 md:p-8 rounded-2xl flex justify-center items-center">
                      <img src={audio_experts} className="w-32 lg:w-full" alt="" />
                    </div>
                    <h3 className="heading-h3">Audio Annotation Experts</h3>
                  </div>

                  <div>
                    <h3 className="heading-h3 hidden lg:block">
                      Audio Annotation Experts
                    </h3>
                    <p className="paragraph mt-1">
                      The expertise of our specialised team in the audio
                      annotation is pivotal for precisely labeling and
                      categorising audio data essential for machine learning.
                      Their proficiency ensures the development of top-tier
                      annotated datasets, forming the cornerstone for training
                      AI models. This team significantly enhances the accuracy
                      and performance of diverse AI applications reliant on
                      audio inputs.
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

export default AudioExperts;
