import bgImage from "/icons/lets-talk-bg.png";
import user1 from "/icons/lets-talk/user.png";
import user2 from "/icons/lets-talk/phone.png";
import user3 from "/icons/lets-talk/chat.png";
import user4 from "/icons/lets-talk/user-group.png";
import user5 from "/icons/lets-talk/open-envelope.png";
import user6 from "/icons/lets-talk/printer.png";
import user7 from "/icons/lets-talk/envelope.png";
import PrimaryHoverWhiteButton from "../Common/button/PrimaryHoverWhiteButton";
import React from 'react';


// eslint-disable-next-line react/prop-types
const LetsTalk = ({ title1, title2 }) => {
  return (
    <section className="relative w-full z-10 flex justify-center items-center font-primary-regular">
      {/* Gradient Background */}
      <div className="bg-linear-to-r from-[#5ed7fc] to-[#0379ff] rounded-[16px] lg:rounded-[35px] w-full relative z-10">
        <img
          src={bgImage}
          alt="Your Image"
          className="w-full z-0 opacity-[0.3] h-60 md:h-80 lg:h-[35rem]"
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
          <h5 className="heading-h5">{title1}</h5>
          <h3 className="heading-h3 font-primary-medium mb-7 mt-3 uppercase">
            {title2}
          </h3>

          <div className="flex justify-center items-center mt-5">
            <PrimaryHoverWhiteButton text={"LET’S TALK"} link={"/contact"} />
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
          <h5 className="text-[16px] md:text-[20px]">
            Tie up with our hands to power a better AI initiative.
          </h5>
          <h1 className="text-[22px] font-primary-medium uppercase w-[80%] mx-auto">
            LET’S KNOW HOW WE CAN HELP YOU
          </h1>

          <div className="flex justify-center items-center">
            <PrimaryHoverWhiteButton text={"LET’S TALK"} link={"/contact"} />
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
          <h5 className="text-[16px] md:text-[20px]">
            Tie up with our hands to power a better AI initiative.
          </h5>
          <h1 className="text-[16px] font-primary-medium uppercase w-[80%] mx-auto">
            LET’S KNOW HOW WE CAN HELP YOU
          </h1>

          <div className="flex justify-center items-center mt-2 mb-5">
            <PrimaryHoverWhiteButton text={"LET’S TALK"} link={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
