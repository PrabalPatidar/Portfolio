import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 w-screen px-2 sm:px-4 md:px-8 font-sans bg-skills-gradient clip-path-custom-2 overflow-x-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="flex flex-col sm:flex-row items-center w-full mb-16 z-10"
          >
            {/* Card Content */}
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-3/4 mx-auto bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-4 sm:p-8 backdrop-blur-md transform transition-transform duration-300 hover:scale-105">
              {/* Company Logo/Image */}
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center mb-4 sm:mb-0 sm:mr-8">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              {/* Role, Company Name, and Date */}
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{experience.role}</h3>
                <h4 className="text-md sm:text-lg text-gray-300">{experience.company}</h4>
                <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                <p className="mt-2 text-gray-400">{experience.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
