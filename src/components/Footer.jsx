import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer id="kontak" className="footer-pondok pt-5 pb-3">
      <Container>
        <Row className="mb-5 gy-4">
          {/* Brand & Social */}
          <Col lg={4} className="mb-lg-0">
            <h4 className="text-accent-gold fw-bold mb-4">Ibnu Abbas</h4>
            <p className="mb-4 opacity-75 d-none d-md-block">
              Membangun peradaban Islam melalui pendidikan yang beraqidah shalihah dan berwawasan luas.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="footer-social-link" aria-label="Facebook Pondok Pesantren Ibnu Abbas">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram Pondok Pesantren Ibnu Abbas">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube Pondok Pesantren Ibnu Abbas">
                <Youtube size={20} />
              </a>
            </div>
          </Col>
          
          {/* Quick Links */}
          <Col lg={4} className="mb-lg-0 d-none d-md-block">
            <h5 className="fw-bold mb-4 text-white">Tautan Cepat</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#tentang-kami">Profil Pondok</a></li>
              <li><a href="#pengajar">Dewan Guru</a></li>
              <li><a href="#fasilitas">Fasilitas</a></li>
              <li><Link to="/ppdb">Pendaftaran Santri (PPDB)</Link></li>
            </ul>
          </Col>
          
          {/* Contact Info */}
          <Col lg={4}>
            <h5 className="fw-bold mb-4 text-white">Kontak Kami</h5>
            <div className="footer-contact-item">
              <MapPin className="text-accent-gold me-3 flex-shrink-0" size={20} />
              <span>Jl. Raya Pendidikan No. 123, Klaten, Jawa Tengah</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="text-accent-gold me-3 flex-shrink-0" size={20} />
              <span>+62 812 3456 789</span>
            </div>
            <div className="footer-contact-item">
              <Mail className="text-accent-gold me-3 flex-shrink-0" size={20} />
              <span>info@ibnuabbas.sch.id</span>
            </div>
          </Col>
        </Row>
        <hr className="opacity-25" />
        <div className="text-center opacity-50 small mt-4 pb-2">
          &copy; {new Date().getFullYear()} Pondok Pesantren Ibnu Abbas. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
