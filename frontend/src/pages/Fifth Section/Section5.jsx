import React from "react";
import { Link } from "react-router-dom";

import '../Fifth Section/section.style.css'

function Section5() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-28 gap-14">
        <div
          className="text-5xl font-bold flex
          flex-col items-center gap-2"
        >
          <p>Start building your resume</p>
          <p>today, land your dream job</p>
          <p>tomorrow</p>
        </div>
        <div>
          <Link
            to="/cvtemp"
            className="btn text-xl font-semibold pl-10 pr-10 mb-20 hover:bg-gray-800 hover:text-white"
          >
            Go to My Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section5;
