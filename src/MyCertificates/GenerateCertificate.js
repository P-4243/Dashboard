import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./GenerateCertificate.css"
function GenerateCertificate() {
  const handleDownload = (title) => {
    const input = document.getElementById(title);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 180, 100);
      pdf.save(`${title}_certificate.pdf`);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Webinars</h2>
          <div className="card" id="Career Guidance Webinar">
            <img src="Rectangle 44.png" className="card-img-top" alt="Career Guidance Webinar" />
            <div className="card-body">
              <h5 className="card-title">Career Guidance Webinar</h5>
              <p className="card-text">100% Completed</p>
              <button className="btn btn-primary" onClick={() => handleDownload('Career Guidance Webinar')}>Get Certificate</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Hackathon</h2>
          <div className="card" id="L&T EduTech Hackathon">
            <img src="Hackathon-2-1024x1024 1.png" className="card-img-top" alt="L&T EduTech Hackathon" />
            <div className="card-body">
              <h5 className="card-title">L&T EduTech Hackathon</h5>
              <p className="card-text">100% Completed</p>
              <button className="btn btn-primary" onClick={() => handleDownload('L&T EduTech Hackathon')}>Get Certificate</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Internships</h2>
          <div className="card" id="MERN Stack Development">
            <img src="Rectangle 36.png" className="card-img-top" alt="MERN Stack Development" />
            <div className="card-body">
              <h5 className="card-title">MERN Stack Development</h5>
              <p className="card-text">Completed</p>
              <button className="btn btn-primary" onClick={() => handleDownload('MERN Stack Development')}>Get Certificate</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Research</h2>
          <div className="card" id="AI in Healthcare Research">
            <img src="image77.png" className="card-img-top" alt="AI in Healthcare Research" />
            <div className="card-body">
              <h5 className="card-title">AI in Healthcare Research</h5>
              <p className="card-text">Completed</p>
              <button className="btn btn-primary" onClick={() => handleDownload('AI in Healthcare Research')}>Get Certificate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateCertificate;
