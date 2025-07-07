import SearchForLidar from "./Annotate/SearchForLidar";
import VariousIndustries from "./Industries/Industries";
import AnnotationTechniques from "./Techniques/Techniques";
import GetInTouchWithUs from "../../Common/Contact/GetInTouchWithUs";
import expert_team from "/solutions/lidar-annotations/expert-team/expert-team-1.jpg";
import expert_team_2 from "/solutions/lidar-annotations/expert-team/expert-team.jpg";
import expert_teamTab from "/solutions/lidar-annotations/expert-team/expert-team-tab.jpg";
import expert_teamMobile from "/solutions/lidar-annotations/expert-team/expert-team-mobile.jpg";
import Team from "../Common/Team";
import PartnerWithUs from "./Annotate/PartnerWithUs";

const LidarPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <PartnerWithUs />
          <SearchForLidar />
          <div className="py-10 lg:py-0">
          <Team
            title="EXPERT TEAM IN LIDAR ANNOTATION"
            content="With extensive expertise, our team excels in annotating lidar data
            and precisely marking and labeling objects, terrains, and intricate
            details. Trust our proficient team of experts to provide lidar
            annotation solutions tailored to your specific requirements,
            ensuring reliable and actionable insights for your projects"
            image1={expert_team}
            image2={expert_team_2}
            image3={expert_teamTab}
            image4={expert_teamMobile}
          /></div>
          <VariousIndustries />
          <AnnotationTechniques />
          <GetInTouchWithUs
            title="Explore Lidar Annotation Solutions!"
            buttonText="CONNECT US"
          />
        </div>
      </div>
    </section>
  );
};

export default LidarPage;
