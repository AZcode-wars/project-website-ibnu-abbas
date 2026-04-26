import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, ProgressBar, Accordion, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Info } from 'lucide-react';

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

  return (
    <section id="ppdb" className="section-padding" style={{ backgroundColor: '#f0fdf4' }}>
      <Container>
        <div className="text-center mb-5">
          <h5 className="text-accent-gold fw-bold">Pendaftaran Santri Baru</h5>
          <h2 className="display-5 fw-bold">PPDB Center 2024/2025</h2>
          <div className="mx-auto bg-accent-gold mt-3" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <Row className="g-4">
          <Col lg={7}>
            <Card className="pondok-card border-0 p-4 mb-4">
              <h3 className="mb-4 d-flex align-items-center">
                <Info className="text-primary-green me-2" />
                Informasi Kuota Real-time
              </h3>
              
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">Jenjang SMP (Putra/Putri)</h5>
                  <Badge bg="danger" className="p-2">Tersisa {quota.SMP.total - quota.SMP.filled} Kursi</Badge>
                </div>
                <ProgressBar 
                  now={(quota.SMP.filled / quota.SMP.total) * 100} 
                  variant="success" 
                  label={`${Math.round((quota.SMP.filled / quota.SMP.total) * 100)}%`}
                  style={{ height: '25px', borderRadius: '10px' }}
                />
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">Jenjang SMA (Tahfizh)</h5>
                  <Badge bg="warning" text="dark" className="p-2">Tersisa {quota.SMA.total - quota.SMA.filled} Kursi</Badge>
                </div>
                <ProgressBar 
                  now={(quota.SMA.filled / quota.SMA.total) * 100} 
                  variant="success" 
                  label={`${Math.round((quota.SMA.filled / quota.SMA.total) * 100)}%`}
                  style={{ height: '25px', borderRadius: '10px' }}
                />
              </div>
            </Card>

            <h3 className="mb-4 mt-5">Panduan Pendaftaran</h3>
            <Accordion defaultActiveKey="0" className="pondok-accordion">
              <Accordion.Item eventKey="0" className="border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                <Accordion.Header>Syarat Pendaftaran</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Fotokopi Akta Kelahiran & KK</li>
                    <li>Fotokopi Ijazah terakhir/Rapor 3 semester terakhir</li>
                    <li>Pas foto 3x4 (4 lembar)</li>
                    <li>Surat keterangan sehat</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                <Accordion.Header>Prosedur Tes Seleksi</Accordion.Header>
                <Accordion.Body>
                  1. Tes Membaca Al-Qur'an (Tahsin/Tahfizh)<br />
                  2. Tes Akademik (Matematika, IPA, B. Inggris)<br />
                  3. Wawancara Orang Tua & Calon Santri
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border-0 shadow-sm mb-3 rounded-3 overflow-hidden">
                <Accordion.Header>Biaya Pendidikan</Accordion.Header>
                <Accordion.Body>
                  Informasi biaya lengkap dapat diunduh melalui brosur digital kami atau ditanyakan langsung via WhatsApp admin.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col lg={5}>
            <div className="bg-primary-green text-white p-5 rounded-4 h-100 shadow-lg position-relative overflow-hidden">
              <div className="position-relative z-index-2">
                <h2 className="text-accent-gold mb-4">Daftar Sekarang!</h2>
                <p className="lead mb-5">Klik tombol di bawah untuk terhubung langsung dengan panitia pendaftaran melalui WhatsApp.</p>
                
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-accent-gold me-3" />
                    <span>Respon Cepat & Ramah</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-accent-gold me-3" />
                    <span>Konsultasi Program Gratis</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-accent-gold me-3" />
                    <span>Bantuan Teknis Pendaftaran</span>
                  </div>
                </div>

                <Button 
                  href="https://wa.me/628123456789?text=Assalamualaikum,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20santri%20baru%20di%20Ibnu%20Abbas."
                  target="_blank"
                  className="btn-accent-pondok w-100 py-3 fs-5 d-flex align-items-center justify-content-center"
                >
                  <Send className="me-2" size={20} />
                  Hubungi Admin PPDB
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="position-absolute" style={{ bottom: '-50px', right: '-50px', opacity: 0.1 }}>
                <Send size={300} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PPDBDashboard;
