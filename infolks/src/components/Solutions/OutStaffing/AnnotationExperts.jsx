import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import best_annotation_experts from "/solutions/outstaffing/best-annotaion-experts/best-annotation-experts.jpg";
import best_annotation_experts_mob from "/solutions/outstaffing/best-annotaion-experts/best-annotation-experts_mob.jpg";
import best_annotation_experts_tab from "/solutions/outstaffing/best-annotaion-experts/best-annotation-experts_tab.jpg";

const AnnotationExperts = () => {
  return (
    <section>
      <div className="relative text-[#37508A] font-primary-regular lg:mb-20 md:-mt-5  mt-2 rounded-[10px] px-2 md:px-0">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] 2xl:h-[520px] object-cover rounded-[10px]"
          alt="Generative AI background"
        />
        <div className="flex justify-center items-center md:pt-5 xl:pt-0">
          <h2 className="heading-h2 absolute xl:top-10 2xl:top-2 top-0 md:top-4 flex justify-center items-center text-center pt-5 lg:pt-20 xl:pt-8 2xl:pt-16 uppercase w-[90%] lg:leading-[50px] 2xl:leading-[63px]">
            Outstaffing
            <br /> Best Annotation Experts
          </h2>
        </div>
        <div className="xl:px-28 lg:px-16 2xl:px-60 lg:py-0 md:mt-5 mt-10 lg:mt-12 xl:mt-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-28 sm:-mt-32 md:-mt-52 lg:-mt-80 xl:-mt-[17rem]">
            <div className="lg:w-[445px] lg:h-[523px]">
              <img
                src={best_annotation_experts}
                className="hidden lg:block h-full w-full rounded-xl object-cover"
                alt=""
              />
              <img
                src={best_annotation_experts_mob}
                className="block md:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
              <img
                src={best_annotation_experts_tab}
                className="hidden md:block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-10 xl:px-20 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <div className="w-full text-center lg:text-left p-1">
                <p className="paragraph">
                  Our outstaffing services in data annotation and labeling offer
                  a strategic advantage to your company. We boast a team of
                  professionals with specialised domain expertise and extensive
                  experience, guaranteeing precise annotation tailored
                  specifically to your project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotationExperts;
