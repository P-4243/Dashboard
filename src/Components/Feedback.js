import React from 'react';
import './Feedback.css';
import { setRating } from './feedbackStar'; // Adjust the path as necessary

const Feedback = () => {
  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form id="feedbackForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName"><b>First Name</b>*</label>
        <input type="text" id="firstName" name="firstName" placeholder="First Name" required />

    
        <label htmlFor="middleName"><b>Middle Name</b>*</label>
        <input type="text" id="middleName" name="middleName" placeholder="Middle Name" required />

        <label htmlFor="lastName"><b>Last Name</b>*</label>
        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />

        <label htmlFor="domain"><b>Domain</b></label>
        <input type="text" id="domain" name="domain" placeholder="Domain" />

        <label htmlFor="duration"><b>Duration</b></label>
        <input type="text" id="duration" name="duration" placeholder="Duration" />

        <label htmlFor="review"><b>Review</b></label>
        <input type="text" id="review" name="review" placeholder="Review" />

        <label htmlFor="experience"><b>Experience</b></label>
        <input type="text" id="experience" name="experience" placeholder="Experience" />

        <label htmlFor="suggestions"><b>Suggestions</b></label>
        <input type="text" id="suggestions" name="suggestions" placeholder="Suggestions" />

      
        <label><b>Ratings</b></label>
        <div className="star-rating">
          <span className="star" onClick={() => setRating(1)}>&#9733;</span>
          <span className="star" onClick={() => setRating(2)}>&#9733;</span>
          <span className="star" onClick={() => setRating(3)}>&#9733;</span>
          <span className="star" onClick={() => setRating(4)}>&#9733;</span>
          <span className="star" onClick={() => setRating(5)}>&#9733;</span>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;