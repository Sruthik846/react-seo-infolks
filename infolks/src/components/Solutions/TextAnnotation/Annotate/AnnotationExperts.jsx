import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import accurate_text_annotation_with_experts from "/solutions/text-annotations/accurate-text-annotation/accurate-text-annotation-with-experts.jpg";
import accurate_text_annotation_with_expertsTab from "/solutions/text-annotations/accurate-text-annotation/accurate-text-annotation-with-experts-medium.jpg";
const AnnotationExperts = () => {
  return (
    <section className="px-2 md:px-0">
      <div className="relative text-[#37508A] font-primary-regular lg:mb-10 md:-mt-5 mt-2 rounded-[10px] ">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] xl:h-[450px] 2xl:h-[520px]"
          alt=""
        />
        <div className="flex justify-center items-center ">
          <h2 className="heading-h2 lg:leading-[50px] 2xl:leading-[63px] absolute top-0 flex justify-center items-center text-center pt-5 lg:pt-20 2xl:pt-28 uppercase">
            Accurate Text
            <br />
            Annotation With Experts
          </h2>
        </div>
        <div className="lg:px-20 xl:flex justify-center items-center lg:py-0 p-2 md:p-4 lg:p-0">
        <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-20 md:-mt-40 lg:-mt-60 xl:-mt-[13rem]">
        <div>
              <img
                src={accurate_text_annotation_with_experts}
                className="hidden lg:block h-[523px] w-[445px] rounded-xl object-cover"
                alt=""
              />
              <img
                src={accurate_text_annotation_with_expertsTab}
                className="block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-5 xl:px-10 2xl:px-32 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <p className="w-full paragraph lg:leading-8 text-[#37508A] text-center lg:text-left p-1">
                Infolks offers a diverse range of text annotation services
                tailored to meet the specific requirements of client&apos;s
                projects. Their expertise encompasses a variety of workflows,
                including but not limited to sentiment analysis, intent
                analysis, named entity recognition, natural language processing,
                and entity classification. Through their dedicated teams,
                Infolks ensures the delivery of top-tier results characterised
                by exceptional quality while maintaining cost-effectivenes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotationExperts;
