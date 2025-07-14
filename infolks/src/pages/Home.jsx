// import { useEffect, useRef, useState } from "react";
import React from 'react';
import Banner from "../components/Home/Hero/Banner";
import Stackcards from "../components/Home/Services/Stackcards";
import LetsTalk from "../components/LetsTalk/LetsTalk";
import TrustedBy from "../components/Home/Clients/TrustedBy";
import Solutions from "../components/Home/Solutions/Solutions";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../layouts/Footer";
import Workflow from "../components/Home/Workflow/Workflow";
// import gsap from "gsap";
import "./loader.css";
import Carousel from "../components/Home/Rounded/Demo";
import OurService from "../components/Home/OurService";
import client_bg from "/home/client_section_bg.jpg";

import Blogs from "../components/Common/Blog/Blog";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined'){
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }
  }, []);
  
  return (
    <div>
      <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] font-primary-regular">
        <Banner />
        <div className="mx-auto container relative px-5 md:px-0">
          <div className="rounded-[33px] bg-[#FFFBF0] text-[#37508A] text-[19px] rounded-t-[25px] md:rounded-t-[40px]">
            <div className="flex w-full justify-center items-center flex-col -mt-16">
              <OurService />
              <Stackcards />
              <div className="mt-5 lg:mt-40 w-full">
                <LetsTalk
                  title1={
                    "Tie up with our hands to power a better AI initiative."
                  }
                  title2={"LET’S KNOW HOW WE CAN HELP YOU"}
                />
              </div>
              <Solutions />
              <TrustedBy />
              <div
                style={{
                  backgroundImage: `url(${client_bg})`,
                  backgroundSize: "cover", // Optional, adjusts how the background image covers the element
                  backgroundPosition: "center", // Optional, centers the image
                  width: "100%", // Optional, sets the width of the container
                }}
                className="w-full mt-10 lg:mt-20"
              >
                <Carousel />
              </div>
              <Workflow />
              <Blogs title="A QUICK LOOK TO BLOGS" />
              <GetInTouch />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* )} */}
    </div>
  );
};

export default Home;
