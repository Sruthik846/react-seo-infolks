import bgImage from "/icons/lets-talk-bg.png";
import user1 from "/icons/lets-talk/user.png";
import user2 from "/icons/lets-talk/phone.png";
import user3 from "/icons/lets-talk/chat.png";
import user4 from "/icons/lets-talk/user-group.png";
import user5 from "/icons/lets-talk/open-envelope.png";
import user6 from "/icons/lets-talk/printer.png";
import user7 from "/icons/lets-talk/envelope.png";
import arrow from "/home/icons/arrowRight.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="relative w-full z-10 flex justify-center items-center font-primary-regular">
      {/* Gradient Background */}
      <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff] rounded-[16px] lg:rounded-[35px] w-full relative z-10">
        <img
          src={bgImage}
          alt="Your Image"
          className="w-full z-0 opacity-[0.3] h-48 md:h-full rounded-[16px] lg:rounded-[35px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center hidden lg:block">
          <div className="flex gap-4 mb-10">
            <div className="bg-white p-2 rounded-full w-36 h-36 flex justify-center items-center">
              <img src={user1} alt="" className="hidden lg:flex" />
            </div>

            <div className="bg-white p-2 rounded-full w-28 h-28 mt-20 flex justify-center items-center">
              <img src={user2} alt="" className="hidden lg:flex" />
            </div>

            <div className="bg-white p-2 rounded-full w-20 h-20 flex justify-center items-center">
              <img src={user3} alt="" className="hidden lg:flex" />
            </div>

            <div className="bg-white p-2 rounded-full w-40 h-40 mt-10 flex justify-center items-center">
              <img src={user4} alt="" className="hidden lg:flex" />
            </div>

            <div className="bg-white p-2 rounded-full w-16 h-16 flex justify-center items-center">
              <img src={user5} alt="" className="hidden lg:flex" />
            </div>

            <div className="bg-white p-2 rounded-full w-28 h-28 mt-16 flex justify-center items-center">
              <img src={user6} alt="" className="hidden lg:flex" />
            </div>

            <div className="bg-white p-2 rounded-full w-20 h-20 flex justify-center items-center">
              <img src={user7} alt="" className="hidden lg:flex" />
            </div>
          </div>
          <h1 className="text-4xl font-primary-medium mb-7 mt-3 leading-[50px] uppercase">
            STEP UP WITH OUR ANNOTATION TECHNIQUES
          </h1>

          <div className="flex justify-center">
            <div className="w-[340px]">
              <Link to="/contact">
                <div className="flex group font-primary-regular">
                  <button className="bg-white text-[#37508A] text-[12px] lg:text-[19px] rounded-full flex p-2 lg:p-4 px-2 lg:px-8 w-[150px] lg:w-[340px] items-center transition-all duration-300 ease-in-out lg:group-hover:w-[360px] group-hover:w-[200px]">
                    CONTACT US NOW
                  </button>
                  <div className="bg-white p-1 rounded-full relative -ml-10 md:-ml-6 lg:-ml-14 group-hover:ml-0 transition-all duration-300 ease-in-out flex justify-center items-center">
                    <span className="w-[20px] lg:w-[52px] h-[20px] lg:h-[50px] bg-[#13B2F5] rounded-full flex justify-center items-center">
                      <img src={arrow} alt="" className="lg:w-6 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Medium Screens (990px - 999px) */}
        <div className="absolute inset-0 flex-col justify-center text-white z-20 text-center hidden md:flex lg:hidden">
          <div className="flex gap-3 justify-center p-5 flex-wrap">
            <div className="bg-white p-2 rounded-full w-20 h-20 flex justify-center items-center">
              <img src={user1} alt="User 1" className="w-12 h-12" />
            </div>
            <div className="bg-white p-2 rounded-full w-16 h-16 mt-8 flex justify-center items-center">
              <img src={user2} alt="User 2" className="w-10 h-10" />
            </div>
            <div className="bg-white p-2 rounded-full w-14 h-14 flex justify-center items-center">
              <img src={user3} alt="User 3" className="w-8 h-8" />
            </div>
            <div className="bg-white p-2 rounded-full w-24 h-24 mt-2 flex justify-center items-center">
              <img src={user4} alt="User 4" className="w-16 h-16" />
            </div>
            <div className="bg-white p-2 rounded-full w-14 h-14 flex justify-center items-center">
              <img src={user5} alt="User 5" className="w-8 h-8" />
            </div>
            <div className="bg-white p-2 rounded-full w-16 h-16 mt-8 flex justify-center items-center">
              <img src={user6} alt="User 6" className="w-10 h-10" />
            </div>
            <div className="bg-white p-2 rounded-full w-14 h-14 flex justify-center items-center">
              <img src={user7} alt="User 7" className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-[22px] font-primary-medium uppercase w-[80%] mx-auto">
            STEP UP WITH OUR ANNOTATION TECHNIQUES
          </h1>
          <div className="flex justify-center items-center p-2">
            <div className="w-[340px]">
              <Link to="/contact">
                <div className="flex group font-primary-regular justify-center">
                  <button className="bg-white text-[#37508A] text-[16px] rounded-full flex p-4 px-4 w-[250px] items-center transition-all duration-300 ease-in-out group-hover:w-[250px]">
                    CONTACT US NOW
                  </button>
                  <div className="bg-white p-1 rounded-full relative -ml-12 group-hover:ml-0 transition-all duration-300 ease-in-out flex justify-center items-center">
                    <span className="w-[30px] h-[30px] bg-[#13B2F5] rounded-full flex justify-center items-center">
                      <img src={arrow} alt="Arrow" className="w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Small Screens */}
        <div className="absolute inset-0 flex flex-col justify-center text-white z-20 text-center sm:block md:hidden lg:hidden">
          <div className="flex gap-2 justify-center p-5">
            <div className="bg-white rounded-full w-10 h-8 flex justify-center items-center">
              <img src={user1} alt="User 1" className="w-4 h-4" />
            </div>
            <div className="bg-white rounded-full w-8 h-7 mt-5 flex justify-center items-center">
              <img src={user2} alt="User 2" className="w-4 h-4" />
            </div>
            <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center">
              <img src={user3} alt="User 3" className="w-3 h-3" />
            </div>
            <div className="bg-white p-1 rounded-full w-10 h-10 mt-2 flex justify-center items-center">
              <img src={user4} alt="User 4" className="w-8 h-8" />
            </div>
            <div className="bg-white rounded-full w-6 h-6 flex justify-center items-center">
              <img src={user5} alt="User 5" className="w-3 h-3" />
            </div>
            <div className="bg-white rounded-full w-8 h-7 mt-5 flex justify-center items-center">
              <img src={user6} alt="User 6" className="w-4 h-4" />
            </div>
            <div className="bg-white rounded-full w-6 h-5 flex justify-center items-center">
              <img src={user7} alt="User 7" className="w-3 h-3" />
            </div>
          </div>
          <h1 className="text-[16px] font-primary-medium uppercase w-[80%] mx-auto">
            STEP UP WITH OUR ANNOTATION TECHNIQUES
          </h1>
          <div className="flex justify-center items-center p-2">
            <div className="w-[340px] mb-2">
              <Link to="/contact">
                <div className="flex group font-primary-regular justify-center">
                  <button className="bg-white text-[#37508A] text-[12px] rounded-full flex p-4 px-4 w-[200px] items-center transition-all duration-300 ease-in-out group-hover:w-[200px]">
                    CONTACT US NOW
                  </button>
                  <div className="bg-white p-1 rounded-full relative -ml-12 group-hover:ml-0 transition-all duration-300 ease-in-out flex justify-center items-center">
                    <span className="w-[35px] h-[35px] bg-[#13B2F5] rounded-full flex justify-center items-center">
                      <img src={arrow} alt="Arrow" className="w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
