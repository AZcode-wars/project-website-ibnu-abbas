import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import asramaBaruImg from "../assets/asrama baru.jpeg";
import masjidDalamImg from "../assets/masjid dalam.jpeg";
import masjidLuarImg from "../assets/masjid luar.jpeg";
import gedungTaImg from "../assets/gedung ta.jpeg";
import kmBaruImg from "../assets/km baru.jpeg";
import parkirImg from "../assets/area parkir luas.jpeg";

const FacilitiesHome = () => {
  const facilities = [
    {
      title: "Masjid Aqil Al Ghollab'",
      desc: "Pusat kegiatan ibadah dan kajian keislaman pondok pesantren.",
      img: masjidLuarImg,
    },
    {
      title: "Masjid Jami' (Bagian Dalam)",
      desc: "Suasana nyaman dan khusyuk di dalam masjid untuk kegiatan ibadah dan hafalan.",
      img: masjidDalamImg,
    },
    {
      title: "Asrama Santri Baru",
      desc: "Kamar tidur yang nyaman dan representatif untuk mendukung istirahat santri.",
      img: asramaBaruImg,
    },
    {
      title: "Gedung Tarbiyatul Aulad",
      desc: "Area belajar anak-anak TA yang aman dan nyaman.",
      img: gedungTaImg,
    },
    {
      title: "Kamar Mandi Santri",
      desc: "Fasilitas sanitasi yang bersih dan memadai demi kenyamanan seluruh santri.",
      img: kmBaruImg,
    },
    {
      title: "Area Parkir Luas",
      desc: "Fasilitas area parkir yang luas untuk menampung kendaraan pengurus dan tamu.",
      img: parkirImg,
    },
  ];

  return (
    <section className="section-padding  position-relative overflow-hidden">
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
          className="shadow-xl rounded-4 overflow-hidden mb-5"
        >
          <Carousel
            indicators={true}
            fade
            interval={3000}
            className="facility-home-carousel"
          >
            {facilities.map((f, i) => (
              <Carousel.Item key={i}>
                <div style={{ height: "500px", position: "relative" }}>
                  <img
                    className="d-block w-100 h-100 object-fit-cover"
                    src={f.img}
                    alt={f.title}
                  />
                  <Carousel.Caption className="text-start start-0 bottom-0 w-100 p-5 carousel-caption">
                    <h3 className="text-accent-gold fw-bold carousel-title">
                      {f.title}
                    </h3>
                    <p className=" text-white carousel-text">{f.desc}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            as={Link}
            to="/fasilitas"
            className="btn-primary-pondok d-inline-flex align-items-center justify-content-center shadow-sm py-2"
            style={{
              transition: "all 0.3s ease",
            }}
          >
            Lihat Galeri Fasilitas Lengkap
            <ArrowRight className="ms-2" size={18} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default FacilitiesHome;
