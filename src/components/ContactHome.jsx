import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactHome = () => {
  const [formData, setFormData] = useState({
    nama: "",
    phone: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation: Log to console and show alert
    console.log("Form submitted:", formData);
    alert(
      `Terima kasih, ${formData.nama}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`,
    );
    setFormData({ nama: "", phone: "", email: "", pesan: "" });
  };

  return (
    <section className="section-padding position-relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Hubungi Kami</h5>
          <h2 className="display-5 fw-bold section-title text-center text-primary-green">
            Sampaikan Aspirasi Anda
          </h2>
          <p
            className="text-muted mt-3"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Punya pertanyaan tentang pendaftaran atau ingin mengenal kami lebih
            jauh? Kami siap membantu Anda dengan sepenuh hati.
          </p>
        </motion.div>

        <Row className="gy-5">
          {/* Contact Info Section */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-4 p-md-5 rounded-4 bg-primary-green-light text-white h-100 shadow-xl"
            >
              <h3 className="fw-bold mb-4 text-accent-gold">
                Informasi Kontak
              </h3>

              <div className="d-flex align-items-start mb-4">
                <div className="me-3 bg-white bg-opacity-25 p-2 rounded-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Alamat</p>
                  <p className="text-white-50 mb-0">
                    Dusun Kayunan, RT.05/RW.04, Banjermangu, Banjarmangu, Kec.
                    Banjarmangu, Kab. Banjarnegara, Jawa Tengah 53452
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="me-3 bg-white bg-opacity-25 p-2 rounded-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Telepon</p>
                  <p className="text-white-50 mb-0">+62 823 7658 2633</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-5">
                <div className="me-3 bg-white bg-opacity-25 p-2 rounded-circle">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="mb-0 fw-bold">Email</p>
                  <p className="text-white-50 mb-0">
                    ibnuabbasbna1445@gmail.com
                  </p>
                </div>
              </div>

              <Button
                as="a"
                href="https://wa.me/6282376582633?text=Assalamualaikum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 btn-accent-pondok bg-accent-gold"
                style={{
                  border: "none",
                }}
              >
                <MessageCircle size={20} />
                WhatsApp Admin
              </Button>
            </motion.div>
          </Col>

          {/* Contact Form Section */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-4 p-md-5 bg-light rounded-4 shadow-sm border"
            >
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="formNama">
                      <Form.Label className="fw-medium text-primary-green">
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="nama"
                        placeholder="Masukkan nama lengkap"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Group controlId="formPhone">
                      <Form.Label className="fw-medium text-primary-green">
                        No. HP / WhatsApp
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Contoh: 08123..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label className="fw-medium text-primary-green">
                    Alamat Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email@contoh.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group controlId="formPesan" className="mb-4">
                  <Form.Label className="fw-medium text-primary-green">
                    Pesan
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="pesan"
                    rows={4}
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                    className="py-2"
                  />
                </Form.Group>

                <div className="text-end">
                  <Button
                    type="submit"
                    className="px-5 py-2 btn-accent-pondok bg-accent-gold fw-bold shadow-sm"
                    style={{
                      border: "none",
                    }}
                  >
                    Kirim Pesan
                  </Button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHome;
