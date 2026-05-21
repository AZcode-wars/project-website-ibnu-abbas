import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PPDBPage from './pages/PPDBPage';
import ProfilPage from './pages/ProfilPage';
import PengajarPage from './pages/PengajarPage';
import FasilitasPage from './pages/FasilitasPage';
import ProgramPage from './pages/ProgramPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname]);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ppdb" element={<PPDBPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/program/:slug" element={<ProgramDetailPage />} />
          <Route path="/pengajar" element={<PengajarPage />} />
          <Route path="/fasilitas" element={<FasilitasPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;
