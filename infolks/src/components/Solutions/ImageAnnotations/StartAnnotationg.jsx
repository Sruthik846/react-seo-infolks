import bgImage from "/icons/get-in-touch-bg.png";
import PrimaryHoverWhiteButton from "../../Common/button/PrimaryHoverWhiteButton";

const StartAnnotationg = () => {
  return (
    <section className="flex justify-center items-center font-primary-regular">
      <div className="relative w-full z-20">
        {/* Gradient Background */}
        <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff] rounded-[25px] lg:rounded-[35px] flex justify-center items-center relative z-0">
          <img
            src={bgImage}
            alt="Your Image"
            className="w-full z-10 opacity-[0.3] h-40 md:h-44 lg:h-full rounded-[36px] lg:rounded-[35px]"
          />
          <div className="absolute inset-0 text-white z-20 text-center flex flex-col gap-2 lg:gap-4 justify-center items-center">
            <h3 className="heading-h3 uppercase md:mb-2 font-primary-medium">
              START ANNOTATING YOUR IMAGES
            </h3>
            <div className="flex justify-center">
            <PrimaryHoverWhiteButton text={"Contact Our Team"} link={"/contact"} />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartAnnotationg;
