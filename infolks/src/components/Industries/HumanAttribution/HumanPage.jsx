import AnnotationUsecases from "./Usecases/Usecases.jsx";
import agricultureBg from "/industries/human-bg.png";
import RecentProjects from "./Projects/Projects.jsx";
import Report from "./Report/Report.jsx";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";

const HumanPage = () => {
  const title = "DATA ANNOTATION IN HUMAN ATTRIBUTION";
  const content = `Human attribution recognition is an AI-based biometric
                 application. The technology can identify a person's emotions,
                 expressions, count, body parts, etc. AI can help in the
                 analysis of various data sources, such as images, videos, or
                 textual information, to associate specific actions with
                 individuals. We annotate a person's images to process training
                 data for recognition models.`;
  const content2 = `Employing advanced algorithms and
                 machine learning techniques, AI systems can adeptly analyse
                 intricate datasets, discerning and categorising patterns of
                 human behavior. This data labeling forms the cornerstone for
                 refining recognition models, enhancing their accuracy and
                 proficiency in navigating complex human-centric visual
                 information.`;

  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
        <Report
          title={title}
          content={content}
          content2={content2}
          reportid="human_attribution_report_id"
        />

        <AnnotationUsecases />
        <Contact title="SHARE YOUR PROJECTS" />
        <RecentProjects />
        <div className="w-full">
          <div
            style={{
              backgroundImage: `url(${agricultureBg})`,
              // backgroundSize: "cover", // Optional, adjusts how the background image covers the element
              backgroundPosition: "center", // Optional, centers the image
              width: "100%", // Optional, sets the width of the container
            }}
            className="rounded-[36px]"
          >
            <div className="h-5">
              {/* <hr className="border-t border-[#02B2E54D] my-8" /> */}
            </div>

            <HowInfolksSpecial />
            <Blogs title="RELATED BLOGS" buttonText={"EXPLORE MORE"}/>
            <Contact title="Connect Our Team" bottomVal={"-bottom-1"} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanPage;
