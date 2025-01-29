import React from 'react';
import './AptitudeandTechnical.css';


const AptitudeandTechnical= () => {

  return (
    <div className="aptitude-page">
      <div className="section-header">
        <h2>Aptitude & Technical</h2>
      </div>
      <div className="sectionheader">
      <img src= "./image4.png" alt="aptitude"></img>
      </div>
      
      
      <div className="questions-container">
        <ol>
          <li>
            <strong>Time & Work:</strong> A and B can complete a task in 12 days
            and 16 days, respectively. They start working together, but after 4
            days, A leaves. How long will B take to complete the remaining work?
          </li>
          <li>
            <strong>Profit & Loss:</strong> A shopkeeper sells a product at a
            20% profit. If the cost price of the product is ₹500, what is the
            selling price?
          </li>
          <li>
            <strong>Percentage:</strong> In a class of 60 students, 40% are
            girls. How many girls are there in the class?
          </li>
          <li>
            <strong>Blood Relations:</strong> Pointing to a photograph, a man
            says, "She is the daughter of my grandfather's only son." How is the
            man related to the girl in the photograph?
          </li>
          <li>
            <strong>Series Completion:</strong> Find the next number in the
            series: 2, 6, 12, 20, 30, __?
          </li>
        </ol>
      </div>
      <div className="sectionsheader">
      <img src="./image2.png" alt="tehnology"> </img>
      </div>
      
      <div className="questions-container">
        <ol>
          <li>
            <strong>C Programming Question:</strong> Explain dynamic memory
            allocation in C. Write a program to allocate memory for an array of
            integers using malloc and free.
          </li>
          <li>
            <strong>Java Programming Question:</strong> What is the difference
            between abstract class and interface in Java? Provide an example
            for each.
          </li>
          <li>
            <strong>Python Programming Questions:</strong>
            <ul>
              <li>
                Write a Python program to check if a given string is an anagram
                of another string.
              </li>
              <li>
                What are list comprehensions in Python? Write a program to
                generate a list of squares of numbers from 1 to 10 using list
                comprehension.
              </li>
            </ul>
          </li>
          <li>
            <strong>JavaScript Programming Question:</strong> Write a JavaScript
            function to check if a given number is a palindrome.
          </li>
        </ol>
      </div>
      <div className="sectionheader">
      <img src="./image3.png" alt="work"></img>
      </div>
      <div className="reference-section">
      <h3>Reference Tutorial</h3>
        <div className="video-thumbnail">
        <img src="./image.png" alt="msg"></img>   
        </div>
      </div>
      </div>
    
  );
};


export default AptitudeandTechnical  ;