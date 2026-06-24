import React, { useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import candidate images for random selection
import img1 from '../assets/asrama baru.jpeg';
import img2 from '../assets/asrama.png';
import img3 from '../assets/masjid.png';
import img4 from '../assets/kelas.png';
import img5 from '../assets/maktabah.png';

const AboutHome = () => {
  // Stable random image selection to prevent flickering on re-renders
  const selectedImage = useMemo(() => {
    const images = [img1, img2, img3, img4, img5];
    return images[Math.floor(Math.random() * images.length)];
  }, []);

  return (
    <section className="section-padding bg-pattern-islamic position-relative overflow-hidden">
      <Container>
        <Row className="align-items-center gy-5">
          {/* Text Section - Appears first on mobile, left on desktop */}
          <Col lg={6} className="order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-accent-gold fw-bold mb-2">Profil Singkat</h5>
              <h2 className="display-6 fw-bold text-primary-green mb-4">
                Mengenal Ma'had Ibnu Abbas
              </h2>
              <div className="text-muted lead" style={{ textAlign: 'justify', lineHeight: '1.8' }}>
                <p>
                  Pondok Pesantren Ibnu Abbas didirikan pada tahun 1995 dengan semangat untuk menyediakan pendidikan Islam yang berkualitas dan terjangkau. Berawal dari sebuah musholla kecil, kini kami telah berkembang menjadi lembaga pendidikan yang membina ratusan santri dari berbagai penjuru nusantara.
                </p>
                <p>
                  Kami berkomitmen untuk terus berinovasi dalam metode pembelajaran tanpa meninggalkan nilai-nilai luhur kepesantrenan. Fasilitas yang modern dan pengajar yang kompeten menjadi pilar utama kami.
                </p>
              </div>
              <div className="mt-4">
                <Button
                  as={Link}
                  to="/profil"
                  className="btn-accent-pondok d-inline-flex align-items-center justify-content-center shadow-sm"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ms-2" size={18} />
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* Image Section - Appears top on mobile, right on desktop */}
          <Col lg={6} className="order-1 order-lg-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="position-relative"
            >
              <div className="image-wrapper rounded-4 overflow-hidden shadow-xl">
                <img
                  src={selectedImage}
                  alt="Profil Ma'had Ibnu Abbas"
                  className="img-fluid w-100 rounded-4"
                  style={{
                    maxHeight: '450px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                {/* Decorative element to match the aesthetic */}
                <div
                  className="position-absolute bottom-0 start-0 w-100 h-25 bg-gradient-overlay"
                  style={{
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.3))',
                    zIndex: 1
                  }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHome;
