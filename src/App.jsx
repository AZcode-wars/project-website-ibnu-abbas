import React from 'react';
import Header from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Teachers from './components/Teachers';
import Facilities from './components/Facilities';
import PPDBDashboard from './components/PPDBDashboard';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Teachers />
        <Facilities />
        <PPDBDashboard />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
