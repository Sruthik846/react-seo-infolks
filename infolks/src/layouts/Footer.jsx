import linkedin from "/socialmedia/linkedin.svg";
import facebook from "/socialmedia/facebook.svg";
import instagram from "/socialmedia/instagram.svg";
import media from "/socialmedia/media.svg";
import socialMedia from "/socialmedia/socialMedia.svg";
import twitter from "/socialmedia/twitter.svg";
import youtube from "/socialmedia/youtube.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import footerBg from "/footer/footer.svg";
import { AiOutlineClose } from "react-icons/ai";
import React from 'react';


const Footer = () => {
  const [subMenus, setSubMenus] = useState({
    industries: false,
    solutions: false,
  });

  const toggleSubmenu = (menuName) => {
    setSubMenus((prevMenus) => ({
      ...prevMenus,
      [menuName]: !prevMenus[menuName],
    }));
  };
  return (
    <div>
      <div className="flex lg:gap-10 relative overflow-hidden h-[920px] lg:h-[820px] xl:h-[600px]">
        <img
          src={footerBg}
          className="rotate-6 flex lg:h-[600px] scale-100 flex-1 overflow-hidden"
          alt=""
        />
        <img
          src={footerBg}
          className="-rotate-6 hidden 2xl:flex scale-100 lg:h-[600px] flex-1"
          alt=""
        />
        <div className="absolute inset-0 px-8 md:ml-16 md:mr-16 lg:mx-auto lg:container flex flex-col p-10 pt-20 font-primary-regular text-[16px] md:text-[19px]">
          <div className="flex xl:flex-row flex-col xl:gap-3 2xl:gap-16">
            <div className="flex flex-1 flex-col text-white">
              <h1 className="md:text-5xl text-[25px]">CONNECT WITH US</h1>
              <div className="w-[250px] md:w-[500px] h-px bg-white md:mt-5 mb-5 md:mb-16"></div>

              <p>Infolks Pvt. Ltd.</p>
              <p>Infolks Tower, Mannarkkad, Kerala, India, 678583</p>

              <div className="flex flex-col gap-1 md:gap-0 md:flex-row mt-5 md:mt-10 font-primary-regular md:font-primary-medium text-[16px] md:text-[20px]">
                <div className="flex flex-col gap-1 md:gap-0 md:border-r-2 pr-2 2xl:pr-4">
                  <p>
                    Career:<a href="tel:+91 70258 89922"> +91 70258 89922</a>
                  </p>
                  <p>
                    Career: <a href="mailto:recruitment@infolksgroup.com"> recruitment@infolksgroup.com
                    </a>
                  </p>
                </div>

                <div className="flex flex-col md:pl-3 2xl:pl-4 gap-1 md:gap-0">
                  <p>
                    Project: <a href="tel:+91 70258 89911">+91 70258 89911</a>
                  </p>
                  <p>
                    Project:<a href="mailto:info@infolks.in"> info@infolks.in</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col md:flex-row md:gap-10 text-white lg:mt-0 mt-5">
              <div className="flex-1 ">
                <div className={subMenus.solutions ? "hidden" : "group/outer"}>
                   <div className="hidden lg:block py-2 border-b-[1px] group-hover/outer:border-[#13B2F5] w-full"
                  >
                    <FlyoutLink href="#" FlyoutContent={IndustriesContent}>
                      <Link to="/industries">
                        <div className="flex justify-between">
                          <p className=" group-hover/outer:text-[#13B2F5]">
                            Industries
                          </p>
                          {subMenus.industries ? (
                            <AiOutlineClose
                              size={18}
                              color="white"
                            ></AiOutlineClose>
                          ) : (
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/outer:rotate-45"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                                fill="white"
                                className=" group-hover/outer:fill-[#13B2F5]"
                              />
                            </svg>
                          )}
                        </div>
                      </Link>
                    </FlyoutLink>
                  </div>
                  <div
                    onClick={() => toggleSubmenu("industries")}
                    className="lg:hidden py-2 border-b-[1px] group-hover/outer:border-[#13B2F5] w-full"
                  >
                    <FlyoutLink href="#" FlyoutContent={IndustriesContent}>
                      <Link to="/industries">
                        <div className="flex justify-between">
                          <p className=" group-hover/outer:text-[#13B2F5]">
                            Industries
                          </p>
                          {subMenus.industries ? (
                            <AiOutlineClose
                              size={18}
                              color="white"
                            ></AiOutlineClose>
                          ) : (
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/outer:rotate-45"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                                fill="white"
                                className=" group-hover/outer:fill-[#13B2F5]"
                              />
                            </svg>
                          )}
                        </div>
                      </Link>
                    </FlyoutLink>
                  </div>
                  {/* Submenu */}
                  {subMenus.industries && (
                    <ul className="pt-2 text-left text-[16px] md:text-[19px] lg:text-[24px] text-white space-y-1">
                      <div className="pb-10">
                        <li className="border-b py-1">
                          <Link to="/industries/healthcare">Healthcare</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/automotive">Automotive</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/retail">Retail</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/finance-banking">
                            Finance & Banking
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/manufacturing">
                            Manufacturing
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/agriculture">Agriculture</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/food-beverages">
                            Food & Beverages
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/livestock">Livestock</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/security-survilance">
                            Security & Surveillance
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/sports">Sports</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/waste-management">
                            Waste Management
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/logistic">Logistics</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/geospatial">Geospatial</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/industries/human-attribution">
                            Human Attribution
                          </Link>
                        </li>
                      </div>
                    </ul>
                  )}
                </div>

                <div className={subMenus.industries ? "hidden" : "group"}>
                   <div
                    onClick={() => toggleSubmenu("solutions")}
                    className="lg:hidden py-2 border-b-[1px] group-hover:border-[#13B2F5]"
                  >
                    <FlyoutLink href="#" FlyoutContent={SolutionContent}>
                      <Link>
                        <div className="flex justify-between ">
                          <p className="group-hover:text-[#13B2F5] cursor-default">
                            Solutions
                          </p>
                          {subMenus.solutions ? (
                            <AiOutlineClose
                              size={18}
                              color="white"
                            ></AiOutlineClose>
                          ) : (
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45 z-0"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                                fill="white"
                                className="group-hover:fill-[#13B2F5]"
                              />
                            </svg>
                          )}
                        </div>
                      </Link>
                    </FlyoutLink>
                  </div>
                  <div
                    className="hidden lg:block py-2 border-b-[1px] group-hover:border-[#13B2F5]"
                  >
                    <FlyoutLink href="#" FlyoutContent={SolutionContent}>
                      <Link>
                        <div className="flex justify-between ">
                          <p className="group-hover:text-[#13B2F5] cursor-default">
                            Solutions
                          </p>
                          {subMenus.solutions ? (
                            <AiOutlineClose
                              size={18}
                              color="white"
                            ></AiOutlineClose>
                          ) : (
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45 z-0"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                                fill="white"
                                className="group-hover:fill-[#13B2F5]"
                              />
                            </svg>
                          )}
                        </div>
                      </Link>
                    </FlyoutLink>
                  </div>
                  {subMenus.solutions && (
                    <ul className="pt-2 text-left text-[16px] md:text-[19px] lg:text-[24px] text-white space-y-1">
                      <div className="pb-10">
                        <li className="border-b py-1">
                          <Link to="/solutions/image-annotation">
                            Image Annotation
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/text-annotation">
                            Text Annotation
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/video-annotation">
                            Video Annotation
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/audio-annotation">
                            Audio Annotation
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/lidar-annotation">
                            Lidar Annotation
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/product-categorisation">
                            Product Categorisation
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/generative-ai">
                            Generative AI
                          </Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/nlp">NLP</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/ar-vr">AR & VR</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/outstaffing">Outstaffing</Link>
                        </li>
                        <li className="border-b py-1">
                          <Link to="/solutions/odc">ODC</Link>
                        </li>
                      </div>
                    </ul>
                  )}
                </div>

                <div
                  className={
                    subMenus.solutions || subMenus.industries
                      ? "hidden"
                      : "group"
                  }
                >
                  <div className="py-2 border-b-[1px] group-hover:border-[#13B2F5]">
                    <Link to="/techniques">
                      <div className="flex justify-between">
                        <p className="group-hover:text-[#13B2F5]">Techniques</p>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                            fill="white"
                            className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    subMenus.solutions || subMenus.industries
                      ? "hidden"
                      : "group"
                  }
                >
                  <div className="py-2 border-b-[1px] group-hover:border-[#13B2F5]">
                    <Link to="/data-security">
                      <div className="flex justify-between">
                        <p className="group-hover:text-[#13B2F5]">
                          Data Security
                        </p>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                            fill="white"
                            className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    subMenus.solutions || subMenus.industries
                      ? "hidden"
                      : "group"
                  }
                >
                  <div className="py-2 border-b-[1px] group-hover:border-[#13B2F5]">
                    <Link to="/quality">
                      <div className="flex justify-between">
                        <p className="group-hover:text-[#13B2F5]">Quality</p>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                            fill="white"
                            className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <div
                  className={
                    subMenus.solutions || subMenus.industries
                      ? "hidden"
                      : "group"
                  }
                >
                  <div className="py-2 border-b-[1px] group-hover:border-[#13B2F5]">
                    <Link to="/blogs">
                      <div className="flex justify-between">
                        <p className="group-hover:text-[#13B2F5]">Blog</p>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                            fill="white"
                            className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    subMenus.solutions || subMenus.industries
                      ? "hidden"
                      : "group"
                  }
                >
                  <div className="py-2 border-b-[1px] group-hover:border-[#13B2F5]">
                    <Link to="/about">
                      <div className="flex justify-between">
                        <p className="group-hover:text-[#13B2F5]">About Us</p>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                            fill="white"
                            className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    subMenus.solutions || subMenus.industries
                      ? "hidden"
                      : "group"
                  }
                >
                  <div className="py-2 border-b-[1px] group-hover:border-[#13B2F5]">
                    <div className="flex justify-between">
                      <Link
                        to="https://infolksgroup.com/career"
                        className="group-hover:text-[#13B2F5]"
                      >
                        Careers
                      </Link>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                          fill="white"
                          className="group-hover:fill-[#13B2F5]"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex xl:flex-row flex-col md:gap-5 xl:gap-0 mt-5 md:mt-10 lg:mt-20 text-white md:justify-center md:items-center lg:justify-between mb-10">
            <div className="flex lg:gap-20 gap-8 lg:flex-row flex-col">
              <div className="lg:flex xl:flex 2xl:flex hidden gap-3 xl:gap-5 justify-center">
                <Link
                  to="https://www.linkedin.com/company/infolks/"
                  className="group"
                >
                  <div className="group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.57 0.00680768C14.6803 0.00680768 16.7905 -0.0085096 18.9008 0.00680768C19.8031 0.00680768 20.69 0.0221231 21.5769 0.282517C23.4731 0.833939 24.88 2.51884 25.0482 4.49477C25.0941 5.09214 25.1399 5.70484 25.1399 6.31753C25.1399 10.5451 25.1399 14.7727 25.1399 19.0002C25.1399 19.9193 25.1247 20.8383 24.8494 21.742C24.2683 23.6107 22.5862 24.974 20.6288 25.1272C19.9254 25.1731 19.222 25.2191 18.5185 25.2191C14.405 25.2191 10.2762 25.2191 6.16265 25.2191C5.3063 25.2191 4.43466 25.2037 3.59361 24.9587C1.66682 24.4072 0.244672 22.6917 0.0917526 20.6851C0.0458767 19.9652 0.0152919 19.2453 0 18.5254C0 14.451 0 10.3766 0 6.30221C0 5.41381 0.0152938 4.52541 0.259965 3.66764C0.795183 1.72234 2.4773 0.313152 4.49583 0.129344C5.13809 0.068075 5.78035 0.0374395 6.42261 0.0374395C8.45644 0.00680488 10.5056 0.00680768 12.57 0.00680768ZM10.0927 10.1775C10.0927 13.5473 10.0927 16.8865 10.0927 20.2409C11.1019 20.2409 12.1112 20.2409 13.1205 20.2409C13.1205 20.149 13.1205 20.0571 13.1205 19.9805C13.1205 18.2956 13.1205 16.5954 13.1205 14.9105C13.1205 13.9762 13.6251 13.1797 14.405 12.9346C15.1849 12.6895 15.9495 12.7355 16.5612 13.3635C16.9435 13.7464 17.0505 14.2366 17.0505 14.7574C17.0505 16.5035 17.0505 18.2497 17.0505 19.9959C17.0505 20.0725 17.0505 20.149 17.0505 20.2409C18.0751 20.2409 19.0843 20.2409 20.0936 20.2409C20.0936 20.1797 20.1089 20.1184 20.1089 20.0725C20.1089 17.9434 20.1089 15.8142 20.1089 13.7005C20.1089 13.486 20.0783 13.2716 20.0324 13.0725C19.8336 12.276 19.5431 11.5101 18.9008 10.9587C17.0505 9.35035 14.3591 9.87114 13.0746 11.4795C13.044 11.5101 13.0134 11.5407 12.9523 11.5867C12.9523 11.0965 12.9523 10.6523 12.9523 10.1928C11.9736 10.1775 11.0408 10.1775 10.0927 10.1775ZM8.33411 10.1775C7.29425 10.1775 6.2697 10.1775 5.24514 10.1775C5.24514 13.5473 5.24514 16.8865 5.24514 20.2409C6.28499 20.2409 7.30955 20.2409 8.33411 20.2409C8.33411 16.8558 8.33411 13.5167 8.33411 10.1775ZM8.57878 6.85363C8.57878 5.87333 7.76831 5.06151 6.78962 5.06151C5.79565 5.06151 5.00047 5.87333 5.00047 6.85363C5.00047 7.84926 5.81094 8.64576 6.80491 8.64576C7.7836 8.64576 8.57878 7.83394 8.57878 6.85363Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="https://www.facebook.com/infolks.Group/"
                  className="group"
                >
                  <div className="group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.9871 12.5449C24.9871 15.0416 24.9871 17.5383 24.9871 20.035C24.9871 22.8228 22.7545 25.0591 19.9866 25.0591C14.9862 25.0591 10.001 25.0591 5.00054 25.0591C2.21741 25.0591 -0.0152138 22.7615 7.80869e-05 19.9737C0.01537 15.0109 0.01537 10.0481 7.80869e-05 5.10065C-0.0152138 2.31291 2.2327 0 5.01583 0C10.001 0 14.9709 0 19.9561 0C22.7545 0 24.9871 2.25164 24.9871 5.0547C24.9871 7.55142 24.9871 10.0481 24.9871 12.5449ZM16.286 4.24289C15.2156 4.21225 14.1757 4.15099 13.1359 4.15099C12.4936 4.15099 11.8819 4.36543 11.362 4.76368C10.4139 5.46827 9.93984 6.44858 9.83279 7.59737C9.75633 8.43983 9.78692 9.29759 9.77163 10.14C9.77163 10.2932 9.77163 10.4464 9.77163 10.6302C8.80824 10.6302 7.89072 10.6302 6.95791 10.6302C6.95791 11.7024 6.95791 12.7287 6.95791 13.8009C7.90601 13.8009 8.82353 13.8009 9.77163 13.8009C9.77163 16.4048 9.77163 18.9781 9.77163 21.5667C10.9185 21.5667 12.0195 21.5667 13.1664 21.5667C13.1664 18.9628 13.1664 16.4048 13.1664 13.8009C14.0075 13.8009 14.818 13.8009 15.6437 13.8009C15.8119 12.744 15.9802 11.7024 16.1484 10.6149C15.1238 10.6149 14.1451 10.6149 13.1511 10.6149C13.1511 9.8337 13.1511 9.08315 13.1511 8.3326C13.1511 7.76586 13.3958 7.33698 13.9005 7.12254C14.2063 6.98468 14.558 6.92341 14.8944 6.89278C15.2767 6.86214 15.6743 6.87746 16.0566 6.89278C16.2248 6.89278 16.2707 6.84683 16.2707 6.67834C16.2554 6.37199 16.2707 6.08096 16.2707 5.77461C16.286 5.26914 16.286 4.77899 16.286 4.24289Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                    </svg>
                  </div>
                </Link>

                <Link to="https://www.instagram.com/infolks/" className="group">
                  <div className="group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.987 12.5295C24.987 15.0416 24.987 17.5383 24.987 20.0503C24.987 22.8074 22.7544 25.0591 20.0019 25.0744C15.0014 25.0897 9.98564 25.0744 4.98518 25.0744C2.23263 25.0744 0 22.8381 0 20.081C0 15.0722 0 10.0481 0 5.03939C0 2.23632 2.24791 0 5.04634 0C10.0009 0 14.9708 0 19.9254 0C22.7544 0 25.0023 2.28227 24.987 5.11597C24.9717 7.58206 24.987 10.0635 24.987 12.5295ZM4.29704 12.5142C4.31233 12.5142 4.31233 12.5142 4.29704 12.5142C4.31233 13.8468 4.26645 15.1947 4.31233 16.5274C4.38879 18.8249 6.36145 20.709 8.67053 20.7243C11.2243 20.7243 13.7627 20.7243 16.3165 20.7243C18.6409 20.7243 20.6288 18.8096 20.6747 16.4814C20.7206 13.9081 20.7206 11.3195 20.6747 8.74617C20.6288 6.18818 18.6868 4.35011 16.1177 4.35011C13.7016 4.35011 11.2854 4.35011 8.86932 4.35011C6.22382 4.35011 4.29704 6.28009 4.29704 8.92998C4.29704 10.1247 4.29704 11.3195 4.29704 12.5142Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M12.4935 19.2844C11.2854 19.2844 10.0927 19.2844 8.8846 19.2844C7.06486 19.2844 5.73446 17.9978 5.71917 16.175C5.70388 13.7396 5.70388 11.3041 5.71917 8.86868C5.73446 7.06124 7.06486 5.75928 8.85402 5.75928C11.2701 5.75928 13.6863 5.75928 16.0871 5.75928C17.9221 5.75928 19.2372 7.04593 19.2525 8.884C19.2678 11.3041 19.2678 13.7243 19.2525 16.1291C19.2372 17.9825 17.9221 19.2538 16.0871 19.2538C14.8943 19.2844 13.7016 19.2844 12.4935 19.2844ZM16.974 12.5602C16.9893 10.1094 14.9708 8.07219 12.5241 8.05687C10.0927 8.04155 8.07413 10.0634 8.05884 12.4836C8.04354 14.965 10.0162 16.9715 12.4629 16.9868C14.9402 17.0175 16.9587 15.0262 16.974 12.5602ZM16.8976 7.21442C16.3624 7.21442 15.9495 7.61267 15.9342 8.13346C15.9342 8.66956 16.3318 9.08313 16.8517 9.09844C17.3716 9.09844 17.7998 8.70019 17.8151 8.17941C17.8457 7.65862 17.4175 7.21442 16.8976 7.21442Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M15.4296 12.5603C15.3837 14.2299 14.038 15.5318 12.4018 15.5012C10.8114 15.4553 9.4963 14.0767 9.54218 12.499C9.58806 10.8448 10.9337 9.57342 12.5853 9.60406C14.1603 9.65001 15.4755 11.0133 15.4296 12.5603Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                    </svg>
                  </div>
                </Link>

                <Link to="https://infolks.hashnode.dev/" className="group">
                  <div className="group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7567 12.9126C14.7567 14.1687 13.7322 15.1796 12.4782 15.1796C11.2243 15.1796 10.215 14.1533 10.215 12.8973C10.215 11.6413 11.2396 10.6304 12.5088 10.6457C13.7628 10.6457 14.772 11.6566 14.7567 12.9126Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M24.987 5.11597C25.0023 2.28227 22.7544 0 19.9254 0C14.9708 0 10.0009 0 5.04634 0C2.24791 0 0 2.23632 0 5.03939C0 10.0481 0 15.0722 0 20.081C0 22.8228 2.23262 25.0744 4.98517 25.0744C9.98563 25.0744 15.0014 25.0744 20.0018 25.0744C22.7544 25.0744 24.987 22.8074 24.987 20.0503C24.987 17.5383 24.987 15.0416 24.987 12.5295C24.987 10.0635 24.9717 7.58206 24.987 5.11597ZM18.4879 15.1794C17.2493 16.4354 16.0107 17.6761 14.7567 18.9168C13.5028 20.1575 11.4689 20.1575 10.215 18.9168C8.96106 17.6761 7.72243 16.4354 6.49907 15.1947C5.24513 13.9387 5.26043 11.8862 6.49907 10.6302C7.72243 9.40481 8.94578 8.16411 10.1844 6.93873C10.8267 6.2954 11.5913 5.97374 12.4935 5.98906C13.3957 5.98906 14.1603 6.31072 14.7873 6.93873C16.0107 8.16411 17.234 9.38949 18.4574 10.6149C19.7266 11.8709 19.7419 13.8928 18.4879 15.1794Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M14.7567 12.9126C14.7567 14.1687 13.7322 15.1796 12.4782 15.1796C11.2243 15.1796 10.215 14.1533 10.215 12.8973C10.215 11.6413 11.2396 10.6304 12.5088 10.6457C13.7628 10.6457 14.772 11.6566 14.7567 12.9126Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                    </svg>
                  </div>
                </Link>

                <Link to="https://infolksgroup.medium.com/" className="group">
                  <div className="group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.987 5.11597C25.0023 2.28227 22.7544 0 19.9254 0C14.9708 0 10.0009 0 5.04634 0C2.24791 0 0 2.23632 0 5.03939C0 10.0481 0 15.0722 0 20.081C0 22.8228 2.23262 25.0744 4.98517 25.0744C9.98563 25.0744 15.0014 25.0744 20.0019 25.0744C22.7544 25.0744 24.987 22.8074 24.987 20.0503C24.987 17.5383 24.987 15.0416 24.987 12.5295C24.987 10.0635 24.9717 7.58206 24.987 5.11597ZM9.45042 16.4814C7.29426 16.4967 5.53568 14.7352 5.52039 12.5755C5.50509 10.3698 7.24837 8.59299 9.41983 8.59299C11.5913 8.57768 13.3499 10.3392 13.3652 12.5142C13.3804 14.7046 11.6219 16.4814 9.45042 16.4814ZM17.0811 15.1488C16.9435 15.3939 16.7905 15.6389 16.5918 15.8381C16.0412 16.4048 15.3225 16.3895 14.772 15.8228C14.2521 15.2866 14.0227 14.6127 13.8698 13.9081C13.6251 12.698 13.6863 11.5186 14.1145 10.3545C14.298 9.86433 14.5426 9.40481 14.9861 9.08315C15.4449 8.73085 15.9954 8.70022 16.4235 9.09847C16.7294 9.3895 16.9893 9.75711 17.1881 10.1247C17.5399 10.7834 17.6775 11.6565 17.6775 12.7133C17.6469 13.4486 17.5246 14.337 17.0811 15.1488ZM19.1455 15.1641C19.1302 15.302 19.0843 15.4398 19.0079 15.5624C18.9467 15.6696 18.8244 15.7615 18.7326 15.8687C18.6409 15.7768 18.5185 15.7002 18.4574 15.5777C18.3656 15.4092 18.3044 15.2101 18.2739 15.0263C17.9527 13.326 17.9375 11.6258 18.3045 9.94092C18.3198 9.84901 18.335 9.77243 18.3809 9.68052C18.4727 9.49671 18.5032 9.19037 18.7479 9.221C18.8855 9.23632 19.0232 9.49671 19.0843 9.6652C19.1914 9.98687 19.2678 10.3392 19.3137 10.6761C19.3902 11.2888 19.4208 11.9168 19.4819 12.7593C19.3749 13.4179 19.2679 14.291 19.1455 15.1641Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                    </svg>
                  </div>
                </Link>

                <Link to="https://twitter.com/Infolks_Group" className="group">
                  <div className="group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8971 10.5381C13.6251 12.851 15.3531 15.1639 17.0811 17.4921C17.1423 17.5687 17.2034 17.6606 17.2799 17.7525C17.2187 17.7525 17.1881 17.7679 17.1423 17.7679C16.6376 17.7679 16.1483 17.7679 15.6437 17.7679C15.5519 17.7679 15.4907 17.7372 15.4296 17.6606C14.1298 15.9145 12.8299 14.1683 11.5148 12.4221C10.2762 10.7679 9.03755 9.09828 7.7989 7.44401C7.76832 7.41338 7.75303 7.36742 7.70715 7.30615C8.28825 7.30615 8.83876 7.30615 9.38927 7.30615C9.43514 7.30615 9.49631 7.36742 9.54219 7.41338C10.3374 8.45495 11.1172 9.49653 11.8971 10.5381Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M24.987 5.11597C25.0023 2.28227 22.7544 0 19.9254 0C14.9708 0 10.0009 0 5.04634 0C2.24791 0 0 2.23632 0 5.03939C0 10.0481 0 15.0722 0 20.081C0 22.8228 2.23262 25.0744 4.98517 25.0744C9.98563 25.0744 15.0014 25.0744 20.0018 25.0744C22.7544 25.0744 24.987 22.8074 24.987 20.0503C24.987 17.5383 24.987 15.0416 24.987 12.5295C24.9717 10.0635 24.9717 7.58206 24.987 5.11597ZM18.7938 18.6105C17.601 18.6105 16.4082 18.6105 15.2155 18.6105C15.1237 18.6105 15.0778 18.5799 15.032 18.5186C13.9004 17.0022 12.7841 15.5011 11.6524 13.9847C11.6219 13.9387 11.5913 13.9081 11.5454 13.8468C11.3313 14.0766 11.1325 14.2757 10.949 14.4902C9.71038 15.8228 8.47174 17.1707 7.24838 18.5033C7.18721 18.5799 7.11075 18.6105 7.019 18.6105C6.74375 18.6105 6.46849 18.6105 6.17795 18.6105C6.13207 18.6105 6.08619 18.6105 6.02503 18.5952C7.70714 16.7724 9.37395 14.965 11.0561 13.1575C9.38924 10.9365 7.73772 8.71553 6.0556 6.46389H6.2391C7.40129 6.46389 8.57877 6.46389 9.74096 6.46389C9.86329 6.46389 9.93976 6.49453 10.0009 6.60175C11.0102 7.96499 12.0348 9.32823 13.0593 10.7068C13.0899 10.7527 13.1358 10.7987 13.1816 10.86C13.4416 10.5842 13.6863 10.3239 13.931 10.0481C15.0167 8.88403 16.0871 7.70459 17.1728 6.54048C17.2034 6.50984 17.2493 6.47921 17.2799 6.47921C17.6316 6.47921 17.9833 6.47921 18.3809 6.47921C16.8058 8.17943 15.2613 9.86433 13.7016 11.5492C15.4601 13.9081 17.2187 16.2516 18.9926 18.6258H18.7938V18.6105Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M17.2799 17.7525C17.2187 17.7525 17.1881 17.7679 17.1423 17.7679C16.6376 17.7679 16.1483 17.7679 15.6437 17.7679C15.5519 17.7679 15.4907 17.7372 15.4296 17.6606C14.1298 15.9145 12.8299 14.1683 11.5148 12.4221C10.2762 10.7679 9.03755 9.09828 7.7989 7.44401C7.76832 7.41338 7.75303 7.36742 7.70715 7.30615C8.28825 7.30615 8.83876 7.30615 9.38927 7.30615C9.43514 7.30615 9.49631 7.36742 9.54219 7.41338C10.3221 8.45495 11.102 9.49653 11.8818 10.5381C13.6098 12.851 15.3378 15.1639 17.0658 17.4921C17.1423 17.5687 17.2034 17.6606 17.2799 17.7525Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  to="https://www.youtube.com/channel/UC0siki2wYSW7QZ1UuSDeYsQ"
                  className="group"
                >
                  <div className="group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.987 5.11597C25.0023 2.28227 22.7544 0 19.9254 0C14.9708 0 10.0009 0 5.04634 0C2.24791 0 0 2.23632 0 5.03939C0 10.0481 0 15.0722 0 20.081C0 22.8228 2.23262 25.0744 4.98517 25.0744C9.98563 25.0744 15.0014 25.0744 20.0019 25.0744C22.7544 25.0744 24.987 22.8074 24.987 20.0503C24.987 17.5383 24.987 15.0416 24.987 12.5295C24.987 10.0635 24.9717 7.58206 24.987 5.11597ZM20.323 13.7243C20.3077 14.2298 20.2771 14.7352 20.2312 15.2407C20.2159 15.5317 20.1701 15.8228 20.1242 16.1138C20.0783 16.3895 19.9866 16.6499 19.8795 16.9103C19.6348 17.4923 19.1914 17.86 18.595 18.0438C18.3197 18.1204 18.0445 18.151 17.7692 18.1663C17.1575 18.1969 16.5612 18.2276 15.9495 18.2582C15.3837 18.2735 14.8332 18.2888 14.2674 18.3042C13.6557 18.3195 13.044 18.3195 12.4018 18.3348C11.6677 18.3195 10.8879 18.3195 10.108 18.3042C9.60333 18.2888 9.09869 18.2888 8.59406 18.2582C8.04355 18.2429 7.49305 18.2123 6.94254 18.1663C6.60612 18.1357 6.2697 18.105 5.94857 17.9825C5.39806 17.7834 5.00046 17.4311 4.77108 16.8796C4.61816 16.4661 4.51113 16.0525 4.48055 15.6083C4.43467 15.0263 4.40408 14.4442 4.3582 13.8468C4.34291 13.6783 4.34291 13.5098 4.34291 13.3414C4.34291 12.8053 4.32762 12.2845 4.34291 11.7484C4.35821 11.2123 4.38879 10.6608 4.43466 10.1247C4.44995 9.80306 4.48055 9.49672 4.557 9.19037C4.61817 8.88403 4.70991 8.593 4.84754 8.31728C5.07692 7.84245 5.45923 7.53611 5.94857 7.3523C6.20853 7.26039 6.49908 7.21444 6.77434 7.19912C7.24839 7.16849 7.70714 7.15317 8.18119 7.12254C8.56348 7.10722 8.93049 7.0919 9.31279 7.07658C10.3526 7.06127 11.3772 7.03063 12.417 7.03063C13.411 7.03063 14.4203 7.04595 15.4143 7.07658C15.9954 7.0919 16.5918 7.12254 17.1729 7.13786C17.5246 7.15317 17.8763 7.18381 18.228 7.21444C18.8091 7.27571 19.2831 7.5361 19.6501 7.99562C19.8336 8.22538 19.9254 8.48577 20.0171 8.76149C20.1242 9.09846 20.1853 9.45077 20.2159 9.81838C20.2465 10.2473 20.2924 10.6608 20.3077 11.0897C20.323 11.4114 20.3383 11.7484 20.3383 12.07C20.3383 12.6214 20.3536 13.1729 20.323 13.7243Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M10.3462 9.51172V15.5467C12.273 14.5358 14.1998 13.5402 16.1418 12.5445C14.1998 11.5336 12.273 10.5227 10.3462 9.51172ZM11.0802 10.2929C12.5177 11.0434 13.9551 11.794 15.3925 12.5445C13.9551 13.2951 12.5177 14.0303 11.0802 14.7809V10.2929Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                      <path
                        d="M16.1418 12.5445C14.1998 13.5555 12.2883 14.5511 10.3462 15.5467V9.51172C12.273 10.5227 14.1998 11.5336 16.1418 12.5445Z"
                        fill="white"
                        className="group-hover:fill-[#13B2F5]"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-[13px] md:text-[19px]">
                <div className="group">
                  <Link to="/privacy-and-policy">
                    <div className="flex justify-between w-36 border-b-[1px] group-hover:border-[#13B2F5] group-hover:text-[#13B2F5] pb-1">
                      Privacy Policy
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                          fill="white"
                          className="group-hover:fill-[#13B2F5]"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>

                <div className="group">
                  <Link to="/terms-and-conditions">
                    <div className="flex justify-between w-48 border-b-[1px] group-hover:border-[#13B2F5] group-hover:text-[#13B2F5] pb-1">
                      Terms & Conditions
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                          fill="white"
                          className="group-hover:fill-[#13B2F5]"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center text-[13px] md:text-[17px] mt-2 md:mt-0">
              INFOLKS@2024 All Rights Reserved | Crafted by webfolks
            </div>

            <div className="lg:hidden xl:hidden 2xl:hidden flex gap-3 md:gap-5 justify-center mt-4 md:mt-0">
              <Link
                to="https://www.linkedin.com/company/infolks/"
                className="w-7 h-7"
              >
                <img src={linkedin} className="w-full h-full" alt="" />
              </Link>

              <Link
                to="https://www.facebook.com/infolks.Group/"
                className="w-7 h-7"
              >
                <img src={facebook} alt="" className="w-full h-full" />
              </Link>

              <Link to="https://www.instagram.com/infolks/" className="w-7 h-7">
                <img src={instagram} alt="" className="w-full h-full" />
              </Link>

              <Link to="https://infolks.hashnode.dev/" className="w-7 h-7">
                <img src={media} alt="" className="w-full h-full" />
              </Link>

              <Link to="https://infolksgroup.medium.com/" className="w-7 h-7">
                <img src={socialMedia} alt="" className="w-full h-full" />
              </Link>

              <Link to="https://twitter.com/Infolks_Group" className="w-7 h-7">
                <img src={twitter} alt="" className="w-full h-full" />
              </Link>

              <Link
                to="https://www.youtube.com/channel/UC0siki2wYSW7QZ1UuSDeYsQ"
                className="w-7 h-7"
              >
                <img src={youtube} alt="" className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// eslint-disable-next-line react/prop-types
const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-full h-fit font-primary-regular"
    >
      <span className={`relative ${showFlyout ? "" : ""}`}>
        {children}
      </span>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-40%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:block hidden absolute left-1/2 top-12 bg-linear-to-r from-[#3E4FC0] to-[#1025AF] rounded-3xl text-white z-10"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/3 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#4052c9] border-t-2 border-l-2" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IndustriesContent = () => {
  return (
    <>
      <div className="lg:flex hidden p-10 rounded-3xl border-2 shadow-xl justify-between gap-8 font-primary-regular text-white">
        <div>
          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/healthcare"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Healthcare
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/automotive"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Automotive
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link to="/industries/retail" className="flex justify-between">
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Retail
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/finance-banking"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Finance & Banking
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/manufacturing"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Manufacturing
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/agriculture"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Agriculture
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/food-beverages"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Food & Beverages
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/livestock"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Livestock
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/security-survilance"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Security & Surveillance
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link to="/industries/sports" className="flex justify-between">
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Sports
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/waste-management"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Waste Management
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/logistic"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Logistics
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/geospatial"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Geospatial
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="group/inner">
            <div className="space-y-3 w-60">
              <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
                <Link
                  to="/industries/human-attribution"
                  className="flex justify-between"
                >
                  <p className="text-white group-hover/inner:text-[#13B2F5]">
                    Human Attribution
                  </p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                      fill="white"
                      className="group-hover/inner:fill-[#13B2F5]"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SolutionContent = () => {
  return (
    <div className="p-10 rounded-3xl border-2 shadow-xl flex justify-between gap-8 font-primary-regular">
      <div>
        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/image-annotation"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Image Annotation
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/text-annotation"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Text Annotation
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/video-annotation"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Video Annotation
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/audio-annotation"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Audio Annotation
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/lidar-annotation"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Lidar Annotation
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/product-categorisation"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Product Categorisation
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/generative-ai"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Generative AI
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link to="/solutions/nlp" className="flex justify-between">
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  NLP
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link to="/solutions/ar-vr" className="flex justify-between">
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  AR & VR
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link
                to="/solutions/outstaffing"
                className="flex justify-between"
              >
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  Outstaffing
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="group/inner">
          <div className="space-y-3 w-60">
            <div className="p-1 border-b-[1px] group-hover/inner:border-[#13B2F5]">
              <Link to="/solutions/odc" className="flex justify-between">
                <p className="text-white group-hover/inner:text-[#13B2F5]">
                  ODC
                </p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inner:rotate-45"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                    fill="white"
                    className="group-hover/inner:fill-[#13B2F5]"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
