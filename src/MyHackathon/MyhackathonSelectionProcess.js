import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronLeft, faChevronDown, faCircleXmark,faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import "./App1.css";

const MyhackathonSelectionProcess = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="selection-process-container">
            <div className="header-line">
                <FontAwesomeIcon icon={faChevronLeft} />
                <h2 className="faq-heading">Hackathon Details</h2>
            </div>

            <div className="faq-container">
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(0)}>
                    Team Formation
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 0 && (
                        <div className="faq-answer">
                            <div className="faq-task">
                                <p>Team Size And Team Name</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p> Role Assignment</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(1)}>
                    Idea Submission
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 1 && (
                        <div className="faq-answer">
                            <div className="faq-task">
                                <p>Problem Statement</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Target Audience</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Estimated Time to Completion</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />  
                            </div>
                                <div className="faq-task">
                                <p>Solution Overview</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />  
                            </div>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(2)}>
                    Evaluation
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 2 && (
                        <div className="faq-answer">
                            <div className="faq-task">
                                <p>Evaluation Stage</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Detailed Review</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Score Range</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(3)}>
                    Prefinal round
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 3 && (
                        <div className="faq-answer">
                            <div className="faq-task">
                                <p>Prototype Submission</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                                </div>
                            <div className="faq-task">
                                <p>Presentation Submission</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Q&A Session</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div> 
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(4)}>
                    Final round
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 4 && (
                        <div className="faq-answer">
                            <div className="faq-task">
                                <p>Q&A with Judges</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Final Score And Winner Announcement</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div> 
            </div>

            {/* Button positioned at the bottom right */}
            <div className="button-container">
                <button className="faq-complete-button">Next Step</button>
            </div>
        </div>
    );
};

export default MyhackathonSelectionProcess;
