import Connect from "./Contact/Connect";
import AI_Excellence from "./Services/AI_Excellence";
import AI_Innovations from "./Services/AI_Innovations";
import What_Makes_Special from "./WhatMakesSpecial/WhatMakesSpecial";
import Solutions from "./Solutions/Solutions";
import MediaPresents from "./MediaPresents/MediaPresents";
import GetInTouchWithUs from "../Common/Contact/GetInTouchWithUs";

const About = () => {
  return (
    <section className="container relative px-5 mx-auto md:px-0">
        <div className="rounded-[35px] bg-[#FFFBF0] font-primary-regular overflow-hidden -mt-16">
        <div className="">
          <Connect />
          <AI_Excellence />
          <AI_Innovations />
          <What_Makes_Special />
          <Solutions />
          <MediaPresents />
          <div className="md:mt-20 mt-10">
            {/* <LetsTalk /> */}
            <GetInTouchWithUs
              title="Ready to Collaborate?"
              buttonText="GET IN TOUCH WITH US"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
