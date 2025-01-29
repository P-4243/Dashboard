import React, { useState } from "react";
import "./TrainingPage.css";

const TrainingPage = ({ certificationImg, certificationTitle, trainingTitle }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      <div className="training">
        <i className="bx bx-chevron-left"></i>
        <span style={{ fontSize: "35px" }}>{trainingTitle}</span>
      </div>
      <h2 className="section-title">{certificationTitle}</h2>
      <p style={{ marginLeft: "2.5vw" }}>
        <strong>Topic:</strong> {trainingTitle}
      </p>
      <p style={{ marginLeft: "2.6vw" }}>
        <strong>Date:</strong> Wednesday, April 24, 2024
      </p>
      <p style={{ marginLeft: "2.5vw" }}>
        <strong>Time:</strong> 1:00 PM - 2:30 PM EST
      </p>
      <button className="register-btn">
        <a href="cyber reg.html">Register Now</a>
      </button>

      <h2 className="section-title odd">About Trainer</h2>
      <div className="our-programs">
        <div className="program">
          <div className="program1">
            <img
              src="/trainer image.png"
              alt="Trainer"
              className="trainer-photo"
              width="150"
              style={{ marginTop: "-5rem" }}
            />
            <h3>Harsha Varma</h3>
            <p>
              Designation: Academic Counseling Expert Description: Shantnu Rana
              is an Academic Counseling Expert at Great Learning who has guided
              thousands of students in planning and choosing their professional
              careers.
            </p>
            <br />
            <p>Experience: 10+ years</p>
          </div>
          <div className="program1" style={{ background: "none" }}>
            <p
              className="review-head"
              style={{
                color: "black",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Rating & Reviews
            </p>
            <span style={{ fontSize: "50px", color: "#f5a623" }}>★★★★☆</span>
            <p
              className="review-head"
              style={{
                display: "inline",
                fontWeight: "bold",
                color: "black",
                fontSize: "30px",
              }}
            >
              4.5
            </p>
          </div>
        </div>
      </div>

      <h2 className="section-title">Training Highlights</h2>
      <div className="highlights">
        <ul>
          <li>Introduction and welcome</li>
          <li>Overview of the job market and current trends</li>
          <li>Resume tips and tricks</li>
          <li>Interview strategies and best practices</li>
          <li>Q&A session</li>
        </ul>
      </div>

      <h2 className="section-title odd" style={{ marginTop: "-1rem" }}>
        What You'll Get
      </h2>
      <div className="what-you-get">
        <ul>
          <li>Learn from experts and gain insights</li>
          <li>Cost-effective and flexible option for busy professionals</li>
          <li>Offers networking opportunities and access to resources</li>
          <li>
            Helps you stay up-to-date on the latest trends and best practices
          </li>
          <li>
            Convenient and accessible way to learn new skills and gain
            knowledge
          </li>
        </ul>
      </div>

      <h2 className="section-title">Training Schedule</h2>

      <img src={certificationImg} alt="Certificate" className="certificate-img" />

      <h2
        className="register-btn"
        style={{
          backgroundColor: "#0071D1",
          width: "100px",
          borderRadius: "50px",
        }}
      >
        FAQs
      </h2>
      <div className="faq-container">
        {[
          {
            question: "Why should I take this course?",
            answer: "Fill out the registration form on our website.",
          },
          {
            question: "Is this course provided by GoHackathon Online?",
            answer:
              "Prerequisites vary depending on the workshop. Please check the workshop details for specific requirements.",
          },
          {
            question: "How do I know more about the course?",
            answer: "Refund policies vary depending on the workshop.",
          },
          {
            question: "How do I know more about the course?",
            answer:
              "Cancellations made [Number] days prior to the workshop will receive a full refund.",
          },
          {
            question: "I could not find a course on this site, what should I do?",
            answer:
              "Yes, participants who successfully complete a workshop will receive a certificate of completion.",
          },
        ].map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeFaq === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <i className="fas fa-chevron-down"></i>
            </div>
            {activeFaq === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPage;
