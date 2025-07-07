import FocusOnBusines from "./FocusOnBusines";
import WhyChooseInfolks from "./WhyChoose/WhyChooseInfolks";
import ContactTeam from "../../Common/Contact/ContactTeam";
import ConnectUs from "../../Common/Contact/ConnectUs";

const OdcPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[36px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs title="GET STARTED" buttonText="Connect us" />
          <FocusOnBusines />
          <WhyChooseInfolks />
          <div className=" -mt-14">
            <ContactTeam
              title="EMPOWER YOUR BUSINESS WITH SCALABLE ODC SOLUTION"
              buttonText="Connect Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OdcPage;
