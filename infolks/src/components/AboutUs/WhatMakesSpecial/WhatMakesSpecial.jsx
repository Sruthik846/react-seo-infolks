import expert_crew from "/About/expert-crew.jpg";
import industry_expertise from "/About/industry-expertise.jpg";
import scalability from "/About/scalability.jpg";
import data_handling_security from "/About/data-handling-security.jpg";
import perfect_quality from "/About/perfect-quality.jpg";
import service_flexibility from "/About/service-flexibility.jpg";
import reasonable_service_charges from "/About/reasonable-service-charges.jpg";
import customer_support from "/About/customer-support.jpg";

import expert_crew_tab from "/About/expert-crew-tab.jpg";
import industry_expertise_tab from "/About/industry-expertise-tab.jpg";
import scalability_tab from "/About/scalability-tab.jpg";
import data_handling_security_tab from "/About/datahandling-and-security-tab.jpg";
import perfect_quality_tab from "/About/perfect-quality-tab.jpg";
import service_flexibility_tab from "/About/service-flexibility-tab.jpg";
import reasonable_service_charges_tab from "/About/reasonable-service-charges-tab.jpg";
import customer_support_tab from "/About/customer-support-tab.jpg";

import expert_crew_tab_bottom from "/About/expert-crew-tab-bottom.jpg";
import industry_expertise_tab_bottom from "/About/industry-expertise-tab-bottom.jpg";
import scalability_tab_bottom from "/About/scalability-tab-bottom.jpg";
import data_handling_security_tab_bottom from "/About/data-handling-and-security-tab-bottom.jpg";
import perfect_quality_tab_bottom from "/About/perfect-quality-tab-bottom.jpg";
import service_flexibility_tab_bottom from "/About/service-flexibility-tab-bottom.jpg";
import reasonable_service_charges_tab_bottom from "/About/reasonable-service-charges-tab-bottom.jpg";
import customer_support_tab_bottom from "/About/customer-support-tab-bottom.jpg";
import "./style.css";
import { useState } from "react";

const What_Makes_Special = () => {
  const data = [
    {
      id: 1,
      title: "Expert Crew",
      content:
        "Our team consists of highly qualified managers and talented in-house employees. We select our folks based on our needs and their capabilities. ",
      image: expert_crew,
      image_tab: expert_crew_tab,
      image_tab_bottom: expert_crew_tab_bottom,
    },
    {
      id: 2,
      title: "Industry Expertise",
      content:
        "Since 2016, we have been offering our services to various industries, including healthcare, automotive, e-commerce, robotics, and more. Our solutions address the unique data annotation needs of each sector, contributing to the success of AI-driven applications.",
      image: industry_expertise,
      image_tab: industry_expertise_tab,
      image_tab_bottom: industry_expertise_tab_bottom,
    },
    {
      id: 3,
      title: "Scalability",
      content:
        "What sets us apart is our ability to scale operations seamlessly without compromising on quality. Through robust systems and a proficient workforce, we maintain consistency and accuracy even with large-scale annotation projects. And ensuring timely delivery without sacrificing precision.",
      image: scalability,
      image_tab: scalability_tab,
      image_tab_bottom: scalability_tab_bottom,
    },
    {
      id: 4,
      title: "Data Handling & Security",
      content:
        "We are ready to handle data at any scale while safeguarding confidentiality and integrity. Stringent measures, including Non-Disclosure Agreements (NDAs) with our personnel, ensure the highest level of information and data security. For robust information security, we adhere to ISO 27001 principles and comply with GDPR guidelines, staying current on data privacy laws.",
      image: data_handling_security,
      image_tab: data_handling_security_tab,
      image_tab_bottom: data_handling_security_tab_bottom,
    },
    {
      id: 5,
      title: "Perfect Quality",
      content:
        "We ensure the highest service quality through a triple-level quality assurance system. This process involves annotators, approvers, and QC managers. We have implemented an efficient quality management system and obtained ISO 9001:2015 accreditation.",
      image: perfect_quality,
      image_tab: perfect_quality_tab,
      image_tab_bottom: perfect_quality_tab_bottom,
    },
    {
      id: 6,
      title: "24*7 Customer Support",
      content:
        "Our professionals are available 24/7 to ensure continuous client service. This availability enables us to accommodate time zone differences across the globe. Feel free to connect with us at any time, from anywhere.",
      image: customer_support,
      image_tab: customer_support_tab,
      image_tab_bottom: customer_support_tab_bottom,
    },
    {
      id: 7,
      title: "Service Flexibility",
      content: `The procedures from project onboarding to final submissions are easily customizable to meet the client's specific requirements. There are no rigid rules that companies must adhere to when entrusting a project to us.`,
      image: service_flexibility,
      image_tab: service_flexibility_tab,
      image_tab_bottom: service_flexibility_tab_bottom,
    },
    {
      id: 8,
      title: "Reasonable Service Charges",
      content: `We offer data labeling services tailored to your project's specific needs at the most affordable rate in the market.`,
      image: reasonable_service_charges,
      image_tab: reasonable_service_charges_tab,
      image_tab_bottom: reasonable_service_charges_tab_bottom,
    },
  ];
  const [sliderData, setSliderData] = useState(data[0]);

  const handleClick = (index) => {
    const slider = data[index];
    setSliderData(slider);
  };
  // const handleHover = (index) => {
  //   const slider = data[index];
  //   setSliderData(slider);
  // };
  return (
    <section className="w-full section-top">
      <div className="section-container mx-auto">
        <h2 className="heading-h2 text-center mb-5 lg:mb-16">
          WHAT MAKES US SPECIAL?
        </h2>
        <div className="bg-[#F9F5E9] flex flex-col lg:flex-row rounded-xl lg:p-0">
          {/* Web view */}
          <div className="hidden relative lg:flex justify-center">
            <div className="2xl:w-[765px] lg:h-[503px] w-[452px] lg:w-[450px] xl:w-[712px]">
              <img
                src={sliderData.image}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="flex lg:flex-col justify-between absolute lg:-right-10 -bottom-8 lg:bottom-8 lg:top-10 bg-[#F9F5E9] gap-2 p-2 rounded-lg border border-[#9AE1FF]">
              {data.map((data, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-lg h-12 ${
                    sliderData.id === data.id
                      ? "border-2 border-[#021AA1] transform scale-110 cursor-pointer"
                      : ""
                  }`}
                >
                  {/* <img
                  src={data.image}
                  onClick={() => handleClick(index)}
                  className="h-10 w-20 rounded-lg"
                  alt=""
                /> */}
                  <img
                    src={data.image}
                    onMouseEnter={() => handleClick(index)}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          {/* End of web view */}
          {/* start of mobile view */}
          <div className="lg:hidden relative flex justify-center">
            <div className="2xl:w-[765px] lg:h-[503px] sm:w-[605px] sm:h-[561px] w-[405px] h-[361px]  lg:w-[490px] xl:w-[712px]">
              <img
                src={sliderData.image_tab}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="flex lg:flex-col justify-between absolute lg:-right-10 -bottom-8 lg:bottom-8 lg:top-10 bg-[#F9F5E9] gap-2 p-2 rounded-lg border border-[#9AE1FF]">
              {data.map((data, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-lg sm:h-[79px] sm:w-[46px] h-[63px] w-[30px] ${
                    sliderData.id === data.id
                      ? "border-2 border-[#021AA1] transform scale-110 cursor-pointer"
                      : ""
                  }`}
                >
                  {/* <img
                  src={data.image}
                  onClick={() => handleClick(index)}
                  className="h-10 w-20 rounded-lg"
                  alt=""
                /> */}
                  <img
                    src={data.image_tab_bottom}
                    onMouseEnter={() => handleClick(index)}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          {/* End of mobile view */}

          <div className="flex flex-col justify-center items-center pt-16 py-10 px-5 lg:p-10 lg:pl-20 2xl:p-20 2xl:pl-28 lg:-ml-3 text-center what_make_us_special rounded-[10px]">
            <h3 className="heading-h3 w-72">{sliderData.title}</h3>
            <p className="mt-2 paragraph">{sliderData.content}</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default What_Makes_Special;
