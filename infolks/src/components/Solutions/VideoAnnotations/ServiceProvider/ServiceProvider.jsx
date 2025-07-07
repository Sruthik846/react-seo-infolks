import ai_excellence from "/solutions/common/second-view-bg.png";
import leadingVideoAnnotation from "/solutions/video-annotations/leading-video-annotation/annotation-service-provider.jpg";
import leadingVideoAnnotationTab from "/solutions/video-annotations/leading-video-annotation/annotation-service-providerTab.jpg";
import blue_img from "/About/blue_img.svg";

const ServiceProvider = () => {
  return (
    <section className="px-2 md:px-0">
      <div className="relative text-[#37508A] font-primary-regular lg:mb-10 lg:-mt-5 mt-2 rounded-[10px] ">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] xl:h-[450px] 2xl:h-[520px]"
          alt=""
        />
        <div className="flex justify-center items-center ">
          <h2 className="heading-h2 absolute top-0 flex justify-center items-center text-center w-full pt-5 lg:pt-20 2xl:pt-28 uppercase lg:leading-[50px] 2xl:leading-[63px]">
            Leading Video
            <br /> Annotation Service Provider
          </h2>
        </div>
        <div className="lg:px-20 xl:flex justify-center items-center lg:py-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-20 sm:-mt-25 md:-mt-52 lg:-mt-60 xl:-mt-[13rem]">
            <div>
              <img
                src={leadingVideoAnnotation}
                className="hidden lg:block h-[523px] w-[445px] rounded-xl object-cover"
                alt=""
              />
              <img
                src={leadingVideoAnnotationTab}
                className="block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-5 xl:px-10 2xl:px-32 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <p className="w-full paragraph lg:leading-8 text-[#37508A] text-center lg:text-left p-1">
                Infolks stands as a top-tier video annotation service platform!
                We pride ourselves as a cornerstone in the video annotation
                field, providing the best solutions for various industries and
                projects. Share your project requirements, we are ready to
                deliver precise, timely, and comprehensive video annotations
                that elevate your projects to new levels of success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvider;
