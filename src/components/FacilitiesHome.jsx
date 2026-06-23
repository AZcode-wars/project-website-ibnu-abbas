import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Import assets from Facilities component for consistency
import asramaImg from '../assets/asrama.png';
import masjidImg from '../assets/masjid.png';
import kelasImg from '../assets/kelas.png';
import maktabahImg from '../assets/maktabah.png';

const FacilitiesHome = () => {
  const facilities = [
    {
      title: "Asrama Santri Modern",
      desc: "Kamar tidur yang nyaman dan bersih untuk mendukung istirahat santri.",
      img: asramaImg
    },
    {
      title: "Masjid Jami' Ibnu Abbas",
      desc: "Pusat kegiatan ibadah dan kajian keislaman dengan arsitektur menawan.",
      img: masjidImg
    },
    {
      title: "Ruang Kelas Kondusif",
      desc: "Kelas interaktif dengan fasilitas-fasilitas pendukung untuk pembelajaran islami.",
      img: kelasImg
    },
    {
      title: "Perpustakaan & Maktabah",
      desc: "Koleksi ribuan kitab kuning dan buku literatur umum yang lengkap.",
      img: maktabahImg
    }
  ];

  return (
    <section className="section-padding bg-pattern-islamic position-relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Fasilitas Unggulan</h5>
          <h2 className="display-5 fw-bold section-title text-center text-primary-green">
            Sarana & Prasarana
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shadow-xl rounded-4 overflow-hidden"
        >
          <Carousel
            indicators={true}
            fade
            interval={3000}
            className="facility-home-carousel"
          >
            {facilities.map((f, i) => (
              <Carousel.Item key={i}>
                <div style={{ height: '500px', position: 'relative' }}>
                  <img
                    className="d-block w-100 h-100 object-fit-cover"
                    src={f.img}
                    alt={f.title}
                  />
                  <Carousel.Caption
                    className="text-start start-0 bottom-0 w-100 p-5"
                    style={{
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      left: 0,
                      bottom: 0
                    }}
                  >
                    <h3 className="text-accent-gold fw-bold">{f.title}</h3>
                    <p className="fs-5 text-white">{f.desc}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>
      </Container>
    </section>
  );
};

export default FacilitiesHome;
