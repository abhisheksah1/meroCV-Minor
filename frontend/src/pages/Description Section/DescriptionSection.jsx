import React from "react";
import "../Description Section/description.style.css"

function DescriptionSection() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-28  " id="flex">
        <div>
          <p className="text-4xl font-bold mb-10">
            Why build my resume with MeroCV?
          </p>
        </div>
        <div className="flex gap-10 p-10 text-md font-semibold text-gray-600 " id="descriptionGap">
          <div>
            <img src="" alt="" />
            <p className="text-3xl pb-5 font-semibold">We’re actually free</p>
            <p>No gimmicks, no freemium features, no joke.</p>
            <p>Get everything you need to build a</p>
            <p>professional resume that shows off your best</p>
            <p>qualities to help you land your next job.</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className="text-3xl pb-5 font-bold">Data-Driven Templates</p>
            <p>Rest assured that the templates you find on</p>
            <p>merocv.com are the best around. Based on</p>
            <p>data from what employers want to see in</p>
            <p>candidates, we’ve created our templates with</p>
            <p>hiring in mind.</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className="text-3xl pb-5 font-bold">Get Seen</p>
            <p>With your resume ready for top employers,</p>
            <p>easily share with millions of interested</p>
            <p>employers on Indeed, the world’s #1 job site.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
