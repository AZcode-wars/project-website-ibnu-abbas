import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BookOpen, GraduationCap, Library, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ProgramList = () => {
  const programs = [
    {
      title: "SMP Terpadu",
      description: "Pendidikan menengah pertama yang menggabungkan kurikulum nasional (Kemdikbud) dengan kurikulum kepesantrenan dasar, membentuk santri yang cerdas secara akademik dan beradab.",
      icon: <Users size={40} className="text-accent-gold mb-3" />
    },
    {
      title: "SMA Terpadu",
      description: "Pendidikan menengah atas dengan peminatan MIPA dan IPS, dibekali dengan kemampuan bahasa Arab & Inggris aktif serta tahfizh Al-Qur'an berkelanjutan.",
      icon: <GraduationCap size={40} className="text-accent-gold mb-3" />
    },
    {
      title: "Tahfizh Al-Qur'an Intensif",
      description: "Program khusus bagi santri yang memiliki minat dan bakat dalam menghafal Al-Qur'an 30 Juz dengan target capaian mutqin bersanad.",
      icon: <BookOpen size={40} className="text-accent-gold mb-3" />
    },
    {
      title: "Madrasah Diniyah",
      description: "Program pendalaman ilmu agama dan kitab kuning (Turots) untuk mencetak kader ulama masa depan yang tafaqquh fid-diin.",
      icon: <Library size={40} className="text-accent-gold mb-3" />
    }
  ];

  return (
    <section className="section-padding bg-light bg-pattern-islamic">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h5 className="text-accent-gold fw-bold mb-2">Pilihan Pendidikan</h5>
          <h2 className="display-5 fw-bold section-title text-center">Program Kami</h2>
          <p className="text-muted mt-3" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Pondok Pesantren Ibnu Abbas menawarkan berbagai jenjang dan program pendidikan yang dirancang khusus untuk mencetak generasi unggul yang seimbang antara IPTEK dan IMTAQ.
          </p>
        </motion.div>

        <Row>
          {programs.map((program, idx) => (
            <Col key={idx} md={6} lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-100"
              >
                <Card className="pondok-card h-100 p-4 border-0 text-center shadow-sm d-flex flex-column align-items-center justify-content-center">
                  <div>{program.icon}</div>
                  <Card.Title className="fw-bold fs-4 mb-3 text-primary-green">{program.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {program.description}
                  </Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProgramList;
