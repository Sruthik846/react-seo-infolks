import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import Usecases from "./Usecases/Usecases";
import Report from "./Report/Report.jsx";
import manufacturing_graph from "/industries/manufacturing/manufacturing-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";
import ConnectUs from "../../Common/Contact/ConnectUs.jsx";

const ManufacturePage = () => {
  const title = "Annotated Data For AI In The Manufacturing Industry";
  const content = `In the manufacturing industry, data annotation is like a key
                  ingredient that transforms raw data into smart insights. It is
                  critical for training AI models, powering smart factories, and
                  driving innovation in manufacturing processes. By annotating
                  various data types, like images, videos, and sensor inputs,
                  manufacturers can make informed decisions and ensure top-notch
                  quality standards. Annotated data is essential in
                  manufacturing for training machine learning models and also
                  helps to enhance quality control, predict maintenance, and
                  optimise production workflows. This process enables
                  manufacturers to gain valuable insights, improve automation,
                  and make informed decisions, resulting in highly efficient
                  manufacturing processes.`;
  const content2 = `Annotated data is essential in manufacturing for training machine learning models and also
                  helps to enhance quality control, predict maintenance, and
                  optimise production workflows. This process enables
                  manufacturers to gain valuable insights, improve automation,
                  and make informed decisions, resulting in highly efficient
                  manufacturing processes.`;

  const reportContent = `Statista projects the AI market to surge from $300
                          billion in 2024 to over $1.8 trillion by 2030, marking
                          a sixfold increase.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={manufacturing_graph}
            reportContent={reportContent}
            reportid="manufacture_report_id"
          />
          <Usecases />
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${agricultureBg})`,
                backgroundPosition: "center", // Optional, centers the image
                width: "100%", // Optional, sets the width of the container
              }}
              className="rounded-[36px]"
            >
              <Contact title="SHARE YOUR PROJECTS" />
              <HowInfolksSpecial />
              <Blogs title="RELATED BLOGS" buttonText="EXPLORE MORE" />
              <ConnectUs
                title="Free Demo"
                buttonText="Connect Us"
                bottomVal={"-bottom-1"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturePage;
