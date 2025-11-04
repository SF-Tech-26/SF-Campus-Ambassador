import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ParticleEffect from '../components/ParticleEffect'
import SF_logo from '../assets/SF_logo.png'
import Disc from '../assets/Disc.png'
import BandImage from '../assets/Band.png'
import facebookIcon from '../assets/facebook.png'
import instagramIcon from '../assets/instagram.png'
import linkedinIcon from '../assets/linkedin.png'
import youtubeIcon from '../assets/youtube.png'
import xIcon from '../assets/x.png'

const TYPE_TEXT = 'CAMPUS AMBASSADOR PROGRAM';

const TypewriterText = ({ className }) => {
  const firstLine = 'CAMPUS AMBASSADOR';
  const secondLine = 'PROGRAM';
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const delay = 120; // ms per character
    const pauseAfterFirst = 300; // ms pause between lines
    const timeouts = [];

    // Type first line
    for (let i = 1; i <= firstLine.length; i++) {
      const t = setTimeout(() => setFirst(firstLine.slice(0, i)), i * delay);
      timeouts.push(t);
    }

    // Type second line after a small pause
    for (let j = 1; j <= secondLine.length; j++) {
      const t = setTimeout(
        () => setSecond(secondLine.slice(0, j)),
        firstLine.length * delay + pauseAfterFirst + j * delay
      );
      timeouts.push(t);
    }

    const totalTime = firstLine.length * delay + pauseAfterFirst + secondLine.length * delay;
    const doneTimeout = setTimeout(() => setIsDone(true), totalTime + 50);
    timeouts.push(doneTimeout);

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <span className={className}>
      {first}
      <br />
      <span className="block mt-2">
        {second}
        {!isDone && <span className="border-r-2 border-white animate-pulse ml-1" />}
      </span>
    </span>
  );
};

const HomePage = () => {
  return (

    <div className="overflow-x-hidden">
      <Navbar />
      <div className="relative min-h-screen">
        {/* Social Icon Bar for large screens - absolute bottom right of homepage */}
        <div className="hidden lg:flex flex-col items-center gap-6 absolute bottom-8 right-8 z-50">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform group">
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8 transition duration-200 group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[330deg] group-hover:saturate-[7] group-hover:drop-shadow-[0_0_6px_#E83030]" style={{ transition: 'filter 0.2s, transform 0.2s' }} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-transform group">
            <img src={youtubeIcon} alt="YouTube" className="w-8 h-8 transition duration-200 group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[330deg] group-hover:saturate-[7] group-hover:drop-shadow-[0_0_6px_#E83030]" style={{ transition: 'filter 0.2s, transform 0.2s' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform group">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8 transition duration-200 group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[330deg] group-hover:saturate-[7] group-hover:drop-shadow-[0_0_6px_#E83030]" style={{ transition: 'filter 0.2s, transform 0.2s' }} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="transition-transform group">
            <img src={xIcon} alt="X" className="w-8 h-8 transition duration-200 group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[330deg] group-hover:saturate-[7] group-hover:drop-shadow-[0_0_6px_#E83030]" style={{ transition: 'filter 0.2s, transform 0.2s' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform group">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 transition duration-200 group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[330deg] group-hover:saturate-[7] group-hover:drop-shadow-[0_0_6px_#E83030]" style={{ transition: 'filter 0.2s, transform 0.2s' }} />
          </a>
        </div>
        {/* Large screen layout */}
        <div className="hidden lg:flex lg:justify-center mt-8 relative">
          <img src={SF_logo} alt="SF Logo" className="w-auto max-w-[80%] h-auto" />
          <div className="absolute left-0 top-full mt-6 flex flex-row items-start gap-6">
            <div className="flex flex-col">
              <TypewriterText className="font-jaro text-6xl font-extrabold text-white tracking-wider whitespace-nowrap drop-shadow-lg">
                CAMPUS AMBASSADOR<br />
                <span className="block mt-2">PROGRAM</span>
              </TypewriterText>
              <img src={BandImage} alt="Band" className="w-[560px] max-w-full mt-8" />
            </div>
            {/* <div className="flex flex-col items-end mt-[40vh] mr-[5vw] sm:mr-[10vw] md:mr-[15vw] lg:mr-[20vw]">
              <button className="bg-white hover:bg-[#b81f1f] text-black font-jaro bold py-3 px-10 rounded shadow-lg transition-colors duration-200 text-lg  border-2 border-[#CABC8E]">Signup / Login</button>
            </div> */}
            {/* Button section - positioned more right and lower, responsive */}

            {/* <div className="flex flex-col justify-end items-end mt-[45vh] pr-[8vw] sm:pr-[12vw] md:pr-[18vw] lg:pr-[22vw] xl:pr-[25vw]">
              <button className="bg-white hover:bg-[#CABC8E] text-black font-jaro font-bold py-3 px-10 rounded shadow-lg transition-colors duration-200 text-lg border-2 border-[#CABC8E]">
                Signup / Login
              </button>
            </div> */}

            <div className="flex flex-col justify-end items-end mt-[45vh] flex-grow pr-[8vw] sm:pr-[12vw] md:pr-[18vw] lg:pr-[22vw] xl:pr-[45vw]">
              <button className="bg-white hover:bg-[#CABC8E] text-black font-jaro font-bold py-3 px-10 rounded shadow-lg transition-colors duration-200 text-lg border-2 border-[#CABC8E]">
                Signup / Login
              </button>
            </div>

          </div>
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
          className="hidden lg:block absolute -right-55 top-32 cursor-pointer"
          style={{
            animation: 'spin 8s linear infinite',
            transformOrigin: 'center',
            transition: 'transform 0.3s'
          }}
        ></img>

        {/* Mobile/tablet layout */}
        <div className="lg:hidden flex flex-col items-center mt-8">
          <img src={SF_logo} alt="SF Logo" className="w-auto max-w-[50%] h-auto"></img>
          <img
            src={Disc}
            alt="Disc Logo"
            className="w-30 mt-60 lg:block absolute -right-15.5"
            style={{
              animation: 'spin 8s linear infinite',
              transformOrigin: 'center',
              transition: 'transform 0.3s'
            }}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default HomePage