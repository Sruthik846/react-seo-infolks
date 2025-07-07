import { useState } from "react";
import icon1 from "/security/icons/icon1.png";
import icon2 from "/security/icons/icon2.svg";
import AssureSecurity from "./AssureSecurity/AssureSecurity";
import KeyConcerns from "./KeyConcerns/KeyConcerns";
import iso from "/security/ISO.svg";
import eugdpr from "/security/eugdpr.svg";
import hippa from "/security/hippa.svg";
import line from "/security/line.svg";

const SecurityPage = () => {
  const data = [
    {
      id: 0,
      title: "ISO 27001:2013 CERTIFIED",
      image: iso,
      content: `We adhere to the ISO 27001 principles and implement the best information security procedures into practice. By upholding the security of all assets, including the protection of client data, we comply with all ISO legal standards. We are acutely aware of potential security breaches, and by creating a strong framework for information security management systems. We guarantee data confidentiality, integrity, and availability.`,
    },
    {
      id: 1,
      title: "EU GDPR COMPLIANT",
      image: eugdpr,
      content: `We agree with all GDPR guidelines and stay current on the laws governing data privacy. By complying with all GDPR standards, we ensure the protection of customer data and individual data rights. We take data management very seriously, and we are fully aware of any data breaches.`,
    },
    {
      id: 2,
      title: "HIPAA COMPLIANT",
      image: hippa,
      content: `We adhere to HIPAA guidelines to ensure client privacy and confidentiality. Committed to data security, we meet all HIPAA mandates for Business Associates, taking Protected Health Information (PHI) seriously. We guarantee a Business Associate Agreement (BAA) with covered entities to safeguard sensitive information in line with HIPAA regulations.`,
    },
  ];

  const [activeItem, SetactiveItem] = useState(data[0]);
  const result = activeItem.id;
  return (
    <section className="container mx-auto relative px-5 md:px-0">
      <div className="rounded-[35px] bg-[#FFFBF0] text-[#37508A] font-primary-regular rounded-t-[25px] md:rounded-t-[40px]">
        <div className="flex w-full justify-center items-center flex-col p-5 md:p-10 lg:p-28 -mt-16">
          <div className="flex flex-col xl:flex-row gap-x-10 gap-y-5 mb-10 lg:mb-20 md:h-[330px] xl:h-[150px] w-[100%]">
            <div className="relative group">
              <div className="absolute w-full z-20 flex flex-col md:flex-row justify-center items-center gap-5 border border-[#5F82CC] p-5 rounded-2xl bg-[#F9F5E9] group-hover:bg-[#FFFBF0] group-hover:border-[#AABDE7]">
                <div className="bg-[#F4F0E3] p-5 rounded-lg">
                  <img src={icon1} className="w-10 md:w-36" alt="" />
                </div>
                <p className="paragraph text-center md:text-left">
                  Infolks, your trusted data annotation partner. We handle your
                  information with the utmost confidentiality and integrity,
                  creating a secure environment for all your annotation needs.
                </p>
              </div>

              <div className="flex flex-col w-full md:flex-row justify-center items-center gap-5 border border-[#5F82CC] p-5 rounded-2xl bg-[#F9F5E9] group-hover:bg-[#FFFBF0] group-hover:border-[#AABDE7] group-hover:translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                <div className="bg-[#F4F0E3] p-5 rounded-lg">
                  <img src={icon1} className="w-10 md:w-36" alt="" />
                </div>
                <p className="paragraph">
                  Infolks, your trusted data annotation partner. We handle your
                  information with the utmost confidentiality and integrity,
                  creating a secure environment for all your annotation needs.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute w-full z-20 flex flex-col md:flex-row gap-5 justify-center items-center border border-[#5F82CC] p-5 rounded-2xl bg-[#F9F5E9] group-hover:bg-[#FFFBF0] group-hover:border-[#AABDE7]">
                <div className="bg-[#F4F0E3] p-[22px] rounded-lg">
                  <img src={icon2} className="w-10 md:w-36" alt="" />
                </div>
                <p className="paragraph text-center md:text-left">
                  To illustrate our dedication to data security, we proudly
                  possess different certifications and credentials that prove
                  our ability and dedication to the highest industry standards.
                </p>
              </div>

              <div className="flex flex-col w-full md:flex-row gap-5 justify-center items-center border border-[#5F82CC] p-5 rounded-2xl bg-[#F9F5E9]group-hover:bg-[#FFFBF0]  group-hover:border-[#AABDE7] group-hover:translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                <div className="bg-[#F4F0E3] p-[22px] rounded-lg">
                  <img src={icon2} className="w-10 md:w-36" alt="" />
                </div>
                <p className="paragraph">
                  To illustrate our dedication to data security, we proudly
                  possess different certifications and credentials that prove
                  our ability and dedication to the highest industry standards.
                </p>
              </div>
            </div>
          </div>

          {/* Left line when first one is active */}
          {result === 1 ? (
            ""
          ) : (
            <img
              src={line}
              alt=""
              className="absolute translate-y-48 hidden xl:block translate-x-0.5"
            />
          )}

          {/* Left Line */}
          {result === 0 ? (
            ""
          ) : (
            <img
              src={line}
              alt=""
              className="absolute translate-y-48 -translate-x-[269px] 2xl:-translate-x-[380px] hidden xl:block "
            />
          )}

          {/* Right Line */}
          {result === 2 ? (
            ""
          ) : (
            <img
              src={line}
              alt=""
              className="absolute translate-y-48 right-[84px] 2xl:right-[212px] xl:right-[101px] -translate-x-64 hidden xl:block"
            />
          )}

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 w-full place-items-end gap-4 xl:gap-x-[21px] 2xl:gap-x-[22px] 2xl:mb-20">
            {data.map((item, index) =>
              index === activeItem.id ? (
                <div
                  key={index}
                  className={`flex flex-col xl:col-span-2 p-5 border border-[#37508A33] rounded-lg lg:w-full bg-[#F9F5E9] ${
                    index === data.length - 1
                      ? "md:col-span-2 xl:col-span-1"
                      : ""
                  }`}
                >
                  <div className="bg-[#37D4EE] pl-1 pr-1 w-8 flex justify-center mb-4 text-xs">
                    0{item.id + 1}
                  </div>
                  <h2 className="heading-h2 lg:w-[27rem] xl:w-[35.5rem] font-primary-medium lg:leading-[55px]">
                    {item.title}
                  </h2>
                  <p className="mt-2 paragraph">{item.content}</p>
                  <div className="rounded-[104px] bg-[#D9D9D9] mt-5 flex justify-center items-center w-[92px] h-[85px] md:w-[202px] md:h-[186px] xl:w-[15rem] xl:h-[14rem]">
                    <img
                      src={item.image}
                      className="w-20 md:w-40 xl:hidden"
                      alt=""
                    />
                    <img src={item.image} className="hidden xl:block" alt="" />
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="flex flex-col p-5 border border-[#37508A33] rounded-lg w-full bg-[#FFFBEE]"
                  onClick={() => {
                    SetactiveItem(item);
                  }}
                >
                  <div className="bg-[#D9D9D9] pl-1 pr-1 w-8 flex justify-center mb-4 text-xs">
                    0{item.id + 1}
                  </div>
                  <h5 className="heading-h5 lg:w-36font-primary-medium">
                    {item.title}
                  </h5>
                  <p className="lg:mt-40 paragraph">
                    {item.content.slice(0, 100)}......
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <AssureSecurity />
        <KeyConcerns />
      </div>
    </section>
  );
};

export default SecurityPage;
