import ai_excellence from "/About/ai_excellence.png";
import annotation_services from "/About/annotation-services.jpg";
import annotation_services_mob from "/About/annotation-services-mob.jpg";
import bg from "/About/bg.png";
import blue_img from "/About/blue_img.svg";
import "./style.css";

const AI_Excellence = () => {
  return (
    <section className="md:-mt-10">
      <div
        className="relative h-[353px] sm:h-[536px] lg:h-[731px]"
        style={{
          backgroundImage: `url(${ai_excellence})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <img
          src={bg}
          alt="Overlay Image"
          className="opacity-[0.5] h-full w-full"
        />
      </div>

      <div className="mt-[-343px] sm:mt-[-526px] lg:mt-[-721px]">
          <h2 className="flex justify-center items-center text-center w-full z-10 heading-h2 2xl:leading-[60px] lg:leading-[50px] mt-8 sm:mt-20 md:pt-10">
            ACHIEVING AI EXCELLENCE <br/> THROUGH PRECISE DATA ANNOTATION
            SERVICES
          </h2>

          <div className="mt-8 sm:mt-20 pt-5 lg:px-10 2xl:px-40 px-5">
            <div className="bg-[#F9F5E9] flex flex-col lg:flex-row rounded-2xl relative shadow-lg p-4 lg:p-3 gap-5">
              <div className="lg:w-[445px] lg:h-[523px]">
                <img
                  src={annotation_services}
                  alt="AI Excellence Image"
                  className="hidden lg:block h-full w-full rounded-xl object-cover"
                />

                <img
                  src={annotation_services_mob}
                  alt="AI Excellence Image"
                  className="block lg:hidden h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex lg:flex-1 flex-col justify-center lg:gap-4 2xl:gap-8 md:p-5 xl:px-24 gap-5">
                <img
                  src={blue_img}
                  className="flex justify-start w-5 md:w-8"
                  alt="Blue Icon"
                />
                <p className="paragraph">
                  As a prominent data annotation service provider, we offer the
                  finest quality training in the data construction of AI and ML
                  modules for various industries. We combine innovation and data
                  excellence to provide accurate, high-quality, scalable, and
                  secure training data for AI/ML models. Since 2016, we have
                  been progressively working to meet the rising demand for data
                  annotation and other services.
                </p>
                <p className="paragraph">
                  Our team of dedicated experts has worked tirelessly to create
                  cutting-edge AI solutions that not only push the boundaries of
                  what&apos;s possible, but also address real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default AI_Excellence;
