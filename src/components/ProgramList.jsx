import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import programs from '../data/programsData';

const ProgramList = () => {
  return (
    <section className="section-padding bg-light bg-pattern-islamic">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Pilihan Pendidikan</h5>
          <h2 className="display-5 fw-bold section-title text-center">Program Kami</h2>
          <p className="text-muted mt-3" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Pondok Pesantren Ibnu Abbas menawarkan berbagai jenjang dan program pendidikan yang dirancang khusus untuk mencetak generasi unggul yang seimbang antara IPTEK dan IMTAQ.
          </p>
        </motion.div>

        <Row>
          {programs.map((program, idx) => (
            <Col key={program.slug} md={6} lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-100"
              >
                <Card className="pondok-card h-100 p-4 border-0 text-center shadow-sm d-flex flex-column align-items-center">
                  <div>{program.icon}</div>
                  <Card.Title className="fw-bold fs-4 mb-3 text-primary-green">{program.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {program.description}
                  </Card.Text>
                  <Link
                    to={`/program/${program.slug}`}
                    className="read-more-link mt-3"
                    aria-label={`Baca selengkapnya tentang ${program.title}`}
                  >
                    Baca Selengkapnya <ArrowRight size={16} className="read-more-link__arrow" />
                  </Link>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProgramList;
