import { useState } from "react";
import concerns_bgimg from "/security/clear-your-key-concerns.jpg";
import card from "/security/card.svg";
import mobile_card from "/security/mobile-card.svg";
import blue_right_arrow from "/security/icons/blue_right_arrow.svg";
import blue_left_arrow from "/security/icons/blue_left_arow.svg";

const KeyConcerns = () => {
  const data = [
    {
      id: 0,
      title: "How do you ensure the security of client data?",
      content:
        "We ensure client data security through employee NDAs, robust network firewalls, and constant surveillance. Data handling involves secure transfers and storage on protected computers. After projects, data is retained for 14 days before complete removal from the system. Also, to safeguard client data against unauthorized access or breaches, we employ robust security measures, such as access restrictions, and conduct regular security audits.",
    },
    {
      id: 1,
      title:
        "What safeguards are in place to protect my sensitive data from unauthorised access?",
      content:
        "We implement stringent access restrictions, limiting access to only authorized personnel. Furthermore, we educate our employees to ensure they understand the necessity of data security and confidentiality.",
    },
    {
      id: 2,
      title: "What happens if there is a data leak or a security breach?",
      content:
        "We swiftly identify and isolate the breach, followed by containment measures to halt its spread. Compliance with data protection laws ensures relevant stakeholders are promptly notified. Our thorough investigation pinpoints the root cause, allowing us to swiftly patch vulnerabilities. Transparent communication with affected parties is maintained throughout, while legal compliance, including reporting to authorities, is diligently upheld. To bolster security, we implement enhanced measures such as policy revisions and comprehensive employee training to prevent future incidents.",
    },
    {
      id: 3,
      title:
        "Do your data security procedures adhere to industry norms and standards?",
      content:
        "Yes, our data security practices are meant to comply with industry legislation and standards such as ISO, EU GDPR, HIPAA, and other data protection mandates.",
    },
    {
      id: 4,
      title: "How frequently do you perform security audits and assessments?",
      content:
        "To detect and resolve any vulnerabilities, we conduct regular security audits and assessments. This proactive strategy allows us to constantly improve our data security procedures.",
    },
    {
      id: 5,
      title:
        "What is the significance of data security in data annotation and labeling services?",
      content:
        "Data security is critical because it protects your sensitive information from unauthorised access, ensures compliance with data protection rules, fosters confidence among clients and end users, and protects your company from reputational and legal concerns.",
    },
    {
      id: 6,
      title: "How can I be certain that my data is safe in your hands?",
      content:
        "We are firm in our commitment to data security, and we place the confidentiality and integrity of your data above all else. We have a track record of providing our clients with secure and dependable data annotation and labeling services.",
    },
    {
      id: 7,
      title: "Are your employees trained on data security best practices?",
      content: `Our employees receive extensive training on data security best practices. This includes 
                understanding the importance of confidentiality and implementing secure data handling procedures. We ensures that each team member is equipped to effectively safeguard sensitive information.`,
    },
  ];
  const [activeItem, setActiveItem] = useState(data[0]);

  const nextClick = () => {
    const id = (activeItem.id + 1) % data.length;
    setActiveItem(data[id]);
  };

  const prevClick = () => {
    const id = (activeItem.id - 1 + data.length) % data.length;
    setActiveItem(data[id]);
  };
  return (
    <section className="text-[#37508A] font-primary-regular">
      <div
        className=" relative bg-cover bg-center rounded-2xl hidden lg:flex justify-center items-center flex-col gap-5 md:gap-10 lg:gap-20 p-10 lg:p-20"
        style={{ backgroundImage: `url(${concerns_bgimg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-50 rounded-2xl z-0 hidden lg:block"></div>
        <h2 className="text-[#FFFBF0] heading-h2 text-center z-1">
          CLEAR YOUR KEY CONCERNS FROM HERE
        </h2>

        <div className="relative">
          <img
            src={card}
            className="object-cover hidden md:block w-full md:w-[668px] lg:w-full"
            alt=""
          />
          <img
            src={mobile_card}
            className="object-cover md:hidden lg:hidden"
            alt=""
          />
          <div className="absolute top-0 p-5 md:p-20 h-full flex justify-center items-center">
            <div className="flex flex-col md:gap-5">
              <h3 className="heading-h3 text-center font-primary-medium">
                {activeItem.title}
              </h3>
              <p className="text-center paragraph">{activeItem.content}</p>
            </div>
          </div>

          <div className="absolute -left-4 top-1/2 flex lg:gap-[650px] md:gap-[568px] gap-64">
            <img src={blue_left_arrow} onClick={prevClick} alt="" />
            <img src={blue_right_arrow} alt="" onClick={nextClick} />
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center rounded-2xl px-2 py-5 lg:hidden"
        style={{ backgroundImage: `url(${concerns_bgimg})` }}
      >
           <div className="absolute inset-0 bg-blue-900 opacity-50 rounded-2xl z-0 lg:hidden"></div>
        <h2 className="text-[#FFFBF0] heading-h2 text-center py-5 z-10">
          CLEAR YOUR KEY CONCERNS FROM HERE
        </h2>

        <div className="relative flex justify-center">
        <img
            src={card}
            className="object-cover hidden md:block w-full md:w-[668px] lg:w-full"
            alt=""
          />
          <img
            src={mobile_card}
            className="object-cover w-full md:hidden  sm:w-[30rem]"
            alt=""
          />

          <div className="absolute top-0 sm:px-10 md:px-10 h-full flex justify-center items-center px-4 sm:w-[30rem] md:w-[40rem]">
            <div className="flex flex-col gap-y-5">
              <h3 className="heading-h3 text-center font-primary-medium px-5">
                {activeItem.title}
              </h3>
              <p className="text-center text-sm px-2">{activeItem.content}</p>
            </div>

            <div className="md:flex hidden absolute md:-left-8 -left-4 top-1/2  md:gap-[604px] gap-[400px]">
            <img src={blue_left_arrow} onClick={prevClick} alt="" />
            <img src={blue_right_arrow} alt="" onClick={nextClick} />
          </div>

            {/* <div className="absolute"> */}
            <img
              src={blue_left_arrow}
              onClick={prevClick}
              alt=""
              className="size-8 sm:size-10 md:size-11 absolute -left-2 md:hidden"
            />
            <img
              src={blue_right_arrow}
              alt=""
              onClick={nextClick}
              className="size-8 sm:size-10 md:size-11 absolute -right-2 md:hidden"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyConcerns;
