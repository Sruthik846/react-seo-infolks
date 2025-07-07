import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import FoodPage from "../../components/Industries/FoodAndBeverages/FoodPage";
import Banner from "../../components/Industries/FoodAndBeverages/Hero/Banner";

const Geospatial = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20 overflow-hidden">
      <Banner />
      <div className="grow">
        <FoodPage />
      </div>
      <Footer />
    </div>
  );
};

export default Geospatial;
