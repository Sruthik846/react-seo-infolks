import { useState } from "react";
import right_arrow from "/security/icons/right_arrow.png";
import blueshade from "/industries/blue-shade.png";
import left_arrow from "/security/icons/left_arrow.png";
import icon22 from "/industries/vector.svg";

// Desktop
import healthcare from "/industries/industries/desktop/healthcare.jpg";
import automotive from "/industries/industries/desktop/automotive.jpg";
import retail from "/industries/industries/desktop/retail.jpg";
import manufacturing from "/industries/industries/desktop/manufacturing.jpg";
import agriculture from "/industries/industries/desktop/agriculture.jpg";
import food_beverages from "/industries/industries/desktop/food_and_beverages.jpg";
import livestock from "/industries/industries/desktop/livestock.jpg";
import security_surveillance from "/industries/industries/desktop/security_and_surveillance.jpg";
import sports from "/industries/industries/desktop/sports.jpg";
import finance_banking from "/industries/industries/desktop/finance_and_backing.jpg";
import human_attribution from "/industries/industries/desktop/human_attribution.jpg";
import logistics from "/industries/industries/desktop/logistics.jpg";
import geospatial from "/industries/industries/desktop/geospatial.jpg";
import waste_management from "/industries/industries/desktop/waste_management.jpg";

// Mobile
import healthcareMobile from "/industries/industries/mobile/healthcare.jpg";
import automotiveMobile from "/industries/industries/mobile/automotive.jpg";
import retailMobile from "/industries/industries/mobile/retail.jpg";
import manufacturingMobile from "/industries/industries/mobile/manufacturing.jpg";
import agricultureMobile from "/industries/industries/mobile/agriculture.jpg";
import food_beveragesMobile from "/industries/industries/mobile/food_and_beverages.jpg";
import livestockMobile from "/industries/industries/mobile/livestock.jpg";
import security_surveillanceMobile from "/industries/industries/mobile/security_and_surveillance.jpg";
import sportsMobile from "/industries/industries/mobile/sports.jpg";
import finance_bankingMobile from "/industries/industries/mobile/finance_and_backing.jpg";
import human_attributionMobile from "/industries/industries/desktop/human_attribution.jpg";
import logisticsMobile from "/industries/industries/mobile/logistics.jpg";
import geospatialMobile from "/industries/industries/mobile/geospatial.jpg";
import waste_managementMobile from "/industries/industries/mobile/waste_management.jpg";

// Tab
import healthcareTab from "/industries/industries/tab/healthcare.jpg";
import automotiveTab from "/industries/industries/tab/automotive.jpg";
import retailTab from "/industries/industries/tab/retail.jpg";
import manufacturingTab from "/industries/industries/tab/manufacturing.jpg";
import agricultureTab from "/industries/industries/tab/agriculture.jpg";
import food_beveragesTab from "/industries/industries/tab/food_and_beverages.jpg";
import livestockTab from "/industries/industries/tab/livestock.jpg";
import security_surveillanceTab from "/industries/industries/tab/security_and_surveillance.jpg";
import sportsTab from "/industries/industries/tab/sports.jpg";
import finance_bankingTab from "/industries/industries/tab/finance_and_backing.jpg";
import human_attributionTab from "/industries/industries/desktop/human_attribution.jpg";
import logisticsTab from "/industries/industries/tab/logistics.jpg";
import geospatialTab from "/industries/industries/tab/geospatial.jpg";
import waste_managementTab from "/industries/industries/tab/waste_management.jpg";

import PrimaryBlueButton from "../../../Common/button/PrimaryBlueButton";
import assure_security_bgimage from "/security/assure-security-bg-image.png";
import bgshadow from "/industries/bg-shadow.png";
import arrow from "/home/icons/arrowRight.png";

const KeyIndustries = () => {
  const data = [
    {
      id: 0,
      title: "Healthcare",
      img: healthcare,
      imgMobile: healthcareMobile,
      imgTab: healthcareTab,
      content:
        "Data annotation in healthcare drives transformative change. Healthcare data annotation involves labeling medical data like images, videos, texts, etc. to help machine learning models understand it better. This annotation empowers AI models for various functions, such as detecting anomalies, structuring data efficiently, and expediting treatment innovations.",
      link: "/industries/healthcare",
    },
    {
      id: 1,
      title: "Automotive",
      img: automotive,
      imgMobile: automotiveMobile,
      imgTab: automotiveTab,
      content:
        "Annotated data fuels advancements in the automotive industry, leading to safer and more efficient transportation systems. Annotated data serves as the cornerstone for driving significant advancements within the automotive industry. Through precise labeling, this curated data empowers machine learning algorithms to recognize and interpret intricate patterns in various automotive contexts. From autonomous vehicle navigation systems to predictive maintenance models, annotated data enables the development of cutting-edge solutions that enhance safety, efficiency, and overall driving experience.",
      link: "/industries/automotive",
    },
    {
      id: 2,
      title: "Retail",
      img: retail,
      imgMobile: retailMobile,
      imgTab: retailTab,
      content:
        "In retail, data annotation entails labeling various data types, including images, product descriptions, and customer reviews, to optimize comprehension for ML algorithms. These systems improve product image recognition and refine customer behavior analysis, transforming business interactions with clientele.",
      link: "/industries/retail",
    },
    {
      id: 3,
      title: "Finance and Banking",
      img: finance_banking,
      imgMobile: finance_bankingMobile,
      imgTab: finance_bankingTab,
      content:
        "AI in finance and banking refers to the integration of AI such as machine learning, natural language processing, and predictive analytics into financial processes and banking services. By leveraging AI, financial institutions can automate tasks, such as streamlining operations, detect patterns in data to make informed decisions, personalize customer experiences, and enhance risk management. Annotation is key for fraud detection, risk assessment, and sentiment analysis in finance. We label transaction records, account details, and financial documents to bolster security and inform decision-making.  ",
      link: "/industries/finance-banking",
    },
    {
      id: 4,
      title: "Manufacturing",
      img: manufacturing,
      imgMobile: manufacturingMobile,
      imgTab: manufacturingTab,
      content:
        "Through the integration of advanced technologies such as machine learning, computer vision, and predictive analytics, AI is reshaping the manufacturing landscape. Annotated data drives quality control, predictive maintenance, process optimization and enhanced efficiency and productivity across manufacturing operations. We annotate diverse ranges of datasets such as quality control images and sensor-generated informations.",
      link: "/industries/manufacturing",
    },
    {
      id: 5,
      title: "Agriculture",
      img: agriculture,
      imgMobile: agricultureMobile,
      imgTab: agricultureTab,
      content:
        "AI is driving a new era of innovation and sustainability in agriculture, empowering farmers to overcome challenges and seize opportunities in an increasingly complex and dynamic global food system. In agriculture, data annotation fuels precision farming by labeling soil samples, crop images, and environmental data. This annotated information enables AI models to predict yields, monitor soil health, and detect crop issues promptly. By facilitating informed decisions, it empowers farmers to enhance productivity and sustainability while ensuring higher crop quality.",
      link: "/industries/agriculture",
    },
    {
      id: 6,
      title: "Food & Beverages",
      img: food_beverages,
      imgMobile: food_beveragesMobile,
      imgTab: food_beveragesTab,
      content:
        "In the food and beverage industry, data annotation ensures quality control, aids inventory management, and enhances consumer satisfaction. Accurate labeling of food-related data supports safety standards and assists in understanding consumer preferences for tailored offerings and improved marketing strategies.",
      link: "/industries/food-beverages",
    },
    {
      id: 7,
      title: "Livestock",
      img: livestock,
      imgMobile: livestockMobile,
      imgTab: livestockTab,
      content:
        "In livestock management, data annotation transforms animal husbandry. Precise labeling of data, including health records, behaviour patterns, and breeding histories, enables AI models to optimise animal welfare. This annotated data empowers farmers to make informed decisions, ensuring healthier and more productive livestock.",
      link: "/industries/livestock",
    },
    {
      id: 8,
      title: "Security and Surveillance",
      img: security_surveillance,
      imgMobile: security_surveillanceMobile,
      imgTab: security_surveillanceTab,
      content:
        "Data annotation drives enhanced surveillance and threat detection capabilities. By precisely labeling video feeds and identifying behavioural patterns, AI models distinguish between normal activities and potential risks. This enables swift and accurate alerts for security personnel or automated responses. This annotated data fuels algorithms, fortifying the effectiveness of AI-powered security systems in preventing security breaches and safeguarding spaces.",
      link: "/industries/security-survilance",
    },
    {
      id: 9,
      title: "Sports",
      img: sports,
      imgMobile: sportsMobile,
      imgTab: sportsTab,
      content:
        "Sports are in the midst of a data-driven evolution, driven by the dynamic collaboration of AI and data annotation. Data annotation in sports technology drives innovation and performance analysis by labeling sports-related data precisely. Empowering AI models to interpret sporting actions, this process yields insights into player performance, strategy optimization, injury prevention etc. It changes, coaching methods, engages fans with advanced statistics and enables smarter decision-making in sports technology.  ",
      link: "/industries/sports",
    },
    {
      id: 10,
      title: "Human Attribution",
      img: human_attribution,
      imgMobile: human_attributionMobile,
      imgTab: human_attributionTab,
      content:
        "Precisely annotated data drives the efficiency of AI recognition models in human attribution tasks. By labeling images and videos, AI can accurately identify emotions, expressions, body parts, and behaviors, automating the analysis of complex human-centric datasets. This refined annotation improves model accuracy, enabling better understanding and categorization of human actions for advanced applications.",
      link: "/industries/human-attribution",
    },
    {
      id: 11,
      title: "Waste Management",
      img: waste_management,
      imgMobile: waste_managementMobile,
      imgTab: waste_managementTab,
      content:
        "In waste management, AI and data annotation streamline processes by collecting and labeling data accurately. Annotators label waste types and contamination levels, improving machine learning model training. These models integrate into waste management systems for real-time monitoring and decision-making, with continuous feedback loops ensuring ongoing improvement.",
      link: "/industries/waste-management",
    },
    {
      id: 12,
      title: "Logistic",
      img: logistics,
      imgMobile: logisticsMobile,
      imgTab: logisticsTab,
      content:
        "Data annotation enables logistics firms to achieve greater operational effectiveness, meeting customer demands more efficiently and driving overall business success. The data annotation optimises supply chain operations such as shipment details, inventory statuses, route information etc. This annotation empowers AI models to predict optimal transport routes, streamline processes, and improve resource allocation, ultimately enhancing operational effectiveness in the logistics industry.",
      link: "/industries/logistic",
    },
    {
      id: 13,
      title: "Geospatial",
      img: geospatial,
      imgMobile: geospatialMobile,
      imgTab: geospatialTab,
      content:
        "In geospatial applications, data annotation enables accurate mapping and navigation by precisely labeling maps, satellite imagery, and geographic features. This annotation empowers AI models for effective spatial analysis, aiding map creation, trend prediction, and navigation. Overall, data annotation drives advancements in mapping technologies, improving navigation experiences across various industries.  ",
      link: "/industries/geospatial",
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

  const [cards, setCard] = useState(data.slice(0, 1));
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setCard(showAll ? data.slice(0, 1) : data);
    setShowAll(!showAll);
  };
  return (
    <section className="text-[#37508A] mb-5 lg:mb-32 font-primary-regular text-[19px]">
      <img
        src={icon22}
        alt=""
        className="absolute opacity-50 translate-y-[30rem] md:translate-y-40 z-0"
      />
      {/* large screen */}
      <div className="relative hidden 2xl:block max-w-6xl">
        <img src={assure_security_bgimage} className="w-full" alt="" />
        <div className="flex">
          <div className="absolute xl:top-[25%]  top-[25%] 2xl:left-36 left-24">
            <div className="w-10 h-1 bg-[#13B2F5] mb-5"></div>
            <h3 className="text-3xl mb-5 font-primary-medium">
              {activeItem.title}
            </h3>
            <p className="paragraph w-[500px]">{activeItem.content}</p>
            <div className="flex justify-start">
              <PrimaryBlueButton
                text={"DELVE INTO MORE"}
                link={activeItem.link}
              />
            </div>
          </div>

          <div className="absolute top-1/2 transform -translate-y-[50%] -right-[28rem] h-[34rem] w-[52rem] max-w-[52rem]  after:absolute after:w-full after:h-full after:bg-[#1297FA]/15 after:rounded-2xl after:top-0">
            <img
              src={activeItem.img}
              className="h-full w-full z-0 rounded-2xl object-cover "
              alt={activeItem.title}
            />
          </div>

          <div className="absolute bottom-[3.5rem] -right-[19rem] flex gap-4 justify-center items-center">
            <img
              className="hover:cursor-pointer"
              src={left_arrow}
              alt=""
              onClick={prevClick}
            />
            <span className="text-xl">
              {activeItem.id < 9
                ? `0${activeItem.id + 1} - ${data.length}`
                : `${activeItem.id + 1} - ${data.length}`}
            </span>
            <img
              className="hover:cursor-pointer"
              src={right_arrow}
              alt=""
              onClick={nextClick}
            />
          </div>
        </div>
      </div>

      {/* Tab */}
      <div className="relative hidden lg:block 2xl:hidden h-[33rem] max-w-[42rem] xl:max-w-[47rem]">
        <div className="h-full w-full flex items-center">
          <img src={assure_security_bgimage} alt="" className="absolute" />

          <div className="pl-5 xl:pl-10 my-10">
            <div className="w-10 h-1 bg-[#13B2F5] mb-5"></div>
            <h3 className="text-3xl mb-5 font-primary-medium">
              {activeItem.title}
            </h3>
            <p className="paragraph xl:w-[522px] w-[500px]">
              {activeItem.content}
            </p>
            <div className="flex justify-start">
              <PrimaryBlueButton
                text={"DELVE INTO MORE"}
                link={activeItem.link}
              />
            </div>
          </div>

          <div className="absolute top-1/2 transform -translate-y-[50%] h-[20rem] -right-[21rem] w-[30rem] xl:w-[35rem] xl:h-[25rem] xl:-right-[30rem] after:absolute after:w-full after:h-full after:bg-[#1297FA]/15 after:rounded-2xl after:top-0">
            <img
              src={activeItem.imgTab}
              className="h-full w-full z-0 rounded-2xl object-cover "
              alt={activeItem.title}
            />
          </div>

          <div className="absolute bottom-8 -right-[16rem] xl:-bottom-0 xl:-right-[20rem] flex gap-4 justify-center items-center">
            <img
              className="hover:cursor-pointer size-11"
              src={left_arrow}
              alt=""
              onClick={prevClick}
            />
            <span className="text-xl">
              {activeItem.id < 9
                ? `0${activeItem.id + 1} - ${data.length}`
                : `${activeItem.id + 1} - ${data.length}`}
            </span>
            <img
              className="hover:cursor-pointer size-11"
              src={right_arrow}
              alt=""
              onClick={nextClick}
            />
          </div>
        </div>
      </div>

      {/* medium and small screen */}
      <div
        className="flex flex-col lg:hidden p-4 mb-5 rounded-2xl mt-32"
        style={{
          backgroundImage: `url(${bgshadow})`,
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {cards.map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div
              className={`${
                item.id === 0 ? "z-10 relative -mt-32" : "z-10 relative"
              }`}
            >
              {/* <div className="z-10 relative -mt-32"> */}
              <img
                src={item.imgMobile}
                alt=""
                className="h-full w-full object-cover rounded-2xl lg:hidden"
              />

              <img
                src={item.imgTab}
                alt=""
                className="h-full w-full rounded-2xl hidden lg:block"
              />
              <img
                src={blueshade}
                className="absolute top-0 h-full w-full object-cover rounded-2xl"
                alt={activeItem.title}
              />
              <img
                src={bgshadow}
                className="absolute top-0 z-20 h-full w-full object-cover rounded-2xl"
                alt=""
              />
            </div>
            <div className="w-10 h-1 bg-[#13B2F5]"></div>
            <h3 className="text-[17px] md:text-[22px] uppercase">
              {item.title}
            </h3>
            <div className="text-[16px] md:text-[18px] lg:text-[20px]">
              {item.content}
            </div>

            {/* button */}
            <div className="flex justify-start mb-10">
              <PrimaryBlueButton text={"DELVE INTO MORE"} link={item.link} />
            </div>
          </div>
        ))}
      </div>

      {/* view all button for small devices */}
      <div className="flex justify-center lg:hidden">
        <div
          className="flex group justify-center items-center"
          onClick={handleViewAll}
        >
          <button
            className={`bg-[#FFFBF0] border border-[#13B2F5] text-[#37508A] text-[12px] md:text-[14px] rounded-full flex p-3 px-5 items-center transition-all duration-300 ease-in-out ${
              showAll
                ? "w-[150px] md:w-[160px] group-hover:w-[110px] md:group-hover:w-[130px]"
                : "w-[140px] md:w-[150px] group-hover:w-[100px] md:group-hover:w-[110px]"
            }`}
          >
            {showAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
          <span className="relative w-[30px] h-[30px] md:w-[35px] md:h-[35px] right-2 bg-[#13B2F5] rounded-full flex justify-center items-center -ml-8 group-hover:ml-3 transition-all duration-300 ease-in-out">
            <img
              src={arrow}
              alt=""
              className="w-4 md:w-5"
              style={{ fill: "blue" }}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default KeyIndustries;
