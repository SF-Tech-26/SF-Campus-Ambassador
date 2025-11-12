import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ParticleEffect from '../components/ParticleEffect'
import SF_logo from '../assets/Untitled_design-removebg-preview.png'
import Disc from '../assets/Disc-removebg-preview.png'
import BandImage from '../assets/Band-removebg-preview.png'
import facebookIcon from '../assets/facebook.png'
import instagramIcon from '../assets/instagram.png'
import linkedinIcon from '../assets/linkedin.png'
import youtubeIcon from '../assets/youtube.png'
import xIcon from '../assets/x.png'
import mobileBandImage from '../assets/mobileBand-removebg-preview.png'
import sf_concert from '../assets/sf_concert.png'
import kgp_logo from '../assets/logo-kgp.png'


const HomePage = () => {
  const [showIcons, setShowIcons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6; // detect when user scrolls past 90% of viewport
      if (window.scrollY > heroHeight) {
        setShowIcons(false);
      } else {
        setShowIcons(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <div id="home" className="overflow-x-hidden">
      <Navbar />

      {/* Main Section */}
      <div className="relative min-h-screen">
        <div
          className="hidden lg:block relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${sf_concert})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll'
          }}
        >
          <div className="absolute left-8 top-24 flex flex-col gap-3 z-10">
            <a href="https://springfest.in" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src={SF_logo} alt="SF Logo" className="w-auto h-20 cursor-pointer" />
            </a>
            <a href="https://www.iitkgp.ac.in" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <img src={kgp_logo} alt="KGP Logo" className="w-auto h-auto max-w-[120px] cursor-pointer" />
            </a>
          </div>

          {/* Campus Ambassador Text - Centered with Innovative Animation */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-15vh' }}>
            <div
              className="font-jaro text-[4.5vw] font-extrabold text-white tracking-wider whitespace-nowrap drop-shadow-lg text-center"
              style={{
                animation: 'glitchReveal 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                animationDelay: '0.3s',
                opacity: 0,
                transform: 'translateY(-50px) rotateX(90deg)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              CAMPUS AMBASSADOR<br />
              <span className="block mt-2">PROGRAM</span>
            </div>
          </div>

          {/* Band Image - Bottom Left - Above Social Icons with Slide Animation */}
          <div
            className="absolute bottom-4 lg:bottom-6 xl:bottom-8 2xl:bottom-10 left-0 animate-slideUp"
            style={{
              animation: 'slideUp 1.2s ease-out forwards',
              animationDelay: '0.3s',
              transform: 'translateY(150%)',
              opacity: 0
            }}
          >
            <img
              src={BandImage}
              alt="Band"
              className="w-[320px] lg:w-[380px] xl:w-[420px] 2xl:w-[480px] max-w-[90vw] h-auto"
            />
          </div>
          <style>
            {`
           @keyframes spin {
             from {
               transform: rotate(0deg);
              }
             to {
                transform: rotate(360deg);
              }
           }

           @keyframes slideUp {
             from {
               transform: translateY(150%);
               opacity: 0;
             }
             to {
               transform: translateY(0);
               opacity: 1;
             }
           }

           @keyframes glitchReveal {
             0% {
               opacity: 0;
               transform: translateY(-50px) rotateX(90deg) scale(0.8);
               filter: blur(10px);
               text-shadow: -5px 0 red, 5px 0 blue;
             }
             20% {
               opacity: 0.3;
               transform: translateY(-30px) rotateX(60deg) scale(0.9);
               filter: blur(8px);
               text-shadow: -4px 0 red, 4px 0 cyan;
             }
             40% {
               opacity: 0.6;
               transform: translateY(-15px) rotateX(30deg) scale(0.95);
               filter: blur(4px);
               text-shadow: -2px 0 red, 2px 0 lime;
             }
             60% {
               opacity: 0.8;
               transform: translateY(-5px) rotateX(10deg) scale(1.02);
               filter: blur(2px);
               text-shadow: -1px 0 red, 1px 0 blue;
             }
             80% {
               opacity: 0.95;
               transform: translateY(0) rotateX(0deg) scale(1.05);
               filter: blur(0px);
               text-shadow: 0 0 transparent;
             }
             100% {
               opacity: 1;
               transform: translateY(0) rotateX(0deg) scale(1);
               filter: blur(0px);
               text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
             }
           }
         `}
          </style>
          <img
            src={Disc}
            alt="Disc Logo"
            className="hidden lg:block absolute -right-55 top-28 cursor-pointer w-auto h-auto"
            style={{
              animation: 'spin 8s linear infinite',
              transformOrigin: 'center',
              transition: 'transform 0.3s'
            }}
          ></img>
        </div>



        {/* Mobile */}
        <div
          className="lg:hidden flex flex-col items-start justify-center px-6 relative min-h-screen overflow-hidden"
          style={{
            backgroundImage: `url(${sf_concert})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll'
          }}
        >
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-start pt-20">
            <div className="flex flex-row items-center gap-4 mb-6">
              <a href="https://springfest.in" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-95">
                <img
                  src={SF_logo}
                  alt="SF Logo"
                  className="w-auto h-20 sm:h-24 cursor-pointer"
                />
              </a>
              <a href="https://www.iitkgp.ac.in" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-95">
                <img
                  src={kgp_logo}
                  alt="KGP Logo"
                  className="w-auto h-auto max-w-[120px] sm:max-w-[140px] cursor-pointer"
                />
              </a>
            </div>

            <div
              className="font-jaro text-5xl sm:text-5xl font-extrabold text-white tracking-wider drop-shadow-lg mb-6 z-10 w-full leading-tight"
              style={{
                animation: 'glitchReveal 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                animationDelay: '0.3s',
                opacity: 0,
                transform: 'translateY(-50px) rotateX(90deg)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              CAMPUS<br />
              AMBASSADOR<br />
              PROGRAM
            </div>

            <img
              src={mobileBandImage}
              alt="Band"
              className="w-[300px] max-w-full mt-4"
              style={{
                animation: 'slideUp 1.2s ease-out forwards',
                animationDelay: '0.3s',
                transform: 'translateY(150%)',
                opacity: 0
              }}
            />
          </div>
        </div>


      </div>

      
      <div
        className={`fixed bottom-6 right-6 z-[40] flex flex-row items-center gap-8 transition-opacity duration-700 ${showIcons ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        {[
          { icon: facebookIcon, link: "https://facebook.com", alt: "Facebook" },
          { icon: youtubeIcon, link: "https://youtube.com", alt: "YouTube" },
          { icon: instagramIcon, link: "https://instagram.com", alt: "Instagram" },
          { icon: xIcon, link: "https://x.com", alt: "X" },
          { icon: linkedinIcon, link: "https://linkedin.com", alt: "LinkedIn" },
        ].map(({ icon, link, alt }) => (
          <a
            key={alt}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform group"
          >
            <img
              src={icon}
              alt={alt}
              className="w-8 h-8 transition duration-200 group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[330deg] group-hover:saturate-[7] group-hover:drop-shadow-[0_0_6px_#E83030]"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default HomePage