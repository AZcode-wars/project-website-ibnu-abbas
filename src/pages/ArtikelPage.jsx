import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../utils/sanity';

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const truncateContent = (konten) => {
    if (!konten || !Array.isArray(konten)) return null;

    const fullText = konten
      .map(block =>
        block.children
          ? block.children.map(child => child.text).join('')
          : ''
      )
      .join(' ');

    const trimmedText = fullText.trim();
    if (!trimmedText) return null;

    const words = trimmedText.split(/\s+/);
    if (words.length <= 9) return trimmedText;

    return words.slice(0, 9).join(' ') + '...';
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const query = `*[_type == "artikel" && (!tanggalRilis || tanggalRilis <= $today)]{
          judul,
          "slug": slug.current,
          excerpt,
          konten,
          gambarUtama
        }`;
        const data = await client.fetch(query, { today });
        setArticles(data);
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
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section-padding bg-light bg-pattern-islamic">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h5 className="text-accent-gold fw-bold mb-2">Wawasan & Edukasi</h5>
            <h2 className="display-5 fw-bold section-title text-center">Artikel & Berita</h2>
            <p className="text-muted mt-3" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Kumpulan artikel edukatif, berita terkini, dan wawasan seputar pendidikan Islam serta kehidupan pesantren.
            </p>
          </motion.div>

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
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                          <img
                            src={article.gambarUtama ? urlFor(article.gambarUtama).width(600).height(400).url() : 'https://via.placeholder.com/600x400?text=No+Image'}
                            alt={article.judul}
                            className="w-100 h-100"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <Card.Body className="p-4">
                          <Card.Title className="fw-bold fs-4 mb-3 text-primary-green">
                            {article.judul}
                          </Card.Title>
                          <Card.Text className="text-muted">
                            {article.excerpt || truncateContent(article.konten) || "Baca selengkapnya mengenai topik menarik ini di artikel kami."}
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
                <p className="text-muted">Belum ada artikel yang tersedia saat ini.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ArtikelPage;
