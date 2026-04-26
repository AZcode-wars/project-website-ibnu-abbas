import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const cards = [
    {
      icon: <Target size={40} className="text-accent-gold mb-3" />,
      title: "Misi",
      desc: "Menyelenggarakan pendidikan Islam yang integratif, menggabungkan sains dan ilmu agama."
    },
    {
      icon: <Eye size={40} className="text-accent-gold mb-3" />,
      title: "Visi",
      desc: "Menjadi lembaga pendidikan Islam rujukan dalam mencetak kader ulama yang intelek."
    },
    {
      icon: <ShieldCheck size={40} className="text-accent-gold mb-3" />,
      title: "Nilai Utama",
      desc: "Keikhlasan, Kemandirian, Kesederhanaan, dan Ukhuwah Islamiyah."
    }
  ];

  return (
    <section id="tentang-kami" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-5">
          <h5 className="text-accent-gold fw-bold">Mengenal Lebih Dekat</h5>
          <h2 className="display-5 fw-bold">Sejarah & Visi Misi</h2>
          <div className="mx-auto bg-accent-gold mt-3" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <Row id="sejarah" className="mb-5 align-items-center">
          <Col lg={6}>
            <div className="pe-lg-5">
              <h3 className="mb-4">Perjalanan Kami</h3>
              <p className="text-muted lead" style={{ textAlign: 'justify' }}>
                Pondok Pesantren Ibnu Abbas didirikan pada tahun 1995 dengan semangat untuk menyediakan pendidikan Islam yang berkualitas dan terjangkau. Berawal dari sebuah musholla kecil, kini kami telah berkembang menjadi lembaga pendidikan yang membina ratusan santri dari berbagai penjuru nusantara.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Kami berkomitmen untuk terus berinovasi dalam metode pembelajaran tanpa meninggalkan nilai-nilai luhur kepesantrenan. Fasilitas yang modern dan pengajar yang kompeten menjadi pilar utama kami dalam mencapai keunggulan akademik dan spiritual.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bg-primary-green rounded-4 p-5 text-white">
              <h3 className="text-accent-gold mb-4">Kenapa Memilih Kami?</h3>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <div className="bg-accent-gold p-1 rounded-circle me-3 mt-1"></div>
                  <div>Kurikulum Nasional & Kepesantrenan yang Terpadu</div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <div className="bg-accent-gold p-1 rounded-circle me-3 mt-1"></div>
                  <div>Lingkungan yang Asri dan Mendukung Pembelajaran</div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <div className="bg-accent-gold p-1 rounded-circle me-3 mt-1"></div>
                  <div>Program Tahfizh Al-Qur'an 30 Juz</div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <div className="bg-accent-gold p-1 rounded-circle me-3 mt-1"></div>
                  <div>Ekstrakurikuler yang Beragam (Beladiri, Memanah, dll)</div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row id="visi-misi">
          {cards.map((card, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="pondok-card h-100 p-4 border-0 text-center">
                  <div className="mx-auto">{card.icon}</div>
                  <Card.Title className="fw-bold fs-4 mb-3">{card.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {card.desc}
                  </Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
