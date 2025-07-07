import { useEffect } from "react";
import Banner from "../components/Techniques/Hero/Banner";
import Footer from "../layouts/Footer";
import Technique from "../components/Techniques/Techniques/Technique";

const Techniques = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <Technique />
      </div>
      <Footer />
    </div>
  );
};

export default Techniques;
