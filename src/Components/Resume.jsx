import React from "react";
import LeftPart from "./LeftPart";
import Navbar from "./Navbar";
import "../styles/Resume.scss";

const resumeData = [
  {
    label: "Education",
    content: "Bachelor of Science in Computer Science - XYZ University (2018 - 2022)"
  },
  {
    label: "Work Experience",
    content: "Software Engineer at ABC Corp (2022 - Present)"
  },
  {
    label: "Skills",
    content: "React, JavaScript, Node.js, MongoDB, Git"
  },
  {
    label: "Projects",
    content: "Developed a full-stack e-commerce platform using MERN stack"
  },
  {
    label: "Certifications",
    content: "Certified React Developer - Udemy (2023)"
  }
];

function Resume() {
  return (
    <div className="main_container">
      <LeftPart />
      <div className="right_part">
        <Navbar />
        <div className="resume_container">
          <h2 className="resume_title">Professional Resume</h2>
          <div className="resume_content">
            {resumeData.map((item, index) => (
              <div key={index} className="resume_section">
                <div className="resume_dot"></div>
                <div>
                  <h3 className="resume_label">{item.label}</h3>
                  <p className="resume_text">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
