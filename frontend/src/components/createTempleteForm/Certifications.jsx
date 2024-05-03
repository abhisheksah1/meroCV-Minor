import React from "react";

function Certifications({ certifications, onCertificationsChange }) {
  return (
    <div className="border p-10 flex  gap-4 justify-center items-center max-w-[70vw] mx-auto ">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="w-full lg:w-auto"
              placeholder="Name"
              name="name"
              value={certifications.name}
              onChange={(e) => onCertificationsChange("name", e.target.value)}
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="w-full lg:w-auto"
              placeholder="Authority"
              name="authority"
              value={certifications.authority}
              onChange={(e) =>
                onCertificationsChange("authority", e.target.value)
              }
            />
          </label>
        </div>
        <div className="w-full lg:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="date"
              className="w-full lg:w-auto"
              placeholder="Date Issued"
              name="dateIssued"
              value={certifications.dateIssued}
              onChange={(e) =>
                onCertificationsChange("dateIssued", e.target.value)
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
