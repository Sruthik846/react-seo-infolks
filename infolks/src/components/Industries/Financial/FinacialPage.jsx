import "./style.css";
import Usecases from "./Usecases/Usecases";
import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import financial_graph from "/industries/financial/financial-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";
import Report from "./Report/Report.jsx";

const FinacialPage = () => {
  const title = "EMPOWER THE FINANCIAL SECTOR WITH ANNOTATED DATA";
  const content = `AI is a transforming force in the financial industry,
                revolutionising operations, decision-making processes, and
                customer service. With our customised AI-driven annotation
                solutions, we enable financial institutions to fully change the
                potential hidden within data. Data annotation often takes on the
                role of an unsung hero, offering precise detailing essential for
                fueling AI-driven innovations within the financial sector.`;
  const content2 = `Data
                annotation is critical in the financial sector since it enables
                algorithms to recognise intricate trends in market movements,
                consumer behaviours, and risk concerns, ultimately improving the
                industry's decision-making processes. The power of AI in finance
                heavily depends on the quality and relevance of the data it
                processes.`;
  const reportContent = `As per report, the metaverse market size in finance is
                        estimated to grow at a CAGR of 21.33% between 2022 and
                        2027.`;
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <Report
          title={title}
          content={content}
          content2={content2}
          reportImage={financial_graph}
          reportContent={reportContent}
          reportid="financial_report_id"
        />
        <Usecases />

        <div className="w-full">
          <div
            style={{
              backgroundImage: `url(${agricultureBg})`,
              // backgroundSize: "cover", // Optional, adjusts how the background image covers the element
              backgroundPosition: "center", // Optional, centers the image
              width: "100%", // Optional, sets the width of the container
            }}
            className="rounded-[36px] lg:rounded-[35px]"
          >
            <Contact title="SHARE YOUR PROJECTS" />
            <HowInfolksSpecial />
            <Blogs title="RELATED BLOGS" buttonText={"EXPLORE MORE"} />
            <Contact title="Connect Our Team" bottomVal="-bottom-1" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinacialPage;
