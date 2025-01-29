import React from "react";
import Cards from "../Components/Cards";

const InternshipResources = () => {
  const sections = [
    {
      title: "Skill Development Resources",
      cards: [
        {
          imgSrc: "/technical.jpg",
          altText: "Technical Skills",
          title: "Technical Skills  ",
          status :"Start Tutorial",
        },
        {
          imgSrc: "/soft.jpg",
          altText: "Soft Skills",
          title: "Soft Skills ",
         status:"Start Tutorial " , 
        },
        {
          imgSrc: "/practice.png",
          altText: "Practice Skills",
          title: "Practice Skills",
          status: "Start Tutorial",
        },
      ],
    },
    {
      title: "Industry Insights & Trends",
      cards: [
        {
          imgSrc: "/Rectangle 36.jpg",
          altText: "Artificial Intelligence",
          title: "Artifical Intelligence ",
          status: "Start now",
        },
        {
            imgSrc: "/internet.png",
            altText: "Internet of things ",
            title: " Internet of things ",
            status: "Start now",
          },
        {
            imgSrc: "/block.jpg",
            altText: "Block Chain ",
            title: "Block Chain  ",
            status: "Start now",
          },
      ],
    },
    {
      title: "Enterpreneurship & Startup Resources",
      cards: [
        {
          imgSrc: "/enter.jpg",
          title:"Enterpreneurship",
          status: "More",
        },
        {
          imgSrc: "/startup.jpg",
          title :"Startup Mentorship ",
          status: "More",

        },
        {
            imgSrc: "/video.jpg",
            title :"Video Tutorials",
            status: "More",
  
          },
        
        
      ],
    },
  ];

  return <Cards sections={sections} />;
};

export default InternshipResources;