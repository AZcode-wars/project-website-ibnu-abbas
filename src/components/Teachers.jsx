import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Teachers = () => {
  const staff = [
    { name: "KH. Ahmad Fauzi, Lc", role: "Pimpinan Pondok", education: "Al-Azhar University, Cairo", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad" },
    { name: "Ust. Burhanuddin, M.Ag", role: "Kepala Madrasah", education: "UIN Sunan Kalijaga", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Burhan" },
    { name: "Ustzah. Siti Aminah, S.Pd", role: "Koordinator Tahfizh", education: "PTIQ Jakarta", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti" },
    { name: "Ust. Abdullah, S.Pd.I", role: "Pengasuh Santri", education: "LIPIA Jakarta", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abdullah" }
  ];

  return (
    <section id="pengajar" className="section-padding bg-mint">
      <Container>
        <div className="text-center mb-5">
          <h5 className="text-accent-gold fw-bold">Tenaga Pendidik</h5>
          <h2 className="display-5 fw-bold">Dewan Asatidzah</h2>
          <div className="mx-auto bg-accent-gold mt-3" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <Row>
          {staff.map((member, idx) => (
            <Col key={idx} lg={3} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="pondok-card border-0 text-center overflow-hidden h-100">
                  <div className="bg-light p-4">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="rounded-circle shadow-sm mb-3" 
                      style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid white' }} 
                    />
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-accent-gold small fw-bold mb-3">{member.role}</p>
                    <hr className="w-25 mx-auto" />
                    <small className="text-muted d-block">{member.education}</small>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teachers;
