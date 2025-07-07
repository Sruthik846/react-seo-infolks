import bgImage from "/icons/get-in-touch-bg.png";
import bgBlueImage from "/industries/agriculture/share-projects-bg-image.png";
import IconButton from "../button/IconButton";

// eslint-disable-next-line react/prop-types
const Contact = ({ title, bottomVal }) => {
  return (
    <section className="flex justify-center items-center font-primary-regular">
      <div
        className={`${
          bottomVal ? "relative w-full -bottom-1" : "relative w-full"
        }`}
      >
        {/* Background Image */}
        <div
          className="relative z-0 flex justify-center items-center rounded-[36px] lg:rounded-[35px]"
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
            className="w-full z-10 opacity-[0.3] h-32 md:h-full rounded-[36px] lg:rounded-[35px]"
          />
          <div className="absolute inset-0 text-white z-20 text-center flex flex-col justify-center items-center">
            <h3 className="heading-h3 mb-1 md:mb-2 lg:mb-5 font-primary-medium uppercase">
              {title}
            </h3>
            <IconButton link={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
