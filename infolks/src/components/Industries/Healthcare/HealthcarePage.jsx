import DataLabelingProjects from "./Projects/Projects";
import agricultureBg from "/industries/healthcare/bg.png";
import healthcare_graph from "/industries/healthcare/healthcare-graph.svg";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";
import Report from "./Report/Report.jsx";

const HealthcarePage = () => {
  const title = "ENHANCING HEALTHCARE THROUGH ANNOTATED DATA";
  const content = `The role of AI in healthcare intricately hinges on the
                  accuracy and dependability of data annotations. These services
                  play a pivotal role in empowering AI algorithms to discern
                  intricate patterns and valuable insights within medical data.
                  Using annotated data in medical technology empowers AI systems
                  to gain insights from a wide range of medical cases.`;

  const content2 = `The
                  combination of AI and annotated data leads to amasing advances
                  in med-tech. Data annotation's role in this area extends
                  beyond simple labeling. This ensures the quality and
                  dependability of the datasets used to train AI models.`;

  const reportContent = `AI in healthcare market was valued at USD 15.1 billion
                          in 2022 and is anticipated to exceed USD 187.95
                          billion by 2030.`;
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={healthcare_graph}
            reportContent={reportContent}
            reportid="healthcare_report_id"
          />

          <DataLabelingProjects />
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${agricultureBg})`,
                backgroundPosition: "center", // Optional, centers the image
                width: "100%", // Optional, sets the width of the container
              }}
              className="rounded-[36px] lg:rounded-[35px]"
            >
              <Contact title="SHARE YOUR PROJECTS" />
              <HowInfolksSpecial />
              <Blogs title="RELATED BLOGS" buttonText={"EXPLORE MORE"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcarePage;
