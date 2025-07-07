import "./style.css";
import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import Applications from "./Usecases/Usecases.jsx";
import Report from "./Report/Report.jsx";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";

const Securitypage = () => {
  const title = "Annotated Data to Improve Security";
  const content = `The merging of AI and data annotation within security cameras
                  has significantly boosted surveillance capabilities. Through
                  precise labeling of images and videos, data annotation
                  empowers AI algorithms to swiftly detect, recognise, and
                  interpret various elements and actions in real-time. This
                  annotated data is essential in training AI models to
                  distinguish between normal and suspicious activities, identify
                  specific objects or individuals, and forecast potential
                  security threats. This integration enables proactive
                  surveillance, allowing timely interventions to prevent
                  security breaches or criminal activities, ultimately
                  reinforcing safety protocols.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            reportid="security_and_survilance_report_id"
          />
          <Applications />
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${agricultureBg})`,
                backgroundPosition: "center", // Optional, centers the image
                width: "100%", // Optional, sets the width of the container
              }}
              className="rounded-[36px]"
            >
              <Contact title="SHARE YOUR PROJECTS" />
              <HowInfolksSpecial />
              <Blogs title=" AI in Security camera - BLOGS" buttonText="EXPLORE MORE"/>
              <Contact title="TRUST OUR EXPERTS" bottomVal={"-bottom-1"} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Securitypage;
