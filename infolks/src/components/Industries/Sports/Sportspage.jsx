import "./style.css";
import RecentAnnotations from "./Projects/Projects.jsx";
import agricultureBg from "/industries/agriculture/agriculture-bg.png";
import Applications from "./Applications/Applications";
import sports_graph from "/industries/sports/sports-graph.png";
import HowInfolksSpecial from "../common/How infolks special/HowInfolksSpecial.jsx";
import Blogs from "../../Common/Blog/Blog.jsx";
import Contact from "../../Common/Contact/Contact.jsx";
import Report from "./Report/Report.jsx";

const Sportspage = () => {
  const title = "Trained Data to Boost AI in the Sports Industry";
  const content = `Data annotation in the sports industry plays a pivotal role in
                  generating comprehensive labeled datasets. The intricate
                  annotations contained within these datasets establish the
                  groundwork for training AI models. This training empowers them
                  to analyze complex actions like player movements, ball
                  trajectories, and a variety of game scenarios with precision
                  and accuracy. The trained annotated datasets serve as the
                  backbone for training artificial intelligence models,
                  empowering them with the ability to delve into the
                  complexities of the game.`;
  const content2 = `Annotation enriches AI in sports by
                  extracting vital information from performance data, spanning
                  videos, images, and sensor inputs. By employing AI techniques,
                  annotating data becomes more precise, ensuring a thorough
                  analysis of the vast amounts of information generated within
                  the sports industry. With its extensive array of labeled data,
                  covering player movements, game statistics, and diverse game
                  scenarios, this dataset has become a wellspring of invaluable
                  information. From player recruitment to game strategy
                  development, AI in sports is a game-changer in every aspect of
                  the industry.`;

  const reportContent = `The AI in sports market, valued at $1.4 billion in 2020, is anticipated to surge to $19.2 billion by 2030.`;
  return (
    <div className="mx-auto container px-5 md:px-0 relative">
      <section>
        <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
          <Report
            title={title}
            content={content}
            content2={content2}
            reportImage={sports_graph}
            reportContent={reportContent}
            reportid="sports_report_id"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sportspage;
