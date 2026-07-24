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

  const WhatsAppIcon = () => (
    <svg
      fill="#ffffff"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="28px"
      height="28px"
      viewBox="0 0 30.667 30.667"
      xml:space="preserve"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );

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
                    Dusun Kayunan, RT. 05/RW. 04, Desa Banjarmangu, Kecamatan
                    Banjarmangu, Kabupaten Banjarnegara, Jawa Tengah 53452
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
                  transition: "all 0.3s ease",
                }}
              >
                {/* <MessageCircle size={20} /> */}
                <WhatsAppIcon />
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
                    className="px-5 py-2 btn-primary-pondok fw-bold shadow-sm"
                    style={{
                      border: "none",
                      transition: "all 0.3s ease",
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
