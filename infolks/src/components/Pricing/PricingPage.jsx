import LetsTalk from "../LetsTalk/LetsTalk";
import FreeDemo from "./FreeDemo/FreeDemo";
import ExclusivePricing from "./ExclusivePricing";
import OurDonations from "./OurDonations";
import Form from "./Contact/Form";
import pricing from "/pricing/video/pricing.gif";

const PricingPage = () => {
  return (
    <section className="container mx-auto relative px-5 md:px-0">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center items-center flex-col">
          <div className="p-4 md:p-5 lg:p-20 xl:p-28 2xl:p-36 flex flex-col-reverse lg:flex-row lg:gap-4 text-[#37508A] font-primary-regular">
            <div className="flex flex-1 flex-col p-2 md:p-4 lg:p-0">
              <h2 className="heading-h2 w-[60%]">OUR PRICING</h2>
              <p className="paragraph mt-2 lg:mt-5">
                We take pride in demonstrating that exceptional qualities and
                affordability are achievable. This intricate equilibrium is a
                skill we&apos;ve mastered through years of experience. We are
                eager to prove that you can enjoy unwavering quality in each
                project, irrespective of your budgetary limitations.
              </p>
              <p className="paragraph mt-5">
                Achieve the best quality output at the most competitive price.
                Your satisfaction remains at the forefront of our priorities,
                our commitment lies in demonstrating that superior quality can
                coexist harmoniously with budget considerations.
              </p>
              <p className="paragraph mt-5">
                Our journey has been defined by an ongoing pursuit of the
                delicate balance between providing affordability and maintaining
                superior quality.
              </p>
            </div>

            <div className="flex flex-1 justify-center lg:justify-end lg:items-end items-center">
              <img src={pricing} className="hidden lg:block me-5" alt="" />
              <div className="block lg:hidden">
                <img src={pricing} className="w-52 lg:w-60" alt="" />
              </div>
            </div>
          </div>
          <LetsTalk
            title1={"Best Quality at Best Rates"}
            title2={"TALK TO OUR  EXPERT"}
          />
          <FreeDemo />
          <OurDonations />
          <ExclusivePricing />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
