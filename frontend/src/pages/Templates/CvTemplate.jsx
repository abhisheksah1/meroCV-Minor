import React, { useState } from "react";
import CvImg from "../../assets/abhishek.jpg";
import { Link } from "react-router-dom";

function CvTemplate() {
  const [name, setName] = useState("Abhishek Kumar Sah");
  const [role, setRole] = useState("Web Developer");
  const [phone, setPhone] = useState("+977 9824878555");
  const [email, setEmail] = useState("abhis308@gmail.com");
  const [website, setWebsite] = useState("www.merocv.com");
  const [linkedin, setLinkedin] = useState("www.linkedin.com/me");
  const [address, setAddress] = useState("Malangawa, Sarlahi, Nepal");
  const [summary, setSummary] = useState("Experienced web developer with a passion for creating efficient, scalable, and user-friendly websites...");
  const [education, setEducation] = useState([
    { year: "2021 - 2024", degree: "Diploma In Information Technology", school: "Narayani Model School" },
    { year: "2020 - 2022", degree: "Degree of +2", school: "Sarlahi Campus Malangawa, Nepal" },
    { year: "2019", degree: "SEE", school: "Malangawa Green Land School" }
  ]);
  const [languages, setLanguages] = useState([
    { name: "English", proficiency: "40%" },
    { name: "Nepali", proficiency: "50%" },
    { name: "Hindi", proficiency: "75%" }
  ]);
  const [workExperience, setWorkExperience] = useState([
    { year: "2022 - Present", position: "Web Developer", company: "ABC Company", description: "Responsible for designing, coding, and modifying websites, from layout to function and according to a client's specifications." },
    // Add more work experience items as needed
  ]);
  const [skills, setSkills] = useState([
    { name: "HTML", proficiency: "Advanced" },
    { name: "CSS", proficiency: "Advanced" },
    { name: "JavaScript", proficiency: "Intermediate" },
    // Add more skills as needed
  ]);
  const [projects, setProjects] = useState([
    { name: "Project A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla dolor." },
    { name: "Project B", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu fringilla dolor." },
    // Add more projects as needed
  ]);
  const [certifications, setCertifications] = useState([
    { year: "2023", name: "Certification in Web Development", issuer: "XYZ Organization" },
    // Add more certifications as needed
  ]);
  const [references, setReferences] = useState([
    { name: "John Doe", position: "CEO", company: "XYZ Company", phone: "+977 9824878555", email: "john.doe@example.com" },
    // Add more references as needed
  ]);

  return (
    <Link to="/grayTemplate" className="flex justify-center p-10">
      <div className="container mx-auto max-w-3xl bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
              <p className="text-lg text-gray-600">{role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{phone}</p>
              <p className="text-sm text-gray-600">{email}</p>
              <p className="text-sm text-gray-600">{website}</p>
              <p className="text-sm text-gray-600">{linkedin}</p>
              <p className="text-sm text-gray-600">{address}</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Summary</h2>
            <p className="text-gray-600">{summary}</p>
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-2">
                <p className="text-gray-800">{edu.year}</p>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-600">{edu.school}</p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Work Experience</h2>
            {workExperience.map((exp, index) => (
              <div key={index} className="mb-2">
                <p className="text-gray-800">{exp.year}</p>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
            {skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <p className="text-gray-800">{skill.name}</p>
                <p className="text-gray-600">{skill.proficiency}</p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-2">
                <p className="text-gray-800">{project.name}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Certifications</h2>
            {certifications.map((certification, index) => (
              <div key={index} className="mb-2">
                <p className="text-gray-800">{certification.year}</p>
                <p className="text-gray-600">{certification.name}</p>
                <p className="text-gray-600">{certification.issuer}</p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">References</h2>
            {references.map((reference, index) => (
              <div key={index} className="mb-2">
                <p className="text-gray-800">{reference.name}</p>
                <p className="text-gray-600">{reference.position}</p>
                <p className="text-gray-600">{reference.company}</p>
                <p className="text-gray-600">{reference.phone}</p>
                <p className="text-gray-600">{reference.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CvTemplate;
