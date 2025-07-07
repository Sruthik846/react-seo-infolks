import { useEffect, useState } from "react";
import ReadMoreLessParagraph from "../../../ReadMoreLessParagraph";

// eslint-disable-next-line react/prop-types
const Report = ({ reportImage, content, content2, reportContent, reportid }) => {
  // -------------- readmore character limit for different screen sizes -----------
    const [charLimit, setCharLimit] = useState(370); 
    
      useEffect(() => {
        const updateCharLimit = () => {
          if (window.innerWidth >= 1280) {
            // Extra large screens (xl)
            setCharLimit(370);
          } else if (window.innerWidth >= 1024) {
            // Large screens (lg)
            setCharLimit(200);
          } else if (window.innerWidth >= 768) {
            // Medium screens (md)
            setCharLimit(180);
          } else {
            // Small screens and below (sm and xs)
            setCharLimit(162);
          }
        };
    
        // Initial check
        updateCharLimit();
    
        // Update charLimit on window resize
        window.addEventListener("resize", updateCharLimit);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener("resize", updateCharLimit);
        };
      }, []);
      // ----------------- end of charLimit section ----------------
  return (
    <div className="flex w-full justify-center items-center flex-col pt-10 lg:pt-16 2xl:pt-28 -mt-16 responsive-section-container">
      <h2 className="text-center mb-2 lg:mb-5 uppercase heading-h2 mx-auto lg:leading-[63px]">
        {/* Large screen */}
      <h2 className="hidden sm:block text-center mb-2 lg:mb-5 2xl:mb-10 uppercase heading-h2 mx-auto">
      Annotating Data for AI in <br /> Retail and Ecommerce
      </h2>

        {/* Medium screen */}
      <h2 className="block sm:hidden text-center mb-2 uppercase heading-h2 mx-auto">
      Annotating Data for AI in Retail and Ecommerce
      </h2>
      </h2>
      <div className="text-center mx-auto container">
      <div className="lg:mx-auto lg:w-[87%] 3xl:w-full">
      <ReadMoreLessParagraph
            id={reportid}
            charLimit={charLimit}
            readMoreText={"Read more"}
            readLessText={"Read less"}
            readLessClassName="paragraph text-[#20B3F1]"
            readMoreClassName="paragraph text-[#20B3F1]"
          >
            <p>{content}</p>
            <p className="mt-2">{content2}</p>
          </ReadMoreLessParagraph>
        </div>
        <div>
          {/* report image section */}
          {reportImage && (
            <div className="pt-3 lg:pt-8">
              <div className="bg-linear-to-b from-[#e5ecfa] to-[#fefaf1] rounded-[22px] w-full">
                <img src={reportImage} alt="" className="w-full" />
              </div>
            </div>
          )}
          {/* end of section */}

          {/* report content section */}
          {reportContent && (
            <div className="grid grid-cols-1 mt-5 h-40 sm:h-28 md:h-28 lg:h-32">
              <div className="relative group">
                <div className="bg-[#FBF7ED] lg:w-full absolute top-0 ml-2 z-0 p-4 md:p-5 rounded-[20px] border border-[#5F82CC]">
                  <p className="paragraph xl:mx-20">{reportContent}</p>
                </div>

                <div className="bg-[#FBF7ED] z-10 ml-2 group-hover:ml-0 group-hover:mt-2 group-hover:mr-2 transition-all duration-300 ease-in-out p-4 md:p-5 rounded-[20px] border border-[#5F82CC]">
                  <p className="paragraph xl:mx-20">{reportContent}</p>
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
