import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown, faCircleXmark, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import "./App1.css";
import {Link} from "react-router-dom";
const SelectionProcess = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Debugging: Check when activeIndex changes
    useEffect(() => {
        console.log("Dropdown updated. Active index:", activeIndex);
    }, [activeIndex]);

    const toggleFaq = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="selection-process-container">
            <div className="header-line">
                <h2 className="faq-heading">Hackathon Selection Process</h2>
            </div>

            <div className="faq-container">
                {/* Registration */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(0)}>
                        Registration
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 0 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Registration Deadline: 10/02/2025</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Completed Registration</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Team Formation */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(1)}>
                        Team Formation
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 1 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Teams Formed: 12/02/2025</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Assigned Mentor</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Idea Submission */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(2)}>
                        Idea Submission
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 2 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Idea Submission Deadline: 15/02/2025</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Idea Approved</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Prototype Development */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(3)}>
                        Prototype Development
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 3 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Prototype Development Phase</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Prototype Submitted</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Pitch Presentation */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(4)}>
                        Pitch Presentation
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 4 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Presentation Date: 20/02/2025</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Status: Finalists Selected</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Winner Announcement */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(5)}>
                        Winner Announcement
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 5 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Winner Announced on 25/02/2025</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Button positioned at the bottom right */}
            <div className="button-container">
                              <Link to="/Feedback"> <button className="faq-complete-button">Next Step</button></Link>
               
            </div>
        </div>
    );
};

export default SelectionProcess;
