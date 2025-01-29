import React from 'react';
import './InterviewTopics.css';
// import './Faqs.css'

const InterviewTopics = () => {
  
  return (
    <div className="interview-topics">
      <header>
         <h1><span > <i className='bx bx-chevron-left'/> </span>Interview Topics & Questions</h1>
      </header>

      <section className="intro">
        <h2>Most Common Interview Topics</h2>
        <p>
          Here are Common Interview topics for Freshers that will help you
          imprint a positive image in front of the Interviewer. Check these most
          frequently asked Job interview question topics and practice the answers
          according to your work experience or your college projects.
        </p>
      </section>

      <section className="topics-list">
        <h3>Here's a list of key topics for interview preparation:</h3>
        <ol>
          <li>Data Structures (Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Heaps, Hash Tables)</li>
          <li>Algorithms (Sorting, Searching, Dynamic Programming, Backtracking, Recursion)</li>
          <li>Object-Oriented Programming (OOP) Concepts</li>
          <li>Operating Systems (Processes, Threads, Concurrency, Memory Management)</li>
          <li>Networking Basics (OSI Model, TCP/IP, HTTP/HTTPS, DNS)</li>
          <li>Database Management (SQL, NoSQL, Normalization, Indexing, Transactions)</li>
          <li>Problem-Solving Techniques and Complexity Analysis</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Behavioral Questions (STAR Method, Past Project Experiences)</li>
        </ol>
      </section>

      <section className="questions">
        <h3>Common Interview Questions:</h3>
        <ul  >
          <li>Tell me about yourself.</li>
          <li>Why did you choose this field?</li>
          <li>What are your strengths and weaknesses?</li>
          <li>Why do you want to work for our company?</li>
          <li>What do you know about our company?</li>
          <li>How do you handle pressure and stress?</li>
          <li>Describe a challenging situation you faced and how you handled it.</li>
          <li>Where do you see yourself in five years?</li>
          <li>What makes you the best candidate for this position?</li>
          <li>Tell us about a project or accomplishment you're proud of.</li>
          <li>How do you prioritize tasks when working on multiple projects?</li>
          <li>What are your career goals?</li>
          <li>How do you handle feedback and criticism?</li>
          <li>Tell me about a time you worked successfully in a team.</li>
          <li>What do you expect from this role?</li>
          <li>How would you deal with a difficult team member?</li>
          <li>Why did you apply for this position?</li>
          <li>What motivates you at work?</li>
          <li>Do you have any questions for us?</li>
          <li>Are you willing to relocate or travel if necessary?</li>
          <li>What skills do you bring that make you a good fit for this role?</li>
          <li>How do you stay organized and manage your time?</li>
          <li>Describe a time when you learned something quickly.</li>
          <li>What steps do you take to meet deadlines?</li>
          <li>What motivates you to give your best at work?</li>
          <li>How would you handle a situation where you disagree with a colleague?</li>
          <li>What do you know about the industry you are applying for?</li>
        </ul>
      </section>
    </div>
  );
};

export default InterviewTopics;
