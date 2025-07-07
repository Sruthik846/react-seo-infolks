import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import generative_ai_solutions from "/solutions/generative-ai/generative-ai-solutions.jpg";
import generative_ai_solutions_mob from "/solutions/generative-ai/generative-ai-solutions-mob.jpg";

const AISolutions = () => {
  return (
    <section>
             <div className="relative text-[#37508A] font-primary-regular lg:mb-10 md:-mt-5 mt-2 rounded-[10px] px-2 md:px-0">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] xl:h-[450px] 2xl:h-[520px] object-cover rounded-[10px]"
          alt="Generative AI background"
        />
        <h2 className="heading-h2 absolute xl:top-10 2xl:top-2 top-0 md:top-4 flex justify-center items-center text-center w-full pt-5 lg:pt-20 xl:pt-10 2xl:pt-28 uppercase">
          Our Generative AI Solutions
        </h2>

        <div className="lg:px-20 xl:flex justify-center items-center lg:py-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-28 sm:-mt-32 md:-mt-52 lg:-mt-80 xl:-mt-[17rem]">
            <div className="lg:w-[445px] lg:h-[523px] h-auto">
              <img
                src={generative_ai_solutions}
                className="hidden lg:block h-full w-full rounded-xl object-cover"
                alt="AI Excellence Image"
              />
                 <img
                src={generative_ai_solutions_mob}
                className="block lg:hidden h-full w-full rounded-xl object-cover"
                alt="AI Excellence Image"
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-5 xl:px-10 2xl:px-32 items-center lg:items-start">
              <img
                src={blue_img}
                className="w-8 hidden lg:block"
                alt="Blue Decorative Icon"
              />
              <div className="w-full text-center lg:text-left p-1">
                <p className="paragraph">
                  LLM and RLHF represent recent advancements or specialised
                  solutions within generative AI. Providing additional context
                  or information about these innovations enhances comprehension
                  regarding their functions and significance within the domain
                  of generative AI.
                </p>
                <p className="mt-4 paragraph">
                  Explore our cutting-edge generative AI solutions, LLM, and
                  RLHF. These innovations redefine creativity and predictive
                  modeling. The Largest Language Model excels in language
                  generation, while RLHF revolutionises real-time forecasting.
                  Experience the future of AI solutions with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
