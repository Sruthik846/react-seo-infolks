import { useEffect } from "react";
import Footer from "../layouts/Footer";
import Banner from "../components/TermsAndConditions/Hero/Banner";
import Terms_Conditions_Page from "../components/TermsAndConditions/TermsAndConditions";

const Terms_Conditions = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <Terms_Conditions_Page />
      </div>
      <Footer />
    </div>
  );
};

export default Terms_Conditions;
