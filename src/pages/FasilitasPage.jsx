import React from 'react';
import { Container } from 'react-bootstrap';
import Facilities from '../components/Facilities';
import BackButton from '../components/BackButton';

const FasilitasPage = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Container className="d-flex justify-content-start">
        <BackButton to="/" label="Kembali ke Beranda" />
      </Container>
      <Facilities />
    </div>
  );
};

export default FasilitasPage;
