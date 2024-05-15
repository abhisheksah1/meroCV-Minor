import React, { useState } from "react";
import CvImg from "../../assets/recume.png";
import { Link } from "react-router-dom";
import { useLoginContext } from "../.././context/useContext";

function CvTemplate() {
  const { setShowLogin } = useLoginContext();
  const token = localStorage.getItem("user-token");
  return (
    <div className="flex justify-center bg-gray-300 z-auto mb-10">
      {token ? (
        <button to="/grayTemplate" className="h-[800px] w-[800px] mt-20">
          <img
            src={CvImg}
            alt=""
            className="h-[800px] w-[800px] border border-black rounded-md"
          />
        </button>
      ) : (
        <button onClick={setShowLogin} className="h-[800px] w-[800px] mt-20">
          <img
            src={CvImg}
            alt=""
            className="h-[800px] w-[800px] border border-black rounded-md"
          />
        </button>
      )}
    </div>
  );
}

export default CvTemplate;
