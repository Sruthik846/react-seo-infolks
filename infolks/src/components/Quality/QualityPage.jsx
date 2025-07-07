import CardSlider from "./QualityMatters/CardSlider";
import QualityAssurance from "./Assurance/QualityAssurance";
import LevelTesting from "./Assessment/LevelTesting";

const QualityPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center items-center flex-col pt-10 lg:pt-20 -mt-16">
          <CardSlider />
          <LevelTesting />
          <QualityAssurance />
        </div>
      </div>
    </section>
  );
};

export default QualityPage;
