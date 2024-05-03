import React from "react";

function Skills({ skills, onSkillsChange }) {
  return (
    <div className="border p-10 flex flex-col gap-4 justify-center items-center max-w-[70vw] mx-auto  ">
      <div className="w-full lg:w-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="w-full lg:w-auto"
            placeholder="Skill"
            name="skill"
            value={skills.skill}
            onChange={(e) => onSkillsChange("skill", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default Skills;
