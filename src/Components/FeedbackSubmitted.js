import React from 'react'
import Checkmark from "./Checkmark";

const FeedbackSubmitted = () => {
    return (
        <div className='wholeMiddle'>
          <Checkmark
          p="You have successfully submitted the feedback"
          />
      <button className="buttonBlue">Get Certificate</button>

        </div>
      );
}

export default FeedbackSubmitted