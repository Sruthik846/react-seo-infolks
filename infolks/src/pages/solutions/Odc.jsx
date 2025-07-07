import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import Banner from "../../components/Solutions/ODC/Hero/Banner";
import OdcPage from "../../components/Solutions/ODC/OdcPage";

const Odc = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1]">
      <Banner />
      <div className="grow">
        <OdcPage />
      </div>
      <Footer />
    </div>
  );
};

export default Odc;
