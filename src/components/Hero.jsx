import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)' }}>
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-accent-gold fw-bold mb-3">Membangun Generasi Rabbani</h5>
              <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
                Selamat Datang di <span className="text-primary-green">Pondok Pesantren Ibnu Abbas</span>
              </h1>
              <p className="lead text-muted mb-5">
                Mencetak generasi yang berakhlaq mulia, cerdas, dan mandiri berlandaskan Al-Qur'an dan As-Sunnah.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button className="btn-accent-pondok px-4 py-3 fs-5">Daftar Sekarang (PPDB)</Button>
                <Button variant="outline-success" className="px-4 py-3 fs-5 border-2 fw-bold">Pelajari Program</Button>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="position-relative"
            >
              <div 
                className="bg-primary-green rounded-circle mx-auto d-flex align-items-center justify-content-center"
                style={{ width: '400px', height: '400px', border: '15px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <GraduationCap size={150} color="white" />
              </div>
              
              {/* Floating stats */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="position-absolute bg-white p-3 rounded-4 shadow-lg" 
                style={{ top: '10%', right: '5%', minWidth: '150px' }}
              >
                <div className="d-flex align-items-center">
                  <Users className="text-accent-gold me-2" size={24} />
                  <div>
                    <h6 className="mb-0 fw-bold">500+</h6>
                    <small className="text-muted">Santri Aktif</small>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="position-absolute bg-white p-3 rounded-4 shadow-lg" 
                style={{ bottom: '10%', left: '5%', minWidth: '150px' }}
              >
                <div className="d-flex align-items-center">
                  <Calendar className="text-primary-green me-2" size={24} />
                  <div>
                    <h6 className="mb-0 fw-bold">Akreditasi A</h6>
                    <small className="text-muted">Kurikulum Unggulan</small>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
