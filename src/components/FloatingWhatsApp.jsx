import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/floating-wa.css";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.374L1.054 31.25l6.118-1.97A15.906 15.906 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.316 22.594c-.39 1.096-1.932 2.006-3.158 2.27-.836.18-1.924.322-5.596-1.202-4.7-1.95-7.72-6.76-7.952-7.076-.226-.316-1.86-2.478-1.86-4.726 0-2.248 1.18-3.35 1.602-3.802.39-.42.924-.55 1.23-.55.312 0 .624.002.894.016.29.014.68-.11 1.06.808.39.946 1.33 3.246 1.444 3.476.116.23.194.496.038.8-.154.316-.23.514-.456.79-.226.276-.474.618-.678.828-.226.234-.46.49-.194.962.266.472 1.18 1.95 2.532 3.16 1.736 1.554 3.198 2.036 3.67 2.262.472.226.748.19 1.024-.116.276-.306 1.174-1.368 1.486-1.84.312-.472.624-.39 1.06-.234.436.154 2.776 1.31 3.25 1.548.472.238.786.356.904.554.116.196.116 1.134-.274 2.23Z"/>
  </svg>
);

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
        <WhatsAppIcon />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
