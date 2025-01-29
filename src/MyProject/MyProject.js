import React from "react";
import Cards from "../Components/Cards";

const MyProject = () => {
  const sections = [
    {
      title: "On going  ",
      cards: [
        {
          imgSrc: "/character.jpg",
          altText: "Character Generator",
          title: "Character Generator  ",
          status :"Go to Project",
        },
        {
          imgSrc: "/on.png",
          altText: "Dashboard",
          title: "Dashboard",
         status:"Go to Project " , 
        },
        {
          imgSrc: "/pluscircle.jpg",
          altText: "Explore more",
          
          status: "Explore more",
        },
      ],
    },
    {
      title: "Completed",
      cards: [
        {
            imgSrc: "/blog.png",
            altText: "Blog ",
            title: "Blog ",
            status: "Completed",
            feedbackUrl: "/feedback",
        },
       
      ],
    },
    {
      title: "Upcoming",
      cards: [
        {
          imgSrc: "/face.png",
          title:"Face detection & recognition",
          status: "Coming soon..",
        },
        
        
        
      ],
    },
  ];

  return <Cards sections={sections} />;
};

export default MyProject;