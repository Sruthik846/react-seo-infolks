import bgImage from "/icons/get-in-touch-bg.png";
import bgBlueImage from "/industries/agriculture/share-projects-bg-image.png";
import IconButton from "../../Common/button/IconButton";

const Connect = () => {
  return (
    <section className="flex justify-center items-center font-primary-regular">
      <div className="relative w-full h-[116px] xl:h-full">
        {/* Background Image */}
        <div
          className="relative z-0 flex justify-center items-center rounded-[16px] lg:rounded-[35px]"
          style={{
            backgroundImage: `url(${bgBlueImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={bgImage}
            alt="Overlay Image"
            className="z-10 opacity-[0.3] h-full w-full rounded-[16px] lg:rounded-[35px]"
          />

          <div className="absolute inset-0 text-white z-20 text-center flex flex-col justify-center items-center gap-1">
            <h3 className="heading-h3 xl:mb-5 font-primary-medium">
              LET’S CONNECT OUR EXPERTS
            </h3>
            <IconButton link={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
