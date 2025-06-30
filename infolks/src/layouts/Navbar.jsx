import React from "react"
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import logo from "/home/logo_new.svg";
import navbar from "/navbar/navbar.png";

import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const lastScrollY = useRef(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY === 0) {
        setVisible(true);
      } else if (lastScrollY.current > currentScrollY) {
        // Scrolling up
        setVisible(true);
      } else {
        // Scrolling down
        setVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // State to track the active menu item
  const [active, setActive] = useState("home");

  const location = useLocation();

  // Update active state based on current path
  useEffect(() => {
    const currentPath = location.pathname.slice(1); // Remove leading slash
    setActive(currentPath || "home"); // Default to "home" if path is empty
  }, [location]);

  // Function to handle menu item click
  const handleClick = (menuItem) => {
    setActive(menuItem);
  };

  const [menu, setMenu] = useState(false);
  const [subMenus, setSubMenus] = useState({
    industries: false,
    solutions: false,
    resources: false,
    certifications: false,
  });

  const toggleSubmenu = (menuName) => {
    setSubMenus((prevMenus) => ({
      ...prevMenus,
      [menuName]: !prevMenus[menuName],
    }));
  };

  const handleChane = () => {
    setMenu(!menu);
  };

  const linkTwoHover = {
    y: -30,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  };
  return (
    // <div className={` ${cls} fixed w-full z-30 font-primary-regular`}>
    <div
      className={`h-[100px] fixed w-full z-30 font-primary-regular transition-all duration-300 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src={navbar}
        className="w-full fixed top-0 left-0 right-0 hidden xl:flex"
        alt=""
      />
      <div
        className={`absolute h-20 left-0 right-0 z-10 2xl:mx-auto 2xl:w-[90%] flex flex-row justify-between xl:pb-0 lg:pt-5 lg:bg-blue-800 xl:bg-transparent bg-[#13b1f538] rounded-b-2xl lg:border-0 border-b border-b-[#13B2F5] ${
          menu ? "bg-[#6a73c240]" : ""
        }`}
      >
        <div className="flex flex-row items-center cursor-pointer gap-2 mt-2 2xl:mt-9">
          <Link to="/">
            <img src={logo} className="-mt-2 lg:-mt-0 h-9 px-4 lg:px-1 lg:h-auto lg:w-52" alt="" />
          </Link>
        </div>

        <nav className="hidden lg:flex justify-between flex-row items-center text-[17px] 2xl:text-[19px] font-medium 2xl:gap-5 mt-2 2xl:mt-9 2xl:ml-10">
          <motion.div
            className="flex flex-col items-center xl:h-8 h-6 w-16 overflow-hidden"
            onClick={() => handleClick("home")}
          >
            <motion.div
              whileHover={linkTwoHover}
              className="flex flex-col"
              style={{ marginBottom: 16 }}
            >
              <Link
                onClick={() => handleClick("home")}
                to="/"
                spy="true"
                smooth="true"
                duration={500}
                className={`inline-block cursor-pointer ${
                  active === "home" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                onClick={() => handleClick("home")}
                to="/"
                spy="true"
                smooth="true"
                duration={500}
                className={`inline-block cursor-pointer ${
                  active === "home" ? "text-[#98FFDD]" : "text-[#98FFDD]"
                }`}
              >
                Home
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center xl:h-8 h-6 w-16 overflow-hidden"
            onClick={() => handleClick("about")}
          >
            <motion.div
              whileHover={linkTwoHover}
              className="flex flex-col"
              style={{ marginBottom: 16 }}
            >
              <Link
                onClick={() => handleClick("about")}
                to="/about"
                spy="true"
                smooth="true"
                duration={500}
                className={`inline-block cursor-pointer  ${
                  active === "about" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                About
              </Link>
              <Link
                onClick={() => handleClick("about")}
                to="/about"
                spy="true"
                smooth="true"
                duration={500}
                className={`inline-block cursor-pointer ${
                  active === "about" ? "text-[#98FFDD]" : "text-[#98FFDD]"
                }`}
              >
                About
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center group relative transition-all">
            <FlyoutLink href="#" FlyoutContent={IndustriesContent}>
              <motion.div
                className="flex flex-col w-22 gap-4 xl:h-8 h-6 overflow-hidden"
                onClick={() => handleClick("industries")}
              >
                <Link
                  to="/industries"
                  spy="true"
                  smooth="true"
                  duration={500}
                  className={`inline-block cursor-pointer hover:text-[#98FFDD]  ${
                    active === "industries" ||
                    active === "industries/healthcare" ||
                    active === "industries/automotive" ||
                    active === "industries/retail" ||
                    active === "industries/finance-banking" ||
                    active === "industries/manufacturing" ||
                    active === "industries/agriculture" ||
                    active === "industries/food-beverages" ||
                    active === "industries/livestock" ||
                    active === "industries/security-survilance" ||
                    active === "industries/sports" ||
                    active === "industries/waste-management" ||
                    active === "industries/logistic" ||
                    active === "industries/geospatial" ||
                    active === "industries/human-attribution"
                      ? "text-[#98FFDD]"
                      : "text-white"
                  }`}
                >
                  Industries
                </Link>
                <Link
                  to="/industries"
                  spy="true"
                  smooth="true"
                  duration={500}
                  className="inline-block cursor-pointer text-[#98FFDD]"
                >
                  Industries
                </Link>
              </motion.div>
            </FlyoutLink>
          </motion.div>

          <div className="flex justify-center ">
            <FlyoutLink href="#" FlyoutContent={SolutionContent}>
              <motion.div
                className="flex flex-col w-20 gap-4 xl:h-8 h-6 overflow-hidden"
                onClick={() => handleClick("solutions")}
              >
                <button
                  // eslint-disable-next-line react/no-unknown-property
                  spy="true"
                  // eslint-disable-next-line react/no-unknown-property
                  smooth="true"
                  // eslint-disable-next-line react/no-unknown-property
                  duration={500}
                  className={`inline-block cursor-default hover:text-[#98FFDD] ${
                    active === "solutions" ||
                    active === "solutions/image-annotation" ||
                    active === "solutions/text-annotation" ||
                    active === "solutions/video-annotation" ||
                    active === "solutions/audio-annotation" ||
                    active === "solutions/lidar-annotation" ||
                    active === "solutions/product-categorisation" ||
                    active === "solutions/generative-ai" ||
                    active === "solutions/nlp" ||
                    active === "solutions/ar-vr" ||
                    active === "solutions/outstaffing" ||
                    active === "solutions/odc"
                      ? "text-[#98FFDD]"
                      : "text-white"
                  }`}
                >
                  Solutions
                </button>
                <button
                  // eslint-disable-next-line react/no-unknown-property
                  spy="true"
                  // eslint-disable-next-line react/no-unknown-property
                  smooth="true"
                  // eslint-disable-next-line react/no-unknown-property
                  duration={500}
                  className="inline-block cursor-default text-[#98FFDD]"
                >
                  Solutions
                </button>
              </motion.div>
            </FlyoutLink>
          </div>

          <motion.div
            className="flex flex-col items-center xl:h-8 h-6 w-24 overflow-hidden"
            onClick={() => handleClick("techniques")}
          >
            <motion.div
              whileHover={linkTwoHover}
              className="flex flex-col"
              style={{ marginBottom: 16 }}
            >
              <Link
                to="/techniques"
                spy="true"
                smooth="true"
                duration={500}
                className={`inline-block cursor-pointer  ${
                  active === "techniques" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                Techniques
              </Link>
              <Link
                to="/techniques"
                spy="true"
                smooth="true"
                duration={500}
                className="inline-block cursor-pointer text-[#98FFDD]"
              >
                Techniques
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex justify-center ">
            <FlyoutLink href="#" FlyoutContent={ResourcesContent}>
              <motion.div
                className="flex flex-col items-center xl:h-8 h-6 w-24 overflow-hidden"
                onClick={() => handleClick("resources")}
              >
                <motion.div
                  whileHover={linkTwoHover}
                  className="flex flex-col"
                  style={{ marginBottom: 16 }}
                >
                  <Link
                    // to="/"
                    spy="true"
                    smooth="true"
                    duration={500}
                    className={`inline-block cursor-default  ${
                      active === "resources" ||
                      active === "data_security" ||
                      active === "quality" ||
                      active === "blogs"
                        ? "text-[#98FFDD]"
                        : "text-white"
                    }`}
                  >
                    Resources
                  </Link>
                  <Link
                    spy="true"
                    smooth="true"
                    duration={500}
                    className="inline-block cursor-default text-[#98FFDD]"
                  >
                    Resources
                  </Link>
                </motion.div>
              </motion.div>
            </FlyoutLink>
          </div>

          <motion.div
            className="flex flex-col items-center xl:h-8 h-6 w-16 overflow-hidden"
            onClick={() => handleClick("pricing")}
          >
            <motion.div
              whileHover={linkTwoHover}
              className="flex flex-col"
              style={{ marginBottom: 16 }}
            >
              <Link
                to="/pricing"
                spy="true"
                smooth="true"
                duration={500}
                className={`inline-block cursor-pointer  ${
                  active === "pricing" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/pricing"
                spy="true"
                smooth="true"
                duration={500}
                className="inline-block cursor-pointer text-[#98FFDD]"
              >
                Pricing
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center xl:h-8 h-6 w-24 overflow-hidden"
            onClick={() => handleClick("contact")}
          >
            <motion.div
              whileHover={linkTwoHover}
              className="flex flex-col"
              style={{ marginBottom: 16 }}
            >
              <Link
                to="/contact"
                spy="true"
                smooth="true"
                duration={500}
                className={`inline-block cursor-pointer  ${
                  active === "contact" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                spy="true"
                smooth="true"
                duration={500}
                className="inline-block cursor-pointer text-[#98FFDD]"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </nav>

        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose
              size={25}
              color="white"
              onClick={handleChane}
            ></AiOutlineClose>
          ) : (
            <div onClick={handleChane}>
              <svg
                width="34"
                height="30"
                viewBox="0 0 34 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[65%] md:w-full"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 11.0382C0 10.4793 0.222002 9.94335 0.617168 9.54818C1.01233 9.15302 1.54829 8.93101 2.10714 8.93101H23.8276C24.3864 8.93101 24.9224 9.15302 25.3175 9.54818C25.7127 9.94335 25.9347 10.4793 25.9347 11.0382C25.9347 11.597 25.7127 12.133 25.3175 12.5281C24.9224 12.9233 24.3864 13.1453 23.8276 13.1453H2.10714C1.54829 13.1453 1.01233 12.9233 0.617168 12.5281C0.222002 12.133 0 11.597 0 11.0382ZM0 2.60958C0 2.05074 0.222002 1.51478 0.617168 1.11961C1.01233 0.724443 1.54829 0.502441 2.10714 0.502441H31.6071C32.166 0.502441 32.702 0.724443 33.0971 1.11961C33.4923 1.51478 33.7143 2.05074 33.7143 2.60958C33.7143 3.16843 33.4923 3.70439 33.0971 4.09956C32.702 4.49472 32.166 4.71673 31.6071 4.71673H2.10714C1.54829 4.71673 1.01233 4.49472 0.617168 4.09956C0.222002 3.70439 0 3.16843 0 2.60958ZM0 19.4667C0 18.9079 0.222002 18.3719 0.617168 17.9768C1.01233 17.5816 1.54829 17.3596 2.10714 17.3596H31.6071C32.166 17.3596 32.702 17.5816 33.0971 17.9768C33.4923 18.3719 33.7143 18.9079 33.7143 19.4667C33.7143 20.0256 33.4923 20.5615 33.0971 20.9567C32.702 21.3519 32.166 21.5739 31.6071 21.5739H2.10714C1.54829 21.5739 1.01233 21.3519 0.617168 20.9567C0.222002 20.5615 0 20.0256 0 19.4667ZM0 27.8953C0 27.3365 0.222002 26.8005 0.617168 26.4053C1.01233 26.0102 1.54829 25.7882 2.10714 25.7882H23.8276C24.3864 25.7882 24.9224 26.0102 25.3175 26.4053C25.7127 26.8005 25.9347 27.3365 25.9347 27.8953C25.9347 28.4541 25.7127 28.9901 25.3175 29.3853C24.9224 29.7804 24.3864 30.0024 23.8276 30.0024H2.10714C1.54829 30.0024 1.01233 29.7804 0.617168 29.3853C0.222002 28.9901 0 28.4541 0 27.8953Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/*--------------------- sidenav ------------------------------------ */}
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col text-black left-0 text-2xl text-center pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <section className="app">
          <aside className="sidebar">
            <nav className="sidebar-nav h-fit pt-24 rounded-b-3xl border-b-white border-b-[1px] bg-linear-to-r from-[#138ff5] to-[#03a7ee]">
              <ul>
                <div
                  className={
                    subMenus.solutions ||
                    subMenus.industries ||
                    subMenus.resources ||
                    subMenus.certifications
                      ? "hidden"
                      : "group"
                  }
                >
                  <div className="border-b-[1px] mx-10 md:mx-15">
                    <Link to="/">
                      <div className="flex justify-between md:py-1">
                        <p className="text-white group-hover:text-[#13B2F5] text-[16px] md:text-[19px] lg:text-[24px]">
                          Home
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
                            // className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    subMenus.solutions ||
                    subMenus.industries ||
                    subMenus.resources ||
                    subMenus.certifications
                      ? "hidden"
                      : "group pt-1"
                  }
                >
                  <div className="border-b-[1px] mx-10 md:mx-15">
                    <Link to="/about">
                      <div className="flex justify-between md:py-1">
                        <p className="text-white group-hover:text-[#13B2F5] text-[16px] md:text-[19px] lg:text-[24px]">
                          About Us
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
                            // className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    subMenus.solutions ||
                    subMenus.resources ||
                    subMenus.certifications
                      ? "hidden"
                      : "group pt-1"
                  }
                >
                  <div onClick={() => toggleSubmenu("industries")}>
                    <Link to="/industries">
                      <div className="flex justify-between items-center md:py-1 mx-10 md:mx-15 border-b-[1px]">
                        <p className="text-white text-[16px] md:text-[19px] lg:text-[24px]">
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
                            className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                              fill="white"
                              // className="group-hover:fill-[#13B2F5]"
                            />
                          </svg>
                        )}
                      </div>
                    </Link>

                    {/* Submenu */}
                    {subMenus.industries && (
                      <ul className="pl-5 pt-2 text-left text-[16px] md:text-[19px] lg:text-[24px] bg-[#6a73c240] text-white space-y-1">
                        <div className="px-10 md:px-15 pb-10">
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
                            <Link to="/industries/agriculture">
                              Agriculture
                            </Link>
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
                </div>

                <div
                  className={
                    subMenus.industries ||
                    subMenus.resources ||
                    subMenus.certifications
                      ? "hidden"
                      : "group pt-1"
                  }
                >
                  <div onClick={() => toggleSubmenu("solutions")}>
                    <Link>
                      <div className="flex justify-between items-center md:py-1 mx-10 md:mx-15 border-b-[1px]">
                        <p className="text-white text-[16px] md:text-[19px] lg:text-[24px]">
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
                            className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                              fill="white"
                              // className="group-hover:fill-[#13B2F5]"
                            />
                          </svg>
                        )}
                      </div>
                    </Link>

                    {subMenus.solutions && (
                      <ul className="pl-5 pt-2 text-left text-[16px] md:text-[19px] lg:text-[24px] bg-[#6a73c240] text-white space-y-1">
                        <div className="px-10 md:px-15 pb-10">
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
                </div>

                <div
                  className={
                    subMenus.solutions ||
                    subMenus.industries ||
                    subMenus.resources ||
                    subMenus.certifications
                      ? "hidden"
                      : "group pt-1"
                  }
                >
                  <div className="border-b-[1px] mx-10 md:mx-15">
                    <Link to="/techniques">
                      <div className="flex justify-between md:py-1">
                        <p className="text-white text-[16px] md:text-[19px] lg:text-[24px]">
                          Techniques
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
                            // className="group-hover:fill-[#13B2F5]"
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
                      : "group pt-1"
                  }
                >
                  <div onClick={() => toggleSubmenu("resources")}>
                    <Link
                      className={subMenus.certifications ? "hidden" : "block"}
                    >
                      <div className="flex justify-between items-center md:py-1 mx-10 md:mx-15 border-b-[1px]">
                        <p className="text-white text-[16px] md:text-[19px] lg:text-[24px]">
                          Resources
                        </p>
                        {subMenus.resources ? (
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
                            className="mt-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-45"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                              fill="white"
                              // className="group-hover:fill-[#13B2F5]"
                            />
                          </svg>
                        )}
                      </div>
                    </Link>

                    {(subMenus.resources || subMenus.certifications) && (
                      <ul className="pl-5 pt-2 text-left text-[16px] md:text-[19px] lg:text-[24px] text-white space-y-1">
                        <div
                          className={
                            subMenus.certifications
                              ? ""
                              : "px-10 md:px-15 pb-10 bg-[#6a73c240]"
                          }
                        >
                          <li
                            className={
                              subMenus.certifications
                                ? "group/innerss py-1"
                                : "border-b group/innerss py-1"
                            }
                            onClick={() => toggleSubmenu("certifications")}
                          >
                            <div
                              className={
                                subMenus.certifications
                                  ? "px-10 md:px-15 flex justify-between items-center"
                                  : "flex justify-between items-center"
                              }
                            >
                              <div>Certifications</div>
                              {subMenus.certifications ? (
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
                                  className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/innerss:rotate-45"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                                    fill="white"
                                    // className="group-hover:fill-[#13B2F5]"
                                  />
                                </svg>
                              )}
                            </div>
                            {subMenus.certifications && (
                              <ul className="pl-5 pt-5 text-left text-[16px] md:text-[19px] lg:text-[24px] bg-[#6a73c240] text-white space-y-1">
                                <div className="px-10 md:px-15 pb-10">
                                  <div className="border-b py-1">
                                    <Link to="/data-security">
                                      Data security
                                    </Link>
                                  </div>
                                  <div className="border-b py-1">
                                    <Link to="/quality">Quality</Link>
                                  </div>
                                </div>
                              </ul>
                            )}
                          </li>
                          <div
                            className={
                              subMenus.certifications
                                ? "hidden"
                                : "border-b py-1"
                            }
                          >
                            <Link to="/blogs">Blog</Link>
                          </div>
                          <div
                            className={
                              subMenus.certifications
                                ? "hidden"
                                : "border-b py-1"
                            }
                          >
                            <Link to="https://infolksgroup.com/career">
                              Careers
                            </Link>
                          </div>
                        </div>
                      </ul>
                    )}
                  </div>
                </div>

                <div
                  className={
                    subMenus.solutions ||
                    subMenus.industries ||
                    subMenus.resources ||
                    subMenus.certifications
                      ? "hidden"
                      : "group pt-1"
                  }
                >
                  <div className="border-b-[1px] mx-10 md:mx-15">
                    <Link to="/pricing">
                      <div className="flex justify-between md:py-1">
                        <p className="text-white text-[16px] md:text-[19px] lg:text-[24px]">
                          Pricing
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
                            // className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    subMenus.solutions ||
                    subMenus.industries ||
                    subMenus.resources ||
                    subMenus.certifications
                      ? "hidden"
                      : "group pt-1 pb-20"
                  }
                >
                  <div className="border-b-[1px] mx-10 md:mx-15">
                    <Link to="/contact">
                      <div className="flex justify-between md:py-1">
                        <p className="text-white text-[16px] md:text-[19px] lg:text-[24px]">
                          Contact
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
                            // className="group-hover:fill-[#13B2F5]"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </ul>
            </nav>
          </aside>
        </section>
      </div>
    </div>
  );
};

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
      <a
        href={href}
        className={`relative ${showFlyout ? "text-blue-700" : ""}`}
      >
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-[#319cf3] rounded-3xl text-white"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#319cf3] border-t-2 border-l-2" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IndustriesContent = () => {
  // State to track the active menu item
  const [active, setActive] = useState("industries");

  const location = useLocation();

  // Update active state based on current path
  useEffect(() => {
    const currentPath = location.pathname.slice(1); // Remove leading slash
    setActive(currentPath || "home"); // Default to "home" if path is empty
  }, [location]);

  // Function to handle menu item click
  const handleClick = (menuItem) => {
    setActive(menuItem);
  };
  return (
    <div className="p-10 rounded-3xl border-2 shadow-xl flex justify-between gap-8 font-primary-regular">
      <div>
        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/healthcare")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/healthcare"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/healthcare" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/healthcare"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Healthcare
              </span>
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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/healthcare"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/automotive")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/automotive"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/automotive" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/automotive"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Automotive
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/automotive"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/retail")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/retail"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/retail" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/retail"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Retail
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/retail"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/finance-banking")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/finance-banking"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/industries/finance-banking"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/finance-banking"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Finance & Banking
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/finance-banking"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/manufacturing")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/manufacturing"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/industries/manufacturing"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/manufacturing"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Manufacturing
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/manufacturing"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/agriculture")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/agriculture"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/agriculture" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/agriculture"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Agriculture
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/agriculture"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/food-beverages")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/food-beverages"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/industries/food-beverages"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/food-beverages"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Food & Beverages
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/food-beverages"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/livestock")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/livestock"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/livestock" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/livestock"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Livestock
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/livestock"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/security-survilance")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/security-survilance"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/industries/security-survilance"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/security-survilance"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Security & Surveillance
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/security-survilance"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/sports")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/sports"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/sports" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/sports"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Sports
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/sports"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/waste-management")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/waste-management"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/industries/waste-management"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/waste-management"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Waste Management
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/waste-management"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/logistic")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/logistic"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/logistic" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/logistic"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Logistics
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/logistic"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/geospatial")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/geospatial"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/industries/geospatial" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/geospatial"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Geospatial
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/geospatial"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("industries/human-attribution")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "industries/human-attribution"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/industries/human-attribution"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "industries/human-attribution"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Human Attribution
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "industries/human-attribution"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionContent = () => {
  // State to track the active menu item
  const [active, setActive] = useState("solutions");

  const location = useLocation();

  // Update active state based on current path
  useEffect(() => {
    const currentPath = location.pathname.slice(1); // Remove leading slash
    setActive(currentPath || "home"); // Default to "home" if path is empty
  }, [location]);

  // Function to handle menu item click
  const handleClick = (menuItem) => {
    setActive(menuItem);
  };
  return (
    <div className="p-10 rounded-3xl border-2 shadow-xl flex justify-between gap-8 font-primary-regular">
      <div>
        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/image-annotation")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/image-annotation"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/solutions/image-annotation"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/image-annotation"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Image Annotation
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/image-annotation"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("soutions/text-annotation")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/text-annotation"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/solutions/text-annotation"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/text-annotation"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Text Annotation
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "soutions/text-annotation"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/video-annotation")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/video-annotation"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/solutions/video-annotation"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/video-annotation"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Video Annotation
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/video-annotation"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/audio-annotation")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/audio-annotation"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/solutions/audio-annotation"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/audio-annotation"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Audio Annotation
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/audio-annotation"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/lidar-annotation")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/lidar-annotation"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/solutions/lidar-annotation"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/lidar-annotation"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Lidar Annotation
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/lidar-annotation"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/product-categorisation")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/product-categorisation"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/solutions/product-categorisation"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/product-categorisation"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Product Categorisation
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/product-categorisation"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/generative-ai")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/generative-ai"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link
              to="/solutions/generative-ai"
              className="flex justify-between"
            >
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/generative-ai"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Generative AI
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/generative-ai"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/nlp")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/nlp" ? "border-[#98FFDD]" : "border-white"
            }`}
          >
            <Link to="/solutions/nlp" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/nlp" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                NLP
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/nlp" ? "fill-[#98FFDD]" : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/ar-vr")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/ar-vr" ? "border-[#98FFDD]" : "border-white"
            }`}
          >
            <Link to="/solutions/ar-vr" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/ar-vr" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                AR & VR
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/ar-vr"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/outstaffing")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/outstaffing"
                ? "border-[#98FFDD]"
                : "border-white"
            }`}
          >
            <Link to="/solutions/outstaffing" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/outstaffing"
                    ? "text-[#98FFDD]"
                    : "text-white"
                }`}
              >
                Outstaffing
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/outstaffing"
                      ? "fill-[#98FFDD]"
                      : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => handleClick("solutions/odc")}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
              active === "solutions/odc" ? "border-[#98FFDD]" : "border-white"
            }`}
          >
            <Link to="/solutions/odc" className="flex justify-between">
              <span
                className={`group-hover/inner:text-[#98FFDD] ${
                  active === "solutions/odc" ? "text-[#98FFDD]" : "text-white"
                }`}
              >
                ODC
              </span>

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
                  className={`group-hover/inner:fill-[#98FFDD] ${
                    active === "solutions/odc" ? "fill-[#98FFDD]" : "fill-white"
                  }`}
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourcesContent = () => {
  // State to track the active menu item
  const [active, setActive] = useState("home");

  const location = useLocation();

  // Update active state based on current path
  useEffect(() => {
    const currentPath = location.pathname.slice(1); // Remove leading slash
    setActive(currentPath || "home"); // Default to "home" if path is empty
  }, [location]);

  // Function to handle menu item click
  const handleClick = (menuItem) => {
    setActive(menuItem);
  };

  const [certificationActive, setCertificationActive] = useState(false);
  const certificationContent = () => {
    setCertificationActive(!certificationActive);
  };
  return (
    <div className="p-10 rounded-3xl border-2 shadow-xl flex justify-between gap-8 font-primary-regular">
      <div>
        <div
          className="font-normal space-y-3 w-60 group/inner"
          onClick={() => certificationContent()}
        >
          <div
            className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] w-full flex justify-between `}
          >
            <Link className="flex justify-between group-hover/inner:text-[#98FFDD] w-full">
              <span>Certifications</span>
              {certificationActive ? (
                <AiOutlineClose
                  size={20}
                  color="white"
                  className="mt-1"
                ></AiOutlineClose>
              ) : (
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
                    className="group-hover/inner:fill-[#98FFDD]"
                  />
                </svg>
              )}
            </Link>
          </div>
        </div>

        {certificationActive ? (
          <>
            <div className="pl-10">
              <div
                className="font-normal space-y-3 w-[200px] group/inners"
                onClick={() => handleClick("data_security")}
              >
                <div
                  className={`p-1 border-b-[1px] group-hover/inners:border-[#98FFDD] ${
                    active === "data_security"
                      ? "border-[#98FFDD]"
                      : "border-white"
                  }`}
                >
                  <Link to="/data-security" className="flex justify-between">
                    <span
                      className={`group-hover/inners:text-[#98FFDD] ${
                        active === "data_security"
                          ? "text-[#98FFDD]"
                          : "text-white"
                      }`}
                    >
                      Data Security
                    </span>

                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inners:rotate-45"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                        fill="white"
                        className={`group-hover/inners:fill-[#98FFDD] ${
                          active === "data_security"
                            ? "fill-[#98FFDD]"
                            : "fill-white"
                        }`}
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div
                className="font-normal space-y-3 w-[200px] group/inners"
                onClick={() => handleClick("quality")}
              >
                <div
                  className={`p-1 border-b-[1px] group-hover/inners:border-[#98FFDD] ${
                    active === "quality" ? "border-[#98FFDD]" : "border-white"
                  }`}
                >
                  <Link to="/quality" className="flex justify-between">
                    <span
                      className={`group-hover/inners:text-[#98FFDD] ${
                        active === "quality" ? "text-[#98FFDD]" : "text-white"
                      }`}
                    >
                      Quality
                    </span>

                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-2 transform transition-transform duration-300 ease-in-out group-hover/inners:rotate-45"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.98429 4.61142L17.1308 4.6054C17.2169 4.63461 17.2765 4.69796 17.3004 4.78572L16.7027 13.8904C16.7266 13.9782 16.628 14.0709 16.5108 14.071L15.5824 14.0716C15.4652 14.0716 15.3781 13.9791 15.3807 13.8571L15.783 6.88358L5.36076 16.6872C5.07544 16.9556 4.61893 16.99 4.36222 16.7171C4.078 16.4149 4.13509 15.9663 4.4256 15.693L14.7545 5.97724L7.95443 5.96221C7.83717 5.96229 7.75007 5.86969 7.75732 5.75265L7.79234 4.79197C7.82709 4.70417 7.92566 4.61146 7.98429 4.61142Z"
                        fill="white"
                        className={`group-hover/inners:fill-[#98FFDD] ${
                          active === "quality" ? "fill-[#98FFDD]" : "fill-white"
                        }`}
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="font-normal space-y-3 w-60 group/inner"
              onClick={() => handleClick("blogs")}
            >
              <div
                className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
                  active === "blogs" ? "border-[#98FFDD]" : "border-white"
                }`}
              >
                <Link to="/blogs" className="flex justify-between">
                  <span
                    className={`group-hover/inner:text-[#98FFDD] ${
                      active === "blogs" ? "text-[#98FFDD]" : "text-white"
                    }`}
                  >
                    Blog
                  </span>

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
                      className={`group-hover/inner:fill-[#98FFDD] ${
                        active === "blogs" ? "fill-[#98FFDD]" : "fill-white"
                      }`}
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              className="font-normal space-y-3 w-60 group/inner"
              onClick={() => handleClick("careers")}
            >
              <div
                className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
                  active === "careers" ? "border-[#98FFDD]" : "border-white"
                }`}
              >
                <Link
                  to="https://infolksgroup.com/career"
                  className="flex justify-between"
                >
                  <span
                    className={`group-hover/inner:text-[#98FFDD] ${
                      active === "careers" ? "text-[#98FFDD]" : "text-white"
                    }`}
                  >
                    Careers
                  </span>

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
                      className={`group-hover/inner:fill-[#98FFDD] ${
                        active === "careers" ? "fill-[#98FFDD]" : "fill-white"
                      }`}
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="font-normal space-y-3 w-60 group/inner"
              onClick={() => handleClick("blogs")}
            >
              <div
                className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
                  active === "blogs" ? "border-[#98FFDD]" : "border-white"
                }`}
              >
                <Link to="/blogs" className="flex justify-between">
                  <span
                    className={`group-hover/inner:text-[#98FFDD] ${
                      active === "blogs" ? "text-[#98FFDD]" : "text-white"
                    }`}
                  >
                    Blog
                  </span>

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
                      className={`group-hover/inner:fill-[#98FFDD] ${
                        active === "blogs" ? "fill-[#98FFDD]" : "fill-white"
                      }`}
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div
              className="font-normal space-y-3 w-60 group/inner"
              onClick={() => handleClick("careers")}
            >
              <div
                className={`p-1 border-b-[1px] group-hover/inner:border-[#98FFDD] ${
                  active === "careers" ? "border-[#98FFDD]" : "border-white"
                }`}
              >
                <Link
                  to="https://infolksgroup.com/career"
                  className="flex justify-between"
                >
                  <span
                    className={`group-hover/inner:text-[#98FFDD] ${
                      active === "careers" ? "text-[#98FFDD]" : "text-white"
                    }`}
                  >
                    Careers
                  </span>

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
                      className={`group-hover/inner:fill-[#98FFDD] ${
                        active === "careers" ? "fill-[#98FFDD]" : "fill-white"
                      }`}
                    />
                  </svg>
                </Link>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
