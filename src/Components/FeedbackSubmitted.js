import React from 'react'
import Checkmark from "./Checkmark";
import {Link} from "react-router-dom";
const FeedbackSubmitted = () => {
    return (
        <div className='wholeMiddle'>
          <Checkmark
          p="You have successfully submitted the feedback"
          />
      <Link to="/GenerateCertificate"><button className="buttonBlue">Get Certificate</button></Link>

        </div>
      );
}

export default FeedbackSubmitted