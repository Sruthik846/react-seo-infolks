import "./style.css";
import Geospatialbg from "/industries/geospatial-bg.png";
import Usecases from "./Usecases/Usecases";
import Report from "./Report/Report.jsx";
import geospatial_graph from "/industries/geospatial/geospatial-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Contact from "../../Common/Contact/Contact.jsx";

const GeospatialPage = () => {
  const title = "HIGH-QUALITY GEOSPATIAL DATA FOR PERFECT AI MODELS";
  const content = `Annotating data is a precise method that involves labeling different features or objects in geographical data, such as aerial images, LiDAR data, GIS datasets, and satellite imaging. These annotations include a wide range of information, from identifying vegetation, water bodies, and other essential aspects of the imagery to locating buildings and roadways. Our professionals ensure labeling accuracy and consistency, ensuring the quality of annotated datasets.`;
  const content2 = `Geospatial AI companies are witnessing a surge in unique applications by the day. To achieve the utmost precision in their outputs, these companies require impeccably accurate training data. The precise data annotation service has truly ushered in a new era of breakthrough innovation and remarkable efficiency in the geospatial AI sector.`;

  const reportContent = `The global geospatial analytics market size is projected to grow from $79.06 billion in 2023 to $206.93 billion by 2030, at a CAGR of 14.7% during the forecast period.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={geospatial_graph}
            reportContent={reportContent}
            reportid="geospatial_report_id"
          />
          <Usecases />
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${Geospatialbg})`,
                // backgroundSize: "cover", // Optional, adjusts how the background image covers the element
                backgroundPosition: "center", // Optional, centers the image
                width: "100%", // Optional, sets the width of the container
              }}
              className="rounded-[36px]"
            >
              <Contact title="SHARE YOUR PROJECTS" />
              <HowInfolksSpecial />
              <Contact title="Connect Us" bottomVal={"-bottom-1"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeospatialPage;
