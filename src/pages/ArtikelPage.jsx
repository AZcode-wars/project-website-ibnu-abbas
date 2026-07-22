import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { client, urlFor } from "../utils/sanity";
import BackButton from "../components/BackButton";
import InfoKunjunganBanner from "../components/InfoKunjunganBanner";
import { Zap, Clock } from "lucide-react";

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const [urgentArticles, setUrgentArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const truncateContent = (konten) => {
    if (!konten || !Array.isArray(konten)) return null;

    const fullText = konten
      .map((block) =>
        block.children
          ? block.children.map((child) => child.text).join("")
          : "",
      )
      .join(" ");

    const trimmedText = fullText.trim();
    if (!trimmedText) return null;

    const words = trimmedText.split(/\s+/);
    if (words.length <= 9) return trimmedText;

    return words.slice(0, 9).join(" ") + "...";
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];

        const articlesQuery = `*[_type == "artikel" && showHidden != false && (!tanggalRilis || tanggalRilis <= $today)] | order(tanggalRilis desc){
          judul,
          "slug": slug.current,
          excerpt,
          konten,
          gambarUtama,
          isUrgent,
          urgentPublishedAt,
          urgentDuration
        }`;

        const articlesData = await client.fetch(articlesQuery, { today });

        // Filter artikel urgent yang masih aktif berdasarkan urgentDuration per artikel
        const now = new Date();
        const urgentArticlesData = articlesData.filter((article) => {
          if (!article.isUrgent || !article.urgentPublishedAt) return false;

          const publishedAt = new Date(article.urgentPublishedAt);
          const duration = article.urgentDuration || 24; // default 24 jam
          const expiryTime = publishedAt.getTime() + duration * 60 * 60 * 1000;

          return now.getTime() < expiryTime;
        });

        setArticles(articlesData);
        setUrgentArticles(urgentArticlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh", paddingTop: "80px" }}
      >
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "80px" }}>
      <section className="section-padding bg-light bg-pattern-islamic">
        <Container>
          <BackButton to="/" label="Kembali ke Beranda" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h5 className="text-accent-gold fw-bold mb-2">Wawasan & Edukasi</h5>
            <h2 className="display-5 fw-bold section-title text-center">
              Artikel & Berita
            </h2>
            <p
              className="text-muted mt-3"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Kumpulan artikel edukatif, berita terkini, dan wawasan seputar
              pendidikan Islam serta kehidupan pesantren.
            </p>
          </motion.div>

          <InfoKunjunganBanner />

          {/* Info Penting Section - Grid Cards */}
          {urgentArticles.length > 0 && (
            <div className="urgent-section-wrapper mb-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-4"
              >
                <div
                  className="urgent-badge-gold fs-6 px-3 py-2 mb-2"
                  style={{ letterSpacing: "0.5px" }}
                >
                  <Zap size={18} className="me-2" />
                  INFO PENTING
                </div>
                <h3
                  className="fw-bold text-accent-gold mb-0"
                  style={{ fontSize: "1.5rem" }}
                >
                  Informasi Penting Terbaru
                </h3>
              </motion.div>

              <Row className="g-3">
                {urgentArticles.map((article, idx) => (
                  <Col
                    key={article.slug}
                    xs={12}
                    sm={6}
                    lg={4}
                    className="mb-2"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="h-100"
                    >
                      <Link
                        to={`/artikel/${article.slug}`}
                        className="text-decoration-none h-100 d-block"
                      >
                        <Card className="pondok-card urgent-card h-100 border-0 shadow-lg overflow-hidden d-flex flex-column">
                          <div
                            style={{
                              height: "200px",
                              overflow: "hidden",
                              position: "relative",
                            }}
                          >
                            <img
                              src={
                                article.gambarUtama
                                  ? urlFor(article.gambarUtama)
                                      .width(500)
                                      .height(300)
                                      .url()
                                  : "https://via.placeholder.com/500x300?text=Info+Penting"
                              }
                              alt={article.judul}
                              className="w-100 h-100"
                              style={{ objectFit: "cover" }}
                            />
                            <div className="position-absolute top-0 end-0 m-2">
                              <Badge className="urgent-badge-gold">
                                INFO PENTING
                              </Badge>
                            </div>
                          </div>
                          <Card.Body className="p-3 d-flex flex-column">
                            <Card.Title
                              className="fw-bold fs-5 mb-2 text-primary-green"
                              style={{ fontSize: "1.1rem" }}
                            >
                              {article.judul}
                            </Card.Title>
                            <Card.Text className="text-muted small flex-grow-1">
                              {article.excerpt ||
                                truncateContent(article.konten) ||
                                "Informasi penting dari pondok pesantren."}
                            </Card.Text>
                            <div className="mt-2 d-flex align-items-center justify-content-between gap-3">
                              <small className="text-accent-gold fw-bold">
                                <Clock size={15} className="me-2" />
                                {article.urgentPublishedAt
                                  ? new Date(
                                      article.urgentPublishedAt,
                                    ).toLocaleString("id-ID", {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })
                                  : "Baru saja"}
                              </small>
                              <span className="text-accent-gold fw-bold small text-nowrap">
                                Baca &rarr;
                              </span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {/* Regular Articles Section */}
          <Row>
            {articles.length > 0 ? (
              articles.map((article, idx) => (
                <Col key={article.slug} md={6} lg={4} className="mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="h-100"
                  >
                    <Link
                      to={`/artikel/${article.slug}`}
                      className="text-decoration-none h-100 d-block"
                    >
                      <Card className="pondok-card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column">
                        <div style={{ height: "200px", overflow: "hidden" }}>
                          <img
                            src={
                              article.gambarUtama
                                ? urlFor(article.gambarUtama)
                                    .width(600)
                                    .height(400)
                                    .url()
                                : "https://via.placeholder.com/600x400?text=No+Image"
                            }
                            alt={article.judul}
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <Card.Body className="p-4">
                          <Card.Title className="fw-bold fs-4 mb-3 text-primary-green">
                            {article.judul}
                          </Card.Title>
                          <Card.Text className="text-muted">
                            {article.excerpt ||
                              truncateContent(article.konten) ||
                              "Baca selengkapnya mengenai topik menarik ini di artikel kami."}
                          </Card.Text>
                          <div className="mt-3 text-primary-green fw-bold">
                            Baca Selengkapnya &rarr;
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col className="text-center mt-5">
                <p className="text-muted">
                  Belum ada artikel yang tersedia saat ini.
                </p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ArtikelPage;
