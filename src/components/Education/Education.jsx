import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 w-screen px-2 sm:px-4 md:px-8 font-sans bg-skills-gradient clip-path-custom-2 overflow-x-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="flex flex-col sm:flex-row items-center w-full mb-16 z-10"
          >
            {/* Card Content */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-3/4 mx-auto bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-4 sm:p-8 backdrop-blur-md transform transition-transform duration-300 hover:scale-105">
              {/* School Logo/Image */}
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center mb-4 sm:mb-0 sm:mr-8">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              {/* Degree, School Name, and Date */}
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                <h4 className="text-md sm:text-lg text-gray-300">{edu.school}</h4>
                <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                <p className="mt-2 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;