import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToHash from './utils/ScrollToHash';
import HomePage from './pages/HomePage';
import PPDBPage from './pages/PPDBPage';

function App() {
  return (
    <div className="app-container">
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ppdb" element={<PPDBPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
