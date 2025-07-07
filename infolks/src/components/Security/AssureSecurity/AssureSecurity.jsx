import { useState } from "react";
import right_arrow from "/security/icons/right_arrow.png";
import left_arrow from "/security/icons/left_arrow.png";
// import data_handling from "/security/data-handling.png";
import assure_security_bgimage from "/security/assure-security-bg-image.png";
import legal_NDA from "/security/legal-nda.jpg";
import network_security from "/security/network-security.jpg";
import surveillance from "/security/surveillance.jpg";
import data_handling from "/security/data-handling.jpg";
import data_storage from "/security/data-storage.jpg";

const AssureSecurity = () => {
  const data = [
    {
      id: 0,
      title: "Legal NDA’s",
      img: legal_NDA,
      content:
        "We encourage our in-house employees to sign a legally valid NDA to ensure the secure handling of your data.",
    },
    {
      id: 1,
      title: "Network Security",
      img: network_security,
      content:
        "We have installed high-quality firewall systems on our networks to protect against cyber threats and attacks. Internal data transfer is also done via highly secure LAN networks.",
    },
    {
      id: 2,
      title: "24/7 Surveillance",
      img: surveillance,
      content:
        "We have set up a 24/7 recording surveillance system for constant monitoring of the workspace. Security cameras and video footage of activities help us secure our company 24/7.",
    },
    {
      id: 3,
      title: "Data Handling",
      img: data_handling,
      content:
        "Project data is received from clients through secured cloud storage. The shared data is then stored on a well-protected master computer. These data are then passed on to annotators using highly secured LAN networks. No external devices like hard disks, pen drives, etc. are used for internal data transfer. The annotated data is then collected from annotators using LAN networks and stored on the master computer. Annotated data is submitted back to clients using secured cloud storage.",
    },
    {
      id: 4,
      title: "Data Storage",
      img: data_storage,
      content:
        "The data that we receive is downloaded and stored on highly secure computers to which only authorised personnel have access. Once the project is over, the same data will be retained for another 14 days for any post-project needs. After which, the data is completely removed from the system.",
    },
    {
      id: 5,
      title: "In-House Team",
      img: data_storage,
      content:
        "Every service we offer is carried out by our team of full-time in-house professionals, working from our secure office spaces. We do not rely on crowdsourcing or third-party outsourcing. This ensures better quality, tighter control, and complete data confidentiality at every step.",
    },
    {
      id: 6,
      title: "Restrictions",
      img: data_storage,
      content:
        "The use of mobile phones and any other electronic or data storage devices is strictly prohibited within the work premises.",
    },
    {
      id: 7,
      title: "Environmental Access",
      img: data_storage,
      content:
        "Access to the work premises is secured through biometric entry and exit systems, ensuring that only authorized personnel can enter the premises.",
    },
    {
      id: 8,
      title: "Dedicated Team",
      img: data_storage,
      content:
        "A specialized team of data security professionals, led by an experienced expert, has been established to form our Data Security Wing. Their mission is to implement and maintain robust data protection protocols across all operations.",
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
    <section className="text-[#37508A] mb-5 lg:mb-20 font-primary-regular text-[19px] px-6 lg:px-0">
      <h2 className="heading-h2 text-center mb-40 lg:mb-20">
        HOW WE ASSURE SECURITY?
      </h2>

      {/* large screen */}
      <div className="relative hidden 2xl:block max-w-6xl">
        <img src={assure_security_bgimage} alt="" />
        <div className="flex">
          <div className="absolute xl:top-[25%]  top-[25%] 2xl:left-36 left-24 ">
            <div className="w-10 h-1 bg-[#13B2F5] mb-5"></div>
            <h3 className="text-3xl mb-5 font-primary-medium">
              {activeItem.title}
            </h3>
            <p className="paragraph w-[500px]">{activeItem.content}</p>
          </div>

          <div className="absolute top-1/2 transform -translate-y-[50%] lg:-right-[21rem] xl:-right-[25rem] 2xl:-right-[29rem] h-[30.5rem] w-[45rem] max-h-[35rem] max-w-[49rem] after:absolute after:w-full 2xl:after:h-[35rem] 2xl:after:w-[45rem] after:h-full after:bg-[#1297FA]/15 after:rounded-2xl after:top-0">
            <img
              src={activeItem.img}
              className="h-full w-full 2xl:h-[35rem] 2xl:w-[49rem] z-0 rounded-2xl object-cover "
              alt={activeItem.title}
            />
          </div>

          <div className="absolute bottom-16 2xl:bottom-[1rem] -right-[12rem] 2xl:-right-[17rem] flex gap-4 justify-center items-center">
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

          <div className="pl-5 lg:pl-10 my-10">
            <div className="w-10 h-1 bg-[#13B2F5] mb-5"></div>
            <h3 className="text-3xl mb-5 font-primary-medium">
              {activeItem.title}
            </h3>
            <p className="paragraph xl:w-[522px] w-[500px]">
              {activeItem.content}
            </p>
          </div>

          <div className="absolute top-1/2 transform -translate-y-[50%] h-[20rem] -right-[21rem] w-[30rem] xl:w-[35rem] xl:h-[25rem] xl:-right-[28rem] after:absolute after:w-full after:h-full after:bg-[#1297FA]/15 after:rounded-2xl after:top-0">
            <img
              src={activeItem.img}
              className="h-full w-full z-0 rounded-2xl object-cover "
              alt={activeItem.title}
            />
          </div>

          <div className="absolute bottom-8 -right-[13rem] xl:-bottom-0 xl:-right-[20rem] flex gap-4 justify-center items-center">
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

      {/* Mobile */}
      <div
        className="flex flex-col lg:hidden rounded-2xl mb-20 px-4"
        style={{
          backgroundImage: `url(${assure_security_bgimage})`,
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={activeItem.img}
          alt=""
          className="w-full object-cover rounded-2xl -translate-y-28"
        />
        <div className="space-y-5 -translate-y-20 text-center md:h-48">
          <div className="w-10 h-1 bg-[#13B2F5]"></div>
          <h3 className="text-[17px] md:text-[22px] uppercase">
            {activeItem.title}
          </h3>
          <p className="paragraph">{activeItem.content}</p>
        </div>

        <div className="flex justify-center items-center -translate-y-10 gap-x-4">
          <img
            className="hover:cursor-pointer size-8"
            src={left_arrow}
            alt=""
            onClick={prevClick}
          />
          <span className="">
            {activeItem.id < 9
              ? `0${activeItem.id + 1} - ${data.length}`
              : `${activeItem.id + 1} - ${data.length}`}
          </span>
          <img
            className="hover:cursor-pointer size-8"
            src={right_arrow}
            alt=""
            onClick={nextClick}
          />
        </div>
      </div>
    </section>
  );
};

export default AssureSecurity;
