import React from 'react';
import Navbar from "./Navbar";
import "./MockSlot.css";
const MockSlot = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className='container'>
       
      <div className="Date">
        <input type="text" placeholder='DD/MM/YYYY'></input>
      </div>
      <div className="Time">
      <input type="text" placeholder='HH:MM'></input>
      </div>
    </div>
    </div>
  )
}

export default MockSlot