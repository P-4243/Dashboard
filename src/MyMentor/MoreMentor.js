// Import required modules
import React from 'react';
import './MoreMentor.css'; // Include your CSS file for styling

const MoreMentor = () => {
  return (
    <div className="mentorship-page">
      {/* Suggested Mentorships Section */}
      <section className="suggested-mentorships">
        <h2>Suggested Mentorships</h2>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search for required area of interest"
            className="search-bar"
          />
          <button className="sort-btn">Sort By</button>
        </div>
        <div className="tags-container">
          {[
            "Front End Development",
            "Back End Development",
            "Full Stack Development",
            "Data Science",
            "Application Development",
            "AI & Machine Learning",
            "Cloud Technology",
          ].map((tag, index) => (
            <span className="tag" key={index}>
              {tag} <button className="remove-tag">×</button>
            </span>
          ))}
        </div>
      </section>

      {/* Available Mentors Section */}
      <section className="available-mentors">
        <h2>Available Mentors</h2>
        <div className="mentors-container">
          {[
            {
              name: "Marcus Lucy",
              role: "Full-Stack Developer",
              experience: "4 years",
              country: "Australia",
              company: "Accenture",
            },
            {
              name: "Alfred Chuwan",
              role: "Data Scientist",
              experience: "7 years",
              country: "Japan",
              company: "Microsoft",
            },
            {
              name: "Sonia Singh",
              role: "Sales & Marketing",
              experience: "3 years",
              country: "India",
              company: "Genpact",
            },
          ].map((mentor, index) => (
            <div className="mentor-card" key={index}>
              <div className="mentor-status green-dot"></div>
              <img
                src="https://logodix.com/logo/1984127.png"
                alt={mentor.name}
                className="mentor-image"
              />
              <h3>{mentor.name}</h3>
              <p>Role: {mentor.role}</p>
              <p>Experience: {mentor.experience}</p>
              <p>Country: {mentor.country}</p>
              <p>Company: {mentor.company}</p>
              <div className="mentor-actions">
                <button className="talk-now-btn">Talk Now</button>
                <button className="share-btn">Share</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button className="prev-btn">&#x3C;</button>
          <button className="next-btn">&#x3E;</button>
        </div>
      </section>

      {/* What You Can Get Section */}
      <section className="what-you-get">
        <h2>What you can get</h2>
        <ul className="benefits-list">
          {[
            "Get your ideas validated so you're blazing with confidence",
            "Get personalized advice on your growth strategy",
            "Get clarity on things you're struggling with",
            "Get a virtual shoulder to sob on + practice advice on how to move forward",
          ].map((benefit, index) => (
            <li key={index} className="benefit-item">
              <span className="check-icon">✔</span> {benefit}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MoreMentor;