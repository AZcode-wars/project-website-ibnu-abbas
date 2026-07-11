import React, { useState, useEffect } from "react";
import { client } from "../utils/sanity";

const MARQUEE_HEIGHT = "36px";

const Marquee = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarquee = async () => {
      try {
        const query = `*[_type == "marqueeSettings"][0]{
          isActive,
          items
        }`;
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Gagal mengambil data marquee:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMarquee();
  }, []);

  const isActive =
    !loading && data?.isActive === true && data?.items?.length > 0;

  useEffect(() => {
    if (isActive) {
      document.documentElement.style.setProperty("--marquee-h", MARQUEE_HEIGHT);
    } else {
      document.documentElement.style.setProperty("--marquee-h", "0px");
    }
    return () => {
      document.documentElement.style.setProperty("--marquee-h", "0px");
    };
  }, [isActive]);

  if (!isActive) return null;

  const allText = data.items.map((item) => item.teks).join("   •   ");

  return (
    <div className="marquee-bar" role="marquee" aria-label="Pengumuman">
      <div className="marquee-track">
        <span className="marquee-content">{allText}</span>
        <span className="marquee-content">{allText}</span>
      </div>
    </div>
  );
};

export default Marquee;
