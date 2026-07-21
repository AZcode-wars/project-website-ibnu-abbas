import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Maximize2, X, Images } from "lucide-react";
import BackButton from "./BackButton";

import asramaBaruImg from "../assets/asrama baru.jpeg";
import masjidDalamImg from "../assets/masjid dalam.jpeg";
import masjidLuarImg from "../assets/masjid luar.jpeg";
import gedungTaImg from "../assets/gedung ta.jpeg";
import kmBaruImg from "../assets/km baru.jpeg";
import kmBaruPotraitImg from "../assets/km baru potrait.jpeg";
import kmTaImg from "../assets/km ta.jpeg";
import parkirImg from "../assets/area parkir luas.jpeg";
import pondokJalanImg from "../assets/pondok tampak jalan.jpeg";
import kandangImg from "../assets/kandang.jpeg";
import kelasDua from "../assets/kelas dua.jpeg";

const Facilities = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(0);

  const albums = [
    {
      title: "Masjid Aqil Al Ghollab",
      desc: "Pusat kegiatan ibadah dan kajian keislaman pondok pesantren.",
      thumbnail: masjidLuarImg,
      images: [masjidLuarImg, masjidDalamImg],
    },
    {
      title: "Asrama Santri Baru",
      desc: "Kamar tidur yang nyaman dan representatif untuk mendukung istirahat santri.",
      thumbnail: asramaBaruImg,
      images: [asramaBaruImg],
    },
    {
      title: "Gedung & Kelas",
      desc: "Fasilitas gedung yang memadai untuk mendukung kelancaran program tahfizh.",
      thumbnail: kelasDua,
      images: [kelasDua, gedungTaImg, pondokJalanImg],
    },
    {
      title: "Fasilitas Kamar Mandi",
      desc: "Fasilitas sanitasi yang bersih dan memadai demi kenyamanan seluruh santri.",
      thumbnail: kmBaruImg,
      images: [kmBaruImg, kmBaruPotraitImg, kmTaImg],
    },
    {
      title: "Area Publik & Fasilitas",
      desc: "Fasilitas pendukung area parkir yang luas dan peternakan.",
      thumbnail: parkirImg,
      images: [parkirImg, kandangImg],
    }
  ];

  const handleOpenLightbox = (index) => {
    setActiveAlbum(index);
    setShowLightbox(true);
  };

  return (
    <section id="fasilitas" className="section-padding bg-light">
      <Container>
        <BackButton to="/" label="Kembali ke Beranda" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Fasilitas Pondok</h5>
          <h2 className="display-5 fw-bold section-title text-center">
            Galeri Sarana & Prasarana
          </h2>
        </motion.div>

        {/* Thumbnail Gallery (Albums) */}
        <Row className="g-4 justify-content-center">
          {albums.map((album, i) => (
            <Col key={i} md={4} sm={6}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="position-relative overflow-hidden rounded-4 cursor-pointer group shadow-sm bg-white border border-light"
                onClick={() => handleOpenLightbox(i)}
                style={{ cursor: "pointer" }}
              >
                <div style={{ height: "200px", position: "relative" }}>
                  <img
                    src={album.thumbnail}
                    alt={album.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary-green bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-all duration-300">
                    <Maximize2 className="text-white" size={32} />
                  </div>
                  {/* Photo count indicator */}
                  <div className="position-absolute bottom-0 end-0 m-3 bg-dark bg-opacity-75 text-white px-2 py-1 rounded-3 small d-flex align-items-center gap-2 shadow">
                    <Images size={16} />
                    <span className="fw-bold">{album.images.length}</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h5 className="fw-bold text-primary-green mb-2">{album.title}</h5>
                  <p className="text-muted small mb-0">{album.desc}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Lightbox Modal with Carousel */}
        <Modal
          show={showLightbox}
          onHide={() => setShowLightbox(false)}
          size="lg"
          centered
          contentClassName="bg-transparent border-0"
        >
          <Modal.Body className="p-0 position-relative">
            <Button
              variant="link"
              className="position-absolute top-0 end-0 text-white p-3 z-3"
              onClick={() => setShowLightbox(false)}
            >
              <X size={32} />
            </Button>
            
            {albums[activeAlbum] && (
              <div className="bg-white rounded-4 overflow-hidden shadow-2xl">
                <Carousel 
                  indicators={albums[activeAlbum].images.length > 1} 
                  controls={albums[activeAlbum].images.length > 1}
                  fade
                >
                  {albums[activeAlbum].images.map((imgSrc, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        src={imgSrc}
                        alt={`${albums[activeAlbum].title} ${idx + 1}`}
                        className="w-100 object-fit-cover"
                        style={{ height: "65vh", minHeight: "400px", maxHeight: "600px" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                
                <div className="p-4 bg-white text-center">
                  <h4 className="text-primary-green fw-bold mb-2">
                    {albums[activeAlbum].title}
                  </h4>
                  <p className="text-muted mb-0">{albums[activeAlbum].desc}</p>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Facilities;
