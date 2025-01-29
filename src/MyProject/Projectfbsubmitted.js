import React from 'react';
import './Projectfbsubmitted.css';
import { toggleDropdown } from '../Components/toggleDropdown';
import Checkmark from "./Checkmark";

const Navbar = () => (
  <div className="header">

    
    <div className="nav">
      <ul>
        <li><a href="../Home/hero-section.html"><span style={{ fontSize: 'x-large' }}><i style={{ marginTop: 0 }} className="fa fa-home"></i></span></a></li>
        <li><a href="../AboutUs/about.html">About Us</a></li>
        
        <li>
          <a href="../Training/weekdays.html">Training <i className="fas fa-caret-down"></i></a>
          <div>
            <ul className="dropdown">
              <div className="dropdown-1">
                <li>
                  <a href="#" style={{ color: '#0071D1' }}>4P Program</a>
                  <ul className="sub-dropdown">
                    <li><a href="../Training/preparation.html" style={{ color: '#0071D1' }}>Preparation</a></li>
                    <li><a href="../Training/project.html" style={{ color: '#0071D1' }}>Project</a></li>
                    <li><a href="../Training/professional.html" style={{ color: '#0071D1' }}>Professional</a></li>
                    <li><a href="../Training/placement.html" style={{ color: '#0071D1' }}>Placement</a></li>
                  </ul>
                </li>
              </div>
              
              <div className="dropdown-1">
                <li>
                  <a href="#" style={{ color: '#0071D1' }}>Fullstack Development</a>
                  <ul className="sub-dropdown">
                    <li><a href="../Training/pythonfullstack.html" style={{ color: '#0071D1' }}>Python Full Stack</a></li>
                    <li><a href="../Training/javafullstack.html" style={{ color: '#0071D1' }}>Java Full Stack</a></li>
                    <li><a href="../Training/mernfullstack.html" style={{ color: '#0071D1' }}>MERN Full Stack</a></li>
                  </ul>
                </li>
              </div>

              <div className="dropdown-1">
                <li>
                  <a href="#" style={{ color: '#0071D1' }}>UI/UX Designing</a>
                  <ul className="sub-dropdown">
                    <li><a href="../Training/html,css,js.html" style={{ color: '#0071D1' }}>HTML, CSS & JS</a></li>
                    <li><a href="../Training/figma.html" style={{ color: '#0071D1' }}>Figma</a></li>
                    <li><a href="../Training/reactjs.html" style={{ color: '#0071D1' }}>React JS</a></li>
                  </ul>
                </li>
              </div>

              <div className="dropdown-1">
                <li>
                  <a href="#" style={{ color: '#0071D1' }}>Advanced Learnings</a>
                  <ul className="sub-dropdown">
                    <li><a href="../Training/cybersecurity.html" style={{ color: '#0071D1' }}>Cyber Security</a></li>
                    <li><a href="../Training/testing.html" style={{ color: '#0071D1' }}>Testing</a></li>
                    <li><a href="../Training/ai&ml.html" style={{ color: '#0071D1' }}>AI & ML</a></li>
                  </ul>
                </li>
              </div>

              <div className="dropdown-1">
                <li>
                  <a href="#" style={{ color: '#0071D1' }}>Professional Development</a>
                  <ul className="sub-dropdown">
                    <li><a href="../Training/communicationskills.html" style={{ color: '#0071D1' }}>Communication Skills & Aptitude</a></li>
                    <li><a href="../Training/entryuniversityprogram.html" style={{ color: '#0071D1' }}>Entry University Program</a></li>
                    <li><a href="../Training/finishuniversityprogram.html" style={{ color: '#0071D1' }}>Finish University Program</a></li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </li>

        <li>
          <a href="#">Services <i className="fas fa-caret-down"></i></a>
          <div>
            <ul className="dropdown">
              <li><a href="../Services/workshop.html" style={{ color: '#0071D1' }}>Workshops</a></li>
              <li><a href="../Services/webinar-wkd.html" style={{ color: '#0071D1' }}>Webinars</a></li>
              <li><a href="../Services/startUpMentorship.html" style={{ color: '#0071D1' }}>Mentorship Program</a></li>
              <li><a href="../Services/hackathons.html" style={{ color: '#0071D1' }}>Hackathons</a></li>
              <li><a href="../Services/Internships.html" style={{ color: '#0071D1' }}>Internships</a></li>
              <li><a href="../Services/project.html" style={{ color: '#0071D1' }}>Projects</a></li>
              <li><a href="../Services/placementSupport.html" style={{ color: '#0071D1' }}>Placement Support</a></li>
              <li><a href="../Services/research.html" style={{ color: '#0071D1' }}>Research</a></li>
            </ul>
          </div>
        </li>

        <li><a href="../Career/career.html">Career</a></li>
        <li><a href="../ContactUs/contact.html">Contact Us</a></li>
        <li><a href="../Login/login.html">Login/SignUp</a></li>
      </ul>
    </div>
  </div>
);



const Dashboard = () => (
  <div className="sidebar">
    <div className="user-profile">
      <h3>User Name</h3>
    </div>
    <ul className="menu">
      <li><a href="#">My Profile</a></li>
      <li><a href="#">My Workshops</a></li>
      <li><a href="#">My Webinars</a></li>
      <li><a href="#">My Training</a></li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Mentorship ▼</a>
        <ul className="dropdown">
          <li><a href="#">My Mentor</a></li>
          <li><a href="#">More Mentors</a></li>
        </ul>
      </li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Hackathon ▼</a>
        <ul className="dropdown">
          <li><a href="#">Hackathon</a></li>
          <li><a href="#">Selection Process</a></li>
        </ul>
      </li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Internships ▼</a>
        <ul className="dropdown">
          <li><a href="#">Internships</a></li>
          <li><a href="#">Selection Process</a></li>
          <li><a href="#">Internship Resources</a></li>
        </ul>
      </li>

      <li><a href="#">My Projects</a></li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Placement ▼</a>
        <ul className="dropdown">
          <li><a href="#">Job Opportunities</a></li>
          <li><a href="#">Placement Resources</a></li>
          <li><a href="#">Selection Process</a></li>
        </ul>
      </li>

      <li><a href="#">My Research</a></li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Certificates ▼</a>
        <ul className="dropdown">
          <li><a href="#">Webinar Certificates</a></li>
          <li><a href="#">Internship Certificates</a></li>
          <li><a href="#">Generate Certificates</a></li>
        </ul>
      </li>
    </ul>
  </div>
);

const FeedbackSubmitted = () => (
  <div className="feedback-container">
    <div className="checkmark-container">
      <Checkmark p="You have successfully submitted the feedback" />
    </div>
    <button className="buttonBlue">Get Certificate</button>
  </div>
);

const Projectfbsubmitted = () => (
  <div className="app-container">
    <Navbar />
    <div className="main-content">
      <Dashboard />
      <div className="content-section">
        <FeedbackSubmitted />
      </div>
    </div>
  </div>
);

export default Projectfbsubmitted;
