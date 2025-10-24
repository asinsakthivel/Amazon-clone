import React from 'react';
import BannerSlider from '../components/BannerSlider';
import DealSection from '../components/DealSection';
import VideoProductSection from "../components/VideoProductSection";
import dealData from '../data';
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import "../App.css"
function Home() {
  return (
    <div className="full">
      <BannerSlider />
      <div className="deals-overlay">
          <DealSection />
        </div>
        <VideoProductSection />
        <SignIn />
        <Footer />
    </div>
  );
}

export default Home;
