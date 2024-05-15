import React, { useState } from "react";
import WorkExperience from "../../components/createTempleteForm/WorkExperience";
import Education from "../../components/createTempleteForm/Education";

import References from "../../components/createTempleteForm/Refrences";
import Projects from "../../components/createTempleteForm/Projects";
import Languages from "../../components/createTempleteForm/Languages";
import Skills from "../../components/createTempleteForm/Skills";
import toast from "react-hot-toast";

function GreyTemplate() {
  const userId = localStorage.getItem("userId");
  const [aboutInfo, setAboutInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    middleName: "",
    site: "",
    title: "",
    linkedIn: "",
    address: "",
    summary: "",
    country: "",
    phone: "",
  });

  const [workExperience, setWorkExperience] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: "",
      collage: "",
      university: "",
      schoolStartDate: "",
      schoolEndDate: "",
      collageStartDate: "",
      collageEndDate: "",
      universityStartDate: "",
      universityEndDate: "",
      schoolDegree: "",
      collageDegree: "",
      universityDegree: "",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      skill: "",
    },
  ]);

  const [languages, setLanguages] = useState([
    {
      language: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [references, setReferences] = useState([
    {
      name: "",
      position: "",
      company: "",
      contact: "",
      email: "",
    },
  ]);

  const onWorkExperienceChange = (index, name, value) => {
    setWorkExperience((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  const onEducationChange = (index, name, value) => {
    setEducation((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  const onSkillsChange = (index, name, value) => {
    setSkills((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  const onLanguagesChange = (index, name, value) => {
    setLanguages((prevState) =>
      prevState.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]: value,
            }
          : item
      )
    );
  };

  const onProjectsChange = (index, name, value) => {
    setProjects((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  const onReferencesChange = (index, name, value) => {
    setReferences((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      userId: userId,
      aboutInfo,
      workExperience,
      education,
      skills,
      languages,
      projects,
      references,
    };

    try {
      const response = await fetch("http://localhost:8000/api/cv/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data2 = await response.json();
      if (response.ok) {
        toast.success("Successfully created");
        setTimeout(() => {
          window.location.href = "/templateDesign";
        }, 1000);
      } else {
        throw new Error(data2.message || "failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className=" bg-white">
      <form action="/resume-builder" method="post">
        <div className="bg-gray-300 h-10 max-w-[70vw] mx-auto mb-5 items-center flex text-lg pl-5 font-semibold">
          <p>ABOUT SECTION</p>
        </div>
        <div className="border p-10 flex flex-col gap-4 justify-between items-center max-w-[70vw] mx-auto ">
          <div className="flex flex-wrap gap-4 ">
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="First Name"
                  name="FirstName"
                  value={aboutInfo.firstName}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, firstName: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="Middle Name (Optional)"
                  name="MiddleName"
                  value={aboutInfo.middleName}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, middleName: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="Last Name"
                  name="LastName"
                  value={aboutInfo.lastName}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, lastName: e.target.value })
                  }
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="Title"
                  name="title"
                  value={aboutInfo.title}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, title: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="Phone"
                  name="phone"
                  value={aboutInfo.phone}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, phone: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="www.google.com"
                  name="site"
                  value={aboutInfo.site}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, site: e.target.value })
                  }
                />
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 ">
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="Address"
                  name="address"
                  value={aboutInfo.address}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, address: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="text"
                  className="w-full lg:w-auto"
                  placeholder="Linked In"
                  name="linkedIn"
                  value={aboutInfo.linkedIn}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, linkedIn: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  required
                  type="email"
                  className="w-full lg:w-auto"
                  placeholder="Email"
                  name="email"
                  value={aboutInfo.email}
                  onChange={(e) =>
                    setAboutInfo({
                      ...aboutInfo,
                      email: e.target.value,
                    })
                  }
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full lg:w-auto">
              <label className="  flex items-center gap-2">
                <textarea
                  required
                  placeholder="Summary"
                  name="message"
                  id="message"
                  rows={4}
                  className="block input-boarder input w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 "
                  defaultValue={""}
                  onChange={(e) =>
                    setAboutInfo({ ...aboutInfo, summary: e.target.value })
                  }
                />
              </label>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-10 max-w-[70vw] mt-10 mx-auto mb-5 items-center flex text-lg pl-5 font-semibold">
          <p>WORK EXPERIENCE</p>
        </div>
        {workExperience.map((item, index) => (
          <WorkExperience
            key={index}
            workExperience={item}
            onWorkExperienceChange={(name, value) =>
              onWorkExperienceChange(index, name, value)
            }
          />
        ))}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="btn  mt-5"
            onClick={() =>
              setWorkExperience((prevState) => [
                ...prevState,
                {
                  company: "",
                  position: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ])
            }
          >
            ➕
          </button>
        </div>
        <div className="bg-gray-300 h-10 max-w-[70vw] mt-10 mx-auto mb-5 items-center flex text-lg pl-5 font-semibold">
          <p>EDUCATION</p>
        </div>
        {education.map((item, index) => (
          <Education
            key={index}
            education={item}
            onEducationChange={(name, value) =>
              onEducationChange(index, name, value)
            }
          />
        ))}
        <div className="bg-gray-300 h-10 max-w-[70vw] mt-10 mx-auto mb-5 items-center flex text-lg pl-5 font-semibold">
          <p>SKILLS</p>
        </div>
        {skills.map((item, index) => (
          <Skills
            key={index}
            skills={item}
            onSkillsChange={(name, value) => onSkillsChange(index, name, value)}
          />
        ))}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="btn mt-5"
            onClick={() =>
              setSkills((prevState) => [
                ...prevState,
                {
                  skill: "",
                },
              ])
            }
          >
            ➕
          </button>
        </div>
        <div className="bg-gray-300 h-10 max-w-[70vw] mt-10 mx-auto mb-5 items-center flex text-lg pl-5 font-semibold">
          <p>LANGUAGES</p>
        </div>
        {languages.map((item, index) => (
          <Languages
            key={index}
            languages={item}
            onLanguagesChange={(name, value) =>
              onLanguagesChange(index, name, value)
            }
          />
        ))}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="btn mt-5"
            onClick={() =>
              setLanguages((prevState) => [
                ...prevState,
                {
                  language: "",
                },
              ])
            }
          >
            ➕
          </button>
        </div>
        <div className="bg-gray-300 h-10 max-w-[70vw] mt-10 mx-auto mb-5 items-center flex text-lg pl-5 font-semibold">
          <p>PROJECTS</p>
        </div>
        {projects.map((item, index) => (
          <Projects
            key={index}
            projects={item}
            onProjectsChange={(name, value) =>
              onProjectsChange(index, name, value)
            }
          />
        ))}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="btn mt-5"
            onClick={() =>
              setProjects((prevState) => [
                ...prevState,
                {
                  name: "",
                  description: "",
                  startDate: "",
                  endDate: "",
                },
              ])
            }
          >
            ➕
          </button>
        </div>

        <div className="bg-gray-300 h-10 max-w-[70vw] mt-10 mx-auto mb-5 items-center flex text-lg pl-5 font-semibold">
          <p>REFERENCES</p>
        </div>
        {references.map((item, index) => (
          <References
            key={index}
            references={item}
            onReferencesChange={(name, value) =>
              onReferencesChange(index, name, value)
            }
          />
        ))}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="btn mt-5"
            onClick={() =>
              setReferences((prevState) => [
                ...prevState,
                {
                  name: "",
                  position: "",
                  company: "",
                  contact: "",
                  email: "",
                },
              ])
            }
          >
            ➕
          </button>
        </div>
        <div className="mt-5 max-w-[70vw] mx-auto ]">
          <hr />
        </div>

        <div className="flex justify-center items-center mb-20 mt-10 ">
          <button
            type="submit"
            className="btn pl-32 pr-32 text-lg mt-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GreyTemplate;
