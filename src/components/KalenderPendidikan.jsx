import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Loader2 } from "lucide-react";
import { client, urlFor } from "../utils/sanity";

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const bulanKeys = [
  "januari",
  "februari",
  "maret",
  "april",
  "mei",
  "juni",
  "juli",
  "agustus",
  "september",
  "oktober",
  "november",
  "desember",
];

const KalenderPendidikan = () => {
  const [dataKalender, setDataKalender] = useState([]);
  // Inisialisasi dengan bulan berjalan dari sistem komputer user (0 = Januari)
  const [currentIndex, setCurrentIndex] = useState(new Date().getMonth());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKalender = async () => {
      try {
        const query = `*[_type == "kalenderPendidikan"][0]{
          januari, februari, maret, april, mei, juni,
          juli, agustus, september, oktober, november, desember
        }`;
        const data = await client.fetch(query);

        if (data) {
          // Transformasi respons menjadi array 12 item { namaBulan, gambar }
          const kalenderArray = bulanKeys.map((key, i) => ({
            namaBulan: namaBulan[i],
            gambar: data[key],
          }));
          setDataKalender(kalenderArray);
        }
      } catch (error) {
        console.error("Error fetching kalender pendidikan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKalender();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-light">
        <Container>
          <div className="text-center py-5">
            <Loader2
              className="text-primary-green animate-spin mb-3"
              size={48}
            />
            <p className="text-muted">Memuat kalender pendidikan...</p>
          </div>
        </Container>
      </section>
    );
  }

  if (dataKalender.length === 0 || !dataKalender[currentIndex]?.gambar) {
    return null;
  }

  const currentBulan = dataKalender[currentIndex];

  return (
    <section className="section-padding bg-light position-relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2 d-flex align-items-center justify-content-center gap-2">
            <Calendar size={20} />
            Informasi
          </h5>
          <h2 className="display-5 fw-bold section-title text-center text-primary-green">
            Kalender Pendidikan
          </h2>
          <p
            className="text-muted mt-3"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Jadwal kegiatan dan kalender pendidikan Pondok Pesantren Ibnu Abbas.
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={9} xl={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-4 shadow-xl p-3 p-md-4"
            >
              {/* Header bulan + tombol navigasi */}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Button
                  variant="light"
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? dataKalender.length - 1 : prev - 1,
                    )
                  }
                  aria-label="Bulan sebelumnya"
                  className="rounded-circle border-0 shadow-sm p-0 d-flex align-items-center justify-content-center"
                  style={{ width: "44px", height: "44px" }}
                >
                  <ChevronLeft size={24} className="text-primary-green" />
                </Button>

                <h3 className="fw-bold text-primary-green mb-0 text-center">
                  {currentBulan.namaBulan}
                </h3>

                <Button
                  variant="light"
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === dataKalender.length - 1 ? 0 : prev + 1,
                    )
                  }
                  aria-label="Bulan berikutnya"
                  className="rounded-circle border-0 shadow-sm p-0 d-flex align-items-center justify-content-center"
                  style={{ width: "44px", height: "44px" }}
                >
                  <ChevronRight size={24} className="text-primary-green" />
                </Button>
              </div>

              {/* Gambar kalender bulan aktif */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-3 overflow-hidden"
              >
                <img
                  src={urlFor(currentBulan.gambar)
                    .auto("format")
                    .fit("max")
                    .url()}
                  alt={`Kalender Pendidikan ${currentBulan.namaBulan}`}
                  className="img-fluid w-100"
                  style={{ maxHeight: "650px", objectFit: "contain" }}
                />
              </motion.div>

              {/* Indikator posisi bulan */}
              <div className="d-flex justify-content-center gap-2 mt-3">
                {dataKalender.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Ke ${item.namaBulan}`}
                    className="border-0 rounded-circle transition-all"
                    style={{
                      width: "10px",
                      height: "10px",
                      padding: 0,
                      backgroundColor:
                        i === currentIndex ? "#2e7d32" : "#cfe0d8",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KalenderPendidikan;
