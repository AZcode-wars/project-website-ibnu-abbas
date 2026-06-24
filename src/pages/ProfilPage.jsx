import React from "react";
import { Container } from "react-bootstrap";
import About from "../components/About";
import BackButton from "../components/BackButton";

const ProfilPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Container className="d-flex justify-content-start">
        <BackButton to="/" label="Kembali ke Beranda" />
      </Container>
      <About />
    </div>
  );
};

export default ProfilPage;
