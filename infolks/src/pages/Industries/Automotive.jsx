import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import AutomotivePage from "../../components/Industries/Automotive/AutomotivePage";
import Banner from "../../components/Industries/Automotive/Hero/Banner";

const Automotive = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20 overflow-hidden">
      <Banner />
      <div className="grow">
        <AutomotivePage />
      </div>
      <Footer />
    </div>
  );
};

export default Automotive;
