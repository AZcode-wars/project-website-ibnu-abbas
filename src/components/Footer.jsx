import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer id="kontak" className="footer-pondok pt-5 pb-3">
      <Container>
        <Row className="mb-5 gy-4">
          {/* Brand & Social */}
          <Col lg={4} className="mb-lg-0">
            <h4 className="text-accent-gold fw-bold mb-4">Situs Resmi Ponpes Ibnu Abbas Banjarnegara</h4>
            <p className="mb-4 opacity-75 d-none d-md-block">
              Mencetak generasi yang berakhlaq mulia, cerdas, dan mandiri berlandaskan Al-Qur'an dan As-Sunnah.
            </p>
            <div className="d-flex gap-3">
              <a href="https://maps.google.com/?q=Ma'had+Ibnu+Abbas+Banjarnegara+Dusun+Kayunan,+RT.05/RW.04,+Banjermangu,+Banjarmangu,+Kec.+Banjarmangu,+Kab.+Banjarnegara,+Jawa+Tengah+53452" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Lokasi Google Maps Pondok Pesantren Ibnu Abbas">
                <MapPin size={20} />
              </a>
              <a href="https://t.me/ponpesibnuabbasbanjarnegara" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Telegram Pondok Pesantren Ibnu Abbas">
                <Send size={20} />
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
              <span>Dusun Kayunan, RT.05/RW.04, Banjermangu, Banjarmangu, Kec. Banjarmangu, Kab. Banjarnegara, Jawa Tengah 53452</span>
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
          &copy; {new Date().getFullYear()} Pondok Pesantren Ibnu Abbas. <span className="d-block d-md-inline">All Rights Reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
