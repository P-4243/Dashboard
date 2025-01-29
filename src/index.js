import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./HomePage/Home";
import PlacementResources from "./MyPlacement/PlacementResources.js";
import MyTraining from "./MyTraining/MyTraining.js";
import Myinternship from "./MyInternship/Myinternship.js";
import MyhackathonSelectionProcess from "./MyHackathon/MyhackathonSelectionProcess";
import SelectionProcess from "./Components/SelectionProcess.js";
import PlacementSupport from "./MyPlacement/PlacementSupport";
import MyWorkshop from "./MyWorkshop/MyWorkshop.js";
import Navbar from "./Components/Navbar";
import MyWebinar from "./MyWebinar/Mywebinar.js";
import Research from "./MyResearch/Research.js";
import Hackathon from "./MyHackathon/Hackathon.js";
import InternshipResources from "./MyInternship/InternshipResources.js";
import Dashboard from "./Components/Dashboard.js";
import Mywebinar from "./MyWebinar/Mywebinar.js";
import MyProject from "./MyProject/MyProject.js";
import GenerateCertificate from "./MyCertificates/GenerateCertificate.js";
import InternshipCertificate from "./MyCertificates/InternshipCertificate.js";
import WebinarCertificates from "./MyCertificates/WebinarCertificates.js";
import CloudComputing from "./MyWorkshop/CloudComputing.js"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar/>
    
     <Router> 
      <Dashboard/>
          <Routes>  
          <Route path="/" element={<Home/>}/>   
          <Route path="/Home" element={<Home/>}/>    

          <Route path='/MyWebinar' element={<MyWebinar/>}/>       
          <Route path='/MyTraining' element={<MyTraining/>}/>       
          <Route path='/PlacementResources' element={<PlacementResources/>}/>       
          <Route path='/MyhackathonSelectionProcess' element={<MyhackathonSelectionProcess/>}/>       
          <Route path='/MyWorkshop' element={<MyWorkshop/>}/>       
          <Route path='/Research' element={<Research/>}/>       
          <Route path='/Hackathon' element={<Hackathon/>}/>       
          <Route path='/Hackathon' element={<Hackathon/>}/>       
          <Route path='/Mywebinar' element={<Mywebinar/>}/>       
          <Route path='/InternshipResources' element={<InternshipResources/>}/>       
          <Route path='/MyProject' element={<MyProject/>}/>       
          <Route path='/Myinternship' element={<Myinternship/>}/>       
          <Route path='/WebinarCertificates' element={<WebinarCertificates/>}/>       
          <Route path='/InternshipCertificate' element={<InternshipCertificate/>}/>       
          <Route path='/GenerateCertificate' element={<GenerateCertificate/>}/>       
          <Route path='/CloudComputing' element={<CloudComputing/>}/>       
        
          <Route path='/PlacementSupport' element={<PlacementSupport/>}/>       
          <Route path='/SelectionProcess' element={<SelectionProcess/>}/>       

        </Routes>
      </Router> 
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();