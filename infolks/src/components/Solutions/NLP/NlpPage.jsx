import NLPService from "./Services/Services";
import Usecases from "./Usecases/Usecases";
import Team from "../Common/Team";
import different_usecases from "/solutions/nlp/different-usecases/different-usecases-2.jpg";
import different_usecases_2 from "/solutions/nlp/different-usecases/different-usecases.jpg";
import ConnectUs from "../../Common/Contact/ConnectUs";
import ContactTeam from "../../Common/Contact/ContactTeam";

import different_usecasesTab from "/solutions/nlp/different-usecases/different-usecasesTab.jpg";
import different_usecasesMob from "/solutions/nlp/different-usecases/different-usecasesMob.jpg";

const NlpPage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[36px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <ConnectUs
            title="CONNECT OUR PROFESSIONALS"
            buttonText="CONTACT NOW"
          />
          <NLPService />
          <Team
            title="DIFFERENT USE CASES IN CONVERSATION NLP"
            content="NLP and data annotation emerge as a transformative force, reshaping
            the very essence of how we engage with the world. In the intricate
            interplay of AI and NLP, our annotations serve as a critical bridge,
            facilitating machines in understanding the nuances of language,
            tone, and context. Our proficiency resides in the precise art and
            science of data annotation, which empowers AI and NLP model training
            systems. Our data annotation services steer AI and NLP training,
            sparking industry revolutions and reshaping user experiences. We are
            listing out some of our use cases for NLP services."
            image1={different_usecases}
            image2={different_usecases_2}
            imageTab={different_usecasesTab}
            imageMobile={different_usecasesMob}
          />
          <Usecases />
          <div className="z-0 lg:-mt-16 mt-5">
            <ContactTeam
              title="Ready To Harness The Potential Of Nlp?"
              buttonText="reach out today"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NlpPage;
