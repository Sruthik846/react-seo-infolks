import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import Banner from "../../components/Solutions/OutStaffing/Hero/Banner";
import Outstaffingpage from "../../components/Solutions/OutStaffing/Outstaffingpage";

const Outstaffing = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1]">
      <Banner />
      <div className="grow">
        <Outstaffingpage />
      </div>
      <Footer />
    </div>
  );
};

export default Outstaffing;
