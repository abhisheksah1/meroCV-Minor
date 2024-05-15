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
              onChange={(e) => onEducationChange("university", e.target.value)}
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
              placeholder="School Degree"
              name="schoolDegree"
              value={education.schoolDegree}
              onChange={(e) =>
                onEducationChange("schoolDegree", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              
              type="text"
              className="w-full lg:w-auto"
              placeholder="School Start Date"
              name="schoolStartDate"
              value={education.schoolStartDate}
              onChange={(e) =>
                onEducationChange("schoolStartDate", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
            
              type="text"
              className="w-full lg:w-auto"
              placeholder="School End Date"
              name="schoolEndDate"
              value={education.schoolEndDate}
              onChange={(e) =>
                onEducationChange("schoolEndDate", e.target.value)
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
              placeholder="Collage Degree"
              name="collageDegree"
              value={education.collageDegree}
              onChange={(e) =>
                onEducationChange("collageDegree", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
            
              type="text"
              className="w-full lg:w-auto"
              placeholder="Collage Start Date"
              name="collageStartDate"
              value={education.collageStartDate}
              onChange={(e) =>
                onEducationChange("collageStartDate", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              
              type="text"
              className="w-full lg:w-auto"
              placeholder="Collage End Date"
              name="collageEndDate"
              value={education.collageEndDate}
              onChange={(e) =>
                onEducationChange("collageEndDate", e.target.value)
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
              placeholder="University Degree"
              name="universityDegree"
              value={education.universityDegree}
              onChange={(e) =>
                onEducationChange("universityDegree", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              
              type="text"
              className="w-full lg:w-auto"
              placeholder="University Start Date"
              name="universityStartDate"
              value={education.universityStartDate}
              onChange={(e) =>
                onEducationChange("universityStartDate", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
            
              type="text"
              className="w-full lg:w-auto"
              placeholder="university End Date"
              name="universityEndDate"
              value={education.universityEndDate}
              onChange={(e) =>
                onEducationChange("universityEndDate", e.target.value)
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Education;
