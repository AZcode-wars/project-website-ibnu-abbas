import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { BookOpen, Award, GraduationCap } from "lucide-react";

const Teachers = () => {
  const mudir = {
    titleName: "Ustadz Abu Yahya",
    fullName: "A'ang Andriansyah Siregar S.Pd",
    role: "Mudir Pondok Pesantren Ibnu Abbas",
    education: [
      "D2 PGSD Universitas Negeri Yogyakarta",
      "Pondok Pesantren Darul Atsar Temanggung",
      "Darul Hadits Fiyush Yaman",
      "S1 Tarbiyah STIT Bandung",

    ],
    specialty: "Fiqh & Ushul Fiqh",
  };

  const staff = [
    {
      name: "Ust. Burhanuddin, M.Ag",
      role: "Kepala Madrasah",
      education: [
        "S2 Manajemen Pendidikan - UIN Sunan Kalijaga",
        "S1 Pendidikan Agama Islam - UIN Sunan Kalijaga",
      ],
      specialty: "Manajemen Pendidikan",
    },
    {
      name: "Ustzah. Siti Aminah, S.Pd",
      role: "Koordinator Tahfizh",
      education: [
        "S1 Ilmu Al-Qur'an & Tafsir - PTIQ Jakarta",
        "Sertifikasi Tahfizh 30 Juz",
      ],
      specialty: "Tahfizh & Qira'at",
    },
    {
      name: "Ust. Abdullah, S.Pd.I",
      role: "Pengasuh Santri",
      education: [
        "S1 Pendidikan Bahasa Arab - LIPIA Jakarta",
        "Kajian Kitab Kuning - Pesantren Salafiyah",
      ],
      specialty: "Bahasa Arab & Adab",
    },
  ];

  return (
    <section
      id="pengajar"
      className="section-padding bg-mint bg-pattern-islamic"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Tenaga Pendidik</h5>
          <h2 className="display-5 fw-bold section-title text-center">
            Tenaga Pengajar
          </h2>
        </motion.div>

        {/* Mudir Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <Card className="pondok-card border-0 shadow-lg overflow-hidden">
            <Row className="g-0 align-items-stretch">
              {/* Left Side: Rehal Icon and Name */}
              <Col
                md={4}
                className="bg-primary-green text-white text-center py-5 px-4 d-flex flex-column align-items-center justify-content-center"
              >
                <div
                  className="bg-white bg-opacity-10 p-4 rounded-circle mb-3 d-inline-flex"
                  style={{ border: "2px solid var(--accent-gold)" }}
                >
                  <BookOpen size={64} className="text-accent-gold" />
                </div>
                <h4
                  className="fw-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {mudir.titleName}
                </h4>
                <p className="text-white opacity-75 mb-2" style={{ fontSize: "0.95rem" }}>{mudir.fullName}</p>
                <p className="text-accent-gold fw-semibold small mb-0">{mudir.role}</p>
              </Col>

              {/* Right Side: Full Profile & Education Timeline */}
              <Col
                md={8}
                className="p-4 p-md-5 bg-white d-flex flex-column justify-content-center"
              >
                <div className="mb-4">
                  <h3 className="fw-bold text-primary-green mb-1">
                    {mudir.titleName}
                  </h3>
                  <p className="text-muted fs-5 mb-3">{mudir.fullName}</p>
                  <p className="text-accent-gold fw-bold mb-4">{mudir.role}</p>
                </div>

                <div className="position-relative">
                  <h6 className="fw-bold text-primary-green mb-4 d-flex align-items-center">
                    <GraduationCap
                      size={20}
                      className="me-2 text-accent-gold"
                    />
                    Riwayat Pendidikan
                  </h6>

                  <div className="d-flex flex-column gap-3">
                    {mudir.education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-3 bg-light border-start border-accent-gold border-4"
                      >
                        <p className="mb-0 fw-medium text-dark">{edu}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </motion.div>

        {/* Teachers Grid - Simplified Cards */}
        {/* <Row className="g-4">
          {staff.map((member, idx) => (
            <Col key={idx} lg={4} md={6} sm={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="pondok-card border-0 h-100 text-center py-4">
                  <Card.Body>
                    <h5 className="fw-bold mb-3 text-primary-green">
                      {member.name}
                    </h5>
                    <div className="mb-3">
                      <div className="d-flex align-items-start justify-content-center mb-2">
                        <GraduationCap size={14} className="text-muted me-2 mt-1" />
                        <div className="text-start">
                          {member.education.map((edu, eIdx) => (
                            <p key={eIdx} className="text-muted small mb-1">
                              {edu}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-accent-gold small fw-bold mb-0 mt-3">
                      {member.role}
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row> */}
      </Container>
    </section>
  );
};

export default Teachers;
