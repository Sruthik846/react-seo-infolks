
// eslint-disable-next-line react/prop-types
const Report = ({ reportImage,content, reportContent}) => {
  return (
    <div className="flex w-full justify-center items-center flex-col pt-10 lg:pt-16 2xl:pt-28 -mt-16 responsive-section-container">
      <h2 className="text-center lg:mb-10 uppercase heading-h2 mx-auto lg:leading-[50px] 2xl:leading-[63px]">
      BUILD PERFECT<br/>TRAINING DATA TO ENHANCE AUTOMOTIVE SECTOR
      </h2>
      <div className="text-[16px] md:text-[18px] 3xl:text-[20px] text-center mx-auto container">
        <div className="p-3 md:p-5 lg:p-0 lg:mx-auto lg:w-[87%] 3xl:w-full">
          <p>
            {content}
          </p>
        </div>
        <div>
          {/* report image section */}
          {reportImage && (
            <div className="lg:pt-8">
              <div className="bg-linear-to-b from-[#e5ecfa] to-[#fefaf1] rounded-[22px] w-full">
                <img src={reportImage} alt="" className="w-full" />
              </div>
            </div>
          )}
          {/* end of section */}

              {/* report content section */}
              {reportContent && (
            <div className="grid grid-cols-1 mt-5 lg:h-32 sm:h-32">
              <div className="relative group">
                <div className="bg-[#FBF7ED] lg:w-full absolute top-0 ml-2 z-0 p-2 md:p-5 rounded-[20px] border border-[#5F82CC]">
                  <p className="paragraph lg:mx-40">{reportContent}</p>
                </div>

                <div className="bg-[#FBF7ED] z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out p-2 md:p-5 rounded-[20px] border border-[#5F82CC]">
                  <p className="paragraph lg:mx-40">{reportContent}</p>
                </div>
              </div>
            </div>
          )}
          {/* end of section */}
        </div>
      </div>
    </div>
  );
};

export default Report;
