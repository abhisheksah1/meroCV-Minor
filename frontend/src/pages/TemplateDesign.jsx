import React, { useEffect, useState, useRef } from "react";
// import Profile from "../assets/abhishek.jpg";
import "../../src/style/template.style.css";

import jsPDF from "jspdf";
import domtoimage from "dom-to-image";



import axios from "axios";

function TemplateDesign() {
  const userId = localStorage.getItem("userId");
  const [aboutInfo, setAboutInfo] = useState({});
  const [projects, setProjects] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [references, setReferences] = useState([]);
  const contentRef = useRef(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cv/getRecent?userId=${userId}`)
      .then((response) => {
        setAboutInfo(response.data.aboutInfo);
        setProjects(response.data.projects);
        setWorkExperience(response.data.workExperience);
        setEducation(response.data.education);
        setSkills(response.data.skills);
        setLanguages(response.data.languages);
        setReferences(response.data.references);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);


  

  const generatePDF = () => {
    const input = contentRef.current;
    domtoimage.toPng(input)
      .then((imgData) => {
        const pdf = new jsPDF('p', 'cm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (input.offsetHeight * pdfWidth) / input.offsetWidth;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };

  return (
    <>
      <div className="flex justify-end mt-3 pr-10">
        <a>
          <i
            className="fa fa-download text-2xl cursor-pointer"
            aria-hidden="true"
            onClick={generatePDF}
          ></i>
        </a>
      </div>
      <div className="main" id="cv-container" ref={contentRef}>
        <div className="container ">
          <div className="left_side">
            <div className="profileText">
              <div className="imgBox ">
                {/* <img className="rounded-[50%]"  /> */}
              </div>
            </div>
            <div className="contactSection ">
              <h3 className="title">Contact </h3>
              <hr />
              <ul>
                <li>
                  <span className="icon">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </span>
                  <span className="text">{aboutInfo.phone}</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </span>
                  <span className="text">{aboutInfo.site}</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <span className="text">{aboutInfo.email}</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </span>
                  <span className="text">{aboutInfo.linkedIn}</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span className="text">{aboutInfo.address}</span>
                </li>
              </ul>
            </div>
            <div className="contactSection education ">
              <h3 className="title">Education</h3>
              <hr />
              {education.map((educatio, index) => (
                <ul key={index}>
                  <li>
                    <h5>
                      <span id="startDate">
                        {educatio.universityStartDate} -{" "}
                      </span>{" "}
                      <span id="endDate">{educatio.universityEndDate}</span>
                    </h5>
                    <h4 id="universityDegree">{educatio.universityDegree}</h4>
                    <h4 id="universityName">{educatio.university}</h4>
                  </li>
                  <li>
                    <h5>
                      <span id="startDate">{educatio.collageStartDate} - </span>{" "}
                      <span id="endStart">{educatio.collageEndDate}</span>
                    </h5>
                    <h4 id="collageDegree">{educatio.collageDegree}</h4>
                    <h4 id="collageName">{educatio.collage}</h4>
                  </li>
                  <li>
                    <h5>
                      <span id="startDate">{educatio.schoolStartDate} - </span>{" "}
                      <span className="endDate">{educatio.schoolEndDate}</span>
                    </h5>
                    <h4 id="schoolDegree">{educatio.schoolDegree}</h4>
                    <h4 id="schoolName">{educatio.school}</h4>
                  </li>
                </ul>
              ))}
            </div>
            <div className="contactSection language ">
              <h3 className="title">skills</h3>
              <hr />
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    <span className="text">{skill.skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contactSection language ">
              <h3 className="title">languages</h3>
              <hr />
              <ul>
                {languages.map((language, index) => (
                  <li key={index}>
                    <span className="text">{language.language}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right_side">
            <h2>
              {aboutInfo.firstName} {aboutInfo.middleName} {aboutInfo.lastName}
              <br /> <span>{aboutInfo.title}</span>
            </h2>
            <div className="about">
              <p className="summary">{aboutInfo.summary}</p>
            </div>
            <div className="about">
              <h2 className="title2">Experience</h2>
              <hr />
              {workExperience.map((workExperience, index) => (
                <div className="workExp" key={index}>
                  <h5>
                    <span id="workStartDate">
                      {workExperience.startDate} -{" "}
                    </span>
                    <span id="workEndDate">{workExperience.endDate}</span>
                  </h5>
                  <div className="companyName">
                    <span id="companyName">{workExperience.company}</span>
                    <span id="companyPosition">
                      {" "}
                      | {workExperience.position}
                    </span>
                  </div>
                  <div id="discription">
                    {/* <h3>Job potion here</h3> */}
                    <p>{workExperience.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="about">
              <h2 className="title2">projects</h2>
              <hr />
              {projects.map((project, index) => (
                <div className="workExp" key={index}>
                  <h5>
                    <span id="projectStartDate">{project.startDate} - </span>
                    <span id="projectEndDate">{project.endDate}</span>
                  </h5>
                  <div id="discription">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="about">
              <h2 className="title2">reference</h2>
              <hr />
              {references.map((reference, index) => (
                <div className="flex gap-10" key={index}>
                  <div className="workExp">
                    <div id="discription">
                      <h3>{reference.name}</h3>
                      <div className="companyName mb-3">
                        <span id="referenceName">{reference.company}</span>
                        <span id="referencePosition">
                          {" "}
                          | {reference.position}
                        </span>
                      </div>
                      <span>
                        {" "}
                        <i
                          className="fa fa-phone-square mr-3"
                          aria-hidden="true"
                        ></i>
                        {reference.contact}
                      </span>
                      <br />
                      <span>
                        {" "}
                        <i
                          className="fa fa-envelope mr-3"
                          aria-hidden="true"
                        ></i>
                        {reference.email}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default TemplateDesign;
