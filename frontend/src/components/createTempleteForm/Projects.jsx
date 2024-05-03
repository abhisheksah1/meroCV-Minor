import React from "react";

function Projects({ projects, onProjectsChange }) {
  return (
    <div className="border p-10 flex  gap-4 justify-center items-center max-w-[70vw] mx-auto ">
      <div className="flex flex-wrap gap-4">
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="w-full lg:w-auto"
              placeholder="Name"
              name="name"
              value={projects.name}
              onChange={(e) => onProjectsChange("name", e.target.value)}
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="w-full lg:w-auto"
              placeholder="Description"
              name="description"
              value={projects.description}
              onChange={(e) => onProjectsChange("description", e.target.value)}
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
              value={projects.startDate}
              onChange={(e) => onProjectsChange("startDate", e.target.value)}
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
              value={projects.endDate}
              onChange={(e) => onProjectsChange("endDate", e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Projects;
