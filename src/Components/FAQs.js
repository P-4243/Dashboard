import React from "react";
import "./Faqs.css"; // Import CSS for styling

// FAQ component to render each FAQ item
function FAQ({ title, description, time }) {
  return (
    <div className="faq-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="time">{time} ago</span>
    </div>
  );
}

// Main FAQs component
function FAQs() {
  const faqItems = [
    {
      title: "Top 10 Common Interview Questions For Placement [2024]",
      description:
        "If you are a student and getting ready for off-campus or on-campus placement, then working on common interview questions is quite important. In many colleges companies like TCS, Infosys, Capgemini...",
      time: "7 min",
    },
    {
      title: "Top 12 Behavioural Questions Important for Placements",
      description:
        "Behavioural Questions is another major component of competitive exams happening in off-campus and on-campus placement drives. It is given in the...",
      time: "7 min",
    },
    {
      title: "Communication for Interview",
      description:
        "In an interview, effective communication is essential for showcasing your skills and making a strong impression...",
      time: "7 min",
    },
  ];

  return (
    <div className="faqs-container">
      <button className="faqs-button">FAQs</button>
      {faqItems.map((faq, index) => (
        <FAQ
          key={index}
          title={faq.title}
          description={faq.description}
          time={faq.time}
        />
      ))}
    </div>
  );
}

export default FAQs;