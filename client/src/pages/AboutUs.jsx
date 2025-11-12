// client/src/pages/AboutPage.jsx
import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar"; // adjust path if your Navbar path differs
import "../pages/AboutUs.css";
import bg from "../assets/aboutus-bg.png";

// format number with commas
function formatNumber(value) {
  return value.toLocaleString();
}

function useCountUpOnVisible(target, duration = 1500) {
  const elRef = useRef(null);

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!started && entry.isIntersecting) {
            started = true;
            const start = performance.now();
            function step(now) {
              const t = Math.min(1, (now - start) / duration);
              const value = Math.round(t * target);
              node.textContent = formatNumber(value);
              if (t < 1) requestAnimationFrame(step);
              else node.textContent = formatNumber(target);
            }
            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return elRef;
}

export default function AboutPage() {
  // targets
  const websiteHits = 3000000; // 30 lakh = 3,000,000
  const colleges = 1300;
  const footfalls = 80000;

  const refWebsite = useCountUpOnVisible(websiteHits, 1600);
  const refColleges = useCountUpOnVisible(colleges, 1300);
  const refFootfalls = useCountUpOnVisible(footfalls, 1400);

  return (
    <div id="aboutus" className="about-root" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="about-content container">
        <div className="about-left">
          <h2 className="about-title">About SF:</h2>
          <h3 className="about-subtitle">
            <span className="springfest">spring Fest</span>, IIT Kharagpur is one of
            the largest Social and Cultural Fests in India.
          </h3>
          <p className="about-text">
            Embodying the true spirit of youth, Spring Fest provides a platform for young talent from all over India to showcase their varied talents.
            As we enter into the 66th edition all we are looking forward to is to leave behind a legacy of exquisite experiences.
            Now, you too have a chance to become a part of this cultural extravaganza. With Campus Ambassador Program you get a chance to be an extended part of the Organizing team of Spring Fest 2026.
          </p>
        </div>

        <div className="about-right">
          <div className="stat-card">
            <div className="stat-number" ref={refWebsite}>0</div>
            <div className="stat-label">WEBSITE HITS</div>
          </div>

          <div className="stat-card">
            <div className="stat-number" ref={refColleges}>0</div>
            <div className="stat-label">COLLEGES</div>
          </div>

          <div className="stat-card">
            <div className="stat-number" ref={refFootfalls}>0</div>
            <div className="stat-label">FOOTFALLS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
