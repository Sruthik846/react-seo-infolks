import Banner from "../components/Security/Hero/Banner";
import Footer from "../layouts/Footer";
import SecurityPage from "../components/Security/SecurityPage";
import { useEffect } from "react";

const Security = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <SecurityPage />
      </div>
      <Footer />
    </div>
  );
};

export default Security;
