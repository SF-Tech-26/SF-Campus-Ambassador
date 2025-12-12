import React from "react";
import Navbar from "../components/Navbar";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"; 

import member1 from "../components/images/member1.jpg";
import member2 from "../components/images/member2.jpg";
import member3 from "../components/images/member3.jpg";
import bgImage from "../components/images/PAT09155.jpg";

const OurTeam = () => {
  return (
    <div
      className="min-h-screen text-white text-center bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full pt-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          OUR TEAM
        </h1>
      </div>

      <div className="flex justify-center items-start flex-wrap gap-12 mt-20 pb-20">

        {/* -------- Member 1 -------- */}
        <div className="bg-black/80 rounded-xl shadow-xl w-64 h-[350px] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/70">
          <img
            src={member1}
            alt="Member 1"
            className="w-44 h-44 rounded-xl mx-auto shadow-lg transition-transform duration-300 hover:scale-110 hover:brightness-110"
          />
          <h2 className="text-2xl mt-3 font-semibold">Rohit Saaho</h2>
          <p className="text-sm mt-1">Publicity and Media Outreach</p>

          <div className="flex justify-center gap-4 mt-4 text-3xl">
            <a
              href="https://www.facebook.com/rani.suresh.165033"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookSquare />
            </a>

            <a
              href="https://www.instagram.com/rohitt__xy/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/rohit-sahoo-4704a6293"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/919849015612"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* -------- Member 2 -------- */}
        <div className="bg-black/80 rounded-xl shadow-xl w-64 h-[350px] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/70">
          <img
            src={member2}
            alt="Member 2"
            className="w-44 h-44 rounded-xl mx-auto shadow-lg transition-transform duration-300 hover:scale-110 hover:brightness-110"
          />
          <h2 className="text-2xl mt-3 font-semibold">Anuradha Singh</h2>
          <p className="text-sm mt-1">Publicity and Media Outreach</p>

          <div className="flex justify-center gap-4 mt-4 text-3xl">
            <a
              href="https://facebook.com/people/Anuradha-Singh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookSquare />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/anuradha-singh-5b946b323"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/918958578751"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* -------- Member 3 -------- */}
        <div className="bg-black/80 rounded-xl shadow-xl w-64 h-[350px] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/70">
          <img
            src={member3}
            alt="Member 3"
            className="w-44 h-44 rounded-xl mx-auto shadow-lg transition-transform duration-300 hover:scale-110 hover:brightness-110"
          />
          <h2 className="text-2xl mt-3 font-semibold">Anubhab Sharma</h2>
          <p className="text-sm mt-1">
            Publicity and Media Outreach | Tech Coordinator
          </p>

          <div className="flex justify-center gap-4 mt-4 text-3xl">
            <a
              href="https://facebook.com/people/Anubhab-Sharma"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookSquare />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/anubhab-sharma-aa4a31283"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/919073070157"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurTeam;