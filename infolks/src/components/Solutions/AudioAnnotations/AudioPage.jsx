import AI_Excellence from "./Services/TranscriptionServices";
import MainIndustries from "./Industries/MainIndustries";
import ServicesOffered from "./ServicesOffered/ServicesOffered";
import AudioExperts from "./Services/AudioExperts";
import ConnectUs from "../../Common/Contact/ConnectUs";
import ContactTeam from "../../Common/Contact/ContactTeam";
import best_in_quality from "/solutions/audio-annotations/datalabelling/best-in-quality1.jpg";
import best_in_quality_2 from "/solutions/audio-annotations/datalabelling/best-in-quality.jpg";
import best_in_qualityTab from "/solutions/audio-annotations/datalabelling/best-in-quality-tab.jpg";
import best_in_qualityMobile from "/solutions/audio-annotations/datalabelling/best-in-quality-mobile.jpg";
import Team from "./Team";

const AudioPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs
            title="REQUEST OUR AUDIO ANNOTATION SERVICES!"
            buttonText="Connect Us"
          />
          <AI_Excellence/>
          <div className="py-10 lg:py-0">
          <Team
            title="BEST-IN-QUALITY AUDIO ANNOTATION SERVICES"
            content="Quality audio annotation services are indispensable for AI
              applications reliant on audio data. These services meticulously
              label and categorise audio inputs, enabling AI algorithms to
              discern speech nuances, recognise tones, and understand acoustic
              intricacies. This precision significantly enhances the accuracy of
              speech recognition systems and virtual assistants. Advanced audio
              annotation is crucial for creating sophisticated applications that
              accurately interpret audio inputs, fostering innovation across
              domains."
            content2="Various types of audio files demand distinct annotation techniques
              based on the desired outcome of the annotated files. Annotation
              specialists possess several options for annotation techniques,
              depending on the requirements of the project. At Infolks, we offer
              the best audio annotation & transcription services to train your
              AI models."
            image1={best_in_quality}
            image2={best_in_quality_2}
            image3={best_in_qualityTab}
            image4={best_in_qualityMobile}
          />
          </div>
          <AudioExperts />
          <ContactTeam
            title="MEET OUR HIGH-QUALITY ANNOTATION EXPERTS"
            buttonText="GET A FREE DEMO"
          />
          <MainIndustries />
          <ServicesOffered />
          <ConnectUs
            title="Transform Your Audio Data"
            buttonText="CHOOSE OUR SERVICES"
          />
        </div>
      </div>
    </section>
  );
};

export default AudioPage;
