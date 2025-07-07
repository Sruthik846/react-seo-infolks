import { useEffect } from "react";
import Footer from "../layouts/Footer";
import Banner from "../components/Blogs/Hero/Banner";
import PopularBlogs from "../components/Blogs/PopularBlogs";

const Blogs = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1] min-h-screen flex flex-col z-20">
      <Banner />
      <div className="grow">
        <PopularBlogs />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
