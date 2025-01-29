import React from "react";
import "./WebinarCertificate.css";

const Certificate = ({ name, topic, signature, role }) => {
  return (
    <div className="certificate-container">
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

const WebinarCertificates= () => {
  const certificates = [
    {
      name: "Mr. Yamala Ajay Reddy",
      topic: "Career Guidance Webinar: Finding Your Path in Today's Market",
      signature: "Ravi Rautela",
      role: "Director Innovation at Mangos Orange, Founder & CEO",
    },
    {
      name: "Mr. Yamala Ajay Reddy",
      topic: "Career Guidance Webinar: Finding Your Path in Today's Market",
      signature: "Ravi Rautela",
      role: "Director Innovation at Mangos Orange, Founder & CEO",
    },
  ];

  return (
    <div className="app-container">
      {certificates.map((certificate, index) => (
        <div key={index} className="certificate-wrapper">
          <Certificate
            name={certificate.name}
            topic={certificate.topic}
            signature={certificate.signature}
            role={certificate.role}
          />
        </div>
      ))}
    </div>
  );
};

export default WebinarCertificates;