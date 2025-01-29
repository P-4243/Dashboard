import React from "react";
import "./Algorithms.css";

const Algorithms = () => {
 
  const courseDetails = {
    title: "This course is a Great Practice to Master the Coding Interview",
    rating: 4.0,
    ratingsCount: 1379,
    totalTime: "8 hours",
    lastUpdated: "September 2020",
    language: "English",
    subtitles: "English [Auto]",
  };

  const courseContent = [
    { id: 1, title: "Tutorial 1-Topic Title", duration: "4 min" },
    { id: 2, title: "Tutorial 2-Topic Title", duration: "14 min" },
    { id: 3, title: "Tutorial 3-Topic Title", duration: "3 min" },
    { id: 4, title: "Tutorial 4-Topic Title", duration: "4 min" },
    { id: 5, title: "Tutorial 5-Topic Title", duration: "9 min" },
    { id: 6, title: "Tutorial 6-Topic Title", duration: "22 min" },
    { id: 7, title: "Tutorial 7-Topic Title", duration: "7 min" },
    { id: 8, title: "Tutorial 8-Topic Title", duration: "9 min" },
  ];

  return (
    <div className="course-page">
   
      <div className="course-header">
        <h2>Algorithms</h2>
      </div>

      
      <div className="course-content">
      
        <div className="video-section">
          <div className="video-placeholder">
            <div className="play-button">▶</div>
          </div>
          <div className="course-info">
            <p>{courseDetails.title}</p>
            <div className="course-meta">
              <span>⭐ {courseDetails.rating} ({courseDetails.ratingsCount} ratings)</span>
            
            </div>
            
            <div className="course-extra">
              <span>📅 Last updated: {courseDetails.lastUpdated}</span><br></br>
              <span>🌍 {courseDetails.language} ({courseDetails.subtitles})</span>
            </div>
            <button className="compiler-button">Compiler</button>
          </div>
        </div>

       
        <div className="course-list">
          <div className="list-header">
            <h3>Course Content</h3>
          </div>
          <ul>
            {courseContent.map((content) => (
              <li key={content.id} className="content-item">
                <input type="checkbox" id={`content-${content.id}`} />
                <label htmlFor={`content-${content.id}`}>
                  <span>{content.title}</span>
                  <span className="duration">{content.duration}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
