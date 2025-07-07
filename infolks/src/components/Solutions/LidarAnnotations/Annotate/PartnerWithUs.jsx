import bgImage from "/icons/get-in-touch-bg.png";
import PrimaryButton from "../../../Common/button/PrimaryButton";

const PartnerWithUs = () => {

  return (
    <section className="flex justify-center items-center  font-primary-regular">
      <div className="relative w-full">
        {/* Gradient Background */}
        <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff] rounded-[16px] lg:rounded-[35px] flex justify-center items-center relative z-0">
          <img
            src={bgImage}
            alt="Your Image"
            className="w-full z-10 opacity-[0.3] h-40 md:h-44 lg:h-full rounded-[16px] lg:rounded-[35px]"
          />
          <div className="absolute inset-0 text-white z-20 text-center flex flex-col md:gap-2 lg:gap-4 justify-center items-center">
            <h3 className="heading-h3 uppercase font-primary-medium">
              Looking for precise Lidar annotation services?
            </h3>
            <PrimaryButton text={"PARTNER WITH US"} link={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
