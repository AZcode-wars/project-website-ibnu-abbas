import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import BackButton from "./BackButton";

import asramaImg from "../assets/asrama.png";
import masjidImg from "../assets/masjid.png";
import kelasImg from "../assets/kelas.png";
import maktabahImg from "../assets/maktabah.png";

const Facilities = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const facilities = [
    {
      title: "Asrama Santri Modern",
      desc: "Kamar tidur yang nyaman dan bersih untuk mendukung istirahat santri.",
      img: asramaImg,
    },
    {
      title: "Masjid Jami' Ibnu Abbas",
      desc: "Pusat kegiatan ibadah dan kajian keislaman dengan arsitektur menawan.",
      img: masjidImg,
    },
    {
      title: "Ruang Kelas Kondusif",
      desc: "Kelas interaktif dengan fasilitas-fasilitas pendukung untuk pembelajaran islami.",
      img: kelasImg,
    },
    {
      title: "Perpustakaan & Maktabah",
      desc: "Koleksi ribuan kitab kuning dan buku literatur umum yang lengkap.",
      img: maktabahImg,
    },
  ];

  const handleOpenLightbox = (index) => {
    setActiveImg(index);
    setShowLightbox(true);
  };

  return (
    <section id="fasilitas" className="section-padding">
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
            Sarana & Prasarana
          </h2>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-5 shadow-xl rounded-4 overflow-hidden"
        >
          <Carousel indicators={true} fade className="facility-carousel">
            {facilities.map((f, i) => (
              <Carousel.Item key={i}>
                <div style={{ height: "500px", position: "relative" }}>
                  <img
                    className="d-block w-100 h-100 object-fit-cover"
                    src={f.img}
                    alt={f.title}
                  />
                  <Carousel.Caption
                    className="text-start start-0 bottom-0 w-100 p-5"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    }}
                  >
                    <h3 className="text-accent-gold fw-bold">{f.title}</h3>
                    <p className="fs-5">{f.desc}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>

        {/* Thumbnail Gallery */}
        <Row className="g-4">
          {facilities.map((f, i) => (
            <Col key={i} md={3}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="position-relative overflow-hidden rounded-3 cursor-pointer group shadow-sm"
                onClick={() => handleOpenLightbox(i)}
                style={{ height: "180px", cursor: "pointer" }}
              >
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary-green bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 group-hover-opacity-100 transition-all duration-300">
                  <Maximize2 className="text-white" />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Lightbox Modal */}
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
            <img
              src={facilities[activeImg].img}
              alt="Preview"
              className="w-100 rounded-3 shadow-2xl"
            />
            <div className="bg-white p-4 rounded-bottom-3 mt-n2">
              <h4 className="text-primary-green fw-bold">
                {facilities[activeImg].title}
              </h4>
              <p className="text-muted mb-0">{facilities[activeImg].desc}</p>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Facilities;
