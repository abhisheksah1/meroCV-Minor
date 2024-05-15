import React from "react";

function WorkExperience({ workExperience, onWorkExperienceChange }) {
  return (
    <div className="border p-10 flex flex-col gap-4 justify-between items-center max-w-[70vw] mx-auto ">
      <div className="flex flex-wrap gap-4 ">
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="w-full lg:w-auto"
              placeholder="Company"
              name="company"
              value={workExperience.company}
              onChange={(e) =>
                onWorkExperienceChange("company", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
            
              type="text"
              className="w-full lg:w-auto"
              placeholder="Position"
              name="position"
              value={workExperience.position}
              onChange={(e) =>
                onWorkExperienceChange("position", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
            
              type="text"
              className="w-full lg:w-auto"
              placeholder="Start Date"
              name="startDate"
              value={workExperience.startDate}
              onChange={(e) =>
                onWorkExperienceChange("startDate", e.target.value)
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
              placeholder="End Date"
              name="endDate"
              value={workExperience.endDate}
              onChange={(e) =>
                onWorkExperienceChange("endDate", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="  flex items-center gap-2">
            <textarea
            
              placeholder="Description"
              name="description"
              rows={4}
              value={workExperience.description}
              onChange={(e) =>
                onWorkExperienceChange("description", e.target.value)
              }
              className="block input-boarder input w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-100 "
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
