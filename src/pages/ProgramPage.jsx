import React from "react";
import ProgramList from "../components/ProgramList";
import Teachers from "../components/Teachers";

const ProgramPage = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <ProgramList />
      <Teachers />
    </div>
  );
};

export default ProgramPage;
