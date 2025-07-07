import AnnotationUsecases from "./Usecases/Usecases";
import agricultureBg from "/industries/human-bg.png";
import RecentProjects from "./Projects/Projects.jsx";
import livestock_graph from "/industries/livestock/livestock-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";
import Report from "./Report/Report.jsx";

const LivestockPage = () => {
  const title = "HIGH QUALITY DATASET FOR AI IN LIVESTOCK MANAGEMENT";
  const content = `Accurate data annotation is essential for AI systems to
                  identify comprehensive patterns and trends in livestock
                  sector. These systems can predict animal behaviour and health
                  markers with incredible precision by labeling data. This
                  precision is critical in improving the efficiency of livestock
                  management practices and encouraging informed decision-making
                  among farmers and agricultural experts. `;
  const content2 = `Infolks offers
                  cutting-edge annotation services for AI in livestock that are
                  transforming livestock management. We provide exact data
                  annotation with our innovative technologies, allowing farmers
                  to gain unbeatable insights into animal behaviour, health, and
                  environmental factors. Our services enable livestock experts
                  to make better decisions, increase productivity, and improve
                  animal care.`;

  const reportContent = `AI in livestock, the global animal feed market size reached US$ 501.9 Billion in 2022. Looking forward, IMARC Group expects the market to reach US$ 606.3 Billion by 2028, exhibiting a growth rate (CAGR) of 3.3% during 2023-2028.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={livestock_graph}
            reportContent={reportContent}
            reportid="livestock_report_id"
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
              <Blogs title="RELATED BLOGS" buttonText="EXPLORE MORE"/>
              <Contact title="Connect Our Team" bottomVal="-bottom-1" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivestockPage;
