import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Badge, ProgressBar, Accordion, Button, Card } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, Info, GraduationCap, Users, Calendar, ClipboardList, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/ppdb.css';

// ────────────────────────────────────────────
// Hook: Count-up animation saat element in-view
// ────────────────────────────────────────────
const useCountUp = (target, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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
const QuotaCard = ({ title, total, filled, color, icon: Icon }) => {
  const remaining = total - filled;
  const percentage = Math.round((filled / total) * 100);
  const { count: animatedPercent, ref } = useCountUp(percentage, 1200);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="ppdb-quota-card border-0 p-4 mb-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="d-flex align-items-center">
            <div className="ppdb-icon-wrapper me-3">
              <Icon size={24} />
            </div>
            <div>
              <h5 className="mb-0 fw-bold">{title}</h5>
              <small className="text-muted">Total {total} kursi tersedia</small>
            </div>
          </div>
          <Badge 
            bg={remaining <= 10 ? 'danger' : remaining <= 25 ? 'warning' : 'success'} 
            text={remaining <= 10 ? 'light' : remaining <= 25 ? 'dark' : 'light'}
            className="ppdb-badge"
          >
            Tersisa {remaining} Kursi
          </Badge>
        </div>
        
        <div className="ppdb-progress-wrapper">
          <ProgressBar 
            now={animatedPercent} 
            variant={remaining <= 10 ? 'danger' : 'success'}
            label={`${animatedPercent}%`}
            className="ppdb-progress"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <small className="text-muted">{filled} terisi</small>
          <small className="text-muted">{remaining} tersisa</small>
        </div>
      </Card>
    </motion.div>
  );
};

// ────────────────────────────────────────────
// Komponen Utama: PPDB Dashboard
// ────────────────────────────────────────────
const PPDBDashboard = () => {
  const [quota, setQuota] = useState({
    SMP: { total: 100, filled: 85 },
    SMA: { total: 80, filled: 62 }
  });

  // Simulate real-time update
  useEffect(() => {
    const timer = setInterval(() => {
      setQuota(prev => ({
        ...prev,
        SMP: { ...prev.SMP, filled: Math.min(prev.SMP.total, prev.SMP.filled + (Math.random() > 0.9 ? 1 : 0)) }
      }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, value: '500+', label: 'Santri Aktif' },
    { icon: GraduationCap, value: '95%', label: 'Lulus Tepat Waktu' },
    { icon: Calendar, value: '30+', label: 'Tahun Berdiri' },
    { icon: ClipboardList, value: '2', label: 'Jenjang Pendidikan' }
  ];

  return (
    <>
      {/* Hero Banner PPDB */}
      <section className="ppdb-hero">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/" className="ppdb-back-link d-inline-flex align-items-center mb-4">
              <ArrowLeft size={18} className="me-2" />
              Kembali ke Beranda
            </Link>
            <h5 className="text-accent-gold fw-bold mb-2">Pendaftaran Santri Baru</h5>
            <h1 className="display-4 fw-bold text-white mb-3">PPDB Center 2025/2026</h1>
            <p className="lead text-white opacity-75 mx-auto" style={{ maxWidth: '600px' }}>
              Bergabunglah bersama kami dalam membentuk generasi yang berakhlaq mulia dan berwawasan luas.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="ppdb-stats-bar">
        <Container>
          <Row className="g-3">
            {stats.map((stat, idx) => (
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
          <Row className="g-4">
            <Col lg={7}>
              {/* Kuota Section */}
              <div className="mb-5">
                <h3 className="mb-4 d-flex align-items-center">
                  <Info className="text-primary-green me-2" />
                  Informasi Kuota Real-time
                </h3>
                
                <QuotaCard 
                  title="Jenjang SMP (Putra/Putri)" 
                  total={quota.SMP.total} 
                  filled={quota.SMP.filled} 
                  color="danger"
                  icon={Users}
                />
                <QuotaCard 
                  title="Jenjang SMA (Tahfizh)" 
                  total={quota.SMA.total} 
                  filled={quota.SMA.filled} 
                  color="warning"
                  icon={GraduationCap}
                />
              </div>

              {/* Panduan Section */}
              <h3 className="mb-4">Panduan Pendaftaran</h3>
              <Accordion defaultActiveKey="0" className="ppdb-accordion">
                <Accordion.Item eventKey="0" className="ppdb-accordion-item">
                  <Accordion.Header>
                    <ClipboardList size={18} className="me-2 text-primary-green" />
                    Syarat Pendaftaran
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="ppdb-checklist">
                      <li>Fotokopi Akta Kelahiran & KK</li>
                      <li>Fotokopi Ijazah terakhir/Rapor 3 semester terakhir</li>
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
                    Informasi biaya lengkap dapat diunduh melalui brosur digital kami atau ditanyakan langsung via WhatsApp admin.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
                    <h2 className="text-accent-gold mb-3 fw-bold">Daftar Sekarang!</h2>
                    <p className="lead mb-4 text-white opacity-85">
                      Klik tombol di bawah untuk terhubung langsung dengan panitia pendaftaran melalui WhatsApp.
                    </p>
                    
                    <div className="mb-4">
                      {['Respon Cepat & Ramah', 'Konsultasi Program Gratis', 'Bantuan Teknis Pendaftaran'].map((text, idx) => (
                        <motion.div 
                          key={idx}
                          className="d-flex align-items-center mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.15 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="text-accent-gold me-3 flex-shrink-0" size={20} />
                          <span className="text-white">{text}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button 
                      href="https://wa.me/628123456789?text=Assalamualaikum,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20santri%20baru%20di%20Ibnu%20Abbas."
                      target="_blank"
                      className="ppdb-wa-button w-100 py-3 fs-5 d-flex align-items-center justify-content-center"
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
        </Container>
      </section>
    </>
  );
};

export default PPDBDashboard;
