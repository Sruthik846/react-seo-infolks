import bgImage from "/icons/get-in-touch-bg.png";
import PrimaryButton from "../../../Common/button/PrimaryButton";

const GetStarted = () => {
  return (
    <section className="flex justify-center items-center font-primary-regular">
      <div className="relative w-full">
        {/* Gradient Background */}
        <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff] rounded-[16px] lg:rounded-[35px] flex justify-center items-center relative z-0">
          <img
            src={bgImage}
            alt="Your Image"
            className="w-full z-10 opacity-[0.3] h-52 lg:h-40 md:h-52 lg:h-60 xl:h-full rounded-[16px] lg:rounded-[35px]"
          />
          <div className="absolute inset-0 text-white z-20 text-center flex flex-col gap-2 lg:gap-4 justify-center items-center">
            <h3 className="heading-h3 md:mb-2 font-primary-medium w-[90%] lg:leading-[50px] 2xl:leading-[63px]">
              REVOLUTIONIZE YOUR <br />
              <span>BUSINESS WITH CUTTING-EDGE GENERATIVE AI</span>
            </h3>

            {/* button */}
            <div className="flex justify-center items-center">
              <PrimaryButton text={"GET STARTED NOW"} link={"/contact"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
