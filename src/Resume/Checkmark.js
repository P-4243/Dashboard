import React from 'react'
import './Checkmark.css';
const Checkmark = ({p,h1}) => {
    return (
     
        <div className="middle">
         
        <img src={`${process.env.PUBLIC_URL}/greenTick.png`} />
        <h1>{h1}</h1>
        <p>{p}</p>
        
       </div>
      );
}

export default Checkmark