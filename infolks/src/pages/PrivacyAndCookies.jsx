import { useEffect } from "react";
import Privacy_Cookies_page from "../components/PrivacyAndCookies/PrivacyAndCookies";
import Banner from "../components/PrivacyAndCookies/Hero/Banner";
import Footer from "../layouts/Footer";

const Privacy_Cookies = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <Privacy_Cookies_page />
      </div>
      <Footer />
    </div>
  );
};

export default Privacy_Cookies;
