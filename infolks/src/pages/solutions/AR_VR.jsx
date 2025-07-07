import { useEffect } from "react";
import Banner from "../../components/Solutions/ArVr/Hero/Banner";
import Footer from "../../layouts/Footer";
import AI_Applications from "../../components/Solutions/ArVr/Applications/AIApplications";
import CursorGradient from "../../components/Common/CursorGradient";

const AR_VR = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1]">
        <CursorGradient /> {/* Add the gradient effect */}
      <Banner />
      <div className="grow">
        <AI_Applications />
      </div>
      <Footer />
    </div>
  );
};

export default AR_VR;
