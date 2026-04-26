import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { BookOpen } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expanded, setExpanded] = useState(false);

  // ──────────────────────────────────────────────
  // Scroll listener: navbar background + scroll spy
  // ──────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    // Background change on scroll
    setScrolled(window.scrollY > 50);

    // Scroll spy: deteksi section mana yang aktif
    if (location.pathname !== '/') return;

    const sections = ['home', 'tentang-kami', 'sejarah', 'visi-misi', 'pengajar', 'fasilitas', 'kontak'];
    const scrollPosition = window.scrollY + 120; // offset untuk navbar height

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Reset active section saat pindah halaman
  useEffect(() => {
    if (location.pathname === '/ppdb') {
      setActiveSection('');
    }
  }, [location.pathname]);

  // ──────────────────────────────────────────────
  // Smooth scroll handler
  // ──────────────────────────────────────────────
  const handleScrollTo = (hash) => {
    // Tutup hamburger menu setelah klik
    setExpanded(false);

    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/' + hash);
    }
  };

  // ──────────────────────────────────────────────
  // Helper: cek apakah nav item aktif
  // ──────────────────────────────────────────────
  const isActive = (sectionId) => activeSection === sectionId;
  const isDropdownActive = () => ['visi-misi', 'sejarah', 'pengajar', 'fasilitas'].includes(activeSection);

  return (
    <Navbar 
      expand="lg" 
      sticky="top" 
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      className={`navbar-pondok py-3 ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <BookOpen className="text-primary-green me-2" size={32} />
          <span className="fw-bold fs-4 text-primary-green">Ibnu Abbas</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            
            {/* Beranda */}
            <Nav.Link 
              onClick={() => handleScrollTo('#home')}
              className={`nav-link-custom ${isActive('home') ? 'active' : ''}`}
              role="button"
            >
              Beranda
            </Nav.Link>

            {/* Profil (Dropdown) */}
            <NavDropdown 
              title="Profil" 
              id="profil-dropdown" 
              className={`nav-dropdown-custom ${isDropdownActive() ? 'active-dropdown' : ''}`}
            >
              <NavDropdown.Item 
                onClick={() => handleScrollTo('#visi-misi')}
                className={isActive('visi-misi') ? 'active-item' : ''}
              >
                Visi & Misi
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => handleScrollTo('#sejarah')}
                className={isActive('sejarah') ? 'active-item' : ''}
              >
                Sejarah
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                onClick={() => handleScrollTo('#pengajar')}
                className={isActive('pengajar') ? 'active-item' : ''}
              >
                Pengajar
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => handleScrollTo('#fasilitas')}
                className={isActive('fasilitas') ? 'active-item' : ''}
              >
                Fasilitas
              </NavDropdown.Item>
            </NavDropdown>

            {/* Tentang Kami */}
            <Nav.Link 
              onClick={() => handleScrollTo('#tentang-kami')}
              className={`nav-link-custom ${isActive('tentang-kami') ? 'active' : ''}`}
              role="button"
            >
              Tentang Kami
            </Nav.Link>

            {/* Kontak Kami */}
            <Nav.Link 
              onClick={() => handleScrollTo('#kontak')}
              className={`nav-link-custom ${isActive('kontak') ? 'active' : ''}`}
              role="button"
            >
              Kontak Kami
            </Nav.Link>

            {/* CTA Button — Daftar Sekarang */}
            <Button 
              as={Link} 
              to="/ppdb" 
              onClick={() => setExpanded(false)}
              className="btn-accent-pondok ms-lg-3 mt-3 mt-lg-0 text-decoration-none"
            >
              Daftar Sekarang
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
