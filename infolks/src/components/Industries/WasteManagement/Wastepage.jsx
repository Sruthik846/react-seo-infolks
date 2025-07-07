import "./style.css";
import Applications from "./Usecases/Usecases.jsx";
import Report from "./Report/Report.jsx";
import waste_management_graph from "/industries/waste management/waste-management-graph.png";
import Contact from "../../Common/Contact/Contact.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";

const Wastepage = () => {
  const title = "Trained Datasets to Handle Waste Management";
  const content = `AI analyses large datasets to optimise waste management operations, whereas data annotation refines information to differentiate materials precisely in the context of AI waste management.  Annotated data assists AI models in differentiating waste types, identifying recycling opportunities, and optimising disposal operations. This annotated data forms the basis for AI decision-making, ensuring accurate predictions and effective waste management techniques.`;
  const content2 = `Our professionals annotate a wide range of datasets, from waste composition to disposal methods, enhancing the efficiency of AI waste management systems. By categorising recyclables, delineating hazardous materials, and detailing waste types, they provide invaluable insights.`;

  const reportContent = `As per the report, the global waste management market is expected to grow at a CAGR of 5.4 percent from 2023 to 2030, reaching 1.96 trillion U.S. dollars by the end of the latter year.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={waste_management_graph}
            reportContent={reportContent}
            reportid="waste_management_report_id"
          />
          <Applications />
          <HowInfolksSpecial />
          <Blogs title="RELATED BLOGS" buttonText="EXPLORE MORE" />
          <Contact title="Connect Our Team" bottomVal={"-bottom-1"} />
         
        </div>
      </section>
    </div>
  );
};

export default Wastepage;
