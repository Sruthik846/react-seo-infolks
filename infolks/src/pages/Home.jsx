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
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []);

  // const [loader, setLoader] = useState(false);
  // const [loader2, setLoader2] = useState(true);

  // useEffect(() => {
  //   const firstTimeout = setTimeout(() => {
  //     setLoader2(false);
  //     return () => clearTimeout(secondTimeout);
  //   }, 2000);

  //   return () => clearTimeout(firstTimeout);
  // }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({ ease: "power4" });

  //   tl.to(".slider", {
  //     height: "100vh",
  //     duration: 1,
  //   })
  //     .to(".slider", {
  //       height: 0,
  //       duration: 0.5,
  //     })
  //     .to("#card1", {
  //       opacity: 1,
  //       duration: 3,
  //     })
  //     .from("#card1 img", {
  //       scale: 1.1,
  //       duration: 3,
  //     });

  //   // Cleanup
  //   return () => tl.kill();
  // }, []);

  return (
    <div>
      {/* {loader && (
        <div className="flex justify-center items-center h-screen">
          <svg
            width="10px"
            height="20px"
            viewBox="0 0 10 8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50vw] h-[50vh] max-w-[100px] "
          >
            <g
              id="Audio"
              transform="translate(0.000000, 0.500000)"
              stroke="currentColor"
              stroke-width="1"
              fill-rule="evenodd"
              stroke-linecap="round"
            >
              <line x1="8.5" y1="0.493135" x2="8.5" y2="6.50687" id="Line-5">
                <animate
                  attributeType="XML"
                  attributeName="y1"
                  values="2;0;2"
                  keyTimes="0;0.5;1"
                  dur=".8s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeType="XML"
                  attributeName="y2"
                  values="5;7;5"
                  keyTimes="0;0.5;1"
                  dur=".8s"
                  repeatCount="indefinite"
                ></animate>
              </line>
              <line x1="6.5" y1="0.789016" x2="6.5" y2="6.21098" id="Line-4">
                <animate
                  attributeType="XML"
                  attributeName="y1"
                  values="0;2;0"
                  keyTimes="0;0.5;1"
                  dur=".5s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeType="XML"
                  attributeName="y2"
                  values="7;5;7"
                  keyTimes="0;0.5;1"
                  dur=".5s"
                  repeatCount="indefinite"
                ></animate>
              </line>
              <line x1="4.5" y1="1.67582" x2="4.5" y2="5.32418" id="Line-3">
                <animate
                  attributeType="XML"
                  attributeName="y1"
                  values="1;3;1"
                  keyTimes="0;0.5;1"
                  dur=".6s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeType="XML"
                  attributeName="y2"
                  values="6;4;6"
                  keyTimes="0;0.5;1"
                  dur=".6s"
                  repeatCount="indefinite"
                ></animate>
              </line>
              <line x1="2.5" y1="1.14678" x2="2.5" y2="5.85322" id="Line-2">
                <animate
                  attributeType="XML"
                  attributeName="y1"
                  values="2;1;2"
                  keyTimes="0;0.5;1"
                  dur=".7s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeType="XML"
                  attributeName="y2"
                  values="5;6;5"
                  keyTimes="0;0.5;1"
                  dur=".7s"
                  repeatCount="indefinite"
                ></animate>
              </line>
              <line x1="0.5" y1="1.67582" x2="0.5" y2="5.32418" id="Line-1">
                <animate
                  attributeType="XML"
                  attributeName="y1"
                  values="3;0;3"
                  keyTimes="0;0.5;1"
                  dur=".9s"
                  repeatCount="indefinite"
                ></animate>
                <animate
                  attributeType="XML"
                  attributeName="y2"
                  values="4;7;4"
                  keyTimes="0;0.5;1"
                  dur=".9s"
                  repeatCount="indefinite"
                ></animate>
              </line>
            </g>
          </svg>
        </div>
      )}
      {loader2 && (
        <div id="main" className="flex h-screen prose lg:prose-xl">
          <div className="right relative w-full overflow-hidden bg-blue-400">
            <div className="inner absolute inset-0 z-10 p-4 grid place-content-center">
              <div
                id="card1"
                className="bg-white rounded-xl shadow-md overflow-hidden opacity-0"
              ></div>
            </div>
            <div className="slider waves relative h-0 z-20 bg-blue-600"></div>
          </div>
        </div>
      )} */}
      {/* {!loader && !loader2 && ( */}
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
