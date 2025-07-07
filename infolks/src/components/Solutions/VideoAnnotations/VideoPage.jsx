import ServiceProvider from "./ServiceProvider/ServiceProvider";
import AnnotationTechniques from "./Techniques/Techniques";
import AnnotationServices from "./Services/Services";
import DiverseIndustries from "./Industries/Industries";
import ConnectUs from "../../Common/Contact/ConnectUs";
import GetInTouchWithUs from "../../Common/Contact/GetInTouchWithUs";
import ContactTeam from "../../Common/Contact/ContactTeam";
import Team from "../Common/Team";
import team_of_specialised_annotators from "/solutions/video-annotations/specialised-video-annotators/team-of-specialised-annotators2.jpg";
import team_of_specialised_annotators2 from "/solutions/video-annotations/specialised-video-annotators/team-of-specialised-annotators.jpg";
import team_of_specialised_annotatorsTab from "/solutions/video-annotations/specialised-video-annotators/team-of-specialised-annotators-tab.jpg";
import team_of_specialised_annotatorsMobile from "/solutions/video-annotations/specialised-video-annotators/team-of-specialised-annotators-mobile.jpg";

const VideoPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs
            title="FOR YOUR VIDEO ANNOTATION NEEDS!"
            buttonText="Connect us"
          />
          <ServiceProvider />
           <div className="py-10 lg:py-0">
          <Team
            title="TEAM OF SPECIALISED VIDEO ANNOTATORS!"
            content="Our adept team of specialists focuses on precise video annotation.
           We are utilising our expertise and keen attention to detail. We
           annotate videos to enhance machine learning models and fortify
           applications in computer vision. Dedicated to providing top-notch
           annotations, our team is fully prepared to manage various video
           annotation needs across different industries."
            image1={team_of_specialised_annotators}
            image2={team_of_specialised_annotators2}
            image3={team_of_specialised_annotatorsTab}
            image4={team_of_specialised_annotatorsMobile}
          />
          </div>
          <GetInTouchWithUs
            title="EXPERIENCE ACCURATE VIDEO ANNOTATIONS!"
            buttonText="Try Our annotation"
          />
          <DiverseIndustries />
          <AnnotationTechniques />
          <AnnotationServices />
          <ContactTeam
            title="EXPLORE OUR EXPERT VIDEO ANNOTATION SERVICE!"
            buttonText="CONNECT US"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
