import React from "react";

function Education({ education, onEducationChange }) {
  return (
    <div className="border p-10 flex flex-col gap-4 justify-between items-center max-w-[70vw] mx-auto ">
      
        <div className="flex flex-wrap gap-4 ">
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full lg:w-auto"
                placeholder="School"
                name="school"
                value={education.school}
                onChange={(e) => onEducationChange("school", e.target.value)}
              />
            </label>
          </div>
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full lg:w-auto"
                placeholder="Collage"
                name="collage"
                value={education.collage}
                onChange={(e) => onEducationChange("collage", e.target.value)}
              />
            </label>
          </div>
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full lg:w-auto"
                placeholder="University"
                name="university"
                value={education.university}
                onChange={(e) =>
                  onEducationChange("university", e.target.value)
                }
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 ">
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full lg:w-auto"
                placeholder="Degree"
                name="degree"
                value={education.degree}
                onChange={(e) => onEducationChange("degree", e.target.value)}
              />
            </label>
          </div>
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="date"
                className="w-full lg:w-auto"
                placeholder="Start Date"
                name="startDate"
                value={education.startDate}
                onChange={(e) => onEducationChange("startDate", e.target.value)}
              />
            </label>
          </div>
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="date"
                className="w-full lg:w-auto"
                placeholder="End Date"
                name="endDate"
                value={education.endDate}
                onChange={(e) => onEducationChange("endDate", e.target.value)}
              />
            </label>
          </div>
        </div>
      
    </div>
  );
}

export default Education;
