import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Trees,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const About = () => {
  const cards = [
    {
      icon: <Eye size={40} className="text-accent-gold mb-3" />,
      title: "Visi",
      desc: "Menjadi lembaga pendidikan Islam rujukan dalam mencetak kader ulama yang intelek.",
    },
    {
      icon: <Target size={40} className="text-accent-gold mb-3" />,
      title: "Misi",
      desc: "Menyelenggarakan pendidikan Islam yang integratif, menggabungkan sains dan ilmu agama.",
    },
  ];

  const features = [
    {
      icon: <BookOpen className="text-accent-gold me-3" />,
      text: "Kurikulum Nasional & Kepesantrenan Terpadu",
    },
    {
      icon: <Trees className="text-accent-gold me-3" />,
      text: "Lingkungan Asri & Mendukung Pembelajaran",
    },
    {
      icon: <GraduationCap className="text-accent-gold me-3" />,
      text: "Program Tahfizh Al-Qur'an Intensif",
    },
    {
      icon: <Trophy className="text-accent-gold me-3" />,
      text: "Ekstrakurikuler Beragam & Berprestasi",
    },
  ];

  return (
    <section
      id="profil"
      className="section-padding bg-white bg-pattern-islamic"
    >
      <Container>
        <BackButton to="/" label="Kembali ke Beranda" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">
            Mengenal Lebih Dekat
          </h5>
          <h2 className="display-5 fw-bold section-title text-center">
            Sejarah & Visi Misi
          </h2>
        </motion.div>

        <Row id="sejarah" className="mb-5 align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pe-lg-5"
            >
              <h3 className="mb-4 text-primary-green">Perjalanan Kami</h3>
              <p className="text-muted lead" style={{ textAlign: "justify" }}>
                Ma'had Ibnu Abbas Banjarnegara berdiri pada tahun 2012 sebagai
                respons atas kebutuhan masyarakat akan lembaga pendidikan Islam
                yang serius — tidak hanya dalam teori, tetapi juga dalam praktik
                ibadah sehari-hari. Setelah beberapa kali berpindah lokasi,
                ma'had kini berdiri di Dusun Kayunan, Desa Banjarmangu,
                Kecamatan Banjarmangu, Kabupaten Banjarnegara, Jawa Tengah.
                Sejak awal berdiri hingga kini, ma'had terus tumbuh dalam
                kepercayaan umat — berkembang dari segi jumlah santri, tenaga
                pengajar, maupun fasilitas pendukung pembelajaran.
              </p>
              <p className="text-muted" style={{ textAlign: "justify" }}>
                Ma'had Ibnu Abbas berkomitmen untuk mendidik setiap santri
                sesuai dengan tahap usia dan tumbuh kembangnya — memastikan
                mereka memiliki bekal ilmu, kemampuan, dan karakter yang tepat
                di setiap fase pertumbuhan mereka.
              </p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary-green rounded-4 p-5 text-white shadow-xl"
            >
              <h3 className="text-accent-gold mb-4 fw-bold">
                Kenapa Memilih Kami?
              </h3>
              <ul className="list-unstyled">
                {features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="mb-4 d-flex align-items-center"
                  >
                    {f.icon}
                    <div className="fs-5">{f.text}</div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>

        <Row id="visi-misi">
          {cards.map((card, idx) => (
            <Col key={idx} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="pondok-card h-100 p-4 border-0 text-center">
                  <div className="mx-auto">{card.icon}</div>
                  <Card.Title className="fw-bold fs-4 mb-3">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="text-muted">{card.desc}</Card.Text>
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
