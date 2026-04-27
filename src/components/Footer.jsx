import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-primary-green text-white pt-5 pb-3">
      <Container>
        <Row className="mb-5">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h4 className="text-accent-gold fw-bold mb-4">Ibnu Abbas</h4>
            <p className="mb-4 opacity-75">
              Membangun peradaban Islam melalui pendidikan yang beraqidah shalihah dan berwawasan luas.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white opacity-75 hover-opacity-100"><Facebook /></a>
              <a href="#" className="text-white opacity-75 hover-opacity-100"><Instagram /></a>
              <a href="#" className="text-white opacity-75 hover-opacity-100"><Youtube /></a>
            </div>
          </Col>
          
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-4">Tautan Cepat</h5>
            <ul className="list-unstyled opacity-75">
              <li className="mb-2"><a href="#home" className="text-white text-decoration-none">Beranda</a></li>
              <li className="mb-2"><a href="#tentang-kami" className="text-white text-decoration-none">Profil Pondok</a></li>
              <li className="mb-2"><a href="#pengajar" className="text-white text-decoration-none">Dewan Guru</a></li>
              <li className="mb-2"><Link to="/ppdb" className="text-white text-decoration-none">Pendaftaran Santri</Link></li>
            </ul>
          </Col>
          
          <Col lg={4}>
            <h5 className="fw-bold mb-4">Kontak Kami</h5>
            <div className="d-flex align-items-start mb-3 opacity-75">
              <MapPin className="text-accent-gold me-3 flex-shrink-0" size={20} />
              <span>Jl. Raya Pendidikan No. 123, Klaten, Jawa Tengah</span>
            </div>
            <div className="d-flex align-items-center mb-3 opacity-75">
              <Phone className="text-accent-gold me-3" size={20} />
              <span>+62 812 3456 789</span>
            </div>
            <div className="d-flex align-items-center mb-3 opacity-75">
              <Mail className="text-accent-gold me-3" size={20} />
              <span>info@ibnuabbas.sch.id</span>
            </div>
          </Col>
        </Row>
        <hr className="opacity-25" />
        <div className="text-center opacity-50 small mt-4">
          &copy; {new Date().getFullYear()} Pondok Pesantren Ibnu Abbas. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
