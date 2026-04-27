import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Komponen utilitas untuk handle scroll ke section berdasarkan hash di URL.
 * Contoh: navigasi ke "/#pengajar" akan scroll ke element dengan id="pengajar".
 */
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay sedikit agar DOM sudah siap setelah route change
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Jika tidak ada hash, scroll ke atas
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
