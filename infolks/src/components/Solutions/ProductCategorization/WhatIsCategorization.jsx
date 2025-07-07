import ai_excellence from "/solutions/common/second-view-bg.png";
import blue_img from "/About/blue_img.svg";
import what_is_product_categorization from "/solutions/product-categorization/what-is-product-categorization/what-is-product-categorization.jpg";
import what_is_product_categorizationMedium from "/solutions/product-categorization/what-is-product-categorization/what-is-product-categorizationMedium.jpg";

const WhatIsCategorization = () => {
  return (
    <section>
      <div className="relative text-[#37508A] font-primary-regular lg:mb-10 lg:-mt-5 mt-2 rounded-[10px] px-2 md:px-0">
        <img
          src={ai_excellence}
          className="w-full h-52 md:h-72 lg:h-[500px] xl:h-[450px] 2xl:h-[520px]"
          alt=""
        />
        <h2 className="heading-h2 absolute top-0 flex justify-center items-center text-center w-full pt-5 lg:pt-20 2xl:pt-28 uppercase">
          What is Product Categorisation?
        </h2>

        <div className="lg:px-20 xl:flex justify-center items-center lg:py-0 p-2 md:p-4 lg:p-0">
          <div className="lg:bg-[#F9F5E9] 2xl:w-[1300px] 2xl:h-[543px] lg:shadow-[4px_4px_10px_rgba(150,150,150,0.2)] relative flex flex-col lg:flex-row gap-3 rounded-lg md:rounded-2xl lg:p-3 -mt-28 sm:-mt-32 md:-mt-52 lg:-mt-80 xl:-mt-[17rem]">
            <div>
              <img
                src={what_is_product_categorization}
                className="hidden lg:block h-[523px] w-[445px] rounded-xl object-cover"
                alt=""
              />
              <img
                src={what_is_product_categorizationMedium}
                className="block lg:hidden h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col justify-center gap-8 lg:px-5 xl:px-10 2xl:px-32 items-center lg:items-start">
              <img src={blue_img} className="w-8 hidden lg:block" alt="" />
              <p className="w-full paragraph lg:leading-8 text-[#37508A] text-center lg:text-left p-1">
                Product categorization refers to the process of classifying
                products into distinct groups based on specific criteria such as
                type, function, or attributes after annotating them. Infolks
                provides these services for various industries, notably
                e-commerce, as they significantly impact user experience and
                navigation. Proper categorization streamlines the search process
                for consumers, allowing them to easily locate and compare items
                of interest. Moreover, it helps businesses manage their
                inventories efficiently, optimize marketing strategies, and
                improve overall operational efficiency. Categorization, through
                clear and structured product groupings, plays a vital role in
                making products more accessible and guiding customers to make
                informed purchasing decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCategorization;
