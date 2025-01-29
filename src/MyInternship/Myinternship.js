import React from "react";
import Cards from "../Components/Cards";

const Myinternship = () => {
  const sections = [
    {
      title: "Registered",
      cards: [
        {
          imgSrc: "/business.jpg",
          altText: "Business Development",
          title: "Business Development ",
          status :"Get More"
        },
        {
          imgSrc: "/web.jpg",
          altText: "Web Development",
          title: "Web Development",
         status:"Get More"
          
        },
        {
          imgSrc: "/Pluscircle.jpg",
          altText: "Explore More",
          isAddCard: true,
          navigateTo: "/explore-more",
        },
      ],
    },
    {
      title: "Attended",
      cards: [
        {
          imgSrc: "/cloud.jpg",
          altText: "Cloud Computing",
          title: "Cloud Computing",
          status: "Completed",
          feedbackUrl: "/feedback",
        },
        
      ],
    },
    {
      title: "Recommended",
      cards: [
        {
          imgSrc: "mars.jpg",
          title:"Cloud Computing",
          status: "Coming Soon...",
        },
        {
          imgSrc: "mern-stack 1.jpg",
          title :"MERN Stack",
          status: "Coming Soon...",

        },
        
        
      ],
    },
  ];

  return <Cards sections={sections} />;
};

export default Myinternship;