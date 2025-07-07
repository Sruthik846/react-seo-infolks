import { useEffect } from "react";
import Banner from "../components/Contact/Hero/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../layouts/Footer";

const ContactUs = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
