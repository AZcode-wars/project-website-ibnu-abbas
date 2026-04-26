import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    { title: "Masjid Utama", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800" },
    { title: "Asrama Santri", img: "https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=800" },
    { title: "Perpustakaan", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" },
    { title: "Laboratorium Komputer", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" },
    { title: "Lapangan Memanah", img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=800" },
    { title: "Ruang Kelas Modern", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="fasilitas" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-5">
          <h5 className="text-accent-gold fw-bold">Fasilitas Pondok</h5>
          <h2 className="display-5 fw-bold">Lingkungan & Sarana</h2>
          <div className="mx-auto bg-accent-gold mt-3" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <Row>
          {facilities.map((item, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="position-relative overflow-hidden rounded-4 shadow-sm"
                style={{ height: '250px' }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
                <div 
                  className="position-absolute bottom-0 start-0 w-100 p-3 text-white" 
                  style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}
                >
                  <h5 className="mb-0">{item.title}</h5>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Facilities;
