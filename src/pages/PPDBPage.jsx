import React, { useEffect, useState } from 'react';
import PPDBDashboard from '../components/PPDBDashboard';
import { client } from '../utils/sanity';
import { AlertCircle, Loader2 } from 'lucide-react';

const PPDBPage = () => {
  const [settings, setSettings] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Scroll to top when page loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `{
          "settings": *[_type == "ppdbSettings"][0]{..., quotas},
          "stats": *[_type == "statsBar"][0]
        }`;
        const data = await client.fetch(query);
        setSettings(data.settings);
        setStats(data.stats);
      } catch (error) {
        console.error('Error fetching PPDB data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <Loader2 className="text-primary-green animate-spin mb-3" size={48} />
          <p className="text-muted">Memuat informasi pendaftaran...</p>
        </div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="ppdb-page-wrapper" style={{ minHeight: '100vh', paddingTop: '100px', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          <div className="ppdb-closed-container p-5 rounded-4 shadow-sm bg-white" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <AlertCircle size={80} className="text-danger mb-4" />
            <h2 className="fw-bold mb-3 text-dark">Informasi Tidak Tersedia</h2>
            <p className="lead text-muted mb-0">
              Mohon maaf, informasi pendaftaran saat ini sedang tidak dapat dimuat. Silakan coba lagi nanti.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ppdb-page-wrapper" style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <PPDBDashboard settings={settings} stats={stats} isClosed={settings.isOpen === false} />
    </div>
  );
};

export default PPDBPage;
