import { useEffect } from "react";
import Banner from "../../components/Industries/HumanAttribution/Hero/Banner";
import Footer from "../../layouts/Footer";
import HumanPage from "../../components/Industries/HumanAttribution/HumanPage";

const HumanAttribution = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20 overflow-hidden">
      <Banner />
      <div className="grow">
        <HumanPage />
      </div>
      <Footer />
    </div>
  );
};
export default HumanAttribution;
