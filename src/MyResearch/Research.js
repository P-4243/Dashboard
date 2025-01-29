import React, { useState, useEffect } from 'react';
import './Research.css';
   
  const Research = () => {
    const contents = [
      {
        text: 'Content 1: Entrepreneurship',
        image: 'react2.jpg',
        content:"Engage with the vibrant entrepreneurship ecosystem ",
        backgroundColor: '#FFA100'
        
      },
      {
        text: 'Content 2: Multidisciplinary expertise',
        image:'react1.jpg',
        content:'Participate in industry forums to explore new collaboration opportunities in multiple domains',
        backgroundColor: '#EEC800'
      },
      {
        text: 'Content 3: Intellectual Capital',
        image: 'react3.jpg',
        content:'Leverage the world-class faculty expertise across technology domains through research.',
        backgroundColor: '#F4538A'
         
      }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Automatically switch slides every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      }, 9000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [contents.length]);
    return (
      <div className="container">

        <main className="main">
          <section className="section">
            <h2>Connect, Collocate, Collaborate</h2>
            <hr></hr>
            
            <div style={{ backgroundColor: contents[currentIndex].backgroundColor }} 
               className="slideshow-container">
              <div className="slide">
                
              <p>{contents[currentIndex].text}</p>
                <img src={contents[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
                <p>{contents[currentIndex].content}</p>

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

          </section>
          <section className="section">
            <h2>Entrepreneurship</h2>
            <hr></hr>
            <ul>
              <li><a href='#google'>Google Scholar Resources </a> </li>
              <li> <a href='#SSRN'>SSRN (Social Science Research Network) Resources</a>  </li>
              <li><a href='#Kauffman'> Kauffman Foundation Resources</a> </li>
              <li><a href='#Global'> The Global Entrepreneurship Monitor (GEM) Resources </a> </li>
              <li> <a href='#MIT'> MIT OpenCourseWare – Entrepreneurship Resources </a> </li>
              <li> <a href='#Harvard'>Harvard Business Review (HBR) Resources</a> </li>
              <li> <a href='#crunches'> Crunchbase Resources</a> </li>
              <li>  <a href='#pitchbook'>PitchBook Resources</a></li>
              <li><a href='# entrepreneur'> Entrepreneur Magazine Resources</a> </li>
            </ul>

            <h2>Multidisciplinary expertise</h2>
            <hr></hr>
            <ul>
              <li><a href='#Academic Journals'>Academic Journals</a></li>
              <li><a href='#Online Databases and Repositories'>Online Databases and Repositories</a></li>
              <li><a href='#books'>Books</a></li>
              <li><a href='#Professional Organizations'>Professional Organizations</a></li>
              <li><a href='#Conferences and Workshops'>Conferences and Workshops</a></li>
              <li><a href='# Online Learning Platforms'> Online Learning Platforms</a></li>
              <li><a href='#Podcasts'> Blogs and Online Communities</a></li>
              <li><a href='#Tools and Software'>Tools and Software</a></li>
              <li><a href='#Funding Resources'>Funding Resources</a></li>
              <li><a href='#Research Networks'>Research Networks</a></li>
              <li><a href='#Case Studies'>Case Studies</a></li>
              <li><a href='#White Papers'>White Papers</a></li>
            </ul>

            <h2>Intellectual Capital</h2>
            <hr></hr>
            <ul>
              <li><a href='#Overview of Intellectual Capital'>Overview of Intellectual Capital</a></li>
              <li><a href='#Types of Intellectual Capital'>Types of Intellectual Capital</a></li>
              <li><a href='# Measurement and Evaluation of Intellectual Capital'> Measurement and Evaluation of Intellectual Capital</a></li>
              <li><a href='# Importance of Intellectual Capital in Organizations'> Importance of Intellectual Capital in Organizations</a></li>
              <li><a href='#Intellectual Capital and Innovation'>Intellectual Capital and Innovation</a></li>
              <li><a href='# Intellectual Capital in Knowledge Management'> Intellectual Capital in Knowledge Management</a></li>
              <li><a href='# Best Practices for Managing Intellectual Capital'> Best Practices for Managing Intellectual Capital</a></li>
              <li><a href='#Intellectual Capital Reporting and Disclosure'>Intellectual Capital Reporting and Disclosure</a></li>
              <li><a href='#Intellectual Property and Its Relation to'>Intellectual Property and Its Relation to</a></li>
            </ul>

          </section>
        </main>
      </div>
    );
  };

  export default Research;
  