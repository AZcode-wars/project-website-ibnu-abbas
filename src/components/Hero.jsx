import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, ArrowRight } from 'lucide-react';

import asramaImage from '../assets/asrama baru.jpeg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      id="home" 
      className="overflow-hidden position-relative d-flex align-items-center" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.75), rgba(6, 78, 59, 0.6)), url(${asramaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', 
        paddingTop: '80px'
      }}
    >
      <div className="bg-pattern-light" style={{ opacity: 0.05 }}></div>
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          <Col lg={8} xl={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h5 variants={itemVariants} className="text-accent-gold fw-bold mb-3 shadow-text">Membangun Generasi Rabbani</motion.h5>
              <motion.h1 variants={itemVariants} className="display-3 fw-bold mb-4 text-white shadow-text" style={{ lineHeight: '1.2' }}>
                Selamat Datang di <br />
                <span className="text-accent-gold">Pondok Pesantren Ibnu Abbas</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="lead text-white-50 mb-5 fs-4 shadow-text" style={{ maxWidth: '600px' }}>
                Mencetak generasi yang berakhlaq mulia, cerdas, dan mandiri berlandaskan Al-Qur'an dan As-Sunnah.
              </motion.p>
              <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3">
                <Button as={Link} to="/ppdb" className="btn-accent-pondok px-5 py-3 fs-5 d-flex align-items-center shadow-lg">
                  Daftar Sekarang (PPDB) <ArrowRight className="ms-2" size={20} />
                </Button>
                <Button variant="outline-light" as={Link} to="/program" className="px-5 py-3 fs-5 border-2 fw-bold">
                  Pelajari Program
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
