import React from "react";
import HeroSlider from "../component/Home/HeroSlider";
import SecondSection from "../component/Home/SecondSection";
import AboutSection from "../component/Home/AboutSection";
import ProductSection from "../component/Home/ProductSection";
import SupplyChain from "../component/Home/SupplyChain";
import WhyChoose from "../component/Home/WhyChoose";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/common/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <SecondSection />
      <AboutSection />
      <ProductSection />
      <SupplyChain />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default Home;
