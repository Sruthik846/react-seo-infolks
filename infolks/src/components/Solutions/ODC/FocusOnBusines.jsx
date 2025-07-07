import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import focus_on_business from "/solutions/odc/focus-on-business/focus-on-business.jpg";
import focus_on_business_mob from "/solutions/odc/focus-on-business/focus-on-business_mob.jpg";
import focus_on_business_tab from "/solutions/odc/focus-on-business/focus-on-business_tab.jpg";

const FocusOnBusines = () => {
  return (
    <section>
      <div className="relative text-[#37508A] font-primary-regular lg:mb-20 md:-mt-5  mt-2 rounded-[10px] px-2 md:px-0">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] xl:h-[520px] object-cover rounded-[10px]"
          alt="Generative AI background"
        />
        <div className="flex justify-center items-center md:pt-5 xl:pt-0">
          <h2 className="heading-h2 absolute xl:top-10 2xl:top-2 top-0 md:top-4 flex justify-center items-center text-center pt-10 md:pt-5 xl:pt-10 2xl:pt-16 uppercase w-[90%] lg:leading-[50px] 2xl:leading-[63px]">
            Focus On Your Core <br /> Business, We Work Exclusively For You
          </h2>
        </div>
        <div className="xl:px-28 lg:px-16 2xl:px-60 lg:py-0 md:mt-5 mt-10 lg:mt-12 xl:mt-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-28 sm:-mt-32 md:-mt-52 lg:-mt-80 xl:-mt-[17rem]">
            <div className="lg:w-[445px] lg:h-[523px]">
              <img
                src={focus_on_business}
                className="hidden lg:block h-full w-full rounded-xl object-cover"
                alt=""
              />
              <img
                src={focus_on_business_mob}
                className="block md:hidden h-full w-full rounded-xl object-cover mt-12"
                alt=""
              />
              <img
                src={focus_on_business_tab}
                className="hidden md:block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-10 xl:px-20 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <div className="w-full text-center lg:text-left p-1">
                <p className="paragraph font-semibold">
                  &quot;Welcome to our Offshore Development Centre&quot;
                </p>{" "}
                <br />
                <p className="paragraph">
                  Infolks helps you establish your own offshore development
                  centre in India with a dedicated, experienced, and vibrant
                  team of annotators.
                </p>
                <br />
                <p className="paragraph">
                  Our ODC facility is exclusively for foreign clients planning
                  to set up an offshore team in India. We established an ODC for
                  a German-based automotive giant by creating a fully dedicated
                  team of 250+ employees and a workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusOnBusines;
