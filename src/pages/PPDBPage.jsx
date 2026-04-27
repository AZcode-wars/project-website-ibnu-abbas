import React, { useEffect } from 'react';
import PPDBDashboard from '../components/PPDBDashboard';

const PPDBPage = () => {
  // Scroll to top when page loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ppdb-page-wrapper" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <PPDBDashboard />
    </div>
  );
};

export default PPDBPage;
