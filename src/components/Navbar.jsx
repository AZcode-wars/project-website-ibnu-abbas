import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import logoMahad from '../assets/logo_mahad.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Task A1: Background change on scroll - delayed until leaving Hero
  useEffect(() => {
    const handleScroll = () => {
      // Threshold set to 80% of viewport height
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const shouldBeSolid = scrolled || !isHomePage;

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-pondok py-3 ${shouldBeSolid ? 'scrolled shadow-sm py-2' : 'bg-transparent shadow-none'}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src={logoMahad} 
            alt="Logo Ma'had" 
            height="50" 
            className="me-2"
          />
          <span className={`fw-bold fs-4 ${shouldBeSolid ? 'text-primary-green' : 'text-white'}`}>Ibnu Abbas</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={shouldBeSolid ? '' : 'navbar-dark'} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className={`fw-medium ${shouldBeSolid ? 'text-dark' : 'text-white opacity-90'}`}>Beranda</Nav.Link>
            <NavDropdown 
              title={<span className={`fw-medium ${shouldBeSolid ? 'text-dark' : 'text-white opacity-90'}`}>Profil</span>} 
              id="profil-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profil">Profil Pesantren</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/program">Program Pendidikan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/pengajar" className={`fw-medium ${shouldBeSolid ? 'text-dark' : 'text-white opacity-90'}`}>Pengajar</Nav.Link>
            <Nav.Link as={Link} to="/fasilitas" className={`fw-medium ${shouldBeSolid ? 'text-dark' : 'text-white opacity-90'}`}>Fasilitas</Nav.Link>
            
            <Button 
              as={Link} 
              to="/ppdb" 
              className="btn-accent-pondok ms-lg-3 mt-3 mt-lg-0 shadow-sm"
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
