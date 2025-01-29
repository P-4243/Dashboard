import React from 'react';
import { toggleDropdown } from './toggleDropdown';


import { Link } from 'react-router-dom';
import './DashBoard.css';
const Dashboard = () => (
  <div className="sidebar">
    <div className="user-profile">
      <h3>User Name</h3>
    </div>
    <ul className="menu">
    
  
      <li><Link to="/Home">My Profile</Link></li>
  
          <li><Link to="/MyWorkshop">My Workshops</Link></li>
          <li><Link to="/Mywebinar">My Webinars</Link></li>
          <li><Link to="/PlacementResources">My Training</Link></li>
      <li>
        <a href="#" onClick={toggleDropdown}>My Mentorship ▼</a>
        <ul className="dropdown">
        <Link to="/Mentor">My Mentor</Link>
        <Link to="/MoreMentor">More Mentors</Link>
        </ul>
      </li>

      <li>
        <a onClick={toggleDropdown}>My Hackathon ▼</a>
        <ul className="dropdown">
        <Link to="/Hackathon">Hackathon</Link>
        <Link to="/MyhackathonSelectionProcess">Selection Process</Link>
        </ul>
      </li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Internships ▼</a>
        <ul className="dropdown">
        <Link to="/Myinternship">My Internships</Link>
        <Link to="/SelectionProcess">My Selection Process</Link>
        <Link to="/InternshipResources">My Internship Resources</Link>
        </ul>
      </li>

      <li><Link to="/MyProject">My Projects</Link></li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Placement ▼</a>
        <ul className="dropdown">
        <Link to="/placementSupport">My Job Opportunities</Link>
        <Link to="/PlacementResources">My Placement Resources</Link>
        <Link to="/SelectionProcess">My Selection Process</Link>
        </ul>
      </li>

    
      <li>
        <a href="#" onClick={toggleDropdown}>My Research ▼</a>
        <ul className="dropdown">
        <li><Link to="/Research">Research Oriented Resources</Link></li>
        
        </ul>
      </li>

      <li>
        <a href="#" onClick={toggleDropdown}>My Certificates ▼</a>
        <ul className="dropdown">
        <li><Link to="/WebinarCertificates">Webinar Certificates</Link></li>
        <li><Link to="/InternshipCertificate">Internship Certificates</Link></li>
        <li><Link to="/GenerateCertificate">Generate Certificates</Link></li>
         
        </ul>
      </li>
    </ul>
  </div>
);

export default Dashboard;