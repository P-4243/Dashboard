// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle, faChevronLeft, faChevronDown, faCircleXmark,faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
// import "./App1.css";

// const SelectionProcess = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const toggleFaq = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <div className="selection-process-container">
//             <div className="header-line">
//                 <FontAwesomeIcon icon={faChevronLeft} />
//                 <h2 className="faq-heading">Placement Details</h2>
//             </div>

//             <div className="faq-container">
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFaq(0)}>
//                     Eligibity Criteria
//                         <FontAwesomeIcon icon={faChevronDown} />
//                     </div>
//                     {activeIndex === 0 && (
//                         <div className="faq-answer">
//                             <div className="faq-task">
//                                 <p>CGPA :60% or above</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                             <div className="faq-task">
//                                 <p>Skills Required</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFaq(1)}>
//                     Selection Process
//                         <FontAwesomeIcon icon={faChevronDown} />
//                     </div>
//                     {activeIndex === 1 && (
//                         <div className="faq-answer">
//                             <div className="faq-task">
//                                 <p>Resume</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                             <div className="faq-task">
//                                 <p>Aptitude Test</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                             <div className="faq-task">
//                                 <p>Coding / Technical Test</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />  
//                             </div>
//                                 <div className="faq-task">
//                                 <p>Task based test</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />  
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFaq(2)}>
//                     Interview Rounds
//                         <FontAwesomeIcon icon={faChevronDown} />
//                     </div>
//                     {activeIndex === 2 && (
//                         <div className="faq-answer">
//                             <div className="faq-task">
//                                 <p>Selected list</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                             <div className="faq-task">
//                                 <p>Technical Interview</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                             <div className="faq-task">
//                                 <p>HR Interview</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFaq(3)}>
//                     Interview Schedule
//                         <FontAwesomeIcon icon={faChevronDown} />
//                     </div>
//                     {activeIndex === 3 && (
//                         <div className="faq-answer">
//                             <div className="faq-task">
//                                 <p>Interview Date  - 11/10/2024</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                                 </div>
//                             <div className="faq-task">
//                                 <p>Time Slot  -  11:00 AM </p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                             <div className="faq-task">
//                                 <p>Status - Selected  </p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                         </div>
//                     )}
//                 </div> 
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFaq(4)}>
//                     Call Letter Generated
//                         <FontAwesomeIcon icon={faChevronDown} />
//                     </div>
//                     {activeIndex === 4 && (
//                         <div className="faq-answer">
//                             <div className="faq-task">
//                                 <p>Call Letter Acceptance</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                             <div className="faq-task">
//                                 <p>Joining in Office</p>
//                                 <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
//                             </div>
//                         </div>
//                     )}
//                 </div> 
//             </div>

//             {/* Button positioned at the bottom right */}
//             <div className="button-container">
//                 <button className="faq-complete-button">Next Step</button>
//             </div>
//         </div>
//     );
// };

// export default SelectionProcess;
