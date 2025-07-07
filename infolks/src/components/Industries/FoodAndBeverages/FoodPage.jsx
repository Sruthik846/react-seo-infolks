import "./style.css";
import RecentAnnotations from "./Projects/Projects.jsx";
import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import Applications from "./Applications/Applications";
import Report from "./Report/Report.jsx";
import food_and_beverages_graph from "/industries/food & beverages/food-and-beverages-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";

const FoodPage = () => {
  const title = "";
  const content = `AI increases food safety by enabling real-time monitoring of
                  production processes and storage conditions. This allows for
                  real-time monitoring of manufacturing operations and storage
                  conditions, thereby preventing foodborne illnesses and
                  ensuring product quality.`;
  const content2 = `In the realm of the food labeling,
                  trained annotated datasets are foundational to the development
                  of AI models. These annotated datasets are pivotal in ensuring
                  quality control by teaching AI systems to recognise potential
                  defects or inconsistencies in products, thereby upholding
                  stringent industry standards.`;

  const reportContent = `The food and beverage market in AI is projected to attain a value of $27.99 billion by 2027, exhibiting a compound annual growth rate (CAGR) of 43.9%.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={food_and_beverages_graph}
            reportContent={reportContent}
            reportid="food_beverage_report_id"
          />

          <Applications />
          <div className="section-container">
            <hr className="border-t border-[#02B2E54D] my-14" />
          </div>
          <RecentAnnotations />

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
              <Contact title="SHARE YOUR PROJECTS" />
              <HowInfolksSpecial />
              <Blogs title="RELATED BLOGS" buttonText={"EXPLORE MORE"} />
              <Contact title="Connect Our Team" bottomVal={"-bottom-1"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodPage;
