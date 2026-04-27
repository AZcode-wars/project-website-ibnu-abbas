import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

import pimpinanImg from '../assets/pimpinan.png';
import kepalaMadrasahImg from '../assets/kepala_madrasah.png';
import koordinatorTahfizhImg from '../assets/koordinator_tahfizh.png';

const Teachers = () => {
  const staff = [
    { 
      name: "KH. Ahmad Fauzi, Lc", 
      role: "Pimpinan Pondok", 
      education: "Al-Azhar University, Cairo", 
      img: pimpinanImg,
      specialty: "Fiqh & Ushul Fiqh"
    },
    { 
      name: "Ust. Burhanuddin, M.Ag", 
      role: "Kepala Madrasah", 
      education: "UIN Sunan Kalijaga", 
      img: kepalaMadrasahImg,
      specialty: "Manajemen Pendidikan"
    },
    { 
      name: "Ustzah. Siti Aminah, S.Pd", 
      role: "Koordinator Tahfizh", 
      education: "PTIQ Jakarta", 
      img: koordinatorTahfizhImg,
      specialty: "Tahfizh & Qira'at"
    },
    { 
      name: "Ust. Abdullah, S.Pd.I", 
      role: "Pengasuh Santri", 
      education: "LIPIA Jakarta", 
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=300&h=300",
      specialty: "Bahasa Arab & Adab"
    }
  ];

  return (
    <section id="pengajar" className="section-padding bg-mint bg-pattern-islamic">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Tenaga Pendidik</h5>
          <h2 className="display-5 fw-bold section-title text-center">Dewan Asatidzah</h2>
        </motion.div>

        <Row className="g-4">
          {staff.map((member, idx) => (
            <Col key={idx} lg={3} md={6} sm={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="pondok-card border-0 overflow-hidden h-100 group">
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-100 object-fit-cover" 
                      style={{ height: '350px', transition: 'transform 0.5s ease' }} 
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                      style={{ 
                        background: 'linear-gradient(to top, rgba(6, 78, 59, 0.9), transparent)',
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="d-flex align-items-center mb-2">
                        <Award size={18} className="text-accent-gold me-2" />
                        <small>{member.specialty}</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <BookOpen size={18} className="text-accent-gold me-2" />
                        <small>{member.education}</small>
                      </div>
                    </motion.div>
                  </div>
                  
                  <Card.Body className="text-center py-4">
                    <h5 className="fw-bold mb-1 text-primary-green">{member.name}</h5>
                    <p className="text-accent-gold small fw-bold mb-0">{member.role}</p>
                  </Card.Body>
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
