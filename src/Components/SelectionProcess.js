import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronDown, faCircleXmark, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import "./Selection.css";
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
                <h2 className="faq-heading">Selection Process</h2>
            </div>

            <div className="faq-container">
                {/* Selection Process */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(0)}>
                        Selection Process
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 0 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Task Assigned</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Task Submitted</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Interview Schedule */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(1)}>
                        Interview Schedule
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 1 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Interview Date 11/11/2024</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Time Slot - 11:00 A.M.</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Status - Selected</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                                <p>/ Recommended Training</p>
                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#ab0707" }} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Document Verification */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(2)}>
                        Document Verification
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 2 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>NDA form with digital sign</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                                <button className="complete-button">
                                    <FontAwesomeIcon icon={faClipboardCheck} style={{ color: "#f7f7f8" }} /> View
                                </button>
                            </div>
                            <div className="faq-task">
                                <p>Cover Letter</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Resume</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Offer Letter Generated */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(3)}>
                        Offer Letter Generated
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 3 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Offer letter is generated</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                                <button className="complete-button">
                                    <FontAwesomeIcon icon={faClipboardCheck} style={{ color: "#f7f7f8" }} /> View
                                </button>
                            </div>
                            <div className="faq-task">
                                <p>Internship Started</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Tasks Completed</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Final Project Details */}
                <div className="faqItem">
                    <div className="faqQuestion" onClick={() => toggleFaq(4)}>
                        Final Project Details
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    {activeIndex === 4 && (
                        <div className="faqAnswer">
                            <div className="faq-task">
                                <p>Project Assigned</p>
                                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                            </div>
                            <div className="faq-task">
                                <p>Project Submitted</p>
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
