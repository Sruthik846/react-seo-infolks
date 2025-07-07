import { useEffect } from "react";
import Footer from "../../layouts/Footer";
import Banner from "../../components/Solutions/VideoAnnotations/Hero/Banner";
import VideoPage from "../../components/Solutions/VideoAnnotations/VideoPage";

const VideoAnnotations = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner
    }, []);
  return (
    <div className="bg-linear-to-r from-[#4d5db2] to-[#021AA1]">
      <Banner />
      <div className="grow">
        <VideoPage />
      </div>
      <Footer />
    </div>
  );
};

export default VideoAnnotations;
