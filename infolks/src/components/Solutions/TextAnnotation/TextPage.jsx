import AnnotationExperts from "./Annotate/AnnotationExperts";
import KeyIndustries from "./Industries/KeyIndustries";
import ServicesOffered from "./Services/ServicesOffered";
import ConnectUs from "../../Common/Contact/ConnectUs";
import GetInTouchWithUs from "../../Common/Contact/GetInTouchWithUs";
import ContactTeam from "../../Common/Contact/ContactTeam";
import Team from "../Common/Team";
import proficient_team_of_annotation from "/solutions/text-annotations/proficient-team-of-annotation/proficient-team-of-annotation1.jpg";
import proficient_team_of_annotation2 from "/solutions/text-annotations/proficient-team-of-annotation/proficient-team-of-annotation.jpg";
import proficient_team_of_annotationTab from "/solutions/text-annotations/proficient-team-of-annotation/proficient-team-of-annotation-tab.jpg";
import proficient_team_of_annotationMobile from "/solutions/text-annotations/proficient-team-of-annotation/proficient-team-of-annotation-mobile.jpg";
import importance_of_text_annotation from "/solutions/text-annotations/importance/importance-of-text-annotation2.jpg";
import importance_of_text_annotation2 from "/solutions/text-annotations/importance/importance-of-text-annotation.jpg";
import importance_of_text_annotationTab from "/solutions/text-annotations/importance/importance-of-text-annotation-tab.jpg";
import importance_of_text_annotationMobile from "/solutions/text-annotations/importance/importance-of-text-annotation-mobile.jpg";

const TextPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs
            title="Looking For Perfect Text Annotation?"
            buttonText="CONNECT US"
          />
          <AnnotationExperts />
          <div className="py-10 lg:py-0">
            <Team
            title="PROFICIENT TEAM OF EXPERT ANNOTATORS"
            content="Our proficient team of annotators specialises in-text annotation,
              ensuring precision and quality for every project. Leveraging their
              extensive knowledge and attention to detail, our team accurately
              labels and structures textual data, contributing to the
              development of robust machine learning models and facilitating
              accurate natural language understanding."
            image1={proficient_team_of_annotation}
            image2={proficient_team_of_annotation2}
            image3={proficient_team_of_annotationTab}
            image4={proficient_team_of_annotationMobile}
          /></div>
          
          <ContactTeam
            title="Start Annotating Your Images"
            buttonText="CONTACT OUR TEAM"
          />
          <div className="py-10 lg:py-0">
          <Team
            title="The Importance of Text Annotation in NLP Services"
            content="Text annotation services are critical for Natural Language
              Processing because they provide labeled and structured data that
              is needed for training machine learning models. These services
              help with language nuances, sentiment analysis, entity
              recognition, and semantic understanding of textual data. By
              labeling text, these services enable NLP algorithms to grasp
              contextual meanings, improve language models, and enhance the
              accuracy of language-related tasks."
            image1={importance_of_text_annotation}
            image2={importance_of_text_annotation2}
            image3={importance_of_text_annotationTab}
            image4={importance_of_text_annotationMobile}
          />
          </div>
          
          <KeyIndustries />
          <ServicesOffered />
          <GetInTouchWithUs
            title="OPTIMISE WITH TEXT ANNOTATION"
            buttonText="GET IN TOUCH WITH US"
          />
        </div>
      </div>
    </section>
  );
};

export default TextPage;
