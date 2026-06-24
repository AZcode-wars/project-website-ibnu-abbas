import React from "react";
import { Container } from "react-bootstrap";
import ProgramList from "../components/ProgramList";
import Teachers from "../components/Teachers";
import BackButton from "../components/BackButton";

const ProgramPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <ProgramList />
      <Teachers />
    </div>
  );
};

export default ProgramPage;
