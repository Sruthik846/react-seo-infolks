import "./style.css";
import Usecases from "./Usecases/Usecases";
import RecentAnnotations from "./Projects/Projects.jsx";
import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import Report from "./Report/Report.jsx";
import automotive_graph from "/industries/automotive/automotive-graph.svg";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";

const AutomotivePage = () => {
  const title = "BUILD PERFECT TRAINING DATA TO ENHANCE AUTOMOTIVE SECTOR";
  const content = `The automotive industry plays a significant role in the global
                economy. It leads the way in innovations such as electric and
                hybrid vehicles, autonomous vehicle technology, and advanced
                connectivity features. Our highly skilled in-house team
                specialises in refining data to revolutionise the automotive
                sector. Through our meticulous annotations, we guarantee the
                precise integration of artificial intelligence into self-driving
                cars, fostering safety and efficiency in the autonomous
                transportation sector.`;

  const reportContent = ` According to reports, the global market for AI in the automotive industry is projected to reach a staggering $12.14 billion by 2027, with a compound annual growth rate (CAGR) of 10.4% from 2020 to 2027.`;
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
        <Report
          title={title}
          content={content}
          reportImage={automotive_graph}
          reportContent={reportContent}
          reportid="automotive_report_id"
        />
        <Usecases />
        <div className="mb-10">
          <Contact title="SHARE YOUR PROJECTS" />
        </div>
        <div className="section-container">
          <hr className="border-t border-[#02B2E54D] my-8" />
        </div>
        <RecentAnnotations />
        <div className="w-full">
          <div
            style={{
              backgroundImage: `url(${agricultureBg})`,
              backgroundPosition: "center", // Optional, centers the image
              width: "100%", // Optional, sets the width of the container
            }}
            className="rounded-[36px]"
          >
            {" "}
            <div className="h-5"></div>
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

export default AutomotivePage;
