import React from "react";
import { Container } from "react-bootstrap";
import ProgramList from "../components/ProgramList";
import Teachers from "../components/Teachers";
import BackButton from "../components/BackButton";

const ProgramPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Container className="d-flex justify-content-start">
        <BackButton to="/" label="Kembali ke Beranda" />
      </Container>
      <ProgramList />
      <Teachers />
    </div>
  );
};

export default ProgramPage;
