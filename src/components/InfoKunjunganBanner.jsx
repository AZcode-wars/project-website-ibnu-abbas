import { Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { CalendarClock, ArrowRight } from "lucide-react";

const LINK_EKSTERNAL = "https://..."; // TODO: ganti dengan URL jadwal & tata tertib klien

const InfoKunjunganBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-5"
    >
      <Card className="pondok-card border-0 shadow-xl rounded-4 overflow-hidden bg-primary-green text-white">
        <Card.Body className="p-4 p-md-5">
          <Row className="align-items-center gy-3">
            <Col lg={8}>
              <div className="urgent-badge-gold fs-6 px-3 py-2 mb-2 d-inline-flex align-items-center">
                <CalendarClock size={18} className="me-2" />
                INFO KUNJUNGAN
              </div>
              <h3 className="fw-bold text-accent-gold mb-2">
                Jadwal Penjengukan Santri
              </h3>
              <p className="mb-0">
                Hari: Jum'at&nbsp;&nbsp;·&nbsp;&nbsp;Jam: 08.00 – 12.00 WIB
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <a
                href={LINK_EKSTERNAL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light text-primary-green fw-bold rounded-4 px-4 py-2 text-decoration-none d-inline-flex align-items-center"
              >
                Lihat Jadwal Selengkapnya
                <ArrowRight size={18} className="ms-2" />
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default InfoKunjunganBanner;
