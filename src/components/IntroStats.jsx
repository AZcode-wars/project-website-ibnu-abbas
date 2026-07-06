import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Users, Building } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";

const CountUpNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentValue, setCurrentValue] = useState("0");

  useEffect(() => {
    // extract numeric part and suffix
    const numMatch = value.match(/\d+/);
    const suffix = value.replace(/\d+/g, "");
    const targetNum = numMatch ? parseInt(numMatch[0], 10) : 0;

    if (isInView && targetNum > 0) {
      const controls = animate(0, targetNum, {
        duration: 2,
        ease: "easeOut",
        onUpdate(val) {
          setCurrentValue(Math.floor(val).toString() + suffix);
        },
      });
      return () => controls.stop();
    } else if (isInView) {
      setCurrentValue(value);
    }
  }, [isInView, value]);

  return (
    <h2 ref={ref} className="display-4 fw-bold text-primary-green mb-1">
      {currentValue}
    </h2>
  );
};

const IntroStats = () => {
  const stats = [
    {
      icon: <Users size={48} className="text-accent-gold mb-3" />,
      number: "850+",
      label: "Santri Aktif",
    },
    {
      icon: <Building size={48} className="text-accent-gold mb-3" />,
      number: "1995",
      label: "Tahun Berdiri",
    },
  ];

  return (
    <section className=" py-5 position-relative" style={{ zIndex: 10 }}>
      <Container>
        <motion.div
          className="bg-white rounded-4 shadow-xl p-4 p-md-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Description Area */}
          <Row className="justify-content-center mb-5 text-center">
            <Col lg={10} xl={9}>
              <h3 className="text-primary-green fw-bold mb-4">
                Sekilas Tentang Ma'had
              </h3>
              <p
                className=" text-muted mb-4 intro-stats-description"
                style={{ lineHeight: "1.8" }}
              >
                Ma'had Ibnu Abbas Banjarnegara hadir sebagai lembaga pendidikan
                Islam yang berkomitmen membentuk generasi yang benar dalam
                akidah, sahih dalam ibadah, dan mulia dalam akhlak — berpijak
                teguh pada Al-Qur'an dan Sunnah.
              </p>
              <p
                className=" text-muted intro-stats-description mb-0"
                style={{ lineHeight: "1.8" }}
              >
                Berdiri sejak 2012 dan berlokasi di Dusun Kayunan, Banjarmangu,
                Banjarnegara, Jawa Tengah, ma'had ini terus tumbuh dan
                berkembang dalam kepercayaan umat — mencetak generasi muda yang
                berilmu, bertakwa, dan siap membawa manfaat bagi agama,
                keluarga, dan masyarakat.
              </p>
            </Col>
          </Row>

          {/* Bottom Statistics Area */}
          <Row className="text-center justify-content-center">
            {stats.map((stat, idx) => (
              <Col xs={6} md={6} className="mb-4 mb-md-0" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
                >
                  <Card className="border-0 bg-transparent h-100">
                    <Card.Body className="p-0">
                      <div>{stat.icon}</div>
                      <CountUpNumber value={stat.number} />
                      <p className="fs-6 fs-md-5 text-muted mb-0 fw-medium">
                        {stat.label}
                      </p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default IntroStats;
