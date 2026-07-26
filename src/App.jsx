import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Home from "./pages/Home";
import PPDBPage from "./pages/PPDBPage";
import ProfilPage from "./pages/ProfilPage";
import FasilitasPage from "./pages/FasilitasPage";
import ProgramPage from "./pages/ProgramPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import ArtikelPage from "./pages/ArtikelPage";
import ArtikelDetailPage from "./pages/ArtikelDetailPage";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return (
    <div className="app-container bg-pattern-islamic">
      <Navbar />
      <div>
        {!isHome && <Marquee />}
        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ppdb" element={<PPDBPage />} />
              <Route path="/profil" element={<ProfilPage />} />
              <Route path="/program" element={<ProgramPage />} />
              <Route path="/program/:slug" element={<ProgramDetailPage />} />
              {/* <Route path="/pengajar" element={<PengajarPage />} /> */}
              <Route path="/fasilitas" element={<FasilitasPage />} />
              <Route path="/artikel" element={<ArtikelPage />} />
              <Route path="/artikel/:slug" element={<ArtikelDetailPage />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
