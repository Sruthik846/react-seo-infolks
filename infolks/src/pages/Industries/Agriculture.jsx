import { useEffect } from "react";
import Footer from "../../layouts/Footer";
// import Banner from "../../components/Industries/Banner";
import Agriculture from "../../components/Industries/Agriculture/Agriculture";
import Banner from "../../components/Industries/Agriculture/Hero/Banner";

const AgricultureIndustry = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20 overflow-hidden">
      <Banner/>
      <div className="grow">
        <Agriculture />
      </div>
      <Footer />
    </div>
  );
};

export default AgricultureIndustry;
