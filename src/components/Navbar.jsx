import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { BookOpen } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Handle klik navigasi ke section di homepage.
   * Jika sudah di homepage → smooth scroll langsung.
   * Jika di halaman lain → navigate ke homepage dulu, lalu scroll.
   */
  const handleScrollTo = (hash) => {
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <Navbar expand="lg" sticky="top" className="navbar-pondok py-3">
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
              className="nav-link-custom"
              role="button"
            >
              Beranda
            </Nav.Link>

            {/* Profil (Dropdown) */}
            <NavDropdown title="Profil" id="profil-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item onClick={() => handleScrollTo('#visi-misi')}>
                Visi & Misi
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollTo('#sejarah')}>
                Sejarah
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleScrollTo('#pengajar')}>
                Pengajar
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollTo('#fasilitas')}>
                Fasilitas
              </NavDropdown.Item>
            </NavDropdown>

            {/* Tentang Kami */}
            <Nav.Link 
              onClick={() => handleScrollTo('#tentang-kami')}
              className="nav-link-custom"
              role="button"
            >
              Tentang Kami
            </Nav.Link>

            {/* Kontak Kami */}
            <Nav.Link 
              onClick={() => handleScrollTo('#kontak')}
              className="nav-link-custom"
              role="button"
            >
              Kontak Kami
            </Nav.Link>

            {/* CTA Button — Daftar Sekarang */}
            <Button 
              as={Link} 
              to="/ppdb" 
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
