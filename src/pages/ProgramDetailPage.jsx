import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { ArrowLeft, Users, BookMarked, TableProperties } from "lucide-react";
import programs from "../data/programsData";
import FloatingBackButton from "../components/FloatingBackButton";

const ProgramDetailPage = () => {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState(0);

  if (!program) {
    return (
      <div className="program-not-found d-flex flex-column align-items-center justify-content-center text-center">
        <h2 className="text-primary-green mb-3">Program Tidak Ditemukan</h2>
        <p className="text-muted mb-4">
          Program yang kamu cari tidak tersedia. Silakan kembali ke halaman
          program.
        </p>
        <Link
          to="/program"
          className="btn-primary-pondok text-decoration-none d-inline-flex align-items-center gap-2"
        >
          <ArrowLeft size={18} /> Kembali ke Program
        </Link>
      </div>
    );
  }

  const currentClass = program.classCurriculum[activeTab];
  const totalHours = currentClass.subjects.reduce(
    (sum, s) => sum + s.hoursPerWeek,
    0,
  );

  return (
    <div className="program-detail-page">
      {/* Floating Back Button */}
      <FloatingBackButton to="/program" label="Kembali ke Program" />

      {/* ── HERO BANNER ── */}
      <section className="program-detail-hero">
        <div className="program-detail-hero__overlay" />
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="program-detail-hero__icon mt-4 mb-3">
              {program.icon}
            </div>

            <h1 className="program-detail-hero__title">{program.title}</h1>

            <p className="program-detail-hero__desc">{program.description}</p>

            <div className="program-detail-hero__badge">
              <Users size={16} />
              <span>{program.ageGroup}</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── BODY CONTENT ── */}
      <section className="section-padding bg-light bg-pattern-islamic">
        <Container>
          <Row className="g-5">
            {/* ── KOLOM KIRI: Kurikulum Umum ── */}
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="program-section-card">
                  <div className="program-section-card__header">
                    <BookMarked size={22} />
                    <h2 className="program-section-card__title">
                      Kurikulum Umum
                    </h2>
                  </div>
                  <ul className="program-curriculum-list">
                    {program.generalCurriculum.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="program-curriculum-list__item"
                      >
                        <span className="program-curriculum-list__dot" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Col>

            {/* ── KOLOM KANAN: Tabel Kurikulum per Kelas ── */}
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="program-section-card">
                  <div className="program-section-card__header">
                    <TableProperties size={22} />
                    <h2 className="program-section-card__title">
                      Kurikulum Per Kelas
                    </h2>
                  </div>

                  {/* Tab Selector */}
                  <div className="program-class-tabs" role="tablist">
                    {program.classCurriculum.map((cls, i) => (
                      <button
                        key={i}
                        role="tab"
                        aria-selected={activeTab === i}
                        className={`program-class-tab ${activeTab === i ? "program-class-tab--active" : ""}`}
                        onClick={() => setActiveTab(i)}
                      >
                        {cls.className}
                      </button>
                    ))}
                  </div>

                  {/* Table */}
                  <div className="program-table-wrapper">
                    <motion.table
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="program-curriculum-table"
                    >
                      <thead>
                        <tr>
                          <th className="program-curriculum-table__th--no">
                            No.
                          </th>
                          <th>Mata Pelajaran / Kajian</th>
                          <th className="program-curriculum-table__th--hours">
                            Jam/Minggu
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentClass.subjects.map((s, i) => (
                          <tr
                            key={i}
                            className={
                              i % 2 === 0
                                ? "program-curriculum-table__row--even"
                                : ""
                            }
                          >
                            <td className="text-center text-muted">{i + 1}</td>
                            <td>{s.subject}</td>
                            <td className="text-center">
                              <span className="program-hours-badge">
                                {s.hoursPerWeek}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td
                            colSpan={2}
                            className="program-curriculum-table__total-label"
                          >
                            Total Jam Per Minggu
                          </td>
                          <td className="text-center">
                            <span className="program-hours-badge program-hours-badge--total">
                              {totalHours}
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </motion.table>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="program-detail-cta"
          >
            <h3 className="program-detail-cta__title">
              Tertarik dengan Program Ini?
            </h3>
            <p className="program-detail-cta__desc">
              Daftarkan putra/putri Anda sekarang melalui jalur Penerimaan
              Peserta Didik Baru (PPDB) kami.
            </p>
            <div className="program-detail-cta__actions">
              <Link
                to="/ppdb"
                className="btn-accent-pondok text-decoration-none d-inline-flex align-items-center gap-2"
              >
                Daftar Sekarang (PPDB)
              </Link>
              <Link to="/program" className="program-detail-cta__back-link">
                <ArrowLeft size={16} /> Lihat Program Lainnya
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default ProgramDetailPage;
