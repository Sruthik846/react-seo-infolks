import { useRef, useState } from "react";
import blog from "/home/blog/blog.png";
import blog2 from "/home/blog/blog2.png";
import blog3 from "/home/blog/blog3.png";
import "./style.css";

import { animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import PrimaryInvertButton from "../button/PrimaryInvertButton";
import { useEffect } from "react";
import gsap from "gsap";
import React from 'react';


// eslint-disable-next-line react/prop-types
const Blogs = ({ title, buttonText }) => {
  const blogdata = [
    {
      id: 1,
      img: blog,
      title: "A BRIEF ABOUT NLP AND ADVANCED HAND GESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#FF8E90]",
      borderColor: "border-[#FF8E90]",
      borderBottomColor: "border-b-[#FF8E90]",
      icon: "#FF8E90",
    },
    {
      id: 2,
      img: blog2,
      title: "A BRIEF ABOUT NLP AND ADVANCED HAND GESTURE RECOGNITION",
      date: "JAN 2024",
      color: "bg-[#04AFC6]",
      borderColor: "border-[#04AFC6]",
      borderBottomColor: "border-b-[#04AFC6]",
      icon: "#04AFC6",
    },
    {
      id: 3,
      img: blog3,
      title: "A BRIEF ABOUT NLP AND ADVANCED HAND GESTURE RECOGNITION",
      date: "DEC 2023",
      color: "bg-[#0C9DFC]",
      borderColor: "border-[#0C9DFC]",
      borderBottomColor: "border-b-[#0C9DFC]",
      icon: "#0C9DFC",
    },
  ];

  const [hovered, setHovered] = useState(null);
  const containerRefs = useRef([]);
  const cursorRefs = useRef([]);

  useEffect(() => {
    containerRefs.current.forEach((container, index) => {
      const cursor = cursorRefs.current[index];
      if (!container || !cursor) return;

      const moveCursor = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Ensure cursor stays strictly inside the figure
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          gsap.to(cursor, { x, y, duration: 0.2, ease: "power2.out" });
        } else {
          gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.3 });
        }
      };

      const showCursor = () => {
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      };

      const hideCursor = () => {
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      };

      container.addEventListener("mousemove", moveCursor);
      container.addEventListener("mouseenter", showCursor);
      container.addEventListener("mouseleave", hideCursor);

      return () => {
        container.removeEventListener("mousemove", moveCursor);
        container.removeEventListener("mouseenter", showCursor);
        container.removeEventListener("mouseleave", hideCursor);
      };
    });
  });
  return (
    <section className="flex justify-center items-center pb-5 md:pb-10 lg:pb-20 flex-col mx-auto container md:max-w-[90%] w-full font-primary-regular">
      {title ? (
        <h2 className="text-[#37508A] heading-h2 mb-2 md:mb-10 lg:mb-14 lg:mt-10 uppercase">
          {title}
        </h2>
      ) : (
        <h2 className="text-[#37508A] heading-h2 mb-2 md:mb-10 lg:mb-14 lg:mt-10 uppercase">
          BLOGS
        </h2>
      )}

      {/* Blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 w-full md:pl-2 md:pr-4">
        {blogdata.map(
          (
            {
              id,
              img,
              title,
              borderColor,
              icon,
              color,
              date,
              borderBottomColor,
            },
            index
          ) => (
            <div key={id} className="relative group md:h-[510px] w-full">
               <Link to="/blogs" key={id}>
              <div
                className={`hidden md:block absolute inset-0 bg-[#FFFBF0] card-compact bg-base-100 mb-5 md:mb-10 border z-0 rounded-2xl ml-3 ${borderColor} `}
              >
                <div
                  className={`border-b ${borderBottomColor} pt-4 pb-4 p-2 z-20`}
                >
                  <div className="flex gap-2 justify-between z-20">
                    <p className="text-[10px]">BLOG</p>
                    <div className={`w-full mt-1.5 h-0.5 ${color} `}></div>
                    <p className="text-[10px] w-16">{date}</p>
                  </div>
                  <div
                    className="relative cursor-none overflow-hidden"
                    ref={(el) => (containerRefs.current[index] = el)}
                  >
                    <img
                      src={img}
                      alt="Shoes"
                      className="h-auto md:h-[305px] w-full rounded-[12px] object-cover mt-3 z-0"
                    />
                    {/* ----------------- readmore animation ---------------- */}
                    <div
                      className="container z-10 absolute inset-0"
                      ref={(el) => (cursorRefs.current[index] = el)}
                      style={{
                        transform: "translate(-50%, -50%)",
                        opacity: 0,
                        scale: 0,
                      }}
                    >
                      <div className="hooksMain z-10">
                        <animated.div className="absolute font-medium w-28 h-28 bg-[#0C9DFC] animate-blob flex justify-center items-center ">
                          <p className="absolute text-white text-[12px] uppercase z-50">
                            read more
                          </p>
                        </animated.div>
                      </div>
                    </div>
                    {/* ---------------end of readmore--------- */}
                  </div>
                </div>

                <div className="p-2 md:p-4 flex justify-between items-center z-30">
                  <h5 className="text-[15px] lg:text-[13px] 2xl:text-[15px] text-[#002147] font-primary-medium w-[75%] lg:w-[90%] z-30">
                    {title}
                  </h5>
                  {/* <div className="w-10 z-30">
                    {id === hovered ? (
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="23"
                          cy="23"
                          r="22.5"
                          stroke="white"
                          fill={icon}
                        />
                        <path
                          d="M32.969 14.0537H27.4862C26.3096 14.0537 25.1593 14.4131 24.1696 15.0911L23.0002 15.8889L21.8308 15.0911C20.8421 14.4132 19.6906 14.053 18.5143 14.0537H13.0315C12.6073 14.0537 12.2646 14.4182 12.2646 14.8693V29.3467C12.2646 29.7978 12.6073 30.1623 13.0315 30.1623H18.5143C19.6909 30.1623 20.8411 30.5217 21.8308 31.1997L22.8948 31.9286C22.9259 31.949 22.9619 31.9618 22.9978 31.9618C23.0338 31.9618 23.0697 31.9516 23.1009 31.9286L24.1648 31.1997C25.1569 30.5217 26.3096 30.1623 27.4862 30.1623H32.969C33.3931 30.1623 33.7358 29.7978 33.7358 29.3467V14.8693C33.7358 14.4182 33.3931 14.0537 32.969 14.0537ZM18.5143 28.3272H13.99V15.8889H18.5143C19.3626 15.8889 20.1869 16.1463 20.8986 16.6331L22.0681 17.4309L22.2334 17.5456V29.3212C21.0927 28.6687 19.8179 28.3272 18.5143 28.3272ZM32.0104 28.3272H27.4862C26.1826 28.3272 24.9077 28.6687 23.7671 29.3212V17.5456L23.9324 17.4309L25.1018 16.6331C25.8135 16.1463 26.6379 15.8889 27.4862 15.8889H32.0104V28.3272ZM20.242 19.1514H15.7897C15.6962 19.1514 15.6195 19.238 15.6195 19.3425V20.4895C15.6195 20.594 15.6962 20.6807 15.7897 20.6807H20.2396C20.3331 20.6807 20.4098 20.594 20.4098 20.4895V19.3425C20.4122 19.238 20.3355 19.1514 20.242 19.1514ZM25.5883 19.3425V20.4895C25.5883 20.594 25.6649 20.6807 25.7584 20.6807H30.2084C30.3019 20.6807 30.3785 20.594 30.3785 20.4895V19.3425C30.3785 19.238 30.3019 19.1514 30.2084 19.1514H25.7584C25.6649 19.1514 25.5883 19.238 25.5883 19.3425ZM20.242 22.7197H15.7897C15.6962 22.7197 15.6195 22.8064 15.6195 22.9109V24.0579C15.6195 24.1624 15.6962 24.249 15.7897 24.249H20.2396C20.3331 24.249 20.4098 24.1624 20.4098 24.0579V22.9109C20.4122 22.8064 20.3355 22.7197 20.242 22.7197ZM30.2108 22.7197H25.7584C25.6649 22.7197 25.5883 22.8064 25.5883 22.9109V24.0579C25.5883 24.1624 25.6649 24.249 25.7584 24.249H30.2084C30.3019 24.249 30.3785 24.1624 30.3785 24.0579V22.9109C30.3809 22.8064 30.3043 22.7197 30.2108 22.7197Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_649_2556)">
                          <path
                            d="M32.969 14.0537H27.4862C26.3096 14.0537 25.1593 14.4131 24.1696 15.0911L23.0002 15.8889L21.8308 15.0911C20.8421 14.4132 19.6906 14.053 18.5143 14.0537H13.0315C12.6073 14.0537 12.2646 14.4182 12.2646 14.8693V29.3467C12.2646 29.7978 12.6073 30.1623 13.0315 30.1623H18.5143C19.6909 30.1623 20.8411 30.5217 21.8308 31.1997L22.8948 31.9286C22.9259 31.949 22.9619 31.9618 22.9978 31.9618C23.0338 31.9618 23.0697 31.9516 23.1009 31.9286L24.1648 31.1997C25.1569 30.5217 26.3096 30.1623 27.4862 30.1623H32.969C33.3931 30.1623 33.7358 29.7978 33.7358 29.3467V14.8693C33.7358 14.4182 33.3931 14.0537 32.969 14.0537ZM18.5143 28.3272H13.99V15.8889H18.5143C19.3626 15.8889 20.1869 16.1463 20.8986 16.6331L22.0681 17.4309L22.2334 17.5456V29.3212C21.0927 28.6687 19.8179 28.3272 18.5143 28.3272ZM32.0104 28.3272H27.4862C26.1826 28.3272 24.9077 28.6687 23.7671 29.3212V17.5456L23.9324 17.4309L25.1018 16.6331C25.8135 16.1463 26.6379 15.8889 27.4862 15.8889H32.0104V28.3272ZM20.242 19.1514H15.7897C15.6962 19.1514 15.6195 19.238 15.6195 19.3425V20.4895C15.6195 20.594 15.6962 20.6807 15.7897 20.6807H20.2396C20.3331 20.6807 20.4098 20.594 20.4098 20.4895V19.3425C20.4122 19.238 20.3355 19.1514 20.242 19.1514ZM25.5883 19.3425V20.4895C25.5883 20.594 25.6649 20.6807 25.7584 20.6807H30.2084C30.3019 20.6807 30.3785 20.594 30.3785 20.4895V19.3425C30.3785 19.238 30.3019 19.1514 30.2084 19.1514H25.7584C25.6649 19.1514 25.5883 19.238 25.5883 19.3425ZM20.242 22.7197H15.7897C15.6962 22.7197 15.6195 22.8064 15.6195 22.9109V24.0579C15.6195 24.1624 15.6962 24.249 15.7897 24.249H20.2396C20.3331 24.249 20.4098 24.1624 20.4098 24.0579V22.9109C20.4122 22.8064 20.3355 22.7197 20.242 22.7197ZM30.2108 22.7197H25.7584C25.6649 22.7197 25.5883 22.8064 25.5883 22.9109V24.0579C25.5883 24.1624 25.6649 24.249 25.7584 24.249H30.2084C30.3019 24.249 30.3785 24.1624 30.3785 24.0579V22.9109C30.3809 22.8064 30.3043 22.7197 30.2108 22.7197Z"
                            fill={icon}
                          />
                        </g>
                        <circle cx="23" cy="23" r="22.5" stroke={icon} />
                        <defs>
                          <clipPath id="clip0_649_2556">
                            <rect
                              width="22"
                              height="18"
                              fill="white"
                              transform="translate(12 14)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </div> */}
                </div>
              </div>

              <div
                key={id}
                className={`card-compact bg-[#FFFBF0] bg-base-100 mb-5 md:mb-10 border z-10 ${borderColor} rounded-2xl m-2 md:m-0 md:ml-3 group-hover:ml-1 group-hover:mt-4 group-hover:mr-2 transition-all duration-300 ease-in-out`}
              >
                <div className={` pt-4 pb-4 p-2`}>
                  <div className="flex gap-2 justify-between">
                    <p className="text-[10px]">BLOG</p>
                    <div className={`w-full mt-1.5 h-0.5 ${color} `}></div>
                    <p className="text-[10px] w-20 md:w-16">{date}</p>
                  </div>
                  <figure>
                    <img
                      src={img}
                      alt="Shoes"
                      className="h-auto md:h-[305px] w-full rounded-[12px] object-cover mt-3"
                    />
                  </figure>
                </div>

                <div className="p-2 md:p-4 flex justify-between items-center h-24">
                  <h5 className="text-[15px] lg:text-[13px] 2xl:text-[15px] text-[#002147] font-primary-medium w-[75%] lg:w-[90%]">
                    {title}
                  </h5>

                  <div className="md:hidden z-30 w-10">
                    {id === hovered ? (
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="23"
                          cy="23"
                          r="22.5"
                          stroke="white"
                          fill={icon}
                        />
                        <path
                          d="M32.969 14.0537H27.4862C26.3096 14.0537 25.1593 14.4131 24.1696 15.0911L23.0002 15.8889L21.8308 15.0911C20.8421 14.4132 19.6906 14.053 18.5143 14.0537H13.0315C12.6073 14.0537 12.2646 14.4182 12.2646 14.8693V29.3467C12.2646 29.7978 12.6073 30.1623 13.0315 30.1623H18.5143C19.6909 30.1623 20.8411 30.5217 21.8308 31.1997L22.8948 31.9286C22.9259 31.949 22.9619 31.9618 22.9978 31.9618C23.0338 31.9618 23.0697 31.9516 23.1009 31.9286L24.1648 31.1997C25.1569 30.5217 26.3096 30.1623 27.4862 30.1623H32.969C33.3931 30.1623 33.7358 29.7978 33.7358 29.3467V14.8693C33.7358 14.4182 33.3931 14.0537 32.969 14.0537ZM18.5143 28.3272H13.99V15.8889H18.5143C19.3626 15.8889 20.1869 16.1463 20.8986 16.6331L22.0681 17.4309L22.2334 17.5456V29.3212C21.0927 28.6687 19.8179 28.3272 18.5143 28.3272ZM32.0104 28.3272H27.4862C26.1826 28.3272 24.9077 28.6687 23.7671 29.3212V17.5456L23.9324 17.4309L25.1018 16.6331C25.8135 16.1463 26.6379 15.8889 27.4862 15.8889H32.0104V28.3272ZM20.242 19.1514H15.7897C15.6962 19.1514 15.6195 19.238 15.6195 19.3425V20.4895C15.6195 20.594 15.6962 20.6807 15.7897 20.6807H20.2396C20.3331 20.6807 20.4098 20.594 20.4098 20.4895V19.3425C20.4122 19.238 20.3355 19.1514 20.242 19.1514ZM25.5883 19.3425V20.4895C25.5883 20.594 25.6649 20.6807 25.7584 20.6807H30.2084C30.3019 20.6807 30.3785 20.594 30.3785 20.4895V19.3425C30.3785 19.238 30.3019 19.1514 30.2084 19.1514H25.7584C25.6649 19.1514 25.5883 19.238 25.5883 19.3425ZM20.242 22.7197H15.7897C15.6962 22.7197 15.6195 22.8064 15.6195 22.9109V24.0579C15.6195 24.1624 15.6962 24.249 15.7897 24.249H20.2396C20.3331 24.249 20.4098 24.1624 20.4098 24.0579V22.9109C20.4122 22.8064 20.3355 22.7197 20.242 22.7197ZM30.2108 22.7197H25.7584C25.6649 22.7197 25.5883 22.8064 25.5883 22.9109V24.0579C25.5883 24.1624 25.6649 24.249 25.7584 24.249H30.2084C30.3019 24.249 30.3785 24.1624 30.3785 24.0579V22.9109C30.3809 22.8064 30.3043 22.7197 30.2108 22.7197Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_649_2556)">
                          <path
                            d="M32.969 14.0537H27.4862C26.3096 14.0537 25.1593 14.4131 24.1696 15.0911L23.0002 15.8889L21.8308 15.0911C20.8421 14.4132 19.6906 14.053 18.5143 14.0537H13.0315C12.6073 14.0537 12.2646 14.4182 12.2646 14.8693V29.3467C12.2646 29.7978 12.6073 30.1623 13.0315 30.1623H18.5143C19.6909 30.1623 20.8411 30.5217 21.8308 31.1997L22.8948 31.9286C22.9259 31.949 22.9619 31.9618 22.9978 31.9618C23.0338 31.9618 23.0697 31.9516 23.1009 31.9286L24.1648 31.1997C25.1569 30.5217 26.3096 30.1623 27.4862 30.1623H32.969C33.3931 30.1623 33.7358 29.7978 33.7358 29.3467V14.8693C33.7358 14.4182 33.3931 14.0537 32.969 14.0537ZM18.5143 28.3272H13.99V15.8889H18.5143C19.3626 15.8889 20.1869 16.1463 20.8986 16.6331L22.0681 17.4309L22.2334 17.5456V29.3212C21.0927 28.6687 19.8179 28.3272 18.5143 28.3272ZM32.0104 28.3272H27.4862C26.1826 28.3272 24.9077 28.6687 23.7671 29.3212V17.5456L23.9324 17.4309L25.1018 16.6331C25.8135 16.1463 26.6379 15.8889 27.4862 15.8889H32.0104V28.3272ZM20.242 19.1514H15.7897C15.6962 19.1514 15.6195 19.238 15.6195 19.3425V20.4895C15.6195 20.594 15.6962 20.6807 15.7897 20.6807H20.2396C20.3331 20.6807 20.4098 20.594 20.4098 20.4895V19.3425C20.4122 19.238 20.3355 19.1514 20.242 19.1514ZM25.5883 19.3425V20.4895C25.5883 20.594 25.6649 20.6807 25.7584 20.6807H30.2084C30.3019 20.6807 30.3785 20.594 30.3785 20.4895V19.3425C30.3785 19.238 30.3019 19.1514 30.2084 19.1514H25.7584C25.6649 19.1514 25.5883 19.238 25.5883 19.3425ZM20.242 22.7197H15.7897C15.6962 22.7197 15.6195 22.8064 15.6195 22.9109V24.0579C15.6195 24.1624 15.6962 24.249 15.7897 24.249H20.2396C20.3331 24.249 20.4098 24.1624 20.4098 24.0579V22.9109C20.4122 22.8064 20.3355 22.7197 20.242 22.7197ZM30.2108 22.7197H25.7584C25.6649 22.7197 25.5883 22.8064 25.5883 22.9109V24.0579C25.5883 24.1624 25.6649 24.249 25.7584 24.249H30.2084C30.3019 24.249 30.3785 24.1624 30.3785 24.0579V22.9109C30.3809 22.8064 30.3043 22.7197 30.2108 22.7197Z"
                            fill={icon}
                          />
                        </g>
                        <circle cx="23" cy="23" r="22.5" stroke={icon} />
                        <defs>
                          <clipPath id="clip0_649_2556">
                            <rect
                              width="22"
                              height="18"
                              fill="white"
                              transform="translate(12 14)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              </Link>
            </div>
          )
        )}
      </div>

      {/* Button */}
      {buttonText ? (
        <PrimaryInvertButton text={buttonText} link={"/blogs"} />
      ) : (
        <PrimaryInvertButton text={"VIEW ALL BLOGS"} link={"/blogs"} />
      )}
    </section>
  );
};

export default Blogs;
