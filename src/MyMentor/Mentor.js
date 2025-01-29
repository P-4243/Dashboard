// Import required modules
import React from 'react';
import './Mentor.css'
const Mentor = () => {
  return (
    <div className="mentor-page">
      {/* Current Mentor Section */}
      <section className="current-mentor">
        <h2>Current Mentor</h2>
        <div className="mentorCard">
          <img
            src="/trainer image.png" // Replace with actual image URL
            alt="Shantnu Rana"
            className="mentor-image"
          />
          <div className="mentor-details">
            <h3>Shantnu Rana</h3>
            <p><strong>Designation:</strong> Academic counselling expert</p>
            <p>
              Shantnu Rana is an Academic counselling expert at Great Learning who
              has guided thousands of students in planning and choosing their
              professional careers.
            </p>
            <p><strong>Experience:</strong> 10+ years</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img style={{height:"3vw"}}
                  src="https://freelogopng.com/images/all_img/1656996524linkedin-app-icon.png" // Replace with LinkedIn icon URL
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Resources Section */}
      <section className="mentor-resources">
        <h2>Mentor Resources</h2>
        <div className="resources-card">
          <div className="resource">
            <img
              src="/j4 1.jpg" // Replace with actual icon URL
              alt="Handbook"
            />
            <p>Hand Book</p>
          </div>
          <div className="resource">
            <img
              src="/j5 1.jpg" // Replace with actual icon URL
              alt="Articles"
            />
            <p>Articles</p>
          </div>
          <div className="resource">
            <img
              src="/Rectangle 191.jpg" // Replace with actual icon URL
              alt="Programmes"
            />
            <p>Programmes</p>
          </div>
        </div>
        <p className="resources-description">
          Together, these resources enhance the mentorship experience, equipping
          both parties with knowledge and skills to achieve their goals.
        </p>
        <button className="learn-more-btn">Learn more</button>
      </section>

      {/* Success Story Section */}
      <section className="success-story">
        <h2>Success Story</h2>
        <div className="stories-container">
          <div className="story-card">
            <img
              src="/j1 1.jpg" // Replace with actual image URL
              alt="Rahul Singh"
            />
            <h3>Rahul Singh</h3>
            <p>
              Role: Front-end Developer
              <br />
              Rahul successfully transitioned into a developer role through our
              programs.
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="story-card">
            <img
              src="/j2 1.jpg" // Replace with actual image URL
              alt="Alex Martinez"
            />
            <h3>Alex Martinez</h3>
            <p>
              Role: Data Analyst
              <br />
              Alex achieved significant career growth through mentorship.
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="story-card">
            <img
              src="/j3 1.jpg" // Replace with actual image URL
              alt="Emily Carter"
            />
            <h3>Emily Carter</h3>
            <p>
              Role: Software Developer
              <br />
              Emily advanced her skills through targeted resources.
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentor;