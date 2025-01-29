import React, { useState } from "react";
import "./PlacementSupport.css";

const jobListings = [
  {
    logo: "/Rectangle 35.png", // Replace with actual image URLs
    title: "Full Stack Developer Intern",
    company: "MangosOrange Agritech",
    branch: "BE, BTech, BCA, MCA, BSc",
    salary: "INR 25,000 per month",
    status: "Active",
    location: "Remote Online",
    skills: "HTML & CSS, JS, ReactJS",
  },
  {
    logo: "/Hiremi.png",
    title: "Web Developer Intern",
    company: "Hiremi Technologies",
    branch: "BE, BTech, BCA, MCA, BSc",
    salary: "INR 25,000 per month",
    status: "Active",
    location: "Remote Online",
    skills: "HTML & CSS, JS, ReactJS",
  },
  {
    logo: "/image 54.png",
    title: "Data Science AI",
    company: "Hackveda LLC",
    branch: "BE, BTech, BCA, MCA, BSc",
    salary: "INR 25,000 per month",
    status: "Active",
    location: "Remote Online",
    skills: "HTML & CSS, JS, ReactJS",
  },
  {
    logo: "/spark.png",
    title: "IT Intern",
    company: "Spark to Ideas",
    branch: "BE, BTech, BCA, MCA, BSc",
    salary: "INR 25,000 per month",
    status: "Active",
    location: "Remote Online",
    skills: "HTML & CSS, JS, ReactJS",
  },
  {
    logo: "/cr.png",
    title: "Software Developer Intern",
    company: "CRTD Technologies",
    branch: "BE, BTech, BCA, MCA, BSc",
    salary: "INR 25,000 per month",
    status: "Active",
    location: "Remote Online",
    skills: "HTML & CSS, JS, ReactJS",
  },
  {
    logo: "/cloud.png",
    title: "Cloud Computing with Azure AI",
    company: "Microsoft Azure",
    branch: "BE, BTech, BCA, MCA, BSc",
    salary: "INR 25,000 per month",
    status: "Active",
    location: "Remote Online",
    skills: "HTML & CSS, JS, ReactJS",
  },
];

const PlacementSupport = () => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  const visibleJobs = viewMore ? jobListings : jobListings.slice(0, 3);

  return (
    <div className="placement-support">
        
      <h2 style={{margin:"-15px 0px 15px 0",fontSize:"2vw"}}>Placement Support</h2>
      <p>
        The "Go Hackathon" offers strong placement support by connecting participants
        with top companies through hiring challenges and providing networking
        opportunities with industry professionals. This leads to direct job placements
        and internships for outstanding candidates​ (Unstop)​​ (HackerEarth)​.
      </p>

      <div className="job-cards">
        {visibleJobs.map((job, index) => (
          <div className="job-card" key={index}>
            <img src={job.logo} alt={job.company} className="job-logo" />
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Branch:</strong> {job.branch}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Application Status:</strong> {job.status}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Skills:</strong> {job.skills}</p>
            <div className="job-buttons">
              <button className="view-jd-button">View JD</button>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        ))}
      </div>

      <button className="view-more-button" onClick={handleViewMore}>
        {viewMore ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default PlacementSupport;
