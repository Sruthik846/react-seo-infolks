import AnnotationExperts from "./AnnotationExperts";
import WhyChoose from "./Services/WhyChoose";
import OutstaffingSteps from "./Steps/OutstaffingSteps";
import Team from "../Common/Team";
import enhance_team from "/solutions/outstaffing/outstaffing-solutions/enhance-team.jpg";
import enhance_team2 from "/solutions/outstaffing/outstaffing-solutions/enhance-team2.jpg";
import pricing from "/solutions/outstaffing/pricing/pricing.jpg";
import pricing2 from "/solutions/outstaffing/pricing/pricing2.jpg";
import GetInTouchWithUs from "../../Common/Contact/GetInTouchWithUs";
import ContactTeam from "../../Common/Contact/ContactTeam";
import ConnectUs from "../../Common/Contact/ConnectUs";
import enhance_teamTab from "/solutions/outstaffing/outstaffing-solutions/tab/enhance-team.jpg";
import enhance_teamMob from "/solutions/outstaffing/outstaffing-solutions/mob/enhance-team.jpg";

import pricingTab from "/solutions/outstaffing/pricing/pricingTab.jpg";
import pricingMob from "/solutions/outstaffing/pricing/pricingMob.jpg";
const Outstaffingpage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs title="REQUEST A QUOTE" buttonText="Contact Now" />
          <AnnotationExperts />
          <WhyChoose />
          <div className="my-10 lg:my-0">
          <Team
            title="ENHANCE YOUR TEAM WITH OUTSTAFFING SOLUTIONS"
            content="Infolks' outstaffing streamlines access to specialised talent
            without traditional hiring complexities. Seamlessly bridging
            companies with skilled professionals, we provide tailored support
            across domains, ensuring efficient scaling and optimal outcomes. Our
            priority is delivering exceptional value by granting access to
            top-tier professionals, allowing companies to focus on core
            objectives while we handle talent acquisition."
            image1={enhance_team}
            image2={enhance_team2}
            imageTab={enhance_teamTab}
            imageMobile={enhance_teamMob}
          />
          </div>
          <ContactTeam
            title="TAKE YOUR TEAM TO THE NEXT LEVEL"
            title2="OUTSTAFF WITH US!"
            buttonText="LET’S GET STARTED"
          />
          <OutstaffingSteps />
          <div className="my-5 lg:my-0">
          <Team
            title="Pricing"
            content="Our commitment is to offer top-quality output at competitive
              prices, prioritising your satisfaction. We demonstrate that
              uncompromising quality doesn't mean exceeding your financial
              constraints. Our pricing for outstaffing services is tailored to
              fit your budget while acquiring exceptional talent. We ensure
              cost-effectiveness without compromising excellence, fostering a
              mutually beneficial partnership that meets both your expectations
              and financial needs."
            image1={pricing}
            image2={pricing2}
            imageTab={pricingTab}
            imageMobile={pricingMob}
          />
          </div>
          <GetInTouchWithUs
            title="DRIVE SUCCESS THROUGH STRATEGIC STAFFING!"
            buttonText="Talk to our experts"
          />
        </div>
      </div>
    </section>
  );
};

export default Outstaffingpage;
