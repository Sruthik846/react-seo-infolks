import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import Banner from "../../components/Solutions/ProductCategorization/Hero/Banner";
import ProductPage from "../../components/Solutions/ProductCategorization/ProductPage";

const ProductCategorization = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1]">
      <Banner />
      <div className="grow">
        <ProductPage />
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategorization;
