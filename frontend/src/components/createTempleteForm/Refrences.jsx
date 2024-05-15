import React from "react";

function References({ references, onReferencesChange }) {
  return (
    <>
      <div className="border p-10 flex  gap-4 justify-center items-center max-w-[70vw] mx-auto ">
        <div className="flex flex-wrap gap-4">
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
              required
                type="text"
                className="w-full lg:w-auto"
                placeholder="Name"
                name="name"
                value={references.name}
                onChange={(e) => onReferencesChange("name", e.target.value)}
              />
            </label>
          </div>
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
              required
                type="text"
                className="w-full lg:w-auto"
                placeholder="Position"
                name="position"
                value={references.position}
                onChange={(e) => onReferencesChange("position", e.target.value)}
              />
            </label>
          </div>
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
              required
                type="text"
                className="w-full lg:w-auto"
                placeholder="Company"
                name="company"
                value={references.company}
                onChange={(e) => onReferencesChange("company", e.target.value)}
              />
            </label>
          </div>
          <div className="w-full lg:w-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
              required
                type="text"
                className="w-full lg:w-auto"
                placeholder="Contact"
                name="contact"
                value={references.contact}
                onChange={(e) => onReferencesChange("contact", e.target.value)}
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
                value={references.email}
                onChange={(e) => onReferencesChange("email", e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default References;
