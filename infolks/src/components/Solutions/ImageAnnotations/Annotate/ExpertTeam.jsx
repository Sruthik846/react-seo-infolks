import blue_card from "/solutions/image-annotations/expert-team/blue-card.png";
import sky_blue_card from "/solutions/image-annotations/expert-team/sky-blue-card.png";

const SkilledAnnotators = () => {
  return (
    <section className="container mx-auto pl-20 pr-20 pb-40 relative font-primary-regular text-[#37508A]">
      <div className="flex mb-10">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-5xl mb-10 text-[#37508A] leading-[70px] uppercase">
            Team of
            <br />
            Skilled Annotators
          </h1>
          <p className="text-[16px] md:text-[18px] 3xl:text-[20px]">
            Our dedicated team of experts specialises in image annotation,
            bringing a wealth of experience and precision to every project. Our
            team annotates images, paving the way for the development of robust
            machine learning models and bolstering computer vision applications.
            Committed to delivering high-quality annotations, our team is
            well-equipped to handle diverse image annotation requirements across
            industries.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <img src={sky_blue_card} alt="" />
            <img src={blue_card} className="absolute top-20 left-40" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilledAnnotators;
