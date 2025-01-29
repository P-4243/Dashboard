import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronLeft, faFile,faChevronDown, faCircleXmark,faClipboardCheck,faWandSparkles,faBullseye,faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { icon, text } from "@fortawesome/fontawesome-svg-core";
import {Link} from 'react-router-dom';
import Testing from "./Testing";

function Resume() {
  const templates = [
    { id: 1, title: "Template 1", image: "/template1.png" },
    { id: 2, title: "Template 2", image: "/template2.png" },
    { id: 3, title: "Template 3", image: "/template3.png" },
    { id: 4, title: "Template 4", image: "/template4.png" },
    { id: 5, title: "Template 5", image: "/template5.png" },
    { id: 6, title: "Template 6", image: "/template6.png" },
    { id: 7, title: "Template 7", image: "/template7.png" },
    { id: 8, title: "Template 8", image: "/template8.png" },
  ];

  const styles = {
    app: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      margin: 0,
      padding: 0,
    },
    header: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#fff",
    },
    headerTitle: {
      fontSize: "1.8rem",
      color: "#0089FE",
      display:"flex",
      padding:"0px 30px ",
      marginTop:"0"
    },
    headerText: {
      color: "black",
      margin: "10px 0",
      fontSize:"1.5rem",
      fontWeight:"thin",
      marginBottom:"50px",      
    },
    createButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "0",
      margin:"0px 0px 50px",
      padding: "15px 30px",
      fontSize: "1rem",
      borderRadius: "15px",
      cursor: "pointer",
    },
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "40px",
      padding: "30px",
      backgroundColor: "#grey",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
    },
    image: {
      width: "100%",
      height: "300px",
    },
    details: {
      padding: "15px",
      textAlign: "center",
    },
    title: {
      margin: "10px 0",
      fontSize: "1.2rem",
      color: "#333",
    },
    previewButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      fontSize: "1rem",
      borderRadius: "5px",
      cursor: "pointer",
    },
    logo:{
      width:"14rem",
      display: "flex",
      alignitems: "center",
      justifycontent: "flex-start",
      padding:"5px",
    },
    icon:{
      fontSize:"2rem",
      display: "flex",
      alignitems: "center",
      justifycontent: "flex-start",
      padding:'10px 30px',
      marginTop:"10px",
    },
    span:{
      fontSize:"2rem",
      fontWeight:"bold",
      fontFamily:"arial",
      color:"black", 
    },
    nav:{
      fontSize:"1.6em",
      margin:"0px 0px 40px",
      textDecoration:'None',
    },
    templates:{
      color:"grey",
      fontWeight:"bold",
      fontSize:"1.2rem",
      display:"flex",
      margin:"0px 250px",
      textDecoration:"none",
    },
    simple:{
      color:"black",
      fontWeight:"bold",
      fontSize:"1.2rem",
      display:"flex",
      margin:"-22px 500px",
      textDecoration:"none",
    },
    ats:{
      color:"grey",
      fontWeight:"bold",
      fontSize:"1.2rem",
      display:"flex",
      margin:"-22px 700px",
      textDecoration:"none",
    },
    prof:{
      color:"grey",
      fontWeight:"bold",
      fontSize:"1.2rem",
      display:"flex",
      margin:"-22px 880px",
      textDecoration:"none",
    },
    
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <img src="/Gohack_logo.png" alt="Gohackthon Logo" style={styles.logo}></img>
        <div style={styles.icon}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <h1 style={styles.headerTitle}>Resume Templates</h1>
          </div>
        <p style={styles.headerText}>
          <span style={styles.span}>Job-winning resume templates <br/><br/></span>
          Each resume template is designed to follow the exact rules you need to get hired faster. 
          Use our resume templates and get free access to 18 more career tools!
        </p>
        <button style={styles.createButton}>Create My Resume</button>
      <div style={styles.nav}>
        <Link to="/Test" style={styles.simple} ><FontAwesomeIcon icon={faWandSparkles} style={{width:"40px"}} />Simple</Link>
        <a href="#" style={styles.ats}><FontAwesomeIcon icon={faBullseye} style={{width:"40px",marginRight:"5px"}}/> ATS</a>
        <a href="#" style={styles.prof}><FontAwesomeIcon icon={faBriefcase} style={{width:"40px", marginRight:"5px"}}/>Professional</a>
      </div>
      <hr style={{width:"55rem"}}></hr>
      </header>

      <section style={styles.gallery}>
        {templates.map((template) => (
          <div
            key={template.id}
            style={styles.card}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={template.image} alt={template.title} style={styles.image} />
            <div style={styles.details}>
              <h3 style={styles.title}>{template.title}</h3>
              <button style={styles.previewButton}>Preview</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Resume;