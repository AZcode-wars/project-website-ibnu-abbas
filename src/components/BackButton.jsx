import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ to, label = "Kembali", variant = "outline-success" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="d-none d-md-block mb-4">
      {to ? (
        <Button
          as={Link}
          to={to}
          variant={variant}
          className="d-inline-flex align-items-center gap-2 px-3 py-2 fw-medium"
        >
          <ArrowLeft size={18} /> {label}
        </Button>
      ) : (
        <Button
          onClick={handleBack}
          variant={variant}
          className="d-inline-flex align-items-center gap-2 px-3 py-2 fw-medium"
        >
          <ArrowLeft size={18} /> {label}
        </Button>
      )}
    </div>
  );
};

export default BackButton;
