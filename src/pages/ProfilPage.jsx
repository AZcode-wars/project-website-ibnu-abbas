import React from "react";
import About from "../components/About";
import Teachers from "../components/Teachers";
import ProgramList from "../components/ProgramList";

const ProfilPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <About />
      <ProgramList />
      <Teachers />
    </div>
  );
};

export default ProfilPage;
