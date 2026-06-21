import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { client, urlFor } from '../utils/sanity';
import { motion } from 'framer-motion';
import { User, Calendar, Tag } from 'lucide-react';

const ArtikelDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const query = `*[_type == "artikel" && slug.current == $slug][0]{
          judul,
          gambarUtama,
          konten,
          excerpt,
          penulis,
          tema,
          tanggalRilis,
          kontenTipe,
          "fileUrl": fileKonten.asset->url
        }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);

        if (data?.kontenTipe === 'Upload File' && data?.fileUrl) {
          try {
            const response = await fetch(data.fileUrl);
            const text = await response.text();
            setFileContent(text);
          } catch (err) {
            console.error("Error fetching file content:", err);
            setFileContent("Maaf, isi artikel tidak dapat dimuat dari file.");
          }
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center" style={{ minHeight: '80vh', paddingTop: '80px' }}>
        <h2 className="fw-bold">Artikel Tidak Ditemukan</h2>
        <p className="text-muted mb-4">Maaf, artikel yang Anda cari tidak tersedia.</p>
        <Button as={Link} to="/artikel" variant="success">Kembali ke Daftar Artikel</Button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-4 mt-4">
                <Button as={Link} to="/artikel" variant="outline-success" className="mb-4">
                  &larr; Kembali ke Artikel
                </Button>
                <h1 className="display-4 fw-bold text-primary-green mb-3">{article.judul}</h1>

                {article.excerpt && (
                  <p className="lead text-muted mb-4">{article.excerpt}</p>
                )}
              </div>

              {article.gambarUtama && (
                <div className="mb-4 shadow-sm rounded-4 overflow-hidden">
                  <img
                    src={urlFor(article.gambarUtama).width(1200).url()}
                    alt={article.judul}
                    className="w-100"
                    style={{ height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
                  />
                </div>
              )}

              <div className="article-content bg-white p-4 p-md-5 rounded-4 shadow-sm">
                <div className="article-meta-bottom mb-4">
                  <div className="meta-item">
                    <User size={16} className="me-1" />
                    <span><strong className="text-dark">Penulis:</strong> <i className="text-muted">{article.penulis || '-'}</i></span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} className="me-1" />
                    <span><strong className="text-dark">Tanggal:</strong> <i className="text-muted">{formatDate(article.tanggalRilis)}</i></span>
                  </div>
                  <div className="meta-item">
                    <Tag size={16} className="me-1" />
                    <span><strong className="text-dark">Tema:</strong> <i className="text-muted">{article.tema || '-'}</i></span>
                  </div>
                </div>

                <div className="portable-text-wrapper">
                  {article.kontenTipe === 'Upload File' ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {fileContent}
                    </ReactMarkdown>
                  ) : (
                    <PortableText value={article.konten} />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <style>{`
        .article-meta-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
          color: #666;
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
        }
        .portable-text-wrapper p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1.1rem;
          color: #4a4a4a;
        }
        .portable-text-wrapper h1, .portable-text-wrapper h2, .portable-text-wrapper h3 {
          color: #1b4332;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .portable-text-wrapper ul, .portable-text-wrapper ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .portable-text-wrapper li {
          margin-bottom: 0.5rem;
        }
        .portable-text-wrapper h1 { font-size: 2rem; }
        .portable-text-wrapper h2 { font-size: 1.75rem; }
        .portable-text-wrapper h3 { font-size: 1.5rem; }
        .portable-text-wrapper blockquote {
          border-left: 4px solid #1b4332;
          padding-left: 1rem;
          font-style: italic;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default ArtikelDetailPage;