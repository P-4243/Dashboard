import React from "react";
import Cards from "../Components/Cards"

const Hackathon = () => {
  const sections = [
    {
      title: "Registered",
      cards: [
        {
          imgSrc: "/leadership.jpg",
          altText: "Leadership",
          title: "Leadership ",
          status :"Get More"
        },
        {
          imgSrc: "/project.jpg",
          altText: "Project Management",
          title: "Project Management",
         status:"Get More"
          
        },
        {
          imgSrc: "/communication.jpg",
          altText: "Communication Skills",
          title:"Communication Skills",
          status:"Get More"
          
        },
      ],
    },
    {
      title: "Attended",
      cards: [
        {
          imgSrc: "/hackathon.jpg",
          altText: "L& T EduTech Hackathon",
          title: " L& T EduTech Hackathon",
          status: "Completed",
          feedbackUrl: "/feedback",
        },
        
      ],
    },
    {
      title: "Upcoming",
      cards: [
        {
          imgSrc: "medium_square 1.jpg",
          
          status: "Coming Soon...",
        },
        {
          imgSrc: "medium_square2.jpg",
          
          status: "Coming Soon...",

        },
        {
          imgSrc: "/Pluscircle.jpg",
          altText: "Explore More",
          isAddCard: true,
          navigateTo: "/explore-more",

        },
        
      ],
    },
  ];

  return <Cards sections={sections} />;
};

export default Hackathon;