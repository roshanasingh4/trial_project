import React from "react";
import Business from "../components/Business/Business";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import OurApproach from "../components/OurApproach/OurApproach";
import Pricing from "../components/Pricing/Pricing";
import Team from "../components/Team/Team";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurApproach />
      <Business />
      <Pricing />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
}
