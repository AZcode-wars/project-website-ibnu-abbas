import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import programs from "../data/programsData";

const FeaturedPrograms = () => {
  // Get the first 3 programs for the featured section
  const featuredPrograms = programs.slice(0, 3);

  return (
    <section className="section-padding bg-pattern-islamic position-relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Program Unggulan</h5>
          <h2 className="display-5 fw-bold section-title text-center text-primary-green">
            Pendidikan Berkualitas
          </h2>
          <p
            className="text-muted mt-3"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Kami menyediakan berbagai program pendidikan yang mengintegrasikan
            kurikulum nasional dengan penguatan ilmu syar'i untuk mencetak
            generasi rabbani.
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
              variant="outline-primary-green"
              className="px-4 py-2 fw-bold rounded-pill border-2"
              style={{
                borderColor: "#2e7d32",
                color: "#2e7d32",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#2e7d32";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#2e7d32";
              }}
            >
              Lihat Semua Program
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPrograms;
