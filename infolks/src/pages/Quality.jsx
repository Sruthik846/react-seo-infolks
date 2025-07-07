import { useEffect } from "react";
import Footer from "../layouts/Footer";
import Banner from "../components/Quality/Hero/Banner";
import QualityPage from "../components/Quality/QualityPage";

const Quality = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <QualityPage />
      </div>
      <Footer />
    </div>
  );
};

export default Quality;
