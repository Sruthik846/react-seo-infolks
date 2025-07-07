import ai_excellence from "/solutions/common/second-view-bg.png";
// import ai_excellence_img from "/About/ai_excellence_img.png";
import blue_img from "/About/blue_img.svg";
import search_for_precise_lidar_annotation from "/solutions/lidar-annotations/search-for-precise-lidar-annotation/search-for-precise-lidar-annotation.jpg";
import search_for_precise_lidar_annotationMedium from "/solutions/lidar-annotations/search-for-precise-lidar-annotation/search-for-precise-lidar-annotationMedium.jpg";

const SearchForLidar = () => {
  return (
    <section>
      <div className="relative text-[#37508A] font-primary-regular lg:mb-10 lg:-mt-5 mt-2 rounded-[10px] px-2 md:px-0">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] 2xl:h-[520px] object-cover rounded-[10px]"
          alt=""
        />
        <div className="flex justify-center items-center">
          <h2 className="heading-h2 lg:leading-[50px] 2xl:leading-[63px] absolute top-0 flex justify-center items-center text-center pt-2 lg:pt-20 uppercase lg:w-[90%]">
            Your Search for <br /> Precise Lidar Annotation Ends Here!
          </h2>
        </div>
        <div className="lg:px-20 xl:flex justify-center items-center lg:py-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-20 sm:-mt-27 md:-mt-49 lg:-mt-60 xl:-mt-[16rem]">
          <div className="lg:w-[445px] lg:h-[523px] h-auto">
              <img
                src={search_for_precise_lidar_annotation}
                className="hidden lg:block h-[523px] w-[445px] rounded-xl object-cover"
                alt=""
              />
              <img
                src={search_for_precise_lidar_annotationMedium}
                className="block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-5 xl:px-10 2xl:px-32 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <div className="w-full text-[#37508A] text-center lg:text-left p-2 py-5">
                <p className="paragraph">
                  Annotating lidar data requires expertise and dedication due to
                  its complex and time-intensive nature. Our expertise lies in
                  providing unparalleled precision and accuracy in annotating
                  lidar data and catering to the diverse needs of AI model
                  development.
                </p>{" "}
                <br />
                <p className="paragraph">
                  Our lidar annotation services power AI and machine learning.
                  Specialising in lidar annotation solutions, we fuel the
                  development of cutting-edge AI and machine learning models.
                  Through attention to detail and precision, our services
                  empower industries such as autonomous vehicles and robotics by
                  delivering high-quality annotated lidar data. Committed to
                  advancing technological capabilities, our accurate and
                  tailored annotation services enable transformative innovations
                  across various domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForLidar;
