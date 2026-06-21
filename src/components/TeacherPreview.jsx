import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import pimpinanImg from '../assets/pimpinan.png';

const TeacherPreview = () => {
  const pimpinan = {
    name: "KH. Ahmad Fauzi, Lc",
    role: "Pimpinan Pondok",
    education: "Al-Azhar University, Cairo",
    img: pimpinanImg,
    specialty: "Fiqh & Ushul Fiqh"
  };

  return (
    <section className="section-padding bg-mint bg-pattern-islamic">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h5 className="text-accent-gold fw-bold mb-2">Bimbingan Ulama</h5>
              <h2 className="display-5 fw-bold section-title mb-4">Bimbingan Para Asatidzah</h2>
              <div className="d-flex align-items-start mb-4">
                <Quote className="text-accent-gold me-3 mt-1" size={30} />
                <p className="text-muted fs-5 italic" style={{ fontStyle: 'italic', textAlign: 'justify' }}>
                  "Pendidikan bukan sekadar transfer ilmu, melainkan penanaman adab dan pembentukan karakter yang berlandaskan pada Al-Qur'an dan As-Sunnah."
                </p>
              </div>
              <Link to="/profil" className="btn btn-outline-primary-green btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center">
                Kenali Lebih Dekat <ArrowRight size={20} className="ms-2" />
              </Link>
            </motion.div>
          </Col>
          <Col lg={7} className="mt-5 mt-lg-0 text-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="position-relative d-inline-block"
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-accent-gold rounded-circle" style={{ transform: 'translate(-10px, -10px)', zIndex: -1, opacity: 0.2 }}></div>
              <img
                src={pimpinan.img}
                alt={pimpinan.name}
                className="img-fluid rounded-circle shadow-lg border border-4 border-white"
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              />
              <div className="mt-4">
                <h4 className="fw-bold text-primary-green mb-1">{pimpinan.name}</h4>
                <p className="text-accent-gold fw-bold mb-0">{pimpinan.role}</p>
                <small className="text-muted">{pimpinan.education}</small>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeacherPreview;
