import React from "react";
import CvImg from "../../assets/recume.png";
import { Link } from "react-router-dom";
import { useLoginContext } from "../.././context/useContext";

function CvTemplate() {
  const { setShowLogin } = useLoginContext();
  const token = localStorage.getItem("user-token");

  const templates = [1, 2, 3, 4,5,6,7,8,9,10,11,12]; // Assuming you have four templates

  return (
    <div className="grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 gap-10 justify-items-center mt-20 pb-20">
      {templates.map((_, index) => (
        <div key={index} className="flex flex-col items-center">
          
            <button  className="h-[800px] w-[800px]">
              <img
                src={CvImg}
                alt=""
                className="h-full w-full border border-black rounded-md"
              />
            </button>
          
        
          {
            token ? (
              <Link
          to="/grayTemplate"
          className="mt-4 p-2 btn">
            Use This Template
          </Link>

            ):(
              <button
              onClick={setShowLogin}
          
          className="mt-4 p-2 btn">
            Use This Template
          </button>

            )
          }
          
        </div>
      ))}
    </div>
  );
}

export default CvTemplate;
