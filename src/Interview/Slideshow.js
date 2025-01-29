import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const contents = [
    {
      text: 'Content 1: Welcome to the slideshow!',
      image: 'ai.jpg'
    },
    {
      text: 'Content 2: Enjoy seamless transitions!',
      image: 'https://example.com/image2.jpg'
    },
    {
      text: 'Content 3: Add more slides easily!',
      image: 'https://example.com/image3.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [contents.length]);

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img src={contents[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <p>{contents[currentIndex].text}</p>
      </div>
      <div className="controls">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + contents.length) % contents.length)}>
          Previous
        </button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % contents.length)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
