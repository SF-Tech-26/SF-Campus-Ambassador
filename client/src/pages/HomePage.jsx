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


const HomePage = () => {
  const [showIcons, setShowIcons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9; // detect when user scrolls past 90% of viewport
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
        <div className="hidden lg:flex lg:justify-center mt-[8vh] relative">
          <img
            src={sf_concert}
            alt="SF concert"
            className="min-h-vh w-full bg-cover bg-center bg-no-repeat"
          />
          <div className="absolute left-0 top-0 mt-6 flex flex-row items-start gap-6 h-[100vh] mw-[60vw] ">
            <div className="flex flex-col mt-[10vh]">
              <div className="font-jaro text-[4vw] font-extrabold text-white tracking-wider whitespace-nowrap drop-shadow-lg">
                CAMPUS AMBASSADOR<br />
                <span className="block mt-2">PROGRAM</span>
              </div>
              <img src={BandImage} alt="Band" className="w-[560px] max-w-[80%] mt-8" />
            </div>
            <img src={SF_logo} alt="SF Logo" className="w-auto max-w-[80%] h-[12vw]" />
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
          className="lg:hidden flex flex-col items-start justify-center px-6 relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(${sf_concert})`,
          }}
        >
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-start">
            <img
              src={SF_logo}
              alt="SF Logo"
              className="w-auto max-w-[50%] h-auto mb-6"
            />

            <div className="font-jaro text-5xl sm:text-5xl font-extrabold text-white tracking-wider drop-shadow-lg mb-6 z-10 w-full leading-tight">
              CAMPUS<br />
              AMBASSADOR<br />
              PROGRAM
            </div>

            <img
              src={mobileBandImage}
              alt="Band"
              className="w-[300px] max-w-full mt-4"
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