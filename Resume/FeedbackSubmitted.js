import React from 'react'
import Checkmark from "./Checkmark";

const feedbackSubmitted = () => {
    return (
        <div>
          <Checkmark
          p="You have successfully submitted the feedback"
          />
      <button className="buttonBlue">Get Certificate</button>

        </div>
      );
}

export default feedbackSubmitted
