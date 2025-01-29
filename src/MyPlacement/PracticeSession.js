import React from "react";
import "./PracticeSession.css"; 
import Navbar from "../Navbar";
const PracticeSession = () => {
 
  const topics = [
    "Algorithms",
    "Data Structures",
    "Mathematics",
    "Artificial Intelligence",
    "C",
    "Python",
    "Ruby",
    "Java",
    "SQL",
    "Databases",
    "Linux Shell",
  ];

  const preparation = [
    { language: "Python", progress: 52, points: 12 },
    { language: "Java", progress: 82, points: 12 },
  ];

  return (
    <div className="practice-session">
       <Navbar/>
       
        <h2>Practice Session</h2>
     

      <div className="topics-section">
        <h3>Prepare By Topics</h3>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <button key={index} className="topic-button">
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div className="preparation-section">
        <h3>Your Preparation</h3>
        <div className="preparation-grid">
          {preparation.map((item, index) => (
            <div key={index} className="preparation-card">
              <h4>{item.language}</h4>
              <p>
                {item.progress}% ({item.points} points to next star)
              </p>
              <button className="continue-button">Continue Preparation</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeSession;
