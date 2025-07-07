import GetStarted from "./Contact/GetStarted";
import AISolutions from "./Solutions/AISolutions";
import RLHF from "./FeedBack/RLHF";
import GenerativeSolutions from "./Industries/GenerativeSolutions";
import Team from "./Team";
import llm from "/solutions/generative-ai/llms/llm.jpg";
import llm_2 from "/solutions/generative-ai/llms/llm-2.jpg";
import GetInTouchWithUs from "../../Common/Contact/GetInTouchWithUs";
import ContactTeam from "../../Common/Contact/ContactTeam";

import llmTab from "/solutions/generative-ai/llms/llmTab.jpg";
import llmMOb from "/solutions/generative-ai/llms/llmMob.jpg";

const GenerativePage = () => {
  return (
    <section className="mx-auto container px-5 md:px-0 relative">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center flex-col -mt-16">
          <GetStarted />
          <AISolutions />
          <div className="my-5 md:my-0">
          <Team
            title="LARGE LANGUAGE MODELS (LLMs)"
            content="The significance of an LLM-generative AI model or technology may involve its potential for enhancing language generation. These models aid in natural language processing tasks and enable advancements in text understanding and content creation. The large language model could contribute significantly to communication and language-related applications across various industries."
            image1={llm}
            image2={llm_2}
            imageTab={llmTab}
            imageMobile={llmMOb}
          />
          </div>
          <GetInTouchWithUs
            title="Find out how LLM solutions can shape your success"
            buttonText="GET STARTED"
          />
          <RLHF />
          <GenerativeSolutions />
          <div className="z-0 lg:-mt-16 mt-5">
            <ContactTeam
              title="Generative AI Solutions for Your Creative Projects"
              buttonText="get started today"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativePage;
