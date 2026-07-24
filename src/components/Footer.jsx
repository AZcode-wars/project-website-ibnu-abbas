import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const TelegramIcon = () => (
  <svg
    width="25px"
    height="25px"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        stroke="rgba(255, 255, 255, 0.7)"
        stroke-width="12"
        d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"
      ></path>
    </g>
  </svg>
);

const Footer = () => {
  return (
    <footer id="kontak" className="footer-pondok pt-5 pb-3">
      <Container>
        <Row className="mb-5 gy-4">
          {/* Brand & Social */}
          <Col lg={4} className="mb-lg-0">
            <h4 className="text-accent-gold fw-bold mb-4">
              Situs Resmi Ponpes Ibnu Abbas Banjarnegara
            </h4>
            <p className="mb-4 opacity-75 d-none d-md-block">
              Mencetak generasi yang berakhlaq mulia, cerdas, dan mandiri
              berlandaskan Al-Qur'an dan As-Sunnah.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://maps.google.com/?q=Ma'had+Ibnu+Abbas+Banjarnegara+Dusun+Kayunan,+RT.+05/RW.+04,+Desa+Banjarmangu,+Kecamatan+Banjarmangu,+Kabupaten+Banjarnegara,+Jawa+Tengah+53452"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Lokasi Google Maps Pondok Pesantren Ibnu Abbas"
              >
                <MapPin size={20} />
              </a>
              <a
                href="https://t.me/ponpesibnuabbasbanjarnegara"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Telegram Pondok Pesantren Ibnu Abbas"
              >
                {/* <Send size={20} /> */}
                <TelegramIcon />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={4} className="mb-lg-0 d-none d-md-block">
            <h5 className="fw-bold mb-4 text-white">Tautan Cepat</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/profil">Profil Pondok</Link>
              </li>
              <li>
                <Link to="/program"> Program Pendidikan</Link>
              </li>
              <li>
                <Link to="/fasilitas">Fasilitas</Link>
              </li>
              <li>
                <Link to="/artikel">Artikel</Link>
              </li>
              <li>
                <Link to="/ppdb">Pendaftaran Santri (PSB)</Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={4}>
            <h5 className="fw-bold mb-4 text-white">Kontak Kami</h5>
            <div
              className="footer-contact-item adress"
              style={{ margin: "1rem auto" }}
            >
              <div className="map">
                <MapPin
                  className="text-accent-gold me-3 flex-shrink-0"
                  size={20}
                />
                <span>
                  Dusun Kayunan, RT. 05/RW. 04, Desa Banjarmangu, Kecamatan
                  Banjarmangu, Kabupaten Banjarnegara, Jawa Tengah 53452
                </span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="phone">
                <Phone
                  className="text-accent-gold me-3 flex-shrink-0"
                  size={20}
                />
                <span>+62 823 7658 2633</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="mail">
                <Mail
                  className="text-accent-gold me-3 flex-shrink-0"
                  size={20}
                />
                <span>ibnuabbasbna1445@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="opacity-25" />
        <div className="text-center opacity-50 small mt-4 pb-2">
          &copy; {new Date().getFullYear()} Pondok Pesantren Ibnu Abbas.{" "}
          <span className="d-block d-md-inline">All Rights Reserved.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
