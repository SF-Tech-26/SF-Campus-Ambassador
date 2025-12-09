import React from 'react'
//import ParticleBackground from "../components/ParticleBackground";
import background from "../assets/SAM02403.JPG";
import logo from "../assets/sf_logo.bea788dbe4b626510928.png";

const ViewProfile = () => {

    const user = {
        sfid: "SF000001",
        name: "test-1",
        state: "UP",
        city: "Kanpur",
        college: "IIT KGP",
        mobile: "1000011561",
        email: "test1@gmail.com",
        gender: "M",
        altEmail: "—",
        dob: "06-10-2024",
        yearOfPass: "2026",
    };

   {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center relative p-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Title */}
      <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-wide mt-6">
        Your Profile
      </h1>

      {/* Fest & College */}
      <h2 className="text-white text-5xl md:text-6xl font-serif tracking-wide mt-4">
        Spring Fest
      </h2>
      <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide mt-2">
        IIT Kharagpur
      </h3>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-60 md:w-80 mt-10 drop-shadow-lg"
      />

      {/* Profile Info Boxes */}
      <div className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        
        {/* Column 1 */}
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">SFID:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">Name:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">College:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">City:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">State:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">Date of Birth:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">Gender:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">Phone Number:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">E-Mail:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30">
          <p className="text-white text-xl">Alternate E-Mail:</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md border border-white/30 md:col-span-2">
          <p className="text-white text-xl">Year of Passing:</p>
        </div>

      </div>
    </div>
  );
}
}

export default ViewProfile