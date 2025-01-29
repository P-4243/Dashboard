import React from "react";
import Cards from "../Components/Cards";

const Mytraining = () => {
  const sections = [
    {
      title: "Registered",
      cards: [
        {
          imgSrc: "/cyber.jpg",
          altText: "Cyber Security",
          title: "Cyber Security  ",
          status: "Registered",
          navigateTo: "/cloud-computing",
        },
        {
          imgSrc: "/html.jpg",
          altText: "HTML,CSS & JAVASCRIPT",
          title: "Career guidance Webinar",
          status:"Registered",
          navigateTo: "/aws-cloud",
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
          imgSrc: "/MERN.jpg",
          altText: "MERN Stack Development",
          title: " MERN Stack Development",
          status: "Completed",
          feedbackUrl: "/feedback",
        },
        {
          imgSrc: "/career.jpg",
          altText: "Career Guidance Training  ",
          title: "Career Guidance Training",
          status: "Completed",
          feedbackUrl: "/feedback",
        },
      ],
    },
    {
      title: "Recommended",
      cards: [
        {
          imgSrc: "ball.jpg",
          altText: "Business Development",
          title: "Business Development",
          status: "Coming Soon...",
        },
        {
          imgSrc: "/ball.jpg",
          altText: "Prompt Engineering GPT",
          title: "Prompt Engineering GPT",
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

export default Mytraining;