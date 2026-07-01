import React from "react";
import Hero from "../components/Hero";
import IntroStats from "../components/IntroStats";
import AboutHome from "../components/AboutHome";
import FeaturedPrograms from "../components/FeaturedPrograms";
import FacilitiesHome from "../components/FacilitiesHome";
import KalenderPendidikan from "../components/KalenderPendidikan";
import ContactHome from "../components/ContactHome";
import JadwalPenjengukan from "../components/JadwalPenjengukan";
const Home = () => {
  return (
    <>
      <Hero />
      <IntroStats />
      <AboutHome />
      <FeaturedPrograms />
      <FacilitiesHome />
      <KalenderPendidikan />
      <JadwalPenjengukan />
      <ContactHome />
    </>
  );
};

export default Home;
