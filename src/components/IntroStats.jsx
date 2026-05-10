import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Users, Building, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const IntroStats = () => {
  const stats = [
    {
      icon: <Users size={48} className="text-accent-gold mb-3" />,
      number: "850+",
      label: "Santri Aktif"
    },
    {
      icon: <Building size={48} className="text-accent-gold mb-3" />,
      number: "1995",
      label: "Tahun Berdiri"
    },
    {
      icon: <GraduationCap size={48} className="text-accent-gold mb-3" />,
      number: "3.000+",
      label: "Alumni Lulusan"
    }
  ];

  return (
    <section className="bg-light py-5 position-relative" style={{ zIndex: 10 }}>
      <Container>
        <motion.div 
          className="bg-white rounded-4 shadow-xl p-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Description Area */}
          <Row className="justify-content-center mb-5 text-center">
            <Col lg={10} xl={9}>
              <h3 className="text-primary-green fw-bold mb-4">Sekilas Tentang Ibnu Abbas</h3>
              <p className="lead text-muted mb-0" style={{ lineHeight: '1.8' }}>
                Pondok Pesantren Ibnu Abbas hadir sebagai lembaga pendidikan yang mengintegrasikan kurikulum nasional dengan ilmu syar'i. Kami berkomitmen mencetak generasi yang berakhlaq mulia, cerdas dalam menguasai IPTEK, serta tangguh dalam iman dan taqwa.
              </p>
            </Col>
          </Row>

          {/* Bottom Statistics Area */}
          <Row className="text-center justify-content-center">
            {stats.map((stat, idx) => (
              <Col md={4} className="mb-4 mb-md-0" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.2) }}
                >
                  <Card className="border-0 bg-transparent h-100">
                    <Card.Body className="p-0">
                      <div>{stat.icon}</div>
                      <h2 className="display-4 fw-bold text-primary-green mb-1">{stat.number}</h2>
                      <p className="fs-5 text-muted mb-0 fw-medium">{stat.label}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default IntroStats;
