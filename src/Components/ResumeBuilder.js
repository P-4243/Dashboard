import React from "react";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="section-header">
        <h2>Resume Builder</h2>
      </div>
      <div className="sectionsheader">
      <img src="./top.png" alt="first"></img>
      </div>
      
      <section className="bg-white shadow-md rounded p-6 mt-6">
        
        <ul className="space-y-3">
          <li><strong>1. Customize for Each Job:</strong> Tailor your resume to highlight relevant skills and experiences for the specific position.</li>
          <li><strong>2. Use a Clear Format:</strong> Choose a clean layout with headings and bullet points for easy readability.</li>
          <li><strong>3. Highlight Achievements:</strong> Focus on accomplishments with quantifiable results rather than just job duties.</li>
          <li><strong>4. Incorporate Action Verbs:</strong> Start bullet points with strong action verbs to convey impact (e.g., “Led,” “Achieved”).</li>
          <li><strong>5. Proofread and Edit:</strong> Carefully check for spelling and grammar errors to ensure professionalism.</li>
        </ul>
      </section>

      <div className="sectionheader">
      <img src="./middle.png" alt="image"></img>
      </div>
      <section className="bg-white shadow-md rounded p-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-bold">1. Basic Resume</h3>
            <ul>
              <li>[Your Name]</li>
              <li>[Contact Information]</li>
              <li>Objective: Brief career goal statement.</li>
              <li>
                Education
                <ul>
                  <li>[Degree, Field of Study, University, Year]</li>
                </ul>
              </li>
              <li>
                Experience
                <ul>
                  <li>[Job Title, Company, Year]</li>
                  <li>[Responsibility/Task]</li>
                </ul>
              </li>
              <li>
                Skills
                <ul>
                  <li>[Skill 1]</li>
                  <li>[Skill 2]</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-bold">2. Creative Resume Template</h3>
            <ul>
              <li>[Your Name]</li>
              <li>[Contact Information]</li>
              <li>Profile: Short creative statement.</li>
              <li>
                Portfolio
                <ul>
                  <li>[Link to Portfolio]</li>
                </ul>
              </li>
              <li>
                Skills
                <ul>
                  <li>[Creative Skill 1]</li>
                  <li>[Creative Skill 2]</li>
                </ul>
              </li>
              <li>
                Experience
                <ul>
                  <li>[Job Title, Company, Year]</li>
                  <li>[Creative Task]</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-bold">3. Professional Resume Template</h3>
            <ul>
              <li>[Your Name]</li>
              <li>[Contact Information]</li>
              <li>Summary: Concise professional overview.</li>
              <li>
                Experience
                <ul>
                  <li>[Job Title, Company, Year]</li>
                  <li>[Key Achievement]</li>
                </ul>
              </li>
              <li>
                Education
                <ul>
                  <li>[Degree, Field of Study, University]</li>
                </ul>
              </li>
              <li>
                Certifications
                <ul>
                  <li>[Certification]</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <h3 className="font-bold">4. Functional Resume Template</h3>
            <ul>
              <li>[Your Name]</li>
              <li>[Contact Information]</li>
              <li>Objective: Brief career goal statement.</li>
              <li>
                Skills Summary
                <ul>
                  <li>[Skill Category 1]</li>
                  <li>[Skill/Task]</li>
                  <li>[Skill Category 2]</li>
                </ul>
              </li>
              <li>
                Experience
                <ul>
                  <li>[Job Title, Company, Year]</li>
                  <li>[Relevant Task]</li>
                </ul>
              </li>
              <li>
                Education
                <ul>
                  <li>[Degree, Field of Study, University]</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="sectionsheader">
      <img src="./last.png" alt="image"></img>
      </div>
      <section class="container">
  <div class="download">
    <div class="item">
      <img src="./Email.png" alt="Share Through Mail"></img>
      <p>Share Through Mail</p>
    </div>
    <div class="item">
      <img src="./download 1.png" alt="Download"></img>
      <p>Download as Image</p>
    </div>
    <div class="item">
      <img src="./pdf.png" alt="Download as PDF"></img>
      <p>Download as PDF</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default ResumeBuilder;
