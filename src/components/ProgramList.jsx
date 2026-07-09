import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import programs from "../data/programsData";
import BackButton from "./BackButton";

const ProgramList = () => {
  return (
    <section className="section-padding bg-light bg-pattern-islamic">
      <Container>
        <BackButton to="/" label="Kembali ke Beranda" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Pilihan Pendidikan</h5>
          <h2
            id="programkami"
            className="display-5 fw-bold section-title text-center"
          >
            Program Kami
          </h2>
          <p
            className="text-muted mt-3"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Pondok Pesantren Ibnu Abbas menawarkan beberapa jenjang dan program pendidikan yang alhamdulillah sudah bisa kami jalankan dan telah melalui berbagai macam evaluasi.
          </p>
        </motion.div>

        <Row className="justify-content-center">
          {programs.map((program, idx) => (
            <Col key={program.slug} md={6} lg={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-100"
              >
                <Link
                  to={`/program/${program.slug}`}
                  className="text-decoration-none h-100 d-block"
                  aria-label={`Lihat detail program ${program.title}`}
                >
                  <Card className="pondok-card h-100 p-4 border-0 text-center shadow-sm d-flex flex-column align-items-center">
                    <div>{program.icon}</div>
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
      </Container>
    </section>
  );
};

export default ProgramList;
