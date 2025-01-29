import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./InternshipCertificate.css";

const Certificate = ({ name, topic, signature, role }) => {
  return (
    <div id="certificate" className="certificate-container">
      <div className="header">
        <h1 className="title">&lt;GO&gt; HACKATHON</h1>
        <h2 className="subtitle">CERTIFICATE OF PARTICIPATION</h2>
      </div>
      <p className="description">is given to</p>
      <h3 className="participant-name">{name}</h3>
      <p className="description">for actively participating in</p>
      <h4 className="topic">{topic}</h4>
      <div className="signature-section">
        <div className="signature">
          <p>{signature}</p>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

const InternshipCertificates = () => {
  const certificateData = {
    name: "Mr. Yamala Ajay Reddy",
    topic: "Career Guidance Webinar: Finding Your Path in Today's Market",
    signature: "Ravi Rautela",
    role: "Director Innovation at Mangos Orange, Founder & CEO",
  };

  const downloadAsImage = () => {
    const certificate = document.getElementById("certificate");
    html2canvas(certificate).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const downloadAsPDF = () => {
    const certificate = document.getElementById("certificate");
    html2canvas(certificate).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape");
      pdf.addImage(imgData, "PNG", 10, 10, 280, 190);
      pdf.save("certificate.pdf");
    });
  };

  const shareViaMail = () => {
    const mailtoLink = "mailto:?subject=Your%20Certificate&body=Here%20is%20your%20certificate.";
    window.location.href = mailtoLink;
  };

  return (
    <div className="app-container">
      <Certificate
        name={certificateData.name}
        topic={certificateData.topic}
        signature={certificateData.signature}
        role={certificateData.role}
      />
      <div className="actions">
        <button className="action-button" onClick={downloadAsImage}>
          Download as Image
        </button>
        <button className="action-button" onClick={downloadAsPDF}>
          Download as PDF
        </button>
        <button className="action-button" onClick={shareViaMail}>
          Share Via Mail
        </button>
      </div>
    </div>
  );
};

export default InternshipCertificates;