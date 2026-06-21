import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-accent-gold fw-bold mb-2">Mengenal Lebih Dekat</h5>
              <h2 className="display-5 fw-bold section-title mb-4">Mencetak Kader Ulama yang Intelek</h2>
              <p className="text-muted lead mb-4" style={{ textAlign: 'justify' }}>
                Pondok Pesantren Ibnu Abbas berkomitmen untuk menyediakan pendidikan Islam yang berkualitas, menggabungkan sains dan ilmu agama guna membina santri dari berbagai penjuru nusantara menjadi pribadi yang berakhlakul karimah.
              </p>
              <Link to="/profil" className="btn btn-primary-green btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center">
                Pelajari Lebih Lanjut <ArrowRight size={20} className="ms-2" />
              </Link>
            </motion.div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="position-relative"
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary-green rounded-4" style={{ transform: 'translate(-20px, -20px)', zIndex: -1, opacity: 0.1 }}></div>
              <img
                src="https://images.unsplash.com/photo-1590073766276-673f2fba771d?auto=format&fit=crop&q=80&w=600&h=400"
                alt="About Pondok"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: 'cover', maxHeight: '400px' }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPreview;
