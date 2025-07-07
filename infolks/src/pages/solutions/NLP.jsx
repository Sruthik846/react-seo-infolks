import { useEffect } from "react";
import Banner from "../../components/Solutions/NLP/Hero/Banner";
import Footer from "../../layouts/Footer";
import NlpPage from "../../components/Solutions/NLP/NlpPage";

const NLP = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1]">
      <Banner />
      <div className="grow">
        <NlpPage />
      </div>
      <Footer />
    </div>
  );
};

export default NLP;
