import React from "react";

function Languages({ languages, onLanguagesChange }) {
  return (
    <div className="border p-10 flex  gap-4 justify-center items-center max-w-[70vw] mx-auto ">
      <div className="flex flex-wrap gap-4">
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex ">
            <input
              type="text"
              className="w-full lg:w-auto"
              placeholder="Language"
              name="language"
              value={languages.language}
              onChange={(e) => onLanguagesChange("language", e.target.value)}
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="w-full lg:w-auto"
              placeholder="Proficiency"
              name="proficiency"
              value={languages.proficiency}
              onChange={(e) => onLanguagesChange("proficiency", e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Languages;
