import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { GraduationCap, Users, Calendar, ArrowRight } from "lucide-react";

import asramaImage from "../assets/asrama baru.jpeg";
import Marquee from "./Marquee";

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
    <>
    <section
      id="home"
      className="overflow-hidden position-relative d-flex align-items-center hero-section"
      style={{
        paddingTop: 0,
      }}
    >
      {/* Background Layer - Menggunakan img + object-fit untuk stabilitas mobile */}
      <div className="hero-background-wrapper">
        <img
          src={asramaImage}
          alt="Background Asrama"
          className="hero-bg-image"
        />
        <div className="hero-overlay-gradient" />
      </div>

      <div className="bg-pattern-light" style={{ opacity: 0.05 }}></div>
      <Container className="position-relative" style={{ zIndex: 3 }}>
        <Row className="align-items-center">
          <Col lg={8} xl={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h5
                variants={itemVariants}
                className="text-white fw-bold mb-3 shadow-text"
              >
                Membangun Generasi Rabbani
              </motion.h5>
              <motion.h1
                variants={itemVariants}
                className="hero-title fw-bold mb-4 text-white shadow-text"
                style={{ lineHeight: "1.2" }}
              >
                Selamat Datang di <br />
                <span className="text-accent-gold">
                  Pondok Pesantren Ibnu Abbas
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="lead  text-white mb-4 mb-md-5 hero-subtitle "
                style={{ maxWidth: "600px" }}
              >
                Mencetak generasi yang berakhlaq mulia, cerdas, dan mandiri
                berlandaskan Al-Qur'an dan As-Sunnah.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="d-flex flex-column flex-sm-row flex-wrap gap-3"
              >
                <Button
                  as={Link}
                  to="/ppdb"
                  className="btn-accent-pondok hero-btn d-flex align-items-center justify-content-center shadow-lg"
                >
                  Daftar Sekarang <ArrowRight className="ms-2" size={20} />
                </Button>
                <Button
                  variant="outline-light"
                  as={Link}
                  to="/program"
                  className="hero-btn-outline border-2 fw-bold text-center"
                >
                  Pelajari Program
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      {/* Efek transisi smooth (blur & gradient) ke section bawahnya */}
      <div className="hero-bottom-transition" style={{ zIndex: 2 }} />
    </section>
      <Marquee />
    </>
  );
};

export default Hero;
