import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import annotate_smartner from "/solutions/image-annotations/annotate-smartner/annotate-smartner.jpg";
import annotate_smartnerMedium from "/solutions/image-annotations/annotate-smartner/annotate-smartnerMedium.jpg";

const AnnotateSmartner = () => {
  return (
    <section className=" px-2 md:px-0">
      <div className="relative text-[#37508A] font-primary-regular lg:mb-10 md:-mt-5 mt-2 rounded-[10px]">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] xl:h-[450px] 2xl:h-[520px]"
          alt=""
        />
        <h2 className="hidden lg:flex heading-h2 absolute top-0 justify-center items-center text-center w-full pt-8 lg:pt-20 2xl:pt-28 uppercase">
          Annotate Smarter, Not Harder!
        </h2>

        <h3 className="lg:hidden heading-h3 absolute top-0 flex justify-center items-center text-center w-full pt-10 lg:pt-20 xl:pt-28 uppercase">
          Annotate Smarter, Not Harder!
        </h3>
        <div className="lg:px-20 xl:flex justify-center items-center lg:py-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row lg:gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-28 sm:-mt-32 md:-mt-52 lg:-mt-80 xl:-mt-[17rem]">
            <div className="">
              <img
                src={annotate_smartner}
                className="hidden lg:block h-[523px] w-[445px] rounded-xl object-cover"
                alt=""
              />
              <img
                src={annotate_smartnerMedium}
                className="block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-5 xl:px-10 2xl:px-32 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <p className="w-full paragraph xl:leading-8 text-[#37508A] text-center lg:text-left p-1 mb-3 lg:mb-0 mt-2 lg:mt-0">
                Are you tired of spending endless hours annotating data for your
                business or research? Look no further! Our Image annotation
                service is here to revolutionize the way you annotate data. With
                our experienced team, we provide smarter and more efficient data
                labeling solutions that meet your unique needs. Our experts use
                advanced tools and techniques to ensure accurate and
                high-quality annotations, saving you valuable time and
                resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotateSmartner;
