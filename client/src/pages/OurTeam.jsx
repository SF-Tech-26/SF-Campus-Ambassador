import React from "react";
import "./style.css"; 
import "font-awesome/css/font-awesome.min.css"; 
import Navbar from "../components/Navbar";


import member1 from "../components/images/member1.jpg";
import member2 from "../components/images/member2.jpg";
import member3 from "../components/images/member3.jpg";

const OurTeam = () => {
  return (
    <div>
      <h1>OUR TEAM</h1>

      <div className="team-container">

        {/* Member 1 */}
        <div className="team-card">
          <img src={member1} alt="Member 1" />
          <h2 className="name">Rohit Saaho</h2>
          <p className="member-role">Publicity and Media Outreach</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/rani.suresh.165033" target="_blank" rel="noreferrer" className="facebook">
              <i className="fa fa-facebook-square" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://www.instagram.com/rohitt__xy/" target="_blank" rel="noreferrer" className="instagram">
              <i className="fa fa-instagram" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://linkedin.com/in/rohit-sahoo-4704a6293" target="_blank" rel="noreferrer" className="linkedin">
              <i className="fa fa-linkedin-square" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://wa.me/919849015612" target="_blank" rel="noreferrer" className="whatsapp">
              <i className="fa fa-whatsapp" style={{ fontSize: "30px" }}></i>
            </a>
          </div>
        </div>

        {/* Member 2 */}
        <div className="team-card">
          <img src={member2} alt="Member 2" />
          <h2 className="name">Anuradha Singh</h2>
          <p className="member-role">Publicity and Media Outreach</p>
          <div className="social-icons">
            <a href="https://facebook.com/people/Anuradha-Singh" target="_blank" rel="noreferrer" className="facebook">
              <i className="fa fa-facebook-square" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram">
              <i className="fa fa-instagram" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://linkedin.com/in/anuradha-singh-5b946b323" target="_blank" rel="noreferrer" className="linkedin">
              <i className="fa fa-linkedin-square" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://wa.me/918958578751" target="_blank" rel="noreferrer" className="whatsapp">
              <i className="fa fa-whatsapp" style={{ fontSize: "30px" }}></i>
            </a>
          </div>
        </div>

        {/* Member 3 */}
        <div className="team-card">
          <img src={member3} alt="Member 3" />
          <h2 className="name">Anubhab Sharma</h2>
          <p className="member-role">Publicity and Media Outreach | Tech Coordinator</p>
          <div className="social-icons">
            <a href="https://facebook.com/people/Anubhab-Sharma" target="_blank" rel="noreferrer" className="facebook">
              <i className="fa fa-facebook-square" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram">
              <i className="fa fa-instagram" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://linkedin.com/in/anubhab-sharma-aa4a31283" target="_blank" rel="noreferrer" className="linkedin">
              <i className="fa fa-linkedin-square" style={{ fontSize: "30px" }}></i>
            </a>
            <a href="https://wa.me/919073070157" target="_blank" rel="noreferrer" className="whatsapp">
              <i className="fa fa-whatsapp" style={{ fontSize: "30px" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
