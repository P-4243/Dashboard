import React from "react";
import Cards from "../Components/Cards";

const Mywebinar = () => {
  const sections = [
    {
      title: "Registered",
      cards: [
        {
          imgSrc: "/career.jpg",
          altText: "Career guidance Webinar",
          title: "Career guidance Webinar",
          progress: 85,
          navigateTo: "/cloud-computing",
        },
        {
          imgSrc: "/career.jpg",
          altText: "Career guidance Webinar 2",
          title: "Career guidance Webinar 2",
          progress: 70,
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
        
      ],
    },
    {
      title: "Upcoming",
      cards: [
        {
          imgSrc: "ball.jpg",
          altText: "Prompt Engineering GPT ",
          title: "Prompt Engineering GPT",
          status: "Coming Soon...",
        },
        {
          imgSrc: "/ball.jpg",
          altText: "Prompt Engineering GPT",
          title: "Adv. Prompt Engineering GPT",
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

export default Mywebinar;