import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-pondok py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BookOpen className="text-primary-green me-2" size={32} />
          <span className="fw-bold fs-4 text-primary-green">Ibnu Abbas</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#profil">Profil</Nav.Link>
            <Nav.Link href="#pengajar">Pengajar</Nav.Link>
            <Nav.Link href="#fasilitas">Fasilitas</Nav.Link>
            <Nav.Link href="#ppdb" className="fw-bold text-accent-gold">PPDB Center</Nav.Link>
            <Button className="btn-primary-pondok ms-lg-3 mt-3 mt-lg-0">Hubungi Kami</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
