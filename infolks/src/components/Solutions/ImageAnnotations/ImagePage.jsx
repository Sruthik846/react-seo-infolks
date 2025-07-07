import AnnotateSmartner from "./Annotate/AnnotateSmartner";
import KeyIndustries from "./Industries/KeyIndustries";
import AnnotationTechniques from "./Techniques/AnnotationTechniques";
import StartAnnotationg from "./StartAnnotationg";
import ConnectUs from "../../Common/Contact/ConnectUs";
import GetInTouchWithUs from "../../Common/Contact/GetInTouchWithUs";
import Team from "../Common/Team";
import team_of_skilled_annotators_2 from "/solutions/image-annotations/skilled-annotators/desktop/team-of-skilled-annotators1.jpg";
import team_of_skilled_annotators from "/solutions/image-annotations/skilled-annotators/desktop/team-of-skilled-annotators.jpg";

// tab image
import team_of_skilled_annotatorsTab from "/solutions/image-annotations/skilled-annotators/tab/team-of-skilled-annotators-tab.jpg";

// mobile image
import team_of_skilled_annotatorsMobile from "/solutions/image-annotations/skilled-annotators/mobile/team-of-skilled-annotators-mobile.jpg";

const ImagePage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[36px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs
            title="Explore Our Annotation Services"
            buttonText="CONTACT NOW"
          />
          <AnnotateSmartner />
          <Team
            title="TEAM OF SKILLED ANNOTATORS"
            content="Our dedicated team of experts specialises in image annotation,
              bringing a wealth of experience and precision to every project.
              Our team annotates images, paving the way for the development of
              robust machine learning models and bolstering computer vision
              applications. Committed to delivering high-quality annotations,
              our team is well-equipped to handle diverse image annotation
              requirements across industries."
            image1={team_of_skilled_annotators_2}
            image2={team_of_skilled_annotators}
            imageTab={team_of_skilled_annotatorsTab}
            imageMobile={team_of_skilled_annotatorsMobile}
          />
          <StartAnnotationg />
          <KeyIndustries />
          <AnnotationTechniques />
          <GetInTouchWithUs
            title="Turn Your Images Into Annotation Intelligence"
            buttonText="GET IN TOUCH WITH US"
          />
        </div>
      </div>
    </section>
  );
};

export default ImagePage;
