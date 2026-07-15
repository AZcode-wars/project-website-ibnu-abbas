import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import '../styles/floating-wa.css';

const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="floating-wa-container">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="floating-wa-tooltip"
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Chat via WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring */}
      <span className="floating-wa-pulse" />

      {/* Button */}
      <motion.a
        href="https://wa.me/6282376582633?text=Assalamualaikum"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-button"
        aria-label="Chat via WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
