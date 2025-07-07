import ai_innovations from "/About/infolks-empowering-ai-innovations/infolks-empowering-ai-innovations.mp4";

const AI_Innovations = () => {
  return (
    <section className="w-full section-top">
      <div className="flex flex-col items-center lg:flex-row mx-auto container section-container gap-20 2xl:gap-58">
     

        <div className="lg:w-1/2 ">
          <h2 className="hidden lg:block heading-h2 text-center lg:text-left mb-5 2xl:leading-[60px] leading-[50px] w-full lg:w-96">
            INFOLKS EMPOWERING AI INNOVATIONS
          </h2>
          <h2 className="lg:hidden heading-h2 text-center lg:text-left mb-5 2xl:leading-[60px] w-full lg:w-96">
            INFOLKS EMPOWERING <br/> AI INNOVATIONS
          </h2>
          <div
          className="block lg:hidden flex  justify-center  items-center overflow-hidden"
          style={{
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="h-auto border-none p-0 shadow-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover border-none p-0 shadow-none"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                display: "block",
                willChange: "transform",
              }}
            >
              <source src={ai_innovations} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
          <p className="mt-4 2xl:mt-5 mb-5 paragraph">
            Our commitment to ethical AI practices ensures that our
            breakthroughs benefit society as a whole. Infolks persists in
            pioneering AI innovation, driven by a goal of a brighter, more
            inclusive, and sustainable future for all. AI in real-world systems
            and applications must deal with huge volumes of data that can be
            challenging to process. Our drive for continual improvement enables
            us to provide businesses with breakthrough AI/ML solutions that
            consistently produce the best quality results.
          </p>
        </div>
        <div className="hidden lg:flex flex items-center justify-center lg:justify-end">
          {/* <div className="w-full xl:w-[430px] xl:h-[430px]  lg:w-[427px] lg:h-[427px] h-[334px] w-[334px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={ai_innovations} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
          <div className="w-full xl:w-[424px] xl:h-[424px] lg:w-[427px] lg:h-[427px] h-[334px] w-[334px] border-none p-0 shadow-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover border-none p-0 shadow-none"
              style={{ transform: "translateZ(0)" }}
            >
              <source src={ai_innovations} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI_Innovations;
