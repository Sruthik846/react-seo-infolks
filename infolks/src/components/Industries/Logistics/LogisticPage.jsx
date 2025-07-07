import AnnotationUsecases from "./Usecases/Usecases";
import agricultureBg from "/industries/human-bg.png";
import RecentProjects from "./Projects/Projects";
import logistics_graph from "/industries/logistic/logistics-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";
import Report from "./Report/Report.jsx";

const LogisticPage = () => {
  const title = "QUALITY DATA DRIVING BY INTELIGENT AI IN LOGISTICS";
  const content = `Revolutionise AI in the logistics sector with the help of data
                  annotation. You can deploy AI-driven, cutting-edge logistical
                  solutions to improve the accuracy and precision of logistical
                  applications with the help of our data annotation services.
                  This enhancement ensures not only greater efficiency in
                  logistics but also the ability to stay ahead of challenges as
                  they arise.`;
  const content2 = `AI and data annotation enhance efficiency and
                  offer deep insights into logistics intricacies. This
                  collaboration paves the way for a more seamless and
                  knowledgeable industry, setting new standards in the world of
                  logistics. Accurately annotated data fuels the intelligence
                  that drives logistics to new horizons of efficiency and
                  innovation.`;

  const reportContent = `By integrating AI into their processes, logistics companies will generate $1.3 to $2 trillion in economic value each year for the next 20 years. `;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={logistics_graph}
            reportContent={reportContent}
            reportid="logistics_report_id"
          />
          <AnnotationUsecases />
          <Contact title="SHARE YOUR PROJECTS" />
          <RecentProjects />
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${agricultureBg})`,
                backgroundPosition: "center", // Optional, centers the image
                width: "100%", // Optional, sets the width of the container
              }}
              className="rounded-[36px] lg:rounded-[35px] pt-5"
            >
              <HowInfolksSpecial />
              <Blogs title="RELATED BLOGS" buttonText="EXPLORE MORE" />
              <Contact title="Connect Our Team" bottomVal="-bottom-1" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticPage;
