import "./agriculture.css";
import Usecases from "./Usecases/Usecases.jsx";
import RecentAnnotations from "./Projects/Projects.jsx";
import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import Report from "../common/Report.jsx";
import agriculture_graph from "/industries/agriculture/agriculture-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";

const Agriculture = () => {
  const title = "AI IN THE AGRICULTURE INDUSTRY WITH ANNOTATED DATA";
  const content = `AI in agriculture marks a significant stride towards a
                sustainable future, harmonising innovation with environmentally
                conscious approaches. AI analyses massive volumes of data from
                numerous sources, such as sensors, satellite pictures, and
                weather forecasts. AI analysed this data to assist farmers in
                making informed decisions about crop management, irrigation,
                pest control, fertilisation, etc. The accuracy and effectiveness
                of AI-powered agricultural solutions are intimately linked to
                the quality and diversity of the annotated data used for
                training AI models. Through best annotation, our skilled
                annotators play a pivotal role in bridging the gap between raw
                agricultural data and actionable insights. These precise
                annotations are not only poised to revolutionise farming
                practices but also pave the way for a sustainable and efficient
                role of AI in the agricultural future.`;

  const reportContent = `As per the report, the agriculture sector was valued at
                        $1,517.0 million in 2022 and is predicted to reach
                        $4,096.1 million in 2027, growing at a 21.98% CAGR
                        between 2022 and 2027.`;
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
        <Report
          title={title}
          content={content}
          reportImage={agriculture_graph}
          reportContent={reportContent}
          reportid="agriculture_report_id"
        />
        <Usecases />
        <div className="responsive-section-container">
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
            className="rounded-[36px] lg:rounded-[36px]"
          >
            <Contact title="SHARE YOUR PROJECTS" />
            <HowInfolksSpecial />
            <Blogs title="RELATED BLOGS" buttonText={"EXPLORE MORE"} />
            <Contact title="Trust Our Experts" bottomVal="-bottom-1" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agriculture;
