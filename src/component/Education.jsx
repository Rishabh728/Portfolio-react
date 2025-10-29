import { Award } from "lucide-react";
import React from "react";
import {education} from '../data/data.js'

const Education = ({ themeClasses, isDarkMode }) => {
  return (
    <div className="space-y-8">
      <div className=" text-center mb-8">
        <h2 className={`text-3xl font-bold mb-4 ${themeClasses.text}`}>
          Education & Certifications
        </h2>
        <p className={`text-lg ${themeClasses.textSecond}`}>My academic journey and achivements</p>
      </div>
      <div className="space-y-4">
        {/* I will map method */}
        {education.map((edu, index) => {
          const EduIcon = edu.icon;

          return (
            <div key={index} className={`rounded-2xl p-8 shadow-lg border ${themeClasses.border}`}>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
                  <div className="flex items-start mb-4"><EduIcon size={32} className={`mr-4 mt-1 ${isDarkMode ? 'text-blue-400':'text-blue-500'}`} /></div>
              <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>{ edu.degree}</h3>
                <p
                  className="text-lg 
                               text-blue-500 font-semibold mb-2"
                >
                      { edu.school}
                </p>
                    <p className={`leading-relaxed mb-4 ${themeClasses.textSecondary}`}>{ edu.description}</p>
              </div>
              <div className="space-y-4">
                <h4 className={` font-semibold flex items-center ${themeClasses.text}`}>
                  <Award size={18} className="mr-2 text-yellow-500" />
                </h4>
                <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achiv, indx) => {
                        return (
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium ">
                    {achiv}
                  </span>
                   )
                 })}
                </div>
              </div>
            </div>
            <div className="lg:w-48 space-y-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-center font-medium ">
                {edu.year}
              </div>
              {/* conditional Rendering */}
                  {edu.gpa &&
                   
                 ( <div className=" bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-900 px-4 py-2 rounded-full text-center font-medium ">
                GPA: {edu.gpa}
              </div>)
                
                  }

              {/* conditional Rendering */}
              {edu.certificate && (<div className="bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-900 px-4 py-2 rounded-full text-center font-medium">
                {edu.certificate}
              </div>)}
              <div className="bg-purple-100 dark:bg-purple-200 text-purple-900 dark:text-purple-900 px-4 py-2 rounded-full text-center font-medium text-sm">
                {edu.status}
              </div>
            </div>
          </div>
        </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default Education;
