import React from "react";
import Cards from "../Components/Cards";

const Myworkshop = () => {
  const sections = [
    {
      title: "Registered",
      cards: [
        {
          imgSrc: "/cloudcomputing.jpg",
          altText: "Cloud Computing",
          title: "Cloud computing",
          progress: 80,
          navigateTo: "/cloud-computing",
        },
        {
          imgSrc: "cloudcomputing2.jpg",
          altText: "Cloud Computing Training",
          title: "Cloud Computing Training",
          progress: 20,
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
          imgSrc: "/ai.jpg",
          altText: "Artificial Intelligence",
          title: "Artificial Intelligence",
          status: "Completed",
          feedbackUrl: "/feedback",
        },
        {
          imgSrc: "/cloudcomputing.jpg",
          altText: "Cloud Computing",
          title: "Cloud Computing",
          status: "Completed",
          feedbackUrl: "/feedback",
        },
      ],
    },
    {
      title: "Upcoming",
      cards: [
        {
          imgSrc: "/blockchain 1.jpg",
          altText: "Blockchain Technology",
          title: "Blockchain Technology",
          status: "Coming Soon...",
        },
        {
          imgSrc: "/ml.jpg",
          altText: "Machine Learning",
          title: "Machine Learning",
          status: "Coming Soon...",
        },
        
      ],
    },
  ];

  return <Cards sections={sections} />;
};

export default Myworkshop;