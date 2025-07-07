import { useEffect } from "react";
import Banner from "../../components/Industries/WasteManagement/Hero/Banner";
import Wastepage from "../../components/Industries/WasteManagement/Wastepage";
import Footer from "../../layouts/Footer";

const WasteManagement = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20 overflow-hidden">
      <Banner />
      <div className="grow">
        <Wastepage />
      </div>
      <Footer />
    </div>
  );
};

export default WasteManagement;
