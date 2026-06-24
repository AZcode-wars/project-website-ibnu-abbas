import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  ProgressBar,
  Accordion,
  Button,
  Card,
  Toast,
  ToastContainer,
  Modal,
} from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  Send,
  CheckCircle,
  Info,
  GraduationCap,
  Users,
  Calendar,
  ClipboardList,
  AlertCircle,
  ZoomIn,
  X,
} from "lucide-react";
import { urlFor } from "../utils/sanity";
import BackButton from "./BackButton";
import "../styles/ppdb.css";

// ────────────────────────────────────────────
// Hook: Count-up animation saat element in-view
// ────────────────────────────────────────────
const useCountUp = (target, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return { count, ref };
};

// ────────────────────────────────────────────
// Komponen: Quota Card dengan animated progress
// ────────────────────────────────────────────
const QuotaCard = ({ title, total, isOpen, icon: Icon, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={isOpen ? { y: -5 } : {}}
      onClick={onClick}
      style={{ cursor: isOpen ? "default" : "not-allowed" }}
    >
      <Card
        className={`ppdb-quota-card border-0 p-4 mb-4 ${!isOpen ? "bg-light text-muted" : ""}`}
        style={{
          filter: !isOpen ? "grayscale(1)" : "none",
          opacity: !isOpen ? 0.7 : 1,
          transition: "all 0.3s ease",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div
              className={`ppdb-icon-wrapper me-3 ${!isOpen ? "bg-secondary" : ""}`}
            >
              <Icon size={24} color={isOpen ? undefined : "#6c757d"} />
            </div>
            <div>
              <h5 className={`mb-0 fw-bold ${!isOpen ? "text-muted" : ""}`}>
                {title}
              </h5>
              <small className="text-muted">Total {total} kursi tersedia</small>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// ────────────────────────────────────────────
// Komponen Utama: PPDB Dashboard
// ────────────────────────────────────────────
const PPDBDashboard = ({ settings, stats, isClosed }) => {
  const [showToast, setShowToast] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

  const handleQuotaClick = (isOpen) => {
    if (!isOpen) {
      setShowToast(true);
    }
  };

  const dynamicStats = [
    {
      icon: Users,
      value: stats?.santriAktif || "0",
      label: "Santri Aktif",
    },
    {
      icon: GraduationCap,
      value: stats?.jumlahPengajar || "0",
      label: "Jumlah Pengajar",
    },
    {
      icon: Calendar,
      value: stats?.tahunBerdiri || "0",
      label: "Tahun Berdiri",
    },
    {
      icon: ClipboardList,
      value: stats?.jumlahJenjang || "0",
      label: "Jenjang Pendidikan",
    },
  ];

  return (
    <>
      {/* Hero Banner PPDB */}
      <section className="ppdb-hero">
        <Container>
          <BackButton
            to="/"
            label="Kembali ke Beranda"
            variant="outline-light"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h5 className="text-accent-gold fw-bold mb-2">
              Pendaftaran Santri Baru
            </h5>
            <h1 className="display-4 fw-bold text-white mb-3">
              PPDB Center 2025/2026
            </h1>
            <p
              className="lead text-white opacity-75 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Bergabunglah bersama kami dalam membentuk generasi yang berakhlaq
              mulia dan berwawasan luas.
            </p>
          </motion.div>
        </Container>
      </section>
      {/* Stats Bar */}
      <section className="ppdb-stats-bar mb-5">
        <Container>
          <Row className="g-3">
            {dynamicStats.map((stat, idx) => (
              <Col key={idx} xs={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="ppdb-stat-item text-center"
                >
                  <stat.icon size={28} className="text-accent-gold mb-2" />
                  <h4 className="fw-bold mb-0">{stat.value}</h4>
                  <small className="text-muted">{stat.label}</small>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section id="ppdb" className="section-padding ppdb-main-section">
        <Container>
          {/* Row 1: Poster & Kuota / Alert Ditutup */}
          <Row className="g-5 mb-5 align-items-center">
            <Col lg={isClosed ? 7 : 6} className="text-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {settings?.poster && (
                  <div
                    className="ppdb-poster-wrapper"
                    style={{ cursor: "pointer", display: "inline-block" }}
                    onClick={() => setShowZoom(true)}
                  >
                    <img
                      src={urlFor(settings.poster).url()}
                      alt="Poster PPDB"
                      className="img-fluid rounded-4 shadow-lg ppdb-main-poster"
                      style={{ maxHeight: "600px", width: "auto" }}
                    />
                    <div className="ppdb-poster-overlay rounded-4">
                      <ZoomIn size={40} className="text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            </Col>
            <Col lg={isClosed ? 5 : 6}>
              {isClosed ? (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 p-4 p-md-5 rounded-4 shadow-sm bg-white text-center">
                    <div className="d-flex flex-column align-items-center">
                      <AlertCircle size={72} className="text-danger mb-4" />
                      <h3 className="fw-bold mb-3 text-dark">
                        Pendaftaran Ditutup
                      </h3>
                      <p className="lead text-muted mb-0 text-center" style={{ maxWidth: "400px" }}>
                        {settings?.closedMessage ||
                          "Mohon maaf, pendaftaran peserta didik baru saat ini belum dibuka atau sudah ditutup."}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <div className="mb-2">
                  <h3 className="mb-4 d-flex align-items-center">
                    <Info className="text-primary-green me-2" />
                    Informasi Kuota Pendaftaran
                  </h3>

                  {settings?.quotas && settings.quotas.length > 0 ? (
                    settings.quotas.map((q, idx) => (
                      <QuotaCard
                        key={idx}
                        title={q.jenjang}
                        total={q.totalKuota}
                        isOpen={q.isOpen}
                        icon={idx === 0 ? Users : GraduationCap}
                        onClick={() => handleQuotaClick(q.isOpen)}
                      />
                    ))
                  ) : (
                    <p className="text-muted">
                      Informasi kuota sedang diperbarui.
                    </p>
                  )}
                </div>
              )}
            </Col>
          </Row>

          {/* Row 2: Panduan & CTA — hanya tampil saat pendaftaran dibuka */}
          {!isClosed && (
            <Row className="g-5">
            <Col lg={7}>
              <div className="mb-4">
                <h3 className="mb-4">Panduan Pendaftaran</h3>
                <Accordion defaultActiveKey="0" className="ppdb-accordion">
                  <Accordion.Item eventKey="0" className="ppdb-accordion-item">
                    <Accordion.Header>
                      <ClipboardList
                        size={18}
                        className="me-2 text-primary-green"
                      />
                      Syarat Pendaftaran
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="ppdb-checklist">
                        <li>Fotokopi Akta Kelahiran & KK</li>
                        <li>
                          Fotokopi Ijazah terakhir/Rapor 3 semester terakhir
                        </li>
                        <li>Pas foto 3x4 (4 lembar)</li>
                        <li>Surat keterangan sehat</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="ppdb-accordion-item">
                    <Accordion.Header>
                      <Calendar size={18} className="me-2 text-primary-green" />
                      Prosedur Tes Seleksi
                    </Accordion.Header>
                    <Accordion.Body>
                      <ol className="ppdb-steps">
                        <li>Tes Membaca Al-Qur'an (Tahsin/Tahfizh)</li>
                        <li>Tes Akademik (Matematika, IPA, B. Inggris)</li>
                        <li>Wawancara Orang Tua & Calon Santri</li>
                      </ol>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="ppdb-accordion-item">
                    <Accordion.Header>
                      <Info size={18} className="me-2 text-primary-green" />
                      Biaya Pendidikan
                    </Accordion.Header>
                    <Accordion.Body>
                      Informasi biaya lengkap dapat diunduh melalui brosur
                      digital kami atau ditanyakan langsung via WhatsApp admin.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>

            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="ppdb-cta-card position-relative overflow-hidden">
                  <div className="position-relative" style={{ zIndex: 2 }}>
                    <h2 className="text-accent-gold mb-3 fw-bold">
                      Daftar Sekarang!
                    </h2>
                    <p className="lead mb-4 text-white opacity-85">
                      Klik tombol di bawah untuk terhubung langsung dengan
                      panitia pendaftaran melalui WhatsApp.
                    </p>

                    <div className="mb-4">
                      {[
                        "Respon Cepat & Ramah",
                        "Konsultasi Program Gratis",
                        "Bantuan Teknis Pendaftaran",
                      ].map((text, idx) => (
                        <motion.div
                          key={idx}
                          className="d-flex align-items-center mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.15 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle
                            className="text-accent-gold me-3 flex-shrink-0"
                            size={20}
                          />
                          <span className="text-white">{text}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      href={settings?.registrationLink || "#"}
                      target="_blank"
                      className="ppdb-reg-button w-100 py-3 fs-5 d-flex align-items-center justify-content-center mb-3"
                      style={{
                        backgroundColor: "#fff",
                        color: "#006d5b",
                        fontWeight: "bold",
                        border: "2px solid #006d5b",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <ClipboardList className="me-2" size={20} />
                      Isi Formulir Pendaftaran
                    </Button>

                    <Button
                      href="https://wa.me/628123456789?text=Assalamualaikum,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20santri%20baru%20di%20Ibnu%20Abbas."
                      target="_blank"
                      className="ppdb-wa-button w-100 py-3 fs-5 d-flex align-items-center justify-content-center"
                      style={{ transition: "all 0.3s ease" }}
                    >
                      <Send className="me-2" size={20} />
                      Hubungi Admin PPDB
                    </Button>
                  </div>

                  {/* Decorative elements */}
                  <div className="ppdb-cta-decoration">
                    <Send size={280} />
                  </div>
                  <div className="ppdb-cta-glow"></div>
                </div>
              </motion.div>
            </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Modal Zoom Poster */}
      <Modal
        show={showZoom}
        onHide={() => setShowZoom(false)}
        centered
        size="xl"
        className="ppdb-zoom-modal"
      >
        <Modal.Body className="p-0 bg-dark d-flex align-items-center justify-content-center position-relative">
          <Button
            variant="link"
            onClick={() => setShowZoom(false)}
            className="position-absolute top-0 end-0 m-2 text-white p-0 border-0"
            style={{ zIndex: 10 }}
          >
            <X size={32} />
          </Button>
          <img
            src={urlFor(settings.poster).auto("format").quality(100).url()}
            alt="Poster PPDB"
            className="img-fluid"
            style={{ maxHeight: "90vh", objectFit: "contain" }}
          />
        </Modal.Body>
      </Modal>

      <ToastContainer
        position="top-end"
        className="p-3"
        style={{ zIndex: 9999 }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="danger"
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto text-white">Informasi</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Afwan, pendaftaran untuk jenjang ini sudah ditutup.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default PPDBDashboard;
