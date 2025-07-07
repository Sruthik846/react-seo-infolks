import "../Retail/style.css";
import RecentAnnotations from "./Projects/Projects.jsx";
import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import Applications from "./Applications/Applications";
import retail_graph from "/industries/retail/retail-graph.svg";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";
import Report from "./Report/Report.jsx";

const Retailpage = () => {
  const title = "Annotating Data for AI in Retail and Ecommerce";
  const content = `The success of AI in retail and e-commerce relies on
                  high-quality data. Annotating data is critical since it
                  provides the foundation for AI algorithms to understand
                  customer behavior, product preferences, market trends, etc. AI
                  is changing the landscape of online shopping, with chatbots
                  providing instant support and predictive analytics shaping
                  marketing strategies.`;
  const content2 = `Annotated data is the basis for the
                  success of AI and machine learning in retail and e-commerce,
                  enabling innovation and shaping customer-business
                  interactions. Data annotation aids in the creation of
                  annotated datasets, which are then used to train AI models
                  based on attributes such as brand, category, colour, size,
                  style etc.`;

  const reportContent = `The AI market in retail is expected to reach around $54,215.41 million by  2035, assuming a constant growth rate of 21.98% between 2022 and 2035.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={retail_graph}
            reportContent={reportContent}
            reportid="retail_report_id"
          />
          <Applications />
          <Contact title="SHARE YOUR PROJECTS" />
          <RecentAnnotations />
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

export default Retailpage;
