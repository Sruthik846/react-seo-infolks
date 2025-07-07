import { useEffect } from "react";
import Banner from "../../components/Solutions/GenerativeAi/Hero/Banner";
import Footer from "../../layouts/Footer";
import GenerativePage from "../../components/Solutions/GenerativeAi/GenerativePage";

const GenerativeAI = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1]">
      <Banner />
      <div className="grow">
        <GenerativePage />
      </div>
      <Footer />
    </div>
  );
};

export default GenerativeAI;
