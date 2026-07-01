import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Timer,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const JadwalPenjengukan = () => {
  return (
    <section
      className="section-padding bg-white bg-pattern-islamic"
      style={{ position: "relative", zIndex: 1 }}
    >
      <Container>
        {/* Header */}
        <motion.div className="text-center mb-5">
          <h5 className="text-accent-gold fw-bold mb-2">Jadwal Kunjungan</h5>
          <h2 className="display-5 fw-bold section-title text-center text-primary-green">
            Jadwal Penjengukan Santri
          </h2>
          <p
            className="text-muted mt-3"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Berikut adalah informasi mengenai jadwal penjengukan santri di
            Pondok Pesantren Ibnu Abbas Banjarmangu.
          </p>
        </motion.div>

        {/* Kisi Konten (Content Grid) */}
        <Row className="align-items-center gy-5">
          {/* Kiri: Kartu Informasi */}
          <Col lg={6}>
            <Row className="g-4">
              {/* Kartu 1: Hari & Jam */}
              <Col md={6}>
                <Card className="pondok-card h-100 p-4 border-0 text-center">
                  <Calendar className="text-accent-gold mb-3" size={40} />
                  <Card.Title className="fw-bold">Hari Kunjungan</Card.Title>
                  <Card.Text className="text-muted">
                    Senin – Sabtu
                    <br />
                    (Minggu & Hari Libur Nasional: Tutup)
                  </Card.Text>
                </Card>
              </Col>
              {/* Kartu 2: Waktu */}
              <Col md={6}>
                <Card className="pondok-card h-100 p-4 border-0 text-center">
                  <Clock className="text-accent-gold mb-3" size={40} />
                  <Card.Title className="fw-bold">Jam Kunjungan</Card.Title>
                  <Card.Text className="text-muted">
                    08:00 – 11:00 WIB
                    <br />
                    13:30 – 16:00 WIB
                  </Card.Text>
                </Card>
              </Col>
              {/* Kartu 3: Durasi */}
              <Col md={6}>
                <Card className="pondok-card h-100 p-4 border-0 text-center">
                  <Timer className="text-accent-gold mb-3" size={40} />
                  <Card.Title className="fw-bold">Durasi</Card.Title>
                  <Card.Text className="text-muted">
                    ± 60 – 90 menit
                    <br />
                    (Termasuk tur fasilitas & tanya jawab)
                  </Card.Text>
                </Card>
              </Col>
              {/* Kartu 4: Kuota */}
              <Col md={6}>
                <Card className="pondok-card h-100 p-4 border-0 text-center">
                  <Users className="text-accent-gold mb-3" size={40} />
                  <Card.Title className="fw-bold">Maksimal</Card.Title>
                  <Card.Text className="text-muted">
                    10 orang per sesi
                    <br />
                    {/* (Grup >10: hubungi admin) */}
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Kanan: Apa yang Didapat + CTA */}
          <Col lg={6}>
            <Card className="pondok-card h-100 p-4 p-md-5 border-0 bg-primary-green text-white shadow-xl">
              <h3 className="text-accent-gold fw-bold mb-4">
                Tata Tertib Penjengukan
              </h3>
              <ul className="list-unstyled mb-4">
                {[
                  "Penjengukan hanya pada hari dan jam yang ditentukan",
                  "Wajib lapor di pos jaga sebelum menemui santri",
                  "Penjenguk wajib berpakaian sopan, dan menutup aurat",
                  "Pertemuan hanya di tempat yang disediakan (aula/ruang tamu).",
                  "Dilarang membuang sampah sembarangan di area pondok.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="mb-3 d-flex align-items-start"
                  >
                    <CheckCircle2
                      className="text-accent-gold me-3 mt-1"
                      size={20}
                    />
                    <div>{item}</div>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>

        {/* Catatan/Pemberitahuan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-5 text-muted small"
        ></motion.div>
      </Container>
    </section>
  );
};

export default JadwalPenjengukan;
