import React from "react";
import Cards from "../Components/Cards";

const PlacementResources = () => {
  const sections = [
    {
      title: "Aptitude & Technical  ",
      cards: [
        {
          imgSrc: "/aptitude.jpg",
          altText: "Aptitude and Reasoning",
          title: "Aptitude and Reasoning   ",
          status :"Start Tutorial",
        },
        {
          imgSrc: "/technica.jpg",
          altText: "Technical Skills",
          title: "Technical Skills ",
         status:"Start Tutorial " , 
        },
        {
          imgSrc: "/pra.png",
          altText: "Practice Session",
          title: "Practice Session",
          status: "Start Tutorial",
        },
      ],
    },
    {
      title: "Soft Skills & Interview",
      cards: [
        {
          imgSrc: "/ss.png",
          altText: "Soft Skills ",
          title: "Soft Skills  ",
          status: "Start now",
        },
        {
            imgSrc: "/interview.png",
            altText: "Interview Questions ",
            title: " Interview Questions",
            status: "Start now",
          },
        {
            imgSrc: "/mock.png",
            altText: "Mock Interview ",
            title: "Mock Interview  ",
            status: "Start now",
          },
      ],
    },
    {
      title: "Resume Building & Company-Specific",
      cards: [
        {
          imgSrc: "/resume.png",
          title:"Resume Templates",
          status: "More",
        },
        {
          imgSrc: "/company.png",
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

export default PlacementResources;