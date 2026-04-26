import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/628123456789?text=Assalamualaikum"
      target="_blank"
      className="position-fixed d-flex align-items-center justify-content-center shadow-lg text-decoration-none"
      style={{ 
        bottom: '30px', 
        right: '30px', 
        width: '60px', 
        height: '60px', 
        backgroundColor: '#25D366', 
        borderRadius: '50%', 
        color: 'white',
        zIndex: 1000
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
