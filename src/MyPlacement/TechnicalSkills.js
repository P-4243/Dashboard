import React from 'react';
import './TechnicalSkills.css'; 
import Navbar from "../Components/Navbar";
const skillsData = [
  {
    title: 'Programming',
    description: 'Programming is a technical skill that requires knowledge of programming languages and how to design new programs.',
    image: '/Programming.jpg'
  },
  {
    title: 'Technical writing',
    description: 'Technical writers create documentation for products and services, such as user manuals and technical specifications.',
    image: '/TechnicalWriting.jpg'
  },
  {
    title: 'Cybersecurity',
    description: 'Cybersecurity engineers use technical skills like coding, intrusion detection, and knowledge of operating systems to assess cybersecurity threats and develop solutions.',
    image: '/Cybersecurity.jpg'
  },
  {
    title: 'Data analysis',
    description: 'Data analysts use data visualization tools, reports, and presentations to communicate their findings.',
    image: '/DataAnalysis.jpg'
  },
  {
    title: 'Project management',
    description: 'Project management is a technical skill that involves knowing project management tools and techniques, and is crucial for completing technical projects.',
    image: '/ProjectManagement.jpg'
  },
  {
    title: 'Computer skills',
    description: 'Computer skills are specialized hard skills that include working with hardware or software like operating systems, apps, or social media.',
    image: '/ComputerSkills.jpg'
  },
  {
    title: 'Design',
    description: 'Technical graphic design skills are important for landing a job in the design industry.',
    image: '/Design.jpg'
  },
  {
    title: 'Software development',
    description: 'Software development managers use technical skills to work with computer software and across technology sectors.',
    image: '/SoftwareDevelopment.jpg'
  }
];

const TechnicalSkills = () => {
  return (
    <div className="technical-skills">
      <Navbar/>
     
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.title} className="skill-image" />
            <div className="skill-info">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="skills-examples">
        <h3>Technical skills examples:</h3>
        <ul>
          <li>Data analysis</li>
          <li>Web development</li>
          <li>Computer programming languages</li>
          <li>Financial management</li>
          <li>Bookkeeping</li>
          <li>UX design</li>
          <li>Graphic design</li>
          <li>Writing</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnicalSkills;
