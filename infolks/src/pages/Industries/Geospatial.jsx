import Banner from "../../components/Industries/Geospatial/Hero/Banner";
import Footer from "../../layouts/Footer";
import GeospatialPage from "../../components/Industries/Geospatial/GeospatialPage";
import { useEffect } from "react";

const Geospatial = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20 overflow-hidden">
      <Banner />
      <div className="grow">
        <GeospatialPage />
      </div>
      <Footer />
    </div>
  );
};

export default Geospatial;
