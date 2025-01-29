import React from 'react';
import './InterviewTopics.css';
// import './Faqs.css'

const VerbalAbility = () => {
 

  return (
    <div className="interview-topics">
      <header>
         <h1><span > <i className='bx bx-chevron-left'/> </span>Verbal Ability </h1>
      </header>


      <section className="topics-list">
        <h3>Topics of Verbal Ability</h3>
        <section className='intro'>
        <p>
        So, here are the topics of verbal ability that are frequently asked in competitive exams as well as placement exams. Let’s start practicing all the important questions by going through the following topics:-
        </p>
        </section>
      </section>

      <section className="questions">
        <ul  >
        <li>Spotting Errors</li>
          <li>Synonyms</li>
          <li>Antonyms</li>
          <li>Selecting Words</li>
          <li>Spellings</li>
          <li>Sentence Formation</li>
          <li>Ordering of Words</li>
          <li>Sentence Correction</li>
          <li>Sentence Improvement</li>
          <li>Completing Statements</li>
          <li>Ordering of Sentences</li>
          <li>Paragraph Formation</li>
          <li>Closet Test</li>
          <li>Comprehension</li>
          <li>One Word Substitutes</li>
          <li>Idioms and Phrases</li>
          <li>Change of Voice</li>
          <li>Change of Speech</li>
          <li>Verbal Analogies</li>
          <li>Articles</li>
          <li>Preposition</li>
          <li>Adjectives</li>
        </ul>
      </section>
    </div>
  );
};

export default VerbalAbility;
