import React from "react";
import "../Description Section/description.style.css";

function DescriptionSection() {
  return (
    <div className="flex flex-col md:flex- items-center mt-28">
      <div>
        <p className="text-2xl md:text-4xl font-bold mb-10 text-center">
          Why build my resume with MeroCV?
        </p>
      </div>
      <div className="mt-8  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-sm md:text-md font-semibold text-gray-600">
        <div className="text-center flex flex-col md:flex-col md:text-left">
    
          <p className="text-xl md:text-3xl pb-5 font-semibold">We’re actually free</p>
          <p>No gimmicks, no freemium features, no joke.</p>
          <p>Get everything you need to build a</p>
          <p>professional resume that shows off your best</p>
          <p>qualities to help you land your next job.</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xl md:text-3xl pb-5 font-bold">Data-Driven Templates</p>
          <p>Rest assured that the templates you find on</p>
          <p>merocv.com are the best around. Based on</p>
          <p>data from what employers want to see in</p>
          <p>candidates, we’ve created our templates with</p>
          <p>hiring in mind.</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xl md:text-3xl pb-5 font-bold">Get Seen</p>
          <p>With your resume ready for top employers,</p>
          <p>easily share with millions of interested</p>
          <p>employers on Indeed, the world’s #1 job site.</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
