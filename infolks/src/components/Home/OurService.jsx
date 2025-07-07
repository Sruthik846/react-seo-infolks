import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import service_gif from "/home/services/videos/our-service-offering.mp4";
import "./service.css";
import React from 'react';


const OurService = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  const videoAnimation = {
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      x: "100%",
      opacity: 0,
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-[#FFFBF0] rounded-t-[40px] font-primary-regular -mt-1.5">
      <div className="rounded-[16px] lg:rounded-[35px] w-full bg-[#0B9FFD] flex flex-col-reverse lg:flex-row font-primary-regular lg:h-[35rem] p-2 md:p-4 lg:p-0">
        {/* Text Section */}
        <div className="flex lg:w-[40%] justify-center items-center flex-col text-white lg:p-10 2xl:p-20 mb-2">
          <h2 className="heading-h2">OUR SERVICE OFFERINGS</h2>
          <p className="lg:mt-6 text-[#FFFBF0] paragraph text-center md:text-left">
            Utilize your data&apos;s full potential with our knowledgeable
            services. We are committed to enhancing machine learning and AI
            applications. With dedication to precision, quality, and
            effectiveness, we empower businesses and researchers to make
            informed choices and develop groundbreaking solutions.
          </p>
        </div>

        {/* Video Section */}
        <div
          className="flex rounded-[16px] lg:rounded-[35px] overflow-hidden xl:w-[60%] w-full ml-1"
          ref={videoRef}
        >
          <motion.div
            initial="hidden"
            animate={isVideoVisible ? "visible" : "hidden"}
            variants={videoAnimation}
            style={{ width: "100%" }}
            className=""
          >
            {isVideoVisible && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-[16px] lg:rounded-[35px] animate-card h-60 md:h-80 pb-5 lg:pb-0 lg:h-full object-cover -ml-2 md:ml-0"
              >
                <source src={service_gif} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
