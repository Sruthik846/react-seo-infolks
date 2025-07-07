import { useEffect } from "react";
import Footer from "../layouts/Footer";
import Banner from "../components/Pricing/Hero/Banner";
import PricingPage from "../components/Pricing/PricingPage";

const Pricing = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <PricingPage />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
