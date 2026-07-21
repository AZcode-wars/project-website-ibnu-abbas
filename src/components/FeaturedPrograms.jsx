import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import programs from "../data/programsData";

const FeaturedPrograms = () => {
  // Get the first 3 programs for the featured section
  const featuredPrograms = programs.slice(0, 3);

  return (
    <section className="section-padding  position-relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Jenjang Pendidikan</h5>
          <h2 className="display-5 fw-bold section-title text-center text-primary-green">
            Pendidikan yang Kami Jalankan
          </h2>
          <p
            className="text-muted mt-3"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Alhamdulillah, kami menjalankan beberapa jenjang pendidikan yang menekankan penguatan ilmu syar'i, untuk mengantarkan santri menjadi generasi yang rabbani.
          </p>
        </motion.div>

        <Row>
          {featuredPrograms.map((program, idx) => (
            <Col key={program.slug} md={6} lg={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="h-100"
              >
                <Link
                  to={`/program/${program.slug}`}
                  className="text-decoration-none h-100 d-block"
                  aria-label={`Lihat detail program ${program.title}`}
                >
                  <Card className="pondok-card h-100 p-4 border-0 text-center shadow-sm d-flex flex-column align-items-center">
                    <div className="mb-3">{program.icon}</div>
                    <Card.Title className="fw-bold fs-4 mb-3 text-primary-green">
                      {program.title}
                      {program.subtitle && (
                        <span className="d-block fs-6 fw-medium text-muted mt-1">
                          {program.subtitle}
                        </span>
                      )}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {program.description}
                    </Card.Text>
                  </Card>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button
              as={Link}
              to="/program"
              className="btn-primary-pondok d-inline-flex align-items-center justify-content-center shadow-sm"
            >
              Lihat Semua Program Pendidikan
              <ArrowRight className="ms-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPrograms;
